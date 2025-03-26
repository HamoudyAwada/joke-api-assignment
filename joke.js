const start = document.getElementById("greeting");
const button1 = document.getElementById("misc");
const button2 = document.getElementById("programming");
const button3 = document.getElementById("spooky");
const button4 = document.getElementById("christmas");
const button5 = document.getElementById("pun");
const lead = document.getElementById("jotd");


button1.textContent = "Miscelaneous"
button2.textContent = "Programming"
button3.textContent = "Spooky"
button4.textContent = "Christmas"
button5.textContent = "Pun"

fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.category);
    console.log(data.type);
    console.log(data.setup);
    console.log(data.delivery);

    if (data.type === "twopart"){
        start.textContent = data.setup + " ... " + data.delivery
    } else if (data.type === "single"){
        start.textContent = data.joke
    }
});

button1.addEventListener("click", function(){

    fetch("https://v2.jokeapi.dev/joke/misc?safe-mode")
    .then(response => response.json())
    .then(data => {

        if (data.type === "twopart"){
            start.textContent = data.setup + " ... " + data.delivery
        } else if (data.type === "single"){
            start.textContent = data.joke
        }

        lead.textContent = "A Random Miscelaneous Joke"

})})

button2.addEventListener("click", function(){

    fetch("https://v2.jokeapi.dev/joke/programming?safe-mode")
    .then(response => response.json())
    .then(data => {

        if (data.type === "twopart"){
            start.textContent = data.setup + " ... " + data.delivery
        } else if (data.type === "single"){
            start.textContent = data.joke
        }

        lead.textContent = "A Random Programming Joke"

})})

button3.addEventListener("click", function(){

    fetch("https://v2.jokeapi.dev/joke/spooky?safe-mode")
    .then(response => response.json())
    .then(data => {

        if (data.type === "twopart"){
            start.textContent = data.setup + " ... " + data.delivery
        } else if (data.type === "single"){
            start.textContent = data.joke
        }

        lead.textContent = "A Random Spooky Joke"

})})

button4.addEventListener("click", function(){

    fetch("https://v2.jokeapi.dev/joke/christmas?safe-mode")
    .then(response => response.json())
    .then(data => {

        if (data.type === "twopart"){
            start.textContent = data.setup + " ... " + data.delivery
        } else if (data.type === "single"){
            start.textContent = data.joke
        }

        lead.textContent = "A Random Christmas Joke"

})})

button5.addEventListener("click", function(){

    fetch("https://v2.jokeapi.dev/joke/pun?safe-mode")
    .then(response => response.json())
    .then(data => {

        if (data.type === "twopart"){
            start.textContent = data.setup + " ... " + data.delivery
        } else if (data.type === "single"){
            start.textContent = data.joke
        }

        lead.textContent = "A Random Pun"

})})

