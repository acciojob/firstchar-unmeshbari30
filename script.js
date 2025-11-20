function firstChar(text) {
  // your code here
	let trimmed = text.trim();
	if(trimmed) return trimmed[0]
	return ""
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
