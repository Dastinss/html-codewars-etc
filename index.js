// const person = new Object( {
//     name: 'Serg',
//     age: 47,
//     greet: function () {
//         console.log( 'Greeting!' )
//     }
// } )
//
// Object.prototype.sayHello = function () {
//     console.log( 'Hello !!!' )
// }
//
// const lena = Object.create( person )
// lena.name = 'Elena'
//
// const arr = []

// let animal = {
//     eats: true,
//     walk() {
//         alert('Animal walks')
//     }
// };
//
// let rabbit = {
//     jumps: true,
//     _proto_: animal
// };
//
// let longFar = {
//     earLength: 10,
//     _proto_:rabbit
// }
//
// rabbit.walk = function ( ){
//     alert('Rabbit!! Bounce-bounce!')
// }
//
// rabbit._proto_ = animal
//
// let user = {
//     name: 'John',
//     surname: 'Smith',
//
//     set fullName (value) {
//         [this.name, this.surname] = value.split(' ')
//     },
//
//     get fullName () {
//         return `${this.name} ${this.surname}`
//     }
// };
//
// let admin = {
//     _proto_: user,
//     isAdmin: true
// }
//
// admin.fullName = 'Alice Cooper'
//
// let animal = {
//     eats: true
// }
//
// let rabbit = {
//     jumps: true,
//     _proto_: animal
// }

