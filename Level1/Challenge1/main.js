let btn = document.getElementById('L1C1_btn');
let bodyColor = document.getElementById('body');

btn.addEventListener("click", function() {
    if(bodyColor.style.background !== 'yellow') {
        bodyColor.style.background = 'yellow';
    } else if(bodyColor.style.background === 'yellow') {
        bodyColor.style.background = 'gray';
    }
});