var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
		            alert(xhr.responseText);
		        }
}
xhr.open('GET', 'https://www.instacart.com/store', true);
xhr.withCredentials = true;
xhr.send(null);
