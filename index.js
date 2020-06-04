const cyrillicPattern = /^[\u0400-\u04FF]+$/;
const testedLength = 6;

module.exports = function (mod) {
	mod.hook("S_CHAT", 3, event => {
		let messageWithoutTags = event.message.replace("<FONT>", "");
		messageWithoutTags = messageWithoutTags.replace("</FONT>", "");

		let strForTest = messageWithoutTags.length > testedLength ? messageWithoutTags.substring(0,testedLength) : messageWithoutTags;
		if(cyrillicPattern.test(strForTest)) return false;
	});
}