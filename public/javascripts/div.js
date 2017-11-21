var windowsDesktop = document.getElementById("windowsDesktop");
var panelWin = document.getElementById("panelWin");

var winStart = document.getElementById("winStart");
var panelStart = document.getElementById("panelStart");

var leftPusck = document.getElementById("leftPusck");
var openLeftPusck = document.getElementById("openLeftPusck");

var listCatalog =document.getElementById("listCatalog");
var runProg =document.getElementById("runProg");

var time = document.getElementById("panelTime");
var datep = document.getElementById("panelDate");

var rightMessageMenu = document.getElementById("rightMessageMenu");
var contRightMenu = document.getElementById("contRightMenu");

var rightMenuMessag = document.getElementById("rightMenuMessag");

var searchLeftPanelBtn = document.getElementById("searchLeftPanelBtn");
var searchPanel = document.getElementById("searchPanel");

var leftSearchPusck = document.getElementById("leftSearchPusck");
var rightSearch = document.getElementById("rightSearch");

function controlSize(){
    var y = document.documentElement.clientHeight;
    var x = document.documentElement.clientWidth;
    // console.log(x,y); 
    rightMessageMenu.style.height = (y- 45) +"px";
    contRightMenu.style.height = (y-30) +"px";
    windowsDesktop.style.width = x+"px";
    windowsDesktop.style.height = y+"px";
    panelWin.style.width = x+"px";
}
controlSize();
window.onresize = ()=>{
    controlSize();
}
// Часы
setInterval(()=>{
    var date = new Date();
    var min = date.getMinutes();
    var hours = date.getHours();

    var day =date.getDate();
    var month = date.getMonth()+1;
    var year =date.getFullYear();

    if (day <10 ) day = "0" + day;
    if (month <10 ) month = "0" + month;
    if (year <10 ) year = "0" + year;

    if (hours < 10) hours = "0"+hours;
    if (min < 10) min = "0"+min; 
    time.innerHTML = hours + ":"+ min;
    datep.innerHTML = day+"."+ month +"."+year;
},100);
//Открытия меню
winStart.addEventListener("click",()=>{
    if (panelStart.className == "panel-start on-panel") {
        panelStart.className = "panel-start off-panel";
        searchPanel.className = "search-left-panel search-close";
    } else {
        panelStart.className = "panel-start on-panel";
        leftPusck.className = "down-left-pusck";
        searchPanel.className = "search-left-panel search-close";
    }   
});
//Закрытие при
windowsDesktop.addEventListener("click",()=>{
    panelStart.className = "panel-start off-panel";
    leftPusck.className = "down-left-pusck";
    rightMessageMenu.className = "close-rigth-menu";
    searchPanel.className = "search-left-panel search-close";
});
listCatalog.addEventListener("click",()=>{
    if (leftPusck.className == "open-left-pusck" ) {
        leftPusck.className = "down-left-pusck";
    }
    // else panelStart.className = "panel-start off-panel"; 
});
runProg.addEventListener("click",()=>{
    if (leftPusck.className == "open-left-pusck" ) {
        leftPusck.className = "down-left-pusck";
    }
});
//Открытие левого пуска в пуске
openLeftPusck.addEventListener("click",()=>{
    if (leftPusck.className == "open-left-pusck" ) {
        leftPusck.className = "down-left-pusck";
    } else leftPusck.className = "open-left-pusck";
});
var contentProg = document.getElementById("contentProg");
var moveProg = document.getElementById("moveProg");

contentProg.addEventListener("mousemove",(div)=>{
    // console.log(-379+y);
    // console.log(-300+x);    
    // moveProg.addEventListener("mousedown",()=>{
    //     moveProg.style.top = (-379+y)+"px";
    //     moveProg.style.left = (-300+x)+"px";
    // });
    moveProg.onmousedown = (div)=>{
        //Функция
        var ElemSize = moveProg.getBoundingClientRect();
        var pogrY = ElemSize.top;
        var pogrX = ElemSize.left;
        this.onmousemove = (div)=>{
            var y = div.clientY;
            var x = div.clientX;
            var yWin = document.documentElement.clientHeight;
            var xWin = document.documentElement.clientWidth;
            moveProg.style.top = (-379+y)+"px";
            moveProg.style.left = (-300+x)+"px";
            console.log("Работает 1");
        }
        this.onmouseup = ()=>{
            console.log("Работает 2");
            this.onmousemove = ()=>{
                console.log("Работает 3");
            }
        }
    }
});

