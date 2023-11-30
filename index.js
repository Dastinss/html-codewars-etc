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
// const people = [
// 	{ name: 'Serg', age: 47, budget: 40000 },
// 	{ name: 'Alex', age: 40, budget: 100000 },
// 	{ name: 'Mike', age: 20, budget: 10000 },
// 	{ name: 'Anny', age: 24, budget: 30000 },
// 	{ name: 'Zoya', age: 75, budget: 2000 },
// 	{ name: 'Nick', age: 52, budget: 200000 }
// ]
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

//HQ9+
// function HQ9( code ) {
// 	//finish me
// 	const anything = undefined;
// 	return code.split( '' ).map( w =>
// 		w.charAt( 0 ) === "H" ? "Hello World!" :
// 			w.charAt( 0 ) === "Q" ? "Q" :
// 				w.charAt( 0 ) === "9" ? "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.', instead got: '99 bottles of beer on the wall, 99 bottles of beer.\\nTake one down and pass it around, 98 bottles of beer on the wall.\\n98 bottles of beer on the wall, 98 bottles of beer.\\nTake one down and pass it around, 97 bottles of beer on the wall.\\n97 bottles of beer on the wall, 97 bottles of beer.\\nTake one down and pass it around, 96 bottles of beer on the wall.\\n96 bottles of beer on the wall, 96 bottles of beer.\\nTake one down and pass it around, 95 bottles of beer on the wall.\\n95 bottles of beer on the wall, 95 bottles of beer.\\nTake one down and pass it around, 94 bottles of beer on the wall.\\n94 bottles of beer on the wall, 94 bottles of beer.\\nTake one down and pass it around, 93 bottles of beer on the wall.\\n93 bottles of beer on the wall, 93 bottles of beer.\\nTake one down and pass it around, 92 bottles of beer on the wall.\\n92 bottles of beer on the wall, 92 bottles of beer.\\nTake one down and pass it around, 91 bottles of beer on the wall.\\n91 bottles of beer on the wall, 91 bottles of beer.\\nTake one down and pass it around, 90 bottles of beer on the wall.\\n90 bottles of beer on the wall, 90 bottles of beer.\\nTake one down and pass it around, 89 bottles of beer on the wall.\\n89 bottles of beer on the wall, 89 bottles of beer.\\nTake one down and pass it around, 88 bottles of beer on the wall.\\n88 bottles of beer on the wall, 88 bottles of beer.\\nTake one down and pass it around, 87 bottles of beer on the wall.\\n87 bottles of beer on the wall, 87 bottles of beer.\\nTake one down and pass it around, 86 bottles of beer on the wall.\\n86 bottles of beer on the wall, 86 bottles of beer.\\nTake one down and pass it around, 85 bottles of beer on the wall.\\n85 bottles of beer on the wall, 85 bottles of beer.\\nTake one down and pass it around, 84 bottles of beer on the wall.\\n84 bottles of beer on the wall, 84 bottles of beer.\\nTake one down and pass it around, 83 bottles of beer on the wall.\\n83 bottles of beer on the wall, 83 bottles of beer.\\nTake one down and pass it around, 82 bottles of beer on the wall.\\n82 bottles of beer on the wall, 82 bottles of beer.\\nTake one down and pass it around, 81 bottles of beer on the wall.\\n81 bottles of beer on the wall, 81 bottles of beer.\\nTake one down and pass it around, 80 bottles of beer on the wall.\\n80 bottles of beer on the wall, 80 bottles of beer.\\nTake one down and pass it around, 79 bottles of beer on the wall.\\n79 bottles of beer on the wall, 79 bottles of beer.\\nTake one down and pass it around, 78 bottles of beer on the wall.\\n78 bottles of beer on the wall, 78 bottles of beer.\\nTake one down and pass it around, 77 bottles of beer on the wall.\\n77 bottles of beer on the wall, 77 bottles of beer.\\nTake one down and pass it around, 76 bottles of beer on the wall.\\n76 bottles of beer on the wall, 76 bottles of beer.\\nTake one down and pass it around, 75 bottles of beer on the wall.\\n75 bottles of beer on the wall, 75 bottles of beer.\\nTake one down and pass it around, 74 bottles of beer on the wall.\\n74 bottles of beer on the wall, 74 bottles of beer.\\nTake one down and pass it around, 73 bottles of beer on the wall.\\n73 bottles of beer on the wall, 73 bottles of beer.\\nTake one down and pass it around, 72 bottles of beer on the wall.\\n72 bottles of beer on the wall, 72 bottles of beer.\\nTake one down and pass it around, 71 bottles of beer on the wall.\\n71 bottles of beer on the wall, 71 bottles of beer.\\nTake one down and pass it around, 70 bottles of beer on the wall.\\n70 bottles of beer on the wall, 70 bottles of beer.\\nTake one down and pass it around, 69 bottles of beer on the wall.\\n69 bottles of beer on the wall, 69 bottles of beer.\\nTake one down and pass it around, 68 bottles of beer on the wall.\\n68 bottles of beer on the wall, 68 bottles of beer.\\nTake one down and pass it around, 67 bottles of beer on the wall.\\n67 bottles of beer on the wall, 67 bottles of beer.\\nTake one down and pass it around, 66 bottles of beer on the wall.\\n66 bottles of beer on the wall, 66 bottles of beer.\\nTake one down and pass it around, 65 bottles of beer on the wall.\\n65 bottles of beer on the wall, 65 bottles of beer.\\nTake one down and pass it around, 64 bottles of beer on the wall.\\n64 bottles of beer on the wall, 64 bottles of beer.\\nTake one down and pass it around, 63 bottles of beer on the wall.\\n63 bottles of beer on the wall, 63 bottles of beer.\\nTake one down and pass it around, 62 bottles of beer on the wall.\\n62 bottles of beer on the wall, 62 bottles of beer.\\nTake one down and pass it around, 61 bottles of beer on the wall.\\n61 bottles of beer on the wall, 61 bottles of beer.\\nTake one down and pass it around, 60 bottles of beer on the wall.\\n60 bottles of beer on the wall, 60 bottles of beer.\\nTake one down and pass it around, 59 bottles of beer on the wall.\\n59 bottles of beer on the wall, 59 bottles of beer.\\nTake one down and pass it around, 58 bottles of beer on the wall.\\n58 bottles of beer on the wall, 58 bottles of beer.\\nTake one down and pass it around, 57 bottles of beer on the wall.\\n57 bottles of beer on the wall, 57 bottles of beer.\\nTake one down and pass it around, 56 bottles of beer on the wall.\\n56 bottles of beer on the wall, 56 bottles of beer.\\nTake one down and pass it around, 55 bottles of beer on the wall.\\n55 bottles of beer on the wall, 55 bottles of beer.\\nTake one down and pass it around, 54 bottles of beer on the wall.\\n54 bottles of beer on the wall, 54 bottles of beer.\\nTake one down and pass it around, 53 bottles of beer on the wall.\\n53 bottles of beer on the wall, 53 bottles of beer.\\nTake one down and pass it around, 52 bottles of beer on the wall.\\n52 bottles of beer on the wall, 52 bottles of beer.\\nTake one down and pass it around, 51 bottles of beer on the wall.\\n51 bottles of beer on the wall, 51 bottles of beer.\\nTake one down and pass it around, 50 bottles of beer on the wall.\\n50 bottles of beer on the wall, 50 bottles of beer.\\nTake one down and pass it around, 49 bottles of beer on the wall.\\n49 bottles of beer on the wall, 49 bottles of beer.\\nTake one down and pass it around, 48 bottles of beer on the wall.\\n48 bottles of beer on the wall, 48 bottles of beer.\\nTake one down and pass it around, 47 bottles of beer on the wall.\\n47 bottles of beer on the wall, 47 bottles of beer.\\nTake one down and pass it around, 46 bottles of beer on the wall.\\n46 bottles of beer on the wall, 46 bottles of beer.\\nTake one down and pass it around, 45 bottles of beer on the wall.\\n45 bottles of beer on the wall, 45 bottles of beer.\\nTake one down and pass it around, 44 bottles of beer on the wall.\\n44 bottles of beer on the wall, 44 bottles of beer.\\nTake one down and pass it around, 43 bottles of beer on the wall.\\n43 bottles of beer on the wall, 43 bottles of beer.\\nTake one down and pass it around, 42 bottles of beer on the wall.\\n42 bottles of beer on the wall, 42 bottles of beer.\\nTake one down and pass it around, 41 bottles of beer on the wall.\\n41 bottles of beer on the wall, 41 bottles of beer.\\nTake one down and pass it around, 40 bottles of beer on the wall.\\n40 bottles of beer on the wall, 40 bottles of beer.\\nTake one down and pass it around, 39 bottles of beer on the wall.\\n39 bottles of beer on the wall, 39 bottles of beer.\\nTake one down and pass it around, 38 bottles of beer on the wall.\\n38 bottles of beer on the wall, 38 bottles of beer.\\nTake one down and pass it around, 37 bottles of beer on the wall.\\n37 bottles of beer on the wall, 37 bottles of beer.\\nTake one down and pass it around, 36 bottles of beer on the wall.\\n36 bottles of beer on the wall, 36 bottles of beer.\\nTake one down and pass it around, 35 bottles of beer on the wall.\\n35 bottles of beer on the wall, 35 bottles of beer.\\nTake one down and pass it around, 34 bottles of beer on the wall.\\n34 bottles of beer on the wall, 34 bottles of beer.\\nTake one down and pass it around, 33 bottles of beer on the wall.\\n33 bottles of beer on the wall, 33 bottles of beer.\\nTake one down and pass it around, 32 bottles of beer on the wall.\\n32 bottles of beer on the wall, 32 bottles of beer.\\nTake one down and pass it around, 31 bottles of beer on the wall.\\n31 bottles of beer on the wall, 31 bottles of beer.\\nTake one down and pass it around, 30 bottles of beer on the wall.\\n30 bottles of beer on the wall, 30 bottles of beer.\\nTake one down and pass it around, 29 bottles of beer on the wall.\\n29 bottles of beer on the wall, 29 bottles of beer.\\nTake one down and pass it around, 28 bottles of beer on the wall.\\n28 bottles of beer on the wall, 28 bottles of beer.\\nTake one down and pass it around, 27 bottles of beer on the wall.\\n27 bottles of beer on the wall, 27 bottles of beer.\\nTake one down and pass it around, 26 bottles of beer on the wall.\\n26 bottles of beer on the wall, 26 bottles of beer.\\nTake one down and pass it around, 25 bottles of beer on the wall.\\n25 bottles of beer on the wall, 25 bottles of beer.\\nTake one down and pass it around, 24 bottles of beer on the wall.\\n24 bottles of beer on the wall, 24 bottles of beer.\\nTake one down and pass it around, 23 bottles of beer on the wall.\\n23 bottles of beer on the wall, 23 bottles of beer.\\nTake one down and pass it around, 22 bottles of beer on the wall.\\n22 bottles of beer on the wall, 22 bottles of beer.\\nTake one down and pass it around, 21 bottles of beer on the wall.\\n21 bottles of beer on the wall, 21 bottles of beer.\\nTake one down and pass it around, 20 bottles of beer on the wall.\\n20 bottles of beer on the wall, 20 bottles of beer.\\nTake one down and pass it around, 19 bottles of beer on the wall.\\n19 bottles of beer on the wall, 19 bottles of beer.\\nTake one down and pass it around, 18 bottles of beer on the wall.\\n18 bottles of beer on the wall, 18 bottles of beer.\\nTake one down and pass it around, 17 bottles of beer on the wall.\\n17 bottles of beer on the wall, 17 bottles of beer.\\nTake one down and pass it around, 16 bottles of beer on the wall.\\n16 bottles of beer on the wall, 16 bottles of beer.\\nTake one down and pass it around, 15 bottles of beer on the wall.\\n15 bottles of beer on the wall, 15 bottles of beer.\\nTake one down and pass it around, 14 bottles of beer on the wall.\\n14 bottles of beer on the wall, 14 bottles of beer.\\nTake one down and pass it around, 13 bottles of beer on the wall.\\n13 bottles of beer on the wall, 13 bottles of beer.\\nTake one down and pass it around, 12 bottles of beer on the wall.\\n12 bottles of beer on the wall, 12 bottles of beer.\\nTake one down and pass it around, 11 bottles of beer on the wall.\\n11 bottles of beer on the wall, 11 bottles of beer.\\nTake one down and pass it around, 10 bottles of beer on the wall.\\n10 bottles of beer on the wall, 10 bottles of beer.\\nTake one down and pass it around, 9 bottles of beer on the wall.\\n9 bottles of beer on the wall, 9 bottles of beer.\\nTake one down and pass it around, 8 bottles of beer on the wall.\\n8 bottles of beer on the wall, 8 bottles of beer.\\nTake one down and pass it around, 7 bottles of beer on the wall.\\n7 bottles of beer on the wall, 7 bottles of beer.\\nTake one down and pass it around, 6 bottles of beer on the wall.\\n6 bottles of beer on the wall, 6 bottles of beer.\\nTake one down and pass it around, 5 bottles of beer on the wall.\\n5 bottles of beer on the wall, 5 bottles of beer.\\nTake one down and pass it around, 4 bottles of beer on the wall.\\n4 bottles of beer on the wall, 4 bottles of beer.\\nTake one down and pass it around, 3 bottles of beer on the wall.\\n3 bottles of beer on the wall, 3 bottles of beer.\\nTake one down and pass it around, 2 bottles of beer on the wall.\\n2 bottles of beer on the wall, 2 bottles of beer.\\nTake one down and pass it around, 1 bottle of beer on the wall.\\n1 bottle of beer on the wall, 1 bottle of beer.\\nTake one down and pass it around, no more bottles of beer on the wall.\\nNo more bottles of beer on the wall, no more bottles of beer.\\nGo to the store and buy some more, 99 bottles of beer on the wall." :
// 					anything
// 	).join( '' )
// }

