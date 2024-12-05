let btn = document.getElementById('L1C1_btn');
let elem = document.querySelector('.elem');

btn.addEventListener("click", function() {
    if(elem.style.visibility !== "hidden") {
        elem.style.visibility = "hidden";
        btn.textContent = "Click again";
    } else {
        elem.style.visibility = "visible";
        btn.textContent = "Click here";
    }
});
