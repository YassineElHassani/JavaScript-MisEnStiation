let btn = document.getElementById('L1C1_btn');
let myDiv = document.getElementById('myDiv');


btn.addEventListener("click", function() {
    btn.classList.add('newClass');
    btn.textContent = "Class was added to this button";
});