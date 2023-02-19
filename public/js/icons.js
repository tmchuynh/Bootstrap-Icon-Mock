var icon_boxes = document.querySelector(".icon-boxes");

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
                console.log(allText);
            }
            else {
                console.log("error");
            }
        }
    }
    rawFile.send(null);
}

function createIconBoxes(icon_name) {
    var div = document.createElement("div");
    div.classList.add("box");
    var icon = document.createElement("div");
    icon.classList.add("icon");
    var p = document.createElement("p");
    p.classList.add("bi");
    p.classList.add(icon_name);
    icon.appendChild(p);
    div.appendChild(icon);
    var p = document.createElement("p");
    p.innerHTML = icon_name;
    div.appendChild(p);
    icon_boxes.appendChild(div);
}