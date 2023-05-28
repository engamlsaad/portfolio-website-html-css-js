let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");
function toggleFun() {
    sidebar.classList.toggle("toggle");
}
menu.addEventListener("click", toggleFun);

let inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
    input.onkeyup = function (e) {
        e.target.style.color = "rgb(227, 224, 9)";
    }
    input.onblur = function (el) {
        el.target.style.color = "#fff";
    }
})
