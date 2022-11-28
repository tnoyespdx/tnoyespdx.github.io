// ================= Navbar scroll highlighting ==============
// Idea from https://codepen.io/malsu/pen/VwKzoPG

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", changeActive);

function changeActive() {
    let currentY = window.pageYOffset;
   
    sections.forEach(current => {
        const height = current.offsetHeight;
        const top = current.offsetTop - 50;
        id = current.getAttribute("id");

        if (currentY > top && currentY <= top + height) {
            document.querySelector(".navbar a[href*=" + id + "]").classList.add("active");
        } else {
            document.querySelector(".navbar a[href*=" + id + "]").classList.remove("active");
        }
    });
}


// =================== Hello/Goodbye Generator ================
// Changes the hello message in the header and the goodbye message in the footer
// each time the page is refreshed to something different.
// Help from https://www.w3schools.com/js/js_random.asp

const hello = document.getElementById("hello");
const goodbye = document.getElementById("goodbye");

const greetings = [ "Hello, ",
                    "Hola, ",
                    "Bonjour, ",
                    "Guten tag, "]
const goodbyes = [  "Goodbye!",
                    "Adios!",
                    "Au Revoir!",
                    "Auf Wiedersehen!"];

let choice = Math.floor((Math.random() * 10) / 3);
console.log(choice);

hello.innerHTML = greetings[choice];
goodbye.innerHTML = goodbyes[choice];

// =========================================================== 