//8kyu interpreters: HQ9+
// function HQ9(code) {
// 	switch (code) {
// 		case 'H': return 'Hello World!';
// 		case 'Q': return code;
// 		case '9': return beer(99);
// 		default: return undefined;
// 	}
// }
//
// function beer(count) {
// 	if (count === 2) {
// 		return '2 bottles of beer on the wall, 2 bottles of beer.\n' +
// 			'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
// 			'1 bottle of beer on the wall, 1 bottle of beer.\n' +
// 			'Take one down and pass it around, no more bottles of beer on the wall.\n' +
// 			'No more bottles of beer on the wall, no more bottles of beer.\n' +
// 			'Go to the store and buy some more, 99 bottles of beer on the wall.';
// 	} else {
// 		return `${count} bottles of beer on the wall, ${count} bottles of beer.\n` +
// 			`Take one down and pass it around, ${count - 1} bottles of beer on the wall.\n` +
// 			beer(count - 1);
// 	}
// }
//
// console.log( HQ9( "9" ) ) // All song long
// console.log( HQ9( "H" ) ) // "H"
// console.log( HQ9( "Q" ) ) // "Q"

// 8 kyu To square(root) or not to square(root)
// function squareOrSquareRoot(array) {
// 	return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);
// }
// console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])) // [2, 9, 3, 49, 4, 1]

