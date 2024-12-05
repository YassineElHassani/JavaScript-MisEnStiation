let btn = document.getElementById('L1C1_btn');
let resetBtn = document.getElementById('reset');
let counting = document.getElementById('counting');
let counter = 0;

btn.addEventListener("click", () => {
    counter++;
    counting.textContent = `${counter}`;
});

resetBtn.addEventListener("click", () => {
    counter = 0;
    counting.textContent = `${counter}`;
});

