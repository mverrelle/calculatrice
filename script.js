const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function handeClick(event) {
    button_value = event.target.textContent;
    switch (button_value){
        
        case "C":
            display.value = "";
            break;

        case "=":
            try{
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }   
            break;

        default :
            display.value += button_value;
            break;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", handeClick);
});