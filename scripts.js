//Declared variables to target nodes for each button
const display = document.querySelector('#display')
const numbers = document.querySelectorAll('#numbers')
const main_Operator = document.querySelectorAll('#main-operator')
const other_operator = document.querySelectorAll('#other-operator')
const delete_cancel = document.querySelectorAll('#delete-cancel')
const equals_to = document.querySelector('#equals')



//Added event listener for each button and for keyboard
numbers.forEach(item => item.addEventListener('click', btn_aim))
main_Operator.forEach(item => item.addEventListener('click', work_it))
other_operator.forEach(item => item.addEventListener('click', oda_work_it))
delete_cancel.forEach(item => item.addEventListener('click', del_kcel))
equals_to.addEventListener('click', operate)
window.addEventListener('keydown', keyboard);



//Declare empty variable for calculation
let answer = ''
let num1 = ''
let num2 = ''
let sign = ''



//Keyboard event function
function keyboard(e) {

    let typed = e.key
    let typed_code = e.keyCode

    if (typed.match("[0-9]")) {
        input_nums(typed)
        }

    else if ((typed.match("[-|*|+|/]"))) {
        Calc_sign(typed)    
        }

    else if (typed_code == 110) {
        decimate_minate (typed)    
        }

    else if (typed_code == 8) {
        Calc_delete('DEL')
        }

    else if (typed_code == 46) {
        Calc_delete('AC')    
        }

    else if (typed_code == 13) {
        operate()    
        }
        

    else {
        return;
    }

}


//number event function
function btn_aim(e) {
    let digit = e.target.innerText 
    input_nums(digit)
}


//Inputs the numbers from either keyboard or button
function input_nums(number) {
    if (sign === '' && answer === '') {
        num1 = num1 + number 
         display.textContent = num1
    }   

    else if (sign.length == 1) {
        num2 = num2 + number
         display.textContent = num2 
    }

    else if (answer == num1 && sign.length == 1) {
        num2 = num2 + number
         display.textContent = num1               
    }

    else {
        return;
    }
}


//mathematical sign event function
function work_it (e) {
    let add_sign = e.target.innerText
    Calc_sign(add_sign)
}


//Inputs the mathematical sign from either keyboard or button
function Calc_sign(signage) {
    if(display.textContent === 'olodo') {
        sign = ''
        display.textContent = ''
    }
    else {
    sign = signage
    }
}


//decimal event function
function oda_work_it(e) {
    let value = e.target.innerText
    decimate_minate(value)
}


//Inputs the point(".") from either keyboard or button
function decimate_minate (item) {
    let point = '.'
    let pl_nus = '-'
    let percent = 100


    if (item == '.') {
        add_point(point)
    }
    
    else if (item == '+/-'){
        plus_minus(pl_nus)
    }

    else {
        return;
    }
}




function add_point(point) {
    let one = num1.includes('.')
    let two = num2.includes('.')
    
    if (answer == num1) {
        num1 = ''
        num2 = ''
        sign = '' 
        answer = ''
        display.textContent = ''
    }
    
    else if(display.textContent == num1 && one === false) {
        num1 += point
        display.textContent = num1
    }

    else if (display.textContent == num2 && two === false) {
        num2 += point
        display.textContent = num2
    }

    else {
        return;
    }
}

function plus_minus(pl_nus) {
    let first = num1.includes('-')
    let second = num2.includes('-')
    let hold_first = num1.split('')
    let hold_second = num2.split('')

    if(display.textContent == num1 && first === false) {
        hold_first.splice(0, 0, '-')
        num1 = hold_first.join('') 
        display.textContent = num1
    }


    else if(display.textContent == num1 && first === true) {
        let remains = hold_first.splice(1, hold_first.length - 1)
        num1 = remains.join('')
        display.textContent = num1
    }
  
   
    else if (display.textContent == num2 && second === false) {
        hold_second.splice(0, 0, '-')
        num2 = hold_second.join('') 
        display.textContent = num2
    }


    else if (display.textContent == num2 && second === true) {
        let remains = hold_second.splice(1, hold_second.length - 1)
        num2 = remains.join('')
        display.textContent = num2
    }

    else {
        return;
    }
}


//Delete/Clear event function
function del_kcel (e) {
    let option = e.target.innerText
    Calc_delete(option)
}


//Clears inputs from the display
function Calc_delete (yank) {
    if (yank === 'AC') {
        num1 = ''
        num2 = ''
        sign = ''
        answer = ''
        display.textContent = '' 
    }

    else if (yank === 'DEL'){
        remove()
    }

    else {
        return
    }

}



//Delete inputs from the display
function remove() {
    num1 = num1.toString()
    num2 = num2.toString()

    if (num1.length >= 1 && sign === '' && answer === '') {
        num1 = num1.slice(0, num1.length - 1)
        display.textContent = num1
    }

    else if (sign.length == 1 && num2.length >= 1) {
        num2 = num2.slice(0, num2.length - 1)
        display.textContent = num2
    }
    else if (answer == num1) {
        num1 = ''
        num2 = ''
        sign = '' 
        answer = ''
        display.textContent = ''
    }

    else {
        return;
    }
}


//the operator function to output results to the display
function operate() {
    if (sign === '+') {
        add(num1, num2)
    } 

    else if (sign === '-') {
        subtract(num1, num2)
    }

    else if (sign === '*') {
        multiply(num1, num2)
    }

    else if (sign === '/') {
        divide(num1, num2)
    }

    else {
        return
    }
}


//Addition function
function add(num1, num2) {
    answer = (+num1) + (+num2)
    display.textContent = answer
    sleet()
 }


//Subtraction function
function subtract(num1, num2) {
    answer = (+num1) - (+num2)
    display.textContent = answer
    sleet()
}


//Multiplication function
function multiply(num1, num2) {
    answer = (+num1) * (+num2)
    display.textContent = answer
    sleet()
}


//Division function
function divide(num1, num2) {

    if (num2 === '0') {
        display.textContent = 'olodo'
        fleet()
     }

    else {
        answer = (+num1) / (+num2)
        display.textContent = answer
        sleet()   
    }
}


//Reinitialize variables for continous calculation
function sleet() {
    num1 = answer.toString()
    num2 = ''
    sign = ''
 }

//Reinitialize empty variables for new calculation
function fleet () {
    num1 = ''
    num2 = ''
    sign = '' 
    answer = ''   
}