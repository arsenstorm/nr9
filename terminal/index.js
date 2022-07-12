// usage: nr9 [ --L=<link> || --F=<local_file> ] ( --E=<expiry> ) ( --P=<password> )
// --E is optional, --P is optional

var XMLHttpRequest = require('xhr2');
var url = "https://upload.nr9.me/index.php";

console.log(process.argv)

/*
var http = new XMLHttpRequest();
var params = 'link=' + this.link + '&expiry=' + this.expiry + '&password=' + this.password
http.open('POST', url, true);

http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {       
        if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
    }
}
http.send(params);
*/