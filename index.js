var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState == XMLHttpRequest.DONE) {
		alert(xhr.responseText);
		//alert(xhr.getAllResponseHeaders())
	}
}
xhr.open('GET', 'https://www.instacart.com/redeem_coupon_token', true);
xhr.withCredentials = true;
xhr.send("coupon_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWRlZW1fY291cG9uIiwiY291cG9uX2NvZGUiOiJhY3RpdmF0ZS11cy0wLWRlbGl2ZXJ5IiwiZXhwaXJlc19hdCI6IjIwMjAtMDgtMjlUMDY6NTk6NTkuOTk5WiJ9.Y8Jl9V3yvY4rdUg0wgUHviq0v_nZrbK17tBPJsQ0TGY&notify=true&resource_token=0n9303nVBJUIPXVrmL5ZBPY5_v1rjrD6rpcGNEfohOT-yiIte5KskWMCgXZvRu3Ctal2KLWWYHLauRrx_oC-5ToyODBkNTA3ZjFkNzY0Zjk5M2U1NWI5NzY3ZDEzMDYyMg==&$3p=e_ab&$original_url=https://www.instacart.com/redeem_coupon_token?coupon_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWRlZW1fY291cG9uIiwiY291cG9uX2NvZGUiOiJhY3RpdmF0ZS11cy0wLWRlbGl2ZXJ5IiwiZXhwaXJlc19hdCI6IjIwMjAtMDgtMjlUMDY6NTk6NTkuOTk5WiJ9.Y8Jl9V3yvY4rdUg0wgUHviq0v_nZrbK17tBPJsQ0TGY&notify=true&resource_token=0n9303nVBJUIPXVrmL5ZBPY5_v1rjrD6rpcGNEfohOT-yiIte5KskWMCgXZvRu3Ctal2KLWWYHLauRrx_oC-5ToyODBkNTA3ZjFkNzY0Zjk5M2U1NWI5NzY3ZDEzMDYyMg%3D%3D&_branch_match_id=827595029632477516&utm_medium=Email Braze");
