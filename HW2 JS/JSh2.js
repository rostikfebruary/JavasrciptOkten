// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".






// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [1, 'hello', false, 156, 322, 'Serhiy', true, 'okten', 2023, 'ua', 911];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);
console.log(arr1[10]);
// або можемо просто вивести масив console.log(arr1);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let harryPoter={
    title: 'Дари смерті',
    pageCount: 450,
    genre: true
}
console.log(harryPoter);

let sherlokHolms ={
    title: 'Повернення Шерлока',
    pageCount:1290,
    genre: false
}
console.log(sherlokHolms);

let marvelAvengers ={
    title: 'Війна нескінчeності',
    pageCount: 1690,
    genre: true,
    autors:[]
}
console.log(marvelAvengers);




// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let harryPoter1={
    title: 'Дари смерті',
    pageCount: 450,
    genre: true,
    autors:[]
}

harryPoter1.autors.push({name: 'Joana'});
harryPoter1.autors.push({age: 45});
console.log(harryPoter1);


let sherlokHolms1 ={
    title: 'Повернення Шерлока',
    pageCount:1290,
    genre: false,
    autors:[]
}

sherlokHolms1.autors.push({name: 'Artur'});
sherlokHolms1.autors.push({age: 65});
console.log(sherlokHolms1);

let marvelAvengers1 ={
    title: 'Війна нескінчeності',
    pageCount: 1690,
    genre: true,
    autors:[]
}

marvelAvengers1.autors.push({name: 'Sten'});
marvelAvengers1.autors.push({age: 99});
console.log(marvelAvengers1);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Mike', username: 'mike123', password: 'a1111'},
    {name: 'Serhiy', username: 'serhiy321', password: 'a2222'},
    {name: 'Ruslan', username: 'ruslan231', password: 'aa3333'},
    {name: 'Marko', username: 'marko312', password: 'a4444'},
    {name: 'Rostik', username: 'rostik542', password: 'a5555'},
    {name: 'Olya', username: 'olya999', password: 'a6666'},
    {name: 'Den', username: 'den666', password: 'a7777'},
    {name: 'Vika', username: 'vika322', password: 'a8888'},
    {name: 'Sofia', username: 'sofia777', password: 'a9999'},
    {name: 'Okten', username: 'okten000', password: 'a0000'},
]

console.log(users[0].password)
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 10;
if (x !== 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}


let a= prompt('Введіть число');
switch (a){
    case '1':
        console.log('Вірно');
        break;
    case '0':
        console.log('Не вірно');
        break;
    case '-3':
        console.log('Вірно');
        break;
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('Введіть число для перевірки декади');

switch (true){
    case(time >= 0 && time <=14):
        console.log('Перша декада');
        break;
    case (time >=15 && time <=29):
        console.log('Друга декада');
        break;
    case(time >=30 && time <=44):
        console.log('Третя декада');
        break;
    case (time >=45 && time <=59):
        console.log('Четверта декада');
        break;
    default:
        console.log('Введіть коректне число');
        break;
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = prompt('Введіть число місяця')

switch (true){
    case(day >= 1 && day <= 9):
        console.log('Перша');
        break;
    case (day >= 10 && day <= 19):
        console.log('Друга');
        break;
    case(day >= 20 && day <= 31):
        console.log('Третя');
        break;
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let week = parseInt(prompt('Введіть порядковий номер дня тижня'));

let first = ['Physic', 'Math', 'PE'];
let second = ['English', 'Chemistry', 'Swiming'];
let third = ['Drawing', 'Singing', 'PE'];
let fourth = ['Math', 'Programing', 'Deutchland'];
let fifth = ['Physic', 'OOP', 'English'];
switch (week){
    case(1):
        console.log(first);
        break;
    case(2):
        console.log(second);
        break;
    case(3):
        console.log(third);
        break;
    case(4):
        console.log(fourth);
        break;
    case(5):
        console.log(fifth);
        break;
    default:
        console.log('Введіть правильне число');
        break;


}


//- Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let n1 = parseInt(prompt('Введіть перше число'));
let n2 = parseInt(prompt('Введіть друге число'));

if (n1 > n2){
    console.log(`Максимальне число ${n1}`);
}else if (n1 < n2){
    console.log(`Максимальне число ${n2}`);
}else {
    console.log('Числа рівні');
}



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let x1 = 1 ;

if  (x1 === '' || x1 === typeof  NaN || x1 === typeof null || x1 === typeof undefined || x1 === 0){
    x1 ='default';
    console.log(x1);
} else{
    console.log(typeof x);
}















//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


if (coursesAndDurationArray){
    console.log(coursesAndDurationArray[0].monthDuration);
    console.log(coursesAndDurationArray[1].monthDuration);
    console.log(coursesAndDurationArray[2].monthDuration);
    console.log(coursesAndDurationArray[3].monthDuration);
    console.log(coursesAndDurationArray[4].monthDuration);
    console.log(coursesAndDurationArray[5].monthDuration);
}

if(coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('тривалість не більше 5 місяців')
}

if(coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('тривалість не більше 5 місяців')
}

if(coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('тривалість не більше 5 місяців')
}

if(coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('тривалість не більше 5 місяців')
}

if(coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('тривалість не більше 5 місяців')
}

if(coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('тривалість не більше 5 місяців')
}


