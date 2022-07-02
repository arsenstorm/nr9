// usage: nr9 [ -L=<link> || -F=<local_file> ] ( -E=<expiry_date> ) ( -P=<password> )
// -E is optional, -P is optional
// EITHER -L OR -F is required

exports.Share = function(link, local_file, expiry_date, password) {
    var linkCreated = "";

    if (link === undefined && local_file === undefined) {
        console.log("Usage: nr9 [ -L <link> || -F <local_file> ] ( -E <expiry_date> ) ( -P <password> )");
        return;
    } else if (link !== undefined && local_file !== undefined) {
        console.log("You cannot specify both a link and a local file using -L and -F");
        console.log("Usage: nr9 [ -L <link> || -F <local_file> ] ( -E <expiry_date> ) ( -P <password> )");
        return;
    } else if (link !== undefined) {
        this.link = link;
    } else if (local_file !== undefined) {
        this.local_file = local_file;
    }

    if (expiry_date !== undefined) {
        this.expiry_date = expiry_date;
    }

    if (password !== undefined) {
        this.password = password;
    }
    

    console.log("Link Generated: " + linkCreated);
}

console.log(process.argv)