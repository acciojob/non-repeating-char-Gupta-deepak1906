function firstNonRepeatedChar(str) {
 // Write your code here

	const charFreqCnt={};
for{let char of str}{
	//charFreqCnt[char]=(charFreqCnt[char] || 0)+1;
	charFreqCnt[char] +=1;
}
	else{
		charFreqCnt[char]=1;
	}
}
for{let char of str}{
	if(charFreqCnt[char]===1) return char;

	else return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
