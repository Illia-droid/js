function calculation() {
    let minValue = Number(document.getElementById('minValue').value);
    let number = Number(document.getElementById('number').value);
    let divider1 = Number(document.getElementById('divider1').value);
    let divider2 = Number(document.getElementById('divider2').value);
    let res;

    if (minValue.length == 0  || number.length ==0 || divider1.length ==0||divider1==0 || divider2.length == 0||divider2==0) {
        res = "Введіть всі данні корректно";
        document.getElementById('main').style.background = "linear-gradient(aqua,purple)";
        document.getElementById('result').innerHTML = res;
    } else {
        // Блок ДЗ
       if (number < minValue || number % divider1 !== 0 || number % divider2 !== 0) {
        res = 'lose';
        document.getElementById('main').style.background = "linear-gradient(red, tomato)";
        document.getElementById('result').innerHTML = res;
    
    } else {
        res = 'win even number';
        document.getElementById('main').style.background = "linear-gradient(green, chartreuse)";
        document.getElementById('result').innerHTML = res;
           
    }
    } 
}


let value1=0;
let value2=1;
let result;
if (value1 > 0 && value2 > 0 || value1 < 0 && value2 < 0) {
    console.log(result = value1 * value2);
} else if (value1 > 0 && value2 < 0 || value1 < 0 && value2 > 0) {
    console.log(result = value1 / value2);
} else if (value1 == 0 && value2 !== 0 ) {
    console.log(result = value2);
} else if (value1 !== 0 && value2 == 0) {
    console.log(result = value1);
} else {
    console.log(result = 'NaN');
}

