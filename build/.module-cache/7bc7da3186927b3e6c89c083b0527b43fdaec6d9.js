//Tutorial 1.js
//What's going on?
// We pass some methods of a javascript object to React.createClass in order to create a React Componenet.
//The most important of these methods is called render which returns a tree of react components that will eventually be used to create HTML.
var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			//The div tags are not actual DOM nodes but instantiations of React Div components.
			// You can think of these as placements or markers than React knows how to handle.
			React.createElement("div", {className: "commentBox"}, 
			"Hello World! I am a content box!"
			)
			);
	}
});

// instantiates the root component, starts the framework, and injects the markup in a RAW DOM element.
react.Render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
	);