var icon_boxes = document.querySelector(".icon_boxes");

var icon_names = [];

readTextFile("public/text/icons.txt");


/**
 * It reads a text file and returns the contents of the file as a string
 * @param file - The path to the file you want to read.
 */
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                allText = allText.replaceAll(".svg", "");
                icon_names = manipulateText(allText);
                console.log(icon_names);
            }
            else {
                console.log("error");
            }
        }
    }
    rawFile.send(null);
}


function manipulateText(text) {
    var icons = [];
    text = text.replace(".svg", "");
    text.split("\n").forEach(function (word) {
        icons.push(word);
    });
    return icons;
}


// name of the icon = file name without extension
// icon class == bi-(file name without extension)

$(document).ready(function () {
    for (var i = 0; i < icon_names.length; i++) {
        createIconBoxes(icon_names[i]);
    }
});

function createIconBoxes(icon_name) {

    var bi_class = "bi-" + icon_name;

    var div = document.createElement("div");
    div.classList.add("box");

    var icon = document.createElement("div");
    icon.classList.add("icon");
    div.appendChild(icon);


    var i = document.createElement("i");
    i.classList.add("bi");
    i.classList.add(bi_class);
    icon.appendChild(i);


    var p = document.createElement("p");
    p.innerHTML = icon_name;
    div.appendChild(p);

    icon_boxes.appendChild(div);
}