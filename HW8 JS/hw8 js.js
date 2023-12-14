//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)


// function User(id, name, surname, email, phone){
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
// let users = [];
//
// let user1 = new User(1, 'kokos', 'kokosovich', 'kokos332@gmail.com', 380000000001)
// users.push(user1)
//
// let user2 = new User(2, 'orange', 'orangereya', 'orange332@gmail.com', 380000000002)
// users.push(user2)
//
// let user3 = new User(3, 'cherry', 'cherik', 'cherry332@gmail.com', 380000000003)
// users.push(user3)
//
// let user4 = new User(4, 'oleksandr', 'gut', 'gut332@gmail.com', 380000000004)
// users.push(user4)
//
// let user5 = new User(5, 'artem', 'podol', 'podol332@gmail.com', 380000000005)
// users.push(user5)
//
// let user6 = new User(6, 'roman', 'faster', 'faster332@gmail.com', 380000000006)
// users.push(user6)
//
// let user7 = new User(7, 'rostik', 'gow', 'rostik332@gmail.com', 380000000007)
// users.push(user7)
//
// let user8 = new User(8, 'maks', 'man', 'maks332@gmail.com', 380000000008)
// users.push(user8)
//
// let user9 = new User(9, 'serhiy', 'apelsin', 'apelsin332@gmail.com', 380000000009)
// users.push(user9)
//
// let user10 = new User(10, 'vasya', 'voda', 'voda332@gmail.com', 3800000000010)
// users.push(user10)
//
// console.log(users)
//
//
//
//
// //- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter(user => user.id % 2 === 0)
// console.log(filter)
//
//
// //- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortUsersId = users.sort((a, b) => {
//     return user1.id - user2.id
// })
//
// console.log(sortUsersId)







// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client{
//     constructor(id, name, surname, email, phone, order){
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order=order || []
//     }
// }
//
// let clients = [];
//
// let client1 = new Client(1, 'kokos', 'orange', 'kokos@gmail.com', 1010, ['apple', 'mango', 'fruit'])
// clients.push(client1)
//
// let client2 = new Client(2, 'vasya', 'kakushonak', 'vasya@gmail.com', 1020, ['blackberry', 'grape'])
// clients.push(client2)
//
// let client3 = new Client(3, 'anya', 'banana', 'banana@gmail.com', 1030, ['blackberry', 'grape'])
// clients.push(client3)
//
// let client4 = new Client(4, 'maks', 'badboy', 'badboy@gmail.com', 1040, ['blackberry', 'grape', 'phone', 'cranberry'])
// clients.push(client4)
//
// let client5 = new Client(5, 'vika', 'mama', 'mama@gmail.com', 1050, ['bird', 'cat'])
// clients.push(client5)
//
// let client6 = new Client(6, 'andriy', 'foobar', 'foobarik@gmail.com', 1060, ['grape'])
// clients.push(client6)
//
// let client7 = new Client(7, 'maks', 'badboy', 'badboy@gmail.com', 1070, ['grape', 'laptop', 'owu school'])
// clients.push(client7)
//
// let client8 = new Client(8, 'alina', 'css', 'css@gmail.com', 1080, ['owu school'])
// clients.push(client8)
//
// let client9 = new Client(9, 'sonya', 'js', 'js@gmail.com', 1090, ['owu school','mint'])
// clients.push(client8)
//
// let client10 = new Client(10, 'diana', 'HTML MASTER', 'html@gmail.com', 1100, ['owu school', 'usa'])
// clients.push(client8)
//
//
// console.log(clients)
//
//
//
// //- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortOrders = clients.sort((client1,client2) =>{
//     return client1.order.length - client2.order.length
// })
// console.log(sortOrders)












// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину` +
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля` +
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed +
// -- changeYear (newValue) - змінює рік випуску на значення newValue +
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car +


// function Car(model,manufacture, year, maxspeed, vengine){
//     this.model = model
//     this.manufacture = manufacture
//     this.year = year
//     this.maxspeed = maxspeed
//     this.vengine = vengine
//
//     this.drive = function() {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину.`);
//     };
//
//     this.info = function (){
//         console.log(`Car info:
//         Model: ${this.model}
//         Manufacture: ${this.manufacture}
//         Year: ${this.year}
//         MaxSpeed: ${this.maxspeed}
//         Engine v: ${this.vengine}
//         `)
//     }
//
//     this.increesMaxSpeed = function (newSpeed){
//         this.maxspeed += newSpeed
//         console.log(`Максимальна швидкість піднята до ${this.maxspeed} км/год`)
//     }
//
//     this.newValue = function (newValue){
//         this.year += newValue
//         console.log(`Новий рік випуску є ${this.year}`)
//     }
//
//     this.addDriver = function (driver){
//         this.driver = driver
//         console.log(`Додано нового ваділу ${this.driver}`)
//     }
//
// }
//
//
// let cars = new Car('bmw m4', 'Germany', 2023, 320, 4)
// console.log(cars)
// cars.drive()
// cars.info()
// cars.increesMaxSpeed(1000)
// cars.newValue(1010)
// cars.addDriver('kokos')



//- (Те саме, тільки через клас)


// class Car {
//     constructor(model, manufacture, year, maxspeed, vengine) {
//         this.model = model
//         this.manufacture = manufacture
//         this.year = year
//         this.maxspeed = maxspeed
//         this.vengine = vengine
//
//         this.drive = function () {
//             console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину.`);
//         };
//
//         this.info = function () {
//             console.log(`Car info:
//         Model: ${this.model}
//         Manufacture: ${this.manufacture}
//         Year: ${this.year}
//         MaxSpeed: ${this.maxspeed}
//         Engine v: ${this.vengine}
//         `)
//         }
//
//         this.increesMaxSpeed = function (newSpeed) {
//             this.maxspeed += newSpeed
//             console.log(`Максимальна швидкість піднята до ${this.maxspeed} км/год`)
//         }
//
//         this.newValue = function (newValue) {
//             this.year += newValue
//             console.log(`Новий рік випуску є ${this.year}`)
//         }
//
//         this.addDriver = function (driver) {
//             this.driver = driver
//             console.log(`Додано нового ваділу ${this.driver}`)
//         }
//
//     }
// }
//
//
// let cars = new Car('bmw m4', 'Germany', 2023, 320, 4);
// console.log(cars)
// cars.drive()
// cars.info()
// cars.increesMaxSpeed(1000)
// cars.newValue(1010)
// cars.addDriver('kokos')



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.+
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.+
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//  function  Popelushka(name, age, footSize){
//     this.name = name
//      this.age =age
//      this.footSize = footSize
//  }
//
//  class Prince{
//     constructor(name, age, foot){
//         this.name = name
//         this.age = age
//         this.foot = foot
//     }
//
//
//  }
//
//
//
//
//
//  let more = [];
// let popelushka1 = new Popelushka('Maria', 18, 35)
// more.push(popelushka1)
//
// let popelushka2 = new Popelushka('Ana', 18, 36)
// more.push(popelushka2)
//
// let popelushka3 = new Popelushka('Tania', 18, 34)
// more.push(popelushka3)
//
// let popelushka4 = new Popelushka('Kokos', 18, 37)
// more.push(popelushka4)
//
// let popelushka5 = new Popelushka('Vasya', 18, 35)
// more.push(popelushka5)
//
// let popelushka6 = new Popelushka('karina', 18, 34)
// more.push(popelushka6)
//
// let popelushka7 = new Popelushka('Alina', 18, 38)
// more.push(popelushka7)
//
// let popelushka8 = new Popelushka('Yulia', 18, 35)
// more.push(popelushka8)
//
// let popelushka9 = new Popelushka('Vladislava', 18, 36)
// more.push(popelushka9)
//
// let popelushka10 = new Popelushka('Nastya', 18, 39)
// more.push(popelushka10)
//
// console.log(more)
//
//
//
//
// let prince1 = new Prince('Cratos', 123, 37 )
// console.log(prince1)
//
//
//
// let cinderela = null;
//
// for (let i = 0; i < more.length; i++) {
//     let first = more[i];
//
//     if (first.footSize === prince1.foot) {
//         cinderela = first;
//     }
// }
//
//
// if (cinderela !== null) {
//     console.log(`Принц ${prince1.name} знайшов підходящу попелюшку: ${cinderela.name}`);
// } else {
//     console.log(`Принц ${prince1.name} не знайшов підходящу попелюшку.`);
// }


