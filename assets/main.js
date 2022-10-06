// -------------Dropdown-----------//
var buttonA = document.getElementById("dropdownArticle1DropdownButton");
var containerA = document.getElementById("dropdownArticle1DropdownContainer");
var textA = document.getElementById("dropdownArticle1DropdownContainerText");

var buttonB = document.getElementById("dropdownArticle2DropdownButton");
var containerB = document.getElementById("dropdownArticle2DropdownContainer");
var textB = document.getElementById("dropdownArticle2DropdownContainerText");

var buttonC = document.getElementById("dropdownArticle3DropdownButton");
var containerC = document.getElementById("dropdownArticle3DropdownContainer");
var textC = document.getElementById("dropdownArticle3DropdownContainerText");




buttonA.addEventListener("click", function() {

    containerA.classList.toggle("dropdownArticle1DropdownContainer--open");
    textA.classList.toggle("dropdownArticle1DropdownContainerText--open");
    buttonA.classList.toggle("dropdownArticle1DropdownButton--open");

});




buttonB.addEventListener("click", function() {

    containerB.classList.toggle("dropdownArticle2DropdownContainer--open");
    textB.classList.toggle("dropdownArticle2DropdownContainerText--open");
    buttonB.classList.toggle("dropdownArticle2DropdownButton--open");

});





buttonC.addEventListener("click", function() {

    containerC.classList.toggle("dropdownArticle3DropdownContainer--open");
    textC.classList.toggle("dropdownArticle3DropdownContainerText--open");
    buttonC.classList.toggle("dropdownArticle3DropdownButton--open");

});
// End Dropdown


// ----------Arrow-------------//
var yellowContainer = document.getElementById("yellowContainer");
var yellowButton = document.getElementById("yellowButton");

var redContainer = document.getElementById("redContainer");
var redButton = document.getElementById("redButton");

var grayContainer = document.getElementById("grayContainer");
var grayButton = document.getElementById("grayButton");


addEventListener("DOMContentLoaded", function() {
    redContainer.style.zIndex = '0';
    yellowContainer.style.zIndex = '1';
    grayContainer.style.zIndex = '0';
    yellowButton.style.display = 'none';
});

redButton.addEventListener("click", function() {
    redContainer.style.zIndex = '1';
    yellowContainer.style.zIndex = '0';
    grayContainer.style.zIndex = '0';
    redButton.style.display = 'none';
    yellowButton.style.display = 'block';
    grayButton.style.display = 'block';
});

grayButton.addEventListener("click", function() {
    redContainer.style.zIndex = '0';
    yellowContainer.style.zIndex = '0';
    grayContainer.style.zIndex = '1';
    grayButton.style.display = 'none';
    yellowButton.style.display = 'block';
    redButton.style.display = 'block';
});

yellowButton.addEventListener("click", function() {
    redContainer.style.zIndex = '0';
    yellowContainer.style.zIndex = '1';
    grayContainer.style.zIndex = '0';
    yellowButton.style.display = 'none';
    redButton.style.display = 'block';
    grayButton.style.display = 'block';
});
// End Arrow 



// Scroll to top
var btn = document.querySelector("#backToTopButton");

btn.addEventListener("click", function() {

    window.scrollTo(0, 0);
    
});
// End Scroll to top