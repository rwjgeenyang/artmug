const API_URL =
"https://script.google.com/macros/s/AKfycbzswPe02rjw2YqT_Uh4eqBUujwEaSYdL7jvb_9WBq-S0vAb9xW4IW4SkkkmdD6eoupG/exec";

async function loadData(){

    const response = await fetch(API_URL);
    const data = await response.json();

    document.getElementById("title").textContent = data.title;

    document.getElementById("subtitle").textContent = data.subtitle;

    document.getElementById("description").textContent = data.description;

    document.getElementById("price").textContent =
        Number(data.price).toLocaleString() + "원";

    resize();

}

function resize(){

    parent.postMessage({
        type:"resize",
        height:document.documentElement.scrollHeight
    },"*");

}

window.onload = loadData;
window.onresize = resize;
