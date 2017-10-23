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
	
	if (/^(:?1(?=0{4}(?:,00|$)))?\d{1,4}(:?,\d{0,2}?)?(?=$)/test(newValue)) {
		return true;
	}
	event.preventDefault();
	
}