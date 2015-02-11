//Tutorial 1.js
//What's going on?
// We pass some methods of a javascript object to React.createClass in order to create a React Componenet.
//The most important of these methods is called render.
var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
			"Hello World! I am a content box!"
			)
			);
	}
});

react.Render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
	);