//7 kyu Complementary DNA
// function DNAStrand(dna){
// 	//your code here
// 	return dna.split( '' ).map(s =>
// 	s==='A' ? s = 'T' :
// 	s==='T' ? s = 'A' :
// 	s==='C' ? s = 'G' :
// 	s==='G' ? s = 'C' :
// 	undefined).join('')
// }
//
// console.log(DNAStrand("ATTGC")) // TAACG

//7 kyu Credit Card Mask
// return masked string
// function maskify( cc ) {
// 	const symbol = '#';
// 	if (cc.length < 4) {
// 		return cc
// 	} else {
// 		return symbol.repeat(cc.length-4) + cc.slice(-4)
// 	}
// }
//
// console.log( maskify( '4556364607935616' ) ) // ############5616
// console.log( maskify( '1111' ) ) // 1111

// function caseInSwitch(val) {
// 	let answer = "";
// 	// Only change code below this line
// 	switch (val) {
// 		case 1: answer = 'alpha';
// 			break;
// 		case 2: answer = 'beta';
// 			break;
// 		case 3: answer = 'gamma';
// 			break;
// 		case 4: answer = 'delta';
// 			break;
// 	}
// 	// Only change code above this line
// 	return answer;
// }
//
// console.log(caseInSwitch(4));

