let result = "";
let input = [];
let num = '';

let screen = document.querySelector('body > div > div')

let buttons = document.querySelectorAll('.wrapper>button');



buttons.forEach(button => {
    button.addEventListener('click', function () {
        screen.innerHTML += button.value;

        if (button.classList.contains('number')) {
            num += button.value;
            // console.log(num);

        } else if (button.classList.contains('operator')) {
            input.push(num);
            num = '';
            input.push(button.value);
            // console.log(input);
        } else if (button.classList.contains('equal')) {
            input.push(num);
            console.log(input);
            let rez = myCalc(...input);
            screen.innerHTML = rez;
            num = rez;
            input = [];
        } else if (button.classList.contains('clear')) {
            input = [];
            result = "";
            num = "";
            screen.innerHTML = "";
        }

        // console.log(button.value);

    })
})

// calculator function using eval(), becomes really easy
let myCalc = function () {
    // console.log('pushed equal');
    for (i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    console.log(result);
    let x = eval(result);
    result = "";
    console.log(x);
    return x;
}