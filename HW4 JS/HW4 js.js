













// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function sRectangle(a, b){
//     let s = a * b;
//     console.log(s)
// }
//
// sRectangle(2,10);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sircle(r1, r2){
//     let s = r1 * r2 * Math.PI;
//     console.log(s);
// }
// sircle(10, 10)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r  2пRH

// function cylinder(r, h){
// let s = (Math.PI * 2) * r * h;
//     console.log(s);
// }
//
// cylinder(3, 4);


// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr(a, b, c, d){
// let arrMa = [a, b, c, d];
//     console.log(arrMa);
// }
//
// arr(1, 2, 'hello owu', true);

// function meteor(...items){
//     console.log(items);
// }
// meteor(1, 12, 45, 77);





// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//
//     document.write(`<p>${text}</p>`);
// }
//
// paragraph('Owu the best');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createUl(text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
//
// createUl('Its difficult');





// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)




// function ulWithNumber(text, num){
//     document.write(`<ul>`);
//     for (li = 0; li < num; li++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ulWithNumber('owu uwo uwu', 10);
// ulWithNumber('owu uwo uwu', 2);
// ulWithNumber('owu uwo uwu', 19);




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// const arr = [true, 'hello', 69, false, 12, 'want sleep'];
// function arrAll(items){
//     document.write(`<ul>`);
//     for (const item of items) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
// arrAll(arr);





// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let students = [
//     {id: true, name: 'Rostik', age: 18},
//     {id: true, name: 'Jeck', age: 25},
//     {id: false, name: 'Kratos', age: 20},
//     {id: false, name: 'Zeus', age: 19},
//     {id: true, name: 'Rock', age: 18}
// ];
//
// function getStudentsInfo(items){
//     for (const item of items) {
//         document.write(`<div>ID: ${item.id} Name: ${item.name} Age: ${item.age}</div>`);
//     }
// }
//
//
// getStudentsInfo(students);



// - створити функцію яка повертає найменьше число з масиву

// let num = [1, 12, 0, -6];
// function minNum(items){
//     let minMath = Math.min(...items);
//     console.log(minMath);
// }
// minNum(num);





// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let sum = [1, 2, 10];
// let result = sumArr(sum);
// function sumArr(arr){
//     let sum = 0;
//     for (i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(result)




// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let mass = [11, 22, 33, 44]
// function swap(arr, index1, index2){
//     if(index1 >= 0 && index1 < arr.length || index2 >= 0 && index2 < arr.length){
//         let swp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = swp;
//     }else {
//         console.log('bad index')
//     }
// }
// swap(mass, 0, 3);
// console.log(mass)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(num, text){
//
//     let currencyValues = num / 40 ;
//     let exchangeCurrency = text;
//     let sumUah = currencyValues + exchangeCurrency;
//     return sumUah;
// }
// let ff = exchange(10000, ' EUR')
// console.log(ff)