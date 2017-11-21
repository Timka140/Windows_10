var loginWindows = document.getElementById("loginWindows");

function controlSize(){
    var y = document.documentElement.clientHeight;
    var x = document.documentElement.clientWidth;
    // console.log(x,y); 
    loginWindows.style.width = x+"px";
    loginWindows.style.height = y+"px";
}
controlSize();
window.onresize = ()=>{
    controlSize();
}
var Iinvalid = document.getElementById("Iinvalid");
var gele = document.getElementById("gele");
Iinvalid.addEventListener("click",()=>{
    if(gele.className == "open-gele" ){
        gele.className = "close-gele";        
    } else  gele.className = "open-gele";    
});