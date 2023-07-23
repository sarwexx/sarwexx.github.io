function copyItzPetoIP() {
    const text = document.getElementById("Beta").innerText;
    navigator.clipboard.writeText(text);
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
}

function copyByteCloudIP() {
    const text = document.getElementById("ByteCloud").innerText;
    navigator.clipboard.writeText(text);
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
}

var home = document.getElementById("homepage");
var ItzPetoCom = document.getElementById("ItzPeto");
var ByteCloud = document.getElementById("ByteCloudInfo");
var War = document.getElementById("UA");
var Bio = document.getElementById("Bio");
var normalmode = document.getElementById("normalmode");
var normalmode1 = document.getElementById("normalmode1");
var normalmode2 = document.getElementById("normalmode2");
var normalmode3 = document.getElementById("normalmode3");

function zobrazitItzPetoInfo() {
    home.style.display = "none";
    ItzPetoCom.style.display = "block";
    ByteCloud.style.display = "none";
    War.style.display = "none";
    Bio.style.display = "none";
}

function zobrazitHomepage() {
    home.style.display = "block";
    ItzPetoCom.style.display = "none";
    ByteCloud.style.display = "none";
    War.style.display = "none";
    Bio.style.display = "none";
}

function zobrazitByteCloud() {
    home.style.display = "none";
    ItzPetoCom.style.display = "none";
    ByteCloud.style.display = "block";
    War.style.display = "none";
    Bio.style.display = "none";
}

function zobrazitUA() {
    home.style.display = "none";
    ItzPetoCom.style.display = "none";
    ByteCloud.style.display = "none";
    War.style.display = "block";
    Bio.style.display = "none";
}

function zobrazitBio() {
    home.style.display = "none";
    ItzPetoCom.style.display = "none";
    ByteCloud.style.display = "none";
    War.style.display = "none";
    Bio.style.display = "block";
}