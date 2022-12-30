var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
}

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbySz1a5r1s_DFqJBbwTqLUt4MuGyNEQ02WhIUUBiSPvTC-Tr2sHMjxaVQDtxt4YjWEh/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

