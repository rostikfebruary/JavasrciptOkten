//Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// let formsHtml = document.body
//
// let formss = document.createElement('form')
//
// let inputName = document.createElement('input')
// inputName.type = 'text'
// inputName.placeholder = 'name'
// inputName.name = 'username'
//
// let inputSurname = document.createElement('input')
// inputSurname.type = 'text'
// inputSurname.placeholder = 'surname'
// inputSurname.name = 'usersSurname'
//
// let inputAge = document.createElement('input')
// inputAge.type = 'number'
// inputAge.placeholder = 'age'
// inputAge.name = 'userAge'
//
// let btn = document.createElement('button')
// btn.type = 'submit'
// btn.textContent = 'Submit'
// btn.value = 'typ btn save'
//
// formss.append(inputName,inputSurname,inputAge,btn)
// formsHtml.appendChild(formss)
//
//
// let element = document.body
// let divInput = document.createElement('div')
// formss.onsubmit = function (ev){
//     ev.preventDefault()
//     divInput.textContent = `Name: ${inputName.value}, Surname: ${inputSurname.value}, Age: ${inputAge.value}`;
// }
// element.appendChild(divInput)






//є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let block = document.body
// let numbersBlock = document.createElement('div')
// let formss = document.createElement('form')
// let btn = document.createElement('button')
// btn.type = 'submit'
// btn.innerText = 'жми'
//
// formss.appendChild(btn)
// block.append(numbersBlock, formss)
//
// console.log(block)
//
// numbersBlock.innerText = 0
//
// formss.onsubmit = function (ev){
//     ev.preventDefault()
//     let value = parseInt(numbersBlock.innerText)
//     numbersBlock.innerText= value += 1
//
// }






//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки.

// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію



// let time = new Date();
// let timeString = time.toISOString()
// let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
// sessions.push(timeString + '\n')
// localStorage.setItem('sessions', JSON.stringify(sessions))
//
//




//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів




// let products = [
//     {name: 'banana', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'tomato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'onion', type: 'vegetable'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'strawberry', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'leg', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'banana', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'tomato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'potato', type: 'vegetable'},
//     {name: 'onion', type: 'vegetable'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'kokos', type: 'fruit'},
//     {name: 'strawberry', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'apple', type: 'fruit'},
//     {name: 'leg', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'},
//     {name: 'arm', type: 'meat'}
// ]
//
// let productsBtn = document.createElement('button')
//
// productsBtn.innerText = 'tip'
// document.body.appendChild(productsBtn)
// //console.log(productsBtn)
//
// productsBtn.onclick=function (){
//     let productDiv = document.createElement('div')
//     document.body.appendChild(productDiv)
//     let productsBtnNext = document.createElement('button')
//
//     productsBtnNext.innerText = 'next'
//     document.body.appendChild(productsBtnNext)
//     for (const product of products) {
//         let div = document.createElement('div')
//         div.textContent= 'name: ' + product.name + ' type: ' + product.type
//         if(productsBtn){
//             products.slice(1,10)
//         }else if (productsBtn){
//             products.splice(10,90)
//         }
//         productDiv.appendChild(div)
//     }
//
//     productsBtn.disabled = false;
// }




// - Створити довільний елемент
// з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


// let block = document.createElement('div')
// block.id = 'text'
//
// let btn = document.createElement('button')
// btn.innerText = 'press'
// document.body.append(block, btn)
// console.log(block)
//
// btn.onclick = function (){
//     let element = document.getElementById('text');
//     element.removeAttribute('id');
//     console.log(block)
// }
//



//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form = document.createElement('form')
//
// let input = document.createElement('input')
// input.id = 'age'
// input.name = 'age'
// input.type = 'number'
//
// let label = document.createElement('label')
// label.for='age'
// label.innerText = 'Enter your age: '
//
//
// let btn = document.createElement('button')
// btn.innerText = 'confirm your age'
//
// btn.onclick = function (){
//     let inputAge = document.getElementById('age').value;
//     if (inputAge < 18){
//         console.log('You are not 18!!!')
//     }else{
//         console.log('Congratulations')
//     }
// }
// document.body.append(form, label,input, btn )
// console.log(form,input)



//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

