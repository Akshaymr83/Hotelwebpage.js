

var circle = document.getElementById("circle");
var circleroom = document.getElementById("circleroom");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = 0; // Initialize with 0 degrees

upbtn.onclick = function () {
    rotateValue -= 90; // Subtract 90 degrees for clockwise rotation
    circle.style.transform = "rotate(" + rotateValue + "deg)";
    circleroom.style.transform = "rotate(0deg)"; // Exclude circleroom from rotation
    c
   
};

downbtn.onclick = function () {
    rotateValue += 90; // Add 90 degrees for counterclockwise rotation
    circle.style.transform = "rotate(" + rotateValue + "deg)";
    circleroom.style.transform = "rotate(0deg)"; // Exclude circleroom from rotation
};

// Initial styling to exclude circleroom from rotation
circleroom.style.transform = "rotate(0deg)";

