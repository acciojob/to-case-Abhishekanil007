function toCase(text) {
  // write your code here
	let str = "";
	if(text.length === 0)
	{
		str+="-";
		return str;
	}
	else{
		str+=text.toLowerCase() +" -";
	str+=text.toUpperCase(); 
	return str;
}
	
	

	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
