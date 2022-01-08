const parent = document.getElementById("parent");
const loading = document.getElementById("load");
const listBtn = document.getElementsByTagName("button");
const loginBTN = listBtn[0];

loginBTN.addEventListener("click", function() {
    loading.innerText = " Loading ...";
    loginBTN.style.display = "none";
    setTimeout(() => {
        loading.innerText = " Please be patient";
    }, 5000);
    setTimeout(() => {
        loading.innerText = " Welcome";
        loginBTN.innerText = "Log out";
        loginBTN.style.display = "block";
    }, 10000);
});