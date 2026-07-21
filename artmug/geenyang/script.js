function resize(){
    parent.postMessage({
        type:"resize",
        height:document.documentElement.scrollHeight
    }, "*");
}

window.onload = resize;
window.onresize = resize;
