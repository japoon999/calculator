let number1 = prompt("Eded daxil et!");
number1 = Number(number1);

let emeliyyat = prompt("+,-,*,/")

let number2 = prompt("ikinci Ededi daxil et!");
number2 = Number(number2);

switch (emeliyyat) {
    case '+':
    
        alert(number1 + number2);
        break
    case '-':
        alert(number1 - number2);
        break
    case '/':
        alert(number1 / number2);
        break
    case '*':
        alert(number1 * number2);
        break
    default:
        alert("Bu emeliyyat tapilmadi");
        break
}