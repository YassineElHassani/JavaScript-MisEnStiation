let type = document.getElementById('inputText');
let btn = document.getElementById('validBtn');

btn.addEventListener("click", () => {
    if(type.value.length < 5) {
        alert("Input is not valid");
    } else {
        alert("Input is valid");
    }
});