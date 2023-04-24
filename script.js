// complete the given function

function palindrome(str){
	let s = "";
	for(let i = 0;i<str.length;i++) {
		if(str.charAt(i)!=' ') {
			s+= str.charAt(i);
		}
	}
	for(let i = 0;i<s.length/2;i++) {
		if(s.charAt(i)!=s.charAt(s.length-i-1)) {
			return false;
		}
	}
	return true;
}
module.exports = palindrome
