const body = document.body;
const title = document.createElement("div");
const subTitle = document.createElement("h5");

subTitle.innerText = "12";
title.style.display = "flex";

setInterval(function() {
    title.appendChild(subTitle);
    changeValue();
}, 1000);

title.addEventListener("click", () => {
    alert("hi");
});

function changeValue() {
    subTitle.innerText = Math.round(Math.random() * 1000);
}

body.appendChild(title);