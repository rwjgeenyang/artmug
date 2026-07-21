const API_URL = "https://script.google.com/macros/s/AKfycbzswPe02rjw2YqT_Uh4eqBUujwEaSYdL7jvb_9WBq-S0vAb9xW4IW4SkkkmdD6eoupG/exec";

async function loadData(){

    const response = await fetch(API_URL);

    const items = await response.json();

    const app = document.getElementById("app");

    app.innerHTML = "";

    items.forEach(item=>{

        let element;

        switch(item.type){

            case "title":

                element = document.createElement("h1");
                element.textContent = item.value;

                break;

            case "text":

                element = document.createElement("p");
                element.textContent = item.value;

                break;

            case "price":

                element = document.createElement("div");
                element.className="price";
                element.textContent=
                    Number(item.value).toLocaleString()+"원";

                break;

        }

        if(element)
            app.appendChild(element);

    });

    resize();

}

function resize(){

    parent.postMessage({
        type:"resize",
        height:document.documentElement.scrollHeight
    },"*");

}

window.onload=loadData;
