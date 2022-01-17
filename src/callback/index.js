/** los callback son funciones que reciben como parametros a otras funciones y que 
 * se ejecutan cuando son llamadas
 */

function sum (num1, num2){
    return num1 + num2;
}

function calc (num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2,6,sum));

/** otro ejemplo */

function date (callback){
    console.log(new Date);
    setTimeout (() => {
        let date = new Date;
        callback(date);
    },3000)
}

function printDate (dateNow){
    console.log(dateNow);
}

date(printDate);