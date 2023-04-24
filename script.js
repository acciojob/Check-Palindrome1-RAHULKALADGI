// complete the given function

function palindrome(str){
	if(str.length==1) {
		return true;
	}
	let ans = toLowerCase(str);
	let s = "";
	for(let i = 0;i<ans.length;i++) {
		if(ans.charAt(i)!=' ') {
			s+= ans.charAt(i);
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