var edgeWindow = document.getElementById("edgeWindow");

windowsDesktop.addEventListener("mousemove",(div)=>{
    // console.log(-379+y);
    // console.log(-300+x);    
    // moveProg.addEventListener("mousedown",()=>{
    //     moveProg.style.top = (-379+y)+"px";
    //     moveProg.style.left = (-300+x)+"px";
    // });
    edgeWindow.onmousedown = (div)=>{
        //Функция
        var ElemSize = moveProg.getBoundingClientRect();
        var pogrY = ElemSize.top;
        var pogrX = ElemSize.left;
        this.onmousemove = (div)=>{
            var y = div.clientY;
            var x = div.clientX;
            var yWin = document.documentElement.clientHeight;
            var xWin = document.documentElement.clientWidth;
            edgeWindow.style.top = (-379+y)+"px";
            edgeWindow.style.left = (-300+x)+"px";
            console.log("Работает 1");
        }
        this.onmouseup = ()=>{
            console.log("Работает 2");
            this.onmousemove = ()=>{
                console.log("Работает 3");
            }
        }
    }
});
//Открытие Edge
var edgeOpen = document.getElementById("edgeOpen");
var closeEdge = document.getElementById("closeEdge");
var exitEdge = document.getElementById("exitEdge");
edgeOpen.addEventListener("click",()=>{
    if (edgeWindow.className == "edge-window edge-window-open") {
        edgeWindow.className = "edge-window edge-window-close";
    } else {
        edgeWindow.className = "edge-window edge-window-open";
    }
});
closeEdge.addEventListener("click",()=>{
    if (edgeWindow.className == "edge-window edge-window-open") {
        edgeWindow.className = "edge-window edge-window-close";
    } else {
        edgeWindow.className = "edge-window edge-window-open";
    }
});
exitEdge.addEventListener("click",()=>{
    if (edgeWindow.className == "edge-window edge-window-open") {
        edgeWindow.className = "edge-window edge-window-close";
    } else {
        edgeWindow.className = "edge-window edge-window-open";
    }
});
//Open rigth menu?&
rightMenuMessag.addEventListener("click",()=>{
   if(rightMessageMenu.className == "open-rigth-menu") {
        rightMessageMenu.className = "close-rigth-menu";    
   }else rightMessageMenu.className = "open-rigth-menu";    
});
var downWindows = document.getElementById("downWindows");
    downWindows.addEventListener("click",()=>{
        document.location.href ="http://localhost:3000/";
    });

// Обработчик cmd
var chatWindows = document.getElementById("chatWindows");
var closeCMD = document.getElementById("closeCMD");
var exitCMD = document.getElementById("exitCMD");
var panelCMD = document.getElementById("panelCMD");
var cmdInp = document.getElementById("cmdInp");
chatWindows .addEventListener("click",()=>{
    $('#cmdInp').focus();
});
panelCMD.addEventListener("click",()=>{
    if (chatWindows.className == "cmd-windows cmd-windows-open") {
        chatWindows.className = "cmd-windows cmd-windows-close";
    } else {
        chatWindows.className = "cmd-windows cmd-windows-open";
    }
});
closeCMD.addEventListener("click",()=>{
    if (chatWindows.className == "cmd-windows cmd-windows-open") {
        chatWindows.className = "cmd-windows cmd-windows-close";
    } else {
        chatWindows.className = "cmd-windows cmd-windows-open";
    }
});
exitCMD.addEventListener("click",()=>{
    if (chatWindows.className == "cmd-windows cmd-windows-open") {
        chatWindows.className = "cmd-windows cmd-windows-close";
    } else {
        chatWindows.className = "cmd-windows cmd-windows-open";
    }
});

searchLeftPanelBtn.addEventListener("click",()=>{
    panelStart.className = "panel-start off-panel";
    if (searchPanel.className == "search-left-panel search-open") {
        searchPanel.className = "search-left-panel search-close";
    } else {
        searchPanel.className = "search-left-panel search-open";
    }   
});
leftSearchPusck.addEventListener("click",()=>{
    if (leftSearchPusck.className == "open-left-pusck") {
        leftSearchPusck.className = "down-left-pusck";
    } else {
        leftSearchPusck.className = "open-left-pusck";
    }
});
rightSearch.addEventListener("click",()=>{
    leftSearchPusck.className = "down-left-pusck";
});