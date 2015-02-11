//React is all about modular composable components.
//for our comment box example we'll have the following componet structure.
//Comment Box
// - CommentList (Displays a list of all comemnts)
// 		- comment
//- CommentForm for submitting comments


// We're going to pass some methods in a javascript object to var CommentBox in order to
//create a  React Component. The most important of these methods is called render which will return
// a Tree of react components that will eventually render html.
// The div tags are not DOM Nodes, but rather instantiations of react Div components.
// You can think of these as markers or pieces of data that react knows how to handle.





var converter = new ShowDown.converter();
var data = [
{author: "Jon Kolman", text: "This is my comment"},
{author: "Jon Kolman", text: "This is my second comment"}
]

// this react component is different from other components because it will have to rerender itself. It won't have any data until info from the server comes back at which point the component may need to render new comments.
React.Render(
	React.createElement(CommentBox, {url: "comments.json"}),
	document.getElementById('content')
	);

// tutorial1.js

//when the server fetches data we will be changing the comment data that we have. Lets add an array of comment data to the commentBox component as it's state.
var CommentBox = React.createClass({displayName: "CommentBox",
	// Here componentDidMount is a method automatically called by react when a component is rendered. The key to dynamic updates
	//is the call to this.setState()
	//We replace the old array of comments with new ones from the server and the UI automatically updates itself.
	//Because of this reactivity it is only a minor change to add live updates. 
	// We will use simple polling here but you could easily use websockets or other technologies.
	
	loadCommentsFromServer: function() { //We've set the ajax call to a seperate method. 
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
				this.setState({data:data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.ToString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer(); // calls our ajax method. 
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
			"I am a comment box!", 
			React.createElement("h1", null, " Comments "), 
			React.createElement(CommentList, {data: this.state.data}), 
			React.createElement(CommentForm, null)
			)
			);
	}
});

React.render(
	React.createElement(CommentBox, {url: "comments.json", pollInterval: 2000}), 
	document.getElementById('content')
	);

var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		var commentNodes = this.props.data.map(function (comment) {
			return (
				React.createElement(Comment, {author: comment.author}, 
				comment.text
				)

				);
		});
		return (
			React.createElement("div", {className: "commentList"}, 
			"Hey, I am a comment list", 
			commentNodes
			)
			
		);
	}
});

//Lets make the form interactive. When the user submits the form we should clear it, submit the data to the server, and refresh the list of comments.
//To start lets listen 
var CommentForm = React.createClass({displayName: "CommentForm",
	render: function() {
		return (
			React.createElement("form", {class: "commentForm"}, 
			React.createElement("input", {type: "text", placeholder: "Your Name"}), 
			React.createElement("input", {type: "text", placeholder: "say something"}), 
			React.createElement("input", {type: "submit", value: "Post"})
			)
		);
	}
});

var Comment = React.createClass({displayName: "Comment",
	render: function() {
		var rawMarkup = converter.makeHtml(this.props.children.toString());
		return (
			React.createElement("div", {className: "comment"}, 
			React.createElement("h2", {className: "commentAuthor"}, 
			this.props.author
			), 
			"//All we're doing here is calling the showdown library. We need to convert this.props.children from Reacts wrapped texts to a raw String that ShowDown can recognize.", 
			React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
			)
		);

	}
});





