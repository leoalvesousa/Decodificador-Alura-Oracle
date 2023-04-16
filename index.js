const textResult = document.getElementById("textCrip");
const notResult = document.querySelector(".notResult");
const boxResult = document.querySelector(".textResult");

function encrypt() {
    let text = document.getElementById("text").value;
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let element = text[i];
        if (element == "e") {
            result += "enter";
        } else if (element == "a") {
            result += "ai";
        } else if (element == "i") {
            result += "imes";
        } else if (element == "o") {
            result += "ober";
        } else if (element == "u") {
            result += "ufat";
        } else {
            result += element;
        }
    }
    notResult.style.display = "none";
    boxResult.style.display = "flex";
    textResult.value = result;
    document.getElementById("text").value = "";
}
function decrypt() {
    let text = document.getElementById("text").value;
    text = text.replace(/ai/g, "a");
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");

    textResult.value = text;

    document.getElementById("text").value = "";
}
function copy() {
    const input = textResult.value;
    navigator.clipboard.writeText(input);

    textResult.value = "";
}
