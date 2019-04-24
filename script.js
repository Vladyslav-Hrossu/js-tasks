// var obj = {
//     className: 'menu open menu menu'
// };
// function removeClass(obj, cls) {
//     var str = obj.className;
//     var arr = str.split(' ');
//     while (arr.indexOf(cls) !== -1) {
//         arr.splice(arr.indexOf(cls), 1);
//     }
//     newStr = arr.join(' ');
//     obj.className = newStr;
// }
// removeClass(obj, 'menu');
// console.log(obj);

// Task 2
// var arr = ['HTML','JavaScript','CSS'];
// var arrSorted = arr.concat();
// arrSorted.sort();
// console.log(arrSorted);
// console.log(arr);

// Task 3
// var arr = [1,2,3,4,5,6,7,8,9,10];
// arr.sort(function(a,b) {
//     if (Math.random()>0.5) return -1;
//     if (Math.random()<0.5) return 1;
// });
// console.log(arr);

//task 4
// var vasya = { name:'Вася', age: 23 };
// var masha = { name:'Маша', age: 18 };
// var vovochka = { name:'Вовочка', age: 6 };

// var people = [ vasya, masha, vovochka];
// people.sort(function(a,b) {
//    return a.age - b.age;
// });
// console.log(people);

//rask 5
// function isPal(str){
//     str = str.toLowerCase();
//     var arr = str.split('').reverse().join('');
//     return str === arr?true:false;
// }

// console.log(isPal('12231'));
// console.log(isPal('1221'));
// console.log(isPal('1223221'));
// console.log(isPal('Anna'));


//task 6

// var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

// function unique(arr){
//     var obj = {};

//     for (var i = 0; i < arr.length; i++) {
//         var str = arr[i];
//         obj[str] = true;
//     }

//     return Object.keys(obj);
// }
// alert( unique(strings) );

//rask 7
// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// function aClean(arr){
//     var obj = {};
    
//     for(var i = 0; i<arr.length; i++){
//         var sort = arr[i].toLowerCase().split('').sort().join('');

//         obj[sort] = arr[i]
//     }

//     var result = [];
//     for(var key in obj) result.push(obj[key]);
//     return result;

// }

// function sum(a){
//     return function(b){
//         return a+b;
//     }
// }

// alert(sum(2)(-1));

function makeBuffer(){
    var currentBuffer = '';
        return function(value){
            if (arguments.length == 0){
                return currentBuffer;
            }
            return currentBuffer += value;
    }
}

// var buffer = makeBuffer();
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');

// alert( buffer() );
var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

alert( buffer() ); // '010'