//7 kyu Sum of two lowest positive integers
// function sumTwoSmallestNumbers(numbers) {
// 	//Code here
// 	const arr = numbers.sort(function ( a, b){
// 		return a-b
// 	});
// 	return arr[0]+arr[1];
// }
//
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) //13
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) //6
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) //10

//7 kyu Beginner Series #3 Sum of Numbers
// function getSum( a, b )
// //Good luck!
// {
// 	if (a === b) {
// 		return a
// 	} else if ((a - b === 1) || (a - b === -1)) {
// 		return a + b
// 	} else {
// 		const arr = [];
// 		if (a < b) {
// 			for (let i = a; i <= b; i++) {
// 				arr.push( i )
// 			}
// 			return arr.reduce( function ( a, b ) {
// 				return a + b
// 			} )
// 		} else {
// 			for (let i = b; i <= a; i++) {
// 				arr.push( i )
// 			}
// 			return arr.reduce( function ( a, b ) {
// 				return a + b
// 			} )
// 		}
// 	}
// }
//
// console.log( getSum( 0, 5 ) )
// console.log( getSum( 3, -1 ) )

//7 kyu Two to One
// function longest(s1, s2) {
// 	// your code
// 	// const arr1 = [];
// 	// let sym = (s1+s2).split('').sort()
// 	let sym = Array.from(new Set((s1+s2).split('').sort())).join('')
// 	// arr1.push(symbol[0])
// 	// for (let i=0; i<symbol.length;i++){
// 	// 	symbol = symbol[i]
// 	// 	if (symbol[i+1] !== symbol[i]) {
// 	// 		arr1.push(symbol[i+1])
// 	// 	}
//
// 	// }
// // return arr1
// return sym
// }

