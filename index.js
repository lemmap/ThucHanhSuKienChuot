let imgObj = null;
imgObj=document.getElementById("myImage");

function init(){
   imgObj=document.getElementById("myImage");
   imgObj.style.position='relative';
   imgObj.style.left="0px";
}
function moveRight(){
    imgObj.style.left="20px";
}
window.onload =init;
