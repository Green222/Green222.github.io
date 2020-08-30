var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState == XMLHttpRequest.DONE) {
		alert(xhr.responseText);
	}
}
const json = {"visit_token":"e2cb2e49-2df8-4c6e-b67d-6bc1a6369e58"}
xhr.open('POST', 'https://www.instacart.com/ahoy/visits', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.withCredentials = true;
xhr.send(JSON.stringify(json));
