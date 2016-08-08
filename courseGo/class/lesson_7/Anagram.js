/**
 * Created by Alexander on 8/7/2016.
 */
/*Задание 7 (Анаграммы)
 Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
 воз - зов киборг - гробик корсет - костер - сектор Напишите функцию anClean(arr), которая возвращает массив слов,
 очищенный от анаграмм.
 var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
 console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
 Из каждой группы анаграмм должно остаться только одно слово, не важно какое.*/
function anClean(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++){
        var sorted = arr[i].toLowerCase().split('').sort().join('');
        obj[sorted] = arr[i];
    }
    console.log(obj);

    var result = [];
    for (var key in obj){
        result.push(obj[key]);
    }
    return result;
}
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'