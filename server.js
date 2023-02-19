import { appendFile, readdir } from 'fs'; 
 
 
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
 
var path = process.argv[2];
 
readdir(path, function(err, items) {
 
    /* Looping through the items array and appending each item to the icons.txt file. */
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
        var content = items[i] + '\n';
        appendFile("public/text/icons.txt", content, err => {
        });
    }
});