// usage: nr9 [ --L=<link> || --F=<local_file> ] ( --E=<expiry> ) ( --P=<password> )
// --E is optional, --P is optional

var XMLHttpRequest = require('xhr2');
var url = "https://upload.nr9.me/index.php";

console.log(process.argv)

// create function ShareLink(link, expiry, password)

function ShareLink(link, expiry, password) {
    // if link is not a link, return error
    if (link === undefined) {
        console.log("Error: No link provided");
        return;
    } else {
        // if link is a link, check if it is valid
        if (link.indexOf("http") === -1) {
            console.log("Error: Invalid link");
            return;
        } else {
            this.link = link;
        }
    }

    if (expiry !== undefined) {
        this.expiry = expiry;
    } else {
        this.expiry = "168";
    }
    if (password !== undefined) {
        this.password = password;
    } else {
        this.password = "";
    }

    var http = new XMLHttpRequest();
    var params = 'link=' + this.link + '&expiry=' + this.expiry + '&password=' + this.password
    http.open('POST', url, true);
    
    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    }
    http.send(params);
    console.log("Sharing link...");
    console.log("Link: " + this.link);
    console.log("New Link: " + http.responseText);
}


exports.ShareLink = function(link, expiry, password) {
    // if link is not a link, return error
    if (link === undefined) {
        console.log("Error: No link provided");
        return;
    } else {
        // if link is a link, check if it is valid
        if (link.indexOf("http") === -1) {
            console.log("Error: Invalid link");
            return;
        } else {
            this.link = link;
        }
    }

    if (expiry !== undefined) {
        this.expiry = expiry;
    } else {
        this.expiry = "168";
    }
    if (password !== undefined) {
        this.password = password;
    } else {
        this.password = "";
    }

    var http = new XMLHttpRequest();
    var params = 'link=' + this.link + '&expiry=' + this.expiry + '&password=' + this.password
    http.open('POST', url, true);
    
    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
    console.log("Sharing link...");
    console.log("Link: " + this.link);
    console.log("New Link" + http.responseText);
}

exports.ShareFile = function(local_file, expiry, password) {
    // incomplete
    // if file is not a file, return error
    if (!fs.existsSync(local_file)) {
        console.log("File does not exist");
        return;
    } else {
        // upload this file to https://upload.nr9.me

        // read the output

        // return the link

    }


    // set expiry if it is defined
    if (expiry !== undefined) {
        this.expiry = expiry;
    }
    // set password if it is defined
    if (password !== undefined) {
        this.password = password;
    }
}

exports.OpenLink = function(code, password) {
    // incomplete
    if (password !== undefined) {
        this.password = password;
    }
    // if code is not a code, return error
    if (code === undefined) {
        console.log("Usage: nr9 --N <code> ( --P <password> )");
        return;
    } else {
        // check if the code matches a link -- if not return error
        // if it does, check if a password is required -- give 3 tries to enter the password
        // open the link if the password is correct

        // if the password is incorrect, return error
        

        var urlToOpen = "";
        // open the link

        window.open(urlToOpen, '_blank').focus();
    }
}

exports.DownloadFile = function(code, password) {
    // incomplete
    // set password if it is defined
    if (password !== undefined) {
        this.password = password;
    }
    // if code is not a code, return error
    if (code === undefined) {
        console.log("Usage: nr9 --D <code> ( --P <password> )");
        return;
    } else {
        // download the file
        // return the file
    }
}

// debug function ShareLink("https://www.google.com", "168", "password");

//ShareLink("https://www.google.com", "168", "password");
