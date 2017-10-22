function onInput(field, event) {
	var char = null;
	if (event.which != 0 && event.charCode != 0) {
		if (event.which >= 32) {
			char = String.fromCharCode(event.which);
		}
	}
	if (!char) {
		return;
	}
	var newValue = field.value + char;
	
	console.log(newValue);
	
	if (/[1-9][0-9]{0-3},[0-9]{2}/test(newValue)) {
		console.log("jhgug");
		return true;
	}
	event.preventDefault();
	
}