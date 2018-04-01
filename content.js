"use strict";

//give the body a class of jumpinchat-tools for css targeting
document.body.className += "jumpinchat-tools";

//create a new section for Jumpin.chat tools
let container = document.createElement("section");
container.className += "jumpinchat-tools-container";
document.body.appendChild(container);
//create options
let options = document.createElement("section");
options.className += "options";
let gearIcon = document.createElement("i");
gearIcon.className += "fas fa-cog gear-icon";
options.appendChild(gearIcon);
container.appendChild(options);
//add list to container
let optionList = document.createElement("ul");
optionList.className += "option-list";
container.appendChild(optionList);
//create and add button to options for bigger font
let btnBiggerFont = document.createElement("li");
btnBiggerFont.className += "list-item";
let btnBiggerFontText = document.createTextNode('Bigger Font');
btnBiggerFont.appendChild(btnBiggerFontText);
optionList.appendChild(btnBiggerFont);

options.addEventListener("click", function(){

    console.log("working");

    if(optionList.classList.contains("show")) {
        console.log("yes");
        optionList.classList.remove("show");
        document.querySelector(".option-list").style.visibility = "hidden";
        document.querySelector(".option-list").style.opacity = "0";
    } else {
        console.log("no");
        document.querySelector(".option-list").style.visibility = "visible";
        document.querySelector(".option-list").style.opacity = "1";
        optionList.className += " show";
    }
});

//on click, make chat font bigger
let textChat = document.getElementsByClassName("chat__Message");
console.log(textChat);

btnBiggerFont.addEventListener("click", function(){
    for (var i = 0; i < textChat.length; i++) {

        //toggle css class
        if (textChat[i].classList.contains("sizeText")) {
            console.log("yes");
            textChat[i].classList.remove("sizeText");
            btnBiggerFont.classList.remove("active");
        } else {
            console.log("no");
            textChat[i].className += " sizeText";
            btnBiggerFont.className += " active";
        }

    }
});
