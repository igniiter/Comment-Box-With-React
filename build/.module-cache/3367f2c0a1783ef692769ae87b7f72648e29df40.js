//React is all about modular composable components.
//for our comment box example we'll have the following componet structure.
//Comment Box
// - CommentList (Displays a list of all comemnts)
// 		- comment
//- CommentForm for submitting comments

// tutorial1.js
// We're going to pass a javascript object to var CommentBox in order to
//create a  React Component.
var CommentBox = React.createClass({displayName: "CommentBox",})