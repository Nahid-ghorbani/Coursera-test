
(function (window) {
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.speak = function () {
	console.log(speakWord + "" + names);
	};
window.helloSpeaker = helloSpeaker;

})(window);