// for (let prop in animal) {
//     let isOwn = rabbit.hasOwnProperty(prop);
//
//     if (isOwn) {
//         alert(`Our: ${prop}`);
//     } else {
//       alert(`Inherited: ${prop}`)
//     }
// }
//
// function XO( str ) {
//     //code here
//     str = str.toLowerCase();
//     let arr = str.split( '' );
//     const O = 'o'
//     const x = 'x'
//     let countX = 0;
//     let countO = 0;
//
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[ i ] === x) {
//             countX = countX + 1;
//         } else if (arr[ i ] === O) {
//             countO = countO + 1;
//         }
//     }
//     return countO === countX ? true : false
// }

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// let a = {}
// let names = ['tanya', 'ignat', 'dima']
// let a = names.reduce( (total, el) => {
//     total [el] = 'hey'
//     return total;
// }, {} );

// let result = names.every(n => n.length > 4);

// let result = 'abcdefg serg yo serg'.indexOf('serg yo')
// ' blablabla yo bla '.trim() === 'blablabla yo bla'

// let users = [
//     { name: 'dima', age: 18 },
//     { name: 'ignat', age: 21 }
// ]
// let users2 = users
//     .filter( u => u.age === 18 )  //сначала фильтруем массив, чтобы потом его отмапить, можно дополнительно после этого сделать еще и сортироваку
//     // .sort((a,b) => {}) // можно затем указать правила сортировки
//     .map( u = ({
//         ...u, // сделали через имютабельность, чтобі не покалечить старый массыв
//         passed: true  // добавили новое свойство
//     }) )

// let state = {
//     address: {
//         streets: [
//             {name: 'shabany'}, // {name: 'shabaneyro'}
//             {name: 'surganova'}
//         ],
//         city: {value: minsk}
//     },
//     age: {value: 18}
// }
//
// let newState = {
//     ...state,
//     address: {
//         ...state.address,
//         streets: state.address.streets.map( s => { // наш стритс теперь равняется: на основе того стрит что был,мапом получаем новый массив. получаем стрит
//             if (s.name === 'shabany') // и если наш стрит равен shabany, то мы
//                 return {              // возвращаем
//                     ...s, name: 'shabaneyro' // копию стрит у когото меняем имя на shabaneyro
//                 }
//             else return s // если не нашли, то возвращаем обьект без изменений
//         } )
//     }
// }

// let man = {
//     _name: '',
//     get name () {
//         return this._name + '!'
//     },
//     set name (value) {
//         if (value === 'dimich') throw new Error('debilnoe imya')
//         this._name = value
//     },
//     age () {
//         return 18
//     }
// }
// man.name = 'dima'

// for (var i=0; i < 10; i++) {       // цикл срабатывает 10 раз и у нас одна глобальная переменная i
//     (function ( j ) { ,    // мы в каждом цикле запускаем анонимную самовызывающуюся ф-цию, в которую мы засовываем значение i, которое засовывается в j
//         setTimeout( () => { // запускается 10 раз ассинхронная операция
//             console.log( j )
//         }, j * 1000 );
//     })( i );                       // засовывание в ф-цию значения i (1 затем 2, затем 3 и т.д.), которое передается выше в j - отрабатывается замыкание по значению
// }

// var a = 10; // создали в глобальном пространстве переменную а
// function yo() {
//     let a = 100 // глобальной переменной переприсваивается 100
// }
// yo();
// console.log(a) // будет 100

// console.log(1) // 1 - выполнили 1 синхронно
// let hello = new Promise( (res) => { // 2 создается Promise, движек сразу же запрыгивает и начинает выполнять обещания
//     console.log(2) // 3 выполняется 2, т.к. синхронный код
//     res(); // 4 резолвим промис, но хоть промис и зарезолвился, выполнение ф-ции не останавливается
//     console.log(3) // 5 продолжает выполняться поэтому 3
// } ) // 6 выходим и идем дальше
// hello.then( () => { console.log(4) }) // 7 подписались на промис, подписчик hello, надабы его выполнить т.к. промис зарезолвлен в этой точке, но все что в then, это микротаски, поэтому она выполнится после всех синхронных операций, в нашем случае просле 5
// console.log(5) // 8 выполняем 5, т.к. это синхронная операция

// console.log(0);
// setTimeout( () => { console.log(1)}, 0 )
// setTimeout( () => { console.log(2)}, 0 )
// console.log(3);

// let a = {name: 'Dimich'}
// let names = ['tanya', 'ignat', 'dima'];
// names.forEach(n => a[n] = 'hey') // есть обьект а и мы добавляем ему tanya и т.д. свойством 'hey'
// console.log(a)

// let man = {
//     name: 'Dimich',
//     // this ? значит тут  this = props и строкой ниже также
//     hello: function () { alert(this.name) } // контекст выполнения ф-ции, в даном случае this - єто man и ф-цию візівем от имени  man
// }
//
// let props = { hello: man.hello } // hello вызывается от имени props
// props.hello()

// (async () => {
//     let hello = new Promise( (res, rej) => {
//         rej (10);
//     } )
//     let result = await hello;
//     console.log(result)
// }) ()

// function makeCounter (start = 0) {
//     let value = start;
//     return function ( ) {
//         return value++
//     }
// }
// // makeCounter()()// ретурнет функцию, которую мы можем вызывать, и уже вызов этой ф-ции будет нам возвращать какое то значение
//
// let f = makeCounter(10)
// let f2 = makeCounter(20)
//
// console.log(f()) // 10
// console.log(f()) // 11
// console.log(f()) // 12
// console.log(f2()) //20

// let man = { lastName: 'daragan'}
// function hello (firstName) {
//     alert(firstName + this.lastName)
// }
// const hello2 = hello.bind(man, 'sergey')
//  hello2() // sergeydaragan

// const a = 10;
// function yo (a) {
//     a = 100;
//     return a;
// }
// yo(30)
// console.log(a) // нам пофиг что вы переприсваиваете, потому что внешняя константа будет 10

// let hello = new Promise( ()=>{} )
// let result = hello.catch( ()=>15 ) // catch возвращает нам другой промис поэтому в result будет сидеть другой промис и дожидаться когда он зарезолвится, но он не заризолвится никогда, потому что Promise( ()=>{} ) нигде не резовен

// async function yo (){
//     return 16;
// }
// let result = yo(); // будет result = промис, т.к. любая ассинхронная ф-ция при ее вызове возвращает то, что она ретурнет и оборачивает в промис
// result.then( r => console.log(r) )

// let shit = ()=> ()=> ()=> ()=> 10
// let result = shit ()()()();

// let a = {name: 'serg'}
// a[0]='hey'
// a[1]='yo'
// a[2]='blabla'
// a[{}]='hz'
// a[{name: 'ddd'}] = 'smth'
// console.log(a)
// //{0: 'hey', 1: 'yo', 2: 'blabla', name: 'serg', [object Object]: 'smth'}

// class User extends React.Component {
//     state = {
//         counter : 1
//     }
//     onChange = ( ) => {
//         console.log(this.state.counter)
//         this.setState({counter: 100})
//         console.log(this.state.counter)
//     }
//     render (){}
// }

// let A = 1;
// try {
//     A = sum (A,1);
// } catch (err) {
//     A+=2;
// } finally {
//     A++
// }

// console.log(1)
// console.log(2)
// let pr = new Promise((res) => {
//     console.log(2.1)
//     res();
//     console.log(2.2)
// })
// pr.then( () => console.log(4) )
// console.log(3)
// console.log(0)

// function toJadenCase( str ) {
//     //...
//     let arr = [];
//     let words = str.toLowerCase().split( " " )
//
//     for (var i = 0; i < words.length; i++) {
//         word = words[ i ];
//         arr.push( word[ 0 ].toUpperCase() + word.slice( 1 ) )
//     }
//     return arr.join( " " );
// };
//
// function toJadenCase (str) {
//     return str.split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// };
//

// const products = [
//     {
//         title: "phone",
//         price: 100
//     },
//
//     {
//         title: "TV-set",
//         price: 1000
//     },
//
//     {
//         title: "radio",
//         price: 50
//     },
//
//     {
//         title: "ear-phone",
//         price: 150
//     },
// ]
//
// const elements = [];
// for (let i=0; i < products.length; i++) {
//     const str = `<li>${products[i].title}:${products[i].price}</li>`;
//     elements.push(str);
// }

// Counter
// const counter = (n) => {
//     return function () {
//         console.log(1000 * n)
//     }
// }
//
// const calc = counter(7)
// calc()

// const createIncrementor = (a) => {
//     return function (b) {
//         return a + b
//     }
// }
//
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
//
// console.log(addOne(10))
// console.log(addOne(15))
//
// console.log(addTen(10))
// console.log(addTen(15))

// function urlGenerator (domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const urlCom = urlGenerator('com')
// console.log(urlCom('google'))
// console.log(urlCom('yahoo'))
// console.log(urlCom('ukrsibbank'))
//
// const urlUa = urlGenerator('ua')
// console.log(urlUa('bank.gov'))
// console.log(urlUa('oschadbank'))

//
//
// const counter =(a)=> {
//     return function ( b ) {
//         return a+b
//     }
// }
//
// const calcTwo = counter(2)
// console.log(calcTwo(10))//12
// console.log(calcTwo(12))//14
//
// const calcFife = counter(5)
// console.log(calcFife(10))//15
// console.log(calcFife(12))//17

// // Eсть массив и необходимо вернуть массив уникальных значений
// const arr = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 8, 8, 8]
// function getUnicNumber (){
//
// }

// //Event Loop. Ассинхронность
// console.log('Start')
// console.log('Start2')
// function timeOut2sec (){
//     console.log('timeOut2sec')
// }
// window.setTimeout(function ( ){
//     console.log('Inside timeout, after 5000 seconds')
// },5000)
//
// setTimeout(timeOut2sec,2000)
//
// console.log('End')

// Promise

// console.log( 'Request data...' )
// setTimeout( () => {
//     console.log( 'Preparing data...' )
//
//     const backEndData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout( () => {
//         backEndData.modified = true,
//             console.log( 'Data recieved', backEndData )
//     }, 2000 )
// }, 2000 )
//
// console.log( 'Request data...' )
// const p0 = new Promise( ( resolve, reject ) => {
//         setTimeout( () => {
//             console.log( 'Preparing data...' )
//             const backEndData = {
//                 server: 'aws',
//                 port: 2000,
//                 status: 'working'
//             }
//             resolve( backEndData )
//         }, 2000 )
//     },
// )
//
// p0
//     .then( ( data ) => {
//         // const p1 = new Promise( ( res, rej ) => {
//         return new Promise( ( resolve, reject ) => {
//             setTimeout( () => {
//                 data.modified = true
//                 resolve ( data )
//             }, 2000 )
//         } )
//         // p1.then(clientData =>{
//         //     console.log( 'Data received ', clientData )
//     } )
//     .then( clientData => {
//         return new Promise ((res,rej) => {
//             console.log( 'Data received ', clientData )
//             res  (clientData)
//             // rej  (clientData)
//         clientData.fromPromise = true
//         return clientData
//         } )
//     } )
//     // .then(dataTwo => {
//     //     dataTwo.modified = false
//     //     return dataTwo
//     // })
//     .then( dataTwo => {
//         return new Promise( ( res, rej ) => {
//             setTimeout( () => {
//                 res( dataTwo )
//             }, 3000 )
//         } )
//     } )
//     .then(smth => {
//         console.log('My own string of code', smth)
//     })
//     .catch(err => console.error('Error',err))
//     .finally(()=>console.log('Finally'))

//Async Await
// const delay = ms => {
//     return new Promise( r =>
//         setTimeout( () => r(), ms ) )
// }
//
// // delay( 2000 )
// //     .then( () => {
// //         console.log( '2 sec' )
// //     } )
//
// const url = 'https://jsonplaceholder.typicode.com/todos'
//
// function fetchTodos() {
//     console.log('Start Fetching...')
//     return delay( 2000 )
//         .then( () => {
//             return fetch( url )
//         } )
//         .then( response => {
//             return response.json() })
// }
//
// fetchTodos()
//     .then( data => {
//             console.log( 'Data', data )
//         }
//     )
//     .catch(e => console.error("Error", e))
//     .finally('Finally')
//
//
// // // то же самое только с помощью async/await
// // async function fetchAsyncTodos (){
// //     try {
// //         await delay(2000)
// //         const response = await fetch(url)
// //         const data = await response.json()
// //         console.log('Data: ', data)
// //     } catch (e) {
// //         console.error(e)
// //     } finally {
// //         console.log('Finally')
// //     }
// // }
// //
// // fetchAsyncTodos()

//Counter
// function makeCounter() {
//     let count = 0;
//
//     return function () {
//         return count++;
//     };
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// alert( counter() ); // 0
// alert( counter() ); // 1
//
// alert( counter2() ); // 0
// alert( counter2() ); // 1

//Сумма с помощью замыканий
// function sum (a){
//         return function ( b ){
//             return a+b // берёт "a" из внешнего лексического окружения
//         }
//     }
//
// alert(sum(5)(-1)) //4

// let x = 1;
//
// function func() {
//     let x = 2;
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
// }
//
// func();

//Вернуть массив уникальных значений
// let arr = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 8, 8, 8]
//
// function uniqArr( arr ) {
//     return Array.from( new Set( arr ) )
// }
//
// console.log( uniqArr( arr ) ); // [1, 2, 3, 4, 5, 6, 7, 8]

//Методы массивов
const people = [
    {name: 'Serg', age: 47, budget: 40000},
    {name: 'Alex', age: 40, budget: 100000},
    {name: 'Mike', age: 20, budget: 10000},
    {name: 'Anny', age: 24, budget: 30000},
    {name: 'Zoya', age: 75, budget: 2000},
    {name: 'Nick', age: 52, budget: 200000}
]
//
// for (let i=0; i<people.length; i++){
//     console.log(people[i])
// }
//ForEach
// people.forEach(p=>console.log(p.age*10))

//map
// const newMan = people.map(p => p.name[0]==='Serg' ? p.name : p.name='S')
// console.log(people)

//filter
// const arrAlt = [];
// for (let i=0; i<people.length; i++) {
//     if (people[i].age>30){
//         arrAlt.push(people[i])
// //     }
// // }
//
// const arrAlt = people.filter(p => {
//     if (p.age > 30) {
//         return true
//     }
// })
//
// const arrPuer = people.filter(p => p.budget >= 100000)
// console.log(arrAlt)
// console.log(arrPuer)

//  this, call, apply и bind в Java Script

// const car = {
//     model: 'Toyota',
//     year: 2011,
//     showModel: function (color, engine) {
//         console.group(`${this.model} info`)
//         console.log(`Model is ${this.model}`)
//         console.log(this.year)
//         console.log(`Colour is ${color}`)
//         console.log(`Engine is ${engine}`)
//         console.groupEnd()
//     }
// }
//
// const anotherCar = {
//     model: 'Mers',
//     year: 2018,
// }
//
// // car.showModel()
// car.showModel.bind(anotherCar,'Blue', 'diesel')()
// car.showModel.call(anotherCar, 'Blue', 'diesel')
// car.showModel.apply(anotherCar, ['Blue', 'diesel'])

// var obj = { num: 2 };
// function add(a, b){
//     return this.num + a + b;
// }
//
// console.log(add.call(obj, 3, 5)); // 10
// console.log(add.apply(obj, [3, 5])); // 10
// const func = add.bind(obj, 3, 5);
// console.log(func()); // Возвращает 10

//кастомный мап:
// function customMap (arr, callback) {
//     const arrNew = [];
//     for (let i=0; i<arr.length; i++) {
//         arrNew.push(callback(arr[i]))
//     }
//     return arrNew
// }
// console.log(customMap([1,2,3],e=> e+1)) // [2, 3, 4]

//кастомный filter:
// function customFiler( arr, callback ) {
//     const arrNew = [];
//     for (let i = 0; i<arr.length; i++){
//         if (arr, i, callback(arr[i])) {
//             arrNew.push(arr[i])
//         }
//     }
//     return arrNew
// }
//
// console.log(customFiler([1,2,3], e => e !== 3))


// codeWars altERnaTIng cAsE <=> ALTerNAtiNG CaSe
//  function toAltCase (str) {
//     // Define your method here :)
//      let arr = [];
//      let word = str.split('')
//
//      for (let i=0; i<str.length; i++) {
//         if (word[i].toLowerCase() === word[i]) {
//             arr.push(word[i].toUpperCase())
//         } else if (word[i].toUpperCase() === word[i]) {
//             arr.push(word[i].toLowerCase())
//          } else if (!isNaN(word[i])) {
//             arr.push(word[i])
//         }
//      }
//      return arr.join('')
// }
//
// toAltCase ("hello world")
// toAltCase ("HELLO WORLD")
// toAltCase ("hello WORLD")
// toAltCase ("HeLLo WoRLD")
// toAltCase ("12345")
// toAltCase ("1a2b3c4d5e")