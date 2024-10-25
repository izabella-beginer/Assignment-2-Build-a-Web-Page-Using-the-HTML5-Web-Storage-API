const nameinput = document.getElementById("Username");
const SaveButton = document.getElementById("Save-btn");
const SlearButton = document.getElementById("Clear-btn");
const displayname = document.getElementById("displayname");

SaveButton.addEventListener('click',SaveName);
const Savebutton=document.getElementById("save-btn");

function displayusername() {
localStorage.setItem('Username');
displaynameElement=Document.getElementById("displayname");
if (SaveUsername){
displayname.innerHTML='${greeting,}${name}';
}
}

clear-btn.addEventListener('click',clearName);
Clearbutton=document.getElementById("clear-btn");
function clearUserName(){
localStorage.removeItem('Username');
}
function timegreeting (){
    const time = new Date().getHours();
    if (time < 10) {
     return "Good morning";
    } else if (time < 15) {
      return "Good day";
    } else if (time<20) {
      return "Good evening";
    }

    }
