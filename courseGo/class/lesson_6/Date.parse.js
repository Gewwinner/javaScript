/**
 * Created by Alexander on 7/10/2016.
 */

/*
 Все современные браузеры, включая IE9+, понимают даты в упрощённом формате ISO 8601 Extended.

 Этот формат выглядит так: YYYY-MM-DDTHH:mm:ss.sssZ, где:

 YYYY-MM-DD – дата в формате год-месяц-день.
 Обычный символ T используется как разделитель.
 HH:mm:ss.sss – время: часы-минуты-секунды-миллисекунды.
 Часть 'Z' обозначает временную зону – в формате +-hh:mm, либо символ Z, обозначающий UTC.
 По стандарту её можно не указывать, тогда UTC, но в Safari с этим ошибка, так что лучше указывать всегда.
 Также возможны укороченные варианты, например YYYY-MM-DD или YYYY-MM или даже только YYYY.

 Метод Date.parse(str) разбирает строку str в таком формате и возвращает соответствующее ей количество миллисекунд.
 Если это невозможно, Date.parse возвращает NaN.*/

var msUTC = Date.parse('2012-01-26T13:51:50.417Z'); // зона UTC

console.log( msUTC ); // 1327571510417 (число миллисекунд)

var ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log( ms ); // 1327611110417 (число миллисекунд)