//7 kyu Two to One
// function longest(s1, s2) {
// 	return Array.from(new Set((s1+s2).split('').sort())).join('')
// }
//
// console.log(longest('xyaabbbccccdefww','xxxxyyyyabklmopq'))

//================================================================================
// const contacts = [
// 	{
// 		firstName: "Akira",
// 		lastName: "Laine",
// 		number: "0543236543",
// 		likes: ["Pizza", "Coding", "Brownie Points"],
// 	},
// 	{
// 		firstName: "Harry",
// 		lastName: "Potter",
// 		number: "0994372684",
// 		likes: ["Hogwarts", "Magic", "Hagrid"],
// 	},
// 	{
// 		firstName: "Sherlock",
// 		lastName: "Holmes",
// 		number: "0487345643",
// 		likes: ["Intriguing Cases", "Violin"],
// 	},
// 	{
// 		firstName: "Kristian",
// 		lastName: "Vos",
// 		number: "unknown",
// 		likes: ["JavaScript", "Gaming", "Foxes"],
// 	},
// ];

// function lookUpProfile( name, prop ) {
// 	for (let i = 0; i < contacts.length; i++) {
// 		if (contacts[ i ].firstName === name) {
// 			if (contacts[ i ].hasOwnProperty( prop )) {
// 				return contacts[ i ][ prop ]
// 			} else {
// 				return 'No such property'
// 			}
// 		}
// 	}
// 	return 'No such contact'
// }
//
// console.log( lookUpProfile( "Akira", "likes" ) );
//==========================================================

//7 kyu Friend or Foe?
// function friend(friends){
// 	// //your code here
// 	// let arr = [];
// 	// for (let i=0; i<friends.length; i++) {
// 	// 	if (friends[i].length === 4) {
// 	// 		arr.push(friends[i])
// 	// 	}
// 	// }
// 	// return arr
//
// 	return friends.filter(f => f.length === 5)
// }
//
// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))

//==========================================================
//7 kyu Categorize New Member

function openOrSenior(data){
	let result = [];
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if (j[0] < 55 || j[1]< 7) {
				result.push('Open')
			} else {
				result.push('Senior')
			}
		}
	}
	return result
}

let array = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
console.log(array[2][0])