var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState == XMLHttpRequest.DONE) {
		alert(xhr.responseText);
		//alert(xhr.getAllResponseHeaders())
	}
}
xhr.withCredentials = true;
xhr.open('GET', 'https://www.instacart.com/api/v2/credit_cards?source=web', true);
xhr.send(null)
