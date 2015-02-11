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

// tutorial1.js

var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
			"I am a comment box!", 
			React.createElement("h1", null, " Comments "), 
			React.createElement(CommentList, null), 
			React.createElement(CommentForm, null)
			)
			);
	}
});

React.render(
	React.createElement(CommentBox, null), 
	document.getElementById('content')
	);

var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
			"Hey, I am a comment list"
			)
			);
	}
});

var CommentForm = React.createClass({displayName: "CommentForm",
	render: function() {
		return (
			React.createElement("div", {className: "commentForm"}, 
			React.createElement("h1", null, " Comment Form ")
			)
			);
	}
});



