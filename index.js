const cyrillicPattern = /^[\u0400-\u04FF]+$/;
const testedLength = 6;

module.exports = function (mod) {
	mod.hook("S_CHAT", 3, event => {
		let strForTest = event.message.length > testedLength ? event.message.substring(0,testedLength) : event.message;
		if(cyrillicPattern.test(strForTest)) return false;
	});
}