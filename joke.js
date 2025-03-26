const start = document.getElementById("greeting");

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

const button1 = document.getElementById("misc")
const button2 = document.getElementById("programming")
const button3 = document.getElementById("spooky")
const button4 = document.getElementById("christmas")

button1.textContent = "Miscelaneous"
button2.textContent = "Programming"
button3.textContent = "Spooky"
button4.textContent = "Christmas"

button1.addEventListener("click", function(){

    fetch("https://v2.jokeapi.dev/joke/Misc?safe-mode")
    .then(response => response.json())
    .then(data => {

        if (data.type === "twopart"){
            start.textContent = data.setup + " ... " + data.delivery
        } else if (data.type === "single"){
            start.textContent = data.joke
        }
})})
