var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.instacart.com/api/v2/guests/convert_to_user', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
xhr.withCredentials = true;
xhr.send('email=green.epita2016@gmail.com');
