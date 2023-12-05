//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let s = (a, b) => a * b;
// console.log(s(2,10))

//- створити функцію яка обчислює та повертає площу кола з радіусом r
// let s = (r1, r2) => r1 * r2 * Math.PI;
// console.log(s(10, 10));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let s = (r, h) => (Math.PI * 2) * r * h;
// console.log(s(10,20));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let meteor = (...items) => console.log(...items)
// meteor(1, 'hello', true)


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraph = (...items) => document.write(`<p>${items}</p>`);
// paragraph('I love Phyton');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ulWithLi = (...items) => {
//     document.write(`<ul>`)
//     for (i = 1; i <=3; i++){
//         document.write(`<li>${items}</li>`);
//     }
//     document.write(`</ul>`)
// }
// ulWithLi('Java the best');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ulWithLi = (text, num) => {
//     document.write(`<ul>`);
//     for (i = 0; i < num; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ulWithLi('I love Owu', 10);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let meteor = (...items) => {
//     document.write(`<ul>`);
//     for (const item of items) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// meteor(1, 'hello', true, 1212);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


// let meteor = (items) => {
//     for (const item of items) {
//         document.write(`<div>ID: ${item.id}  Name: ${item.name} Age: ${item.age}</div>`)
//     }
//
// }
// meteor([
//     {id: true, name: 'Rostik', age: 18},
//     {id: true, name: 'Jeck', age: 25},
//     {id: false, name: 'Kratos', age: 20},
//     {id: false, name: 'Zeus', age: 19},
//     {id: true, name: 'Rock', age: 18}])


//- створити функцію яка повертає найменьше число з масиву
// let minNum = (items) => {
//     let nums = Math.min(...items);
//     return console.log(nums)
// }
// minNum([-1,2,3,4])


//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (items) =>{
//     let foobar = 0
//     for (i = 0; i < items.length; i++){
//         foobar += items[i]
//     }
//     return console.log(foobar);
// }
// sum([1,2,10])


//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     if (index1 >= 0 && index1 < arr.length || index2 >= 0 && index2 < arr.length){
//         let el = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = el;
//     }
//     return console.log(arr);
// }
// swap([11,22,33,44],0,1);


//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250



// let moneyExchage=(how, type) => {
//     let result;
//     let resultOfExchange = [{currency: 'USD', value:40}, {currency: 'EUR', value:42}];
//     for (const resultOfExchangeElement of resultOfExchange){
//         if (type === resultOfExchangeElement.currency){
//             result = how / resultOfExchangeElement.value;
//             console.log(result + resultOfExchangeElement.currency);
//         }
//     }
// }
// moneyExchage(10000, 'USD')
// moneyExchage(10000, 'EUR')

