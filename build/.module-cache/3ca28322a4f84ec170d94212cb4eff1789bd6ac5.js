//Tutorial 1.js
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