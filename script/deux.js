const one = document.getElementById("one");
const two = document.getElementById("two");

one.addEventListener("click", function() {
    one.style.display = "none";
    two.style.display = "block";
});

two.addEventListener("click", function() {
    two.style.display = "none";
    one.style.display = "block";
});