let model = document.querySelector('.mod');
let btn = document.getElementById('L1C1_btn');
let cancel = document.getElementById('cancel');

btn.addEventListener("click", function() {
    model.style.display = "block";
});

cancel.addEventListener("click", function() {
    model.style.display= "none";
});
