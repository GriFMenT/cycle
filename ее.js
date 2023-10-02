// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }



// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }



// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }



// let xArray = [];

// for (let i = 0; i < 10; i++) {
//     xArray.push('x');
// }
// console.log(xArray);



// let numbersArray = [];

// for (let i = 1; i <= 10; i++) {
//     numbersArray.push(i);
// }
// console.log(numbersArray);



// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]; 
// }
// console.log("Сумма элементов массива:", sum);



// let numberst = [3, 8, 12, -2, 5, 9, 10, 4];
// let sumOfSquares = 0;

// for (let i = 0; i < numberst.length; i++) {
//     let square = numberst[i] ** 2; 
//     sumOfSquares += square;  
// }
// console.log("Сумма квадратов элементов массива:", sumOfSquares);



// let numberstt = [3, 8, 12, -2, 5, 9, 10, 4];
// let summ = 0; 

// for (let i = 0; i < numberstt.length; i++) {
//     summ += numberstt[i]; 
// }
// let average = sum / numberstt.length; 
// console.log("Среднее арифметическое элементов массива:", average);



// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i; 
//         }
//         return result;
//     }
// }
// let number = 5; 
// let fact = factorial(number);
// console.log("Факториал числа " + number + " равен " + fact);



// let numbersArrayz = [];
// for (let i = 10; i >= 1; i--) {
//     numbersArray.push(i);
// }
// console.log(numbersArrayz);



// let numbers = [3, -5, 8, -2, 7, -1, 10, -4];
// let sumOfPositives = 0; 

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         sumOfPositives += numbers[i]; 
//     }
// }
// console.log("Сумма положительных элементов массива:", sumOfPositives);



// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     let numStr = arr[i].toString(); 
//     let firstDigit = numStr.charAt(0); 
//     if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
//         console.log(arr[i]); 
//     }
// }



// let numberss = [10, 20, 30, 40, 50];
// numberss.reverse(); 
// console.log(numberss); 



// let numbersx = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbersx[i] + "<br>");
// }



// let numbersd = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//     console.log("<p>" + numbersd[i] + "</p>");
// }



// let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

// for (let i = 0; i < daysOfWeek.length; i++) {
//     if (i >= 5) {
//         document.write("<strong>" + daysOfWeek[i] + "</strong><br>");
//     } else {
//         console.log(daysOfWeek[i] + "<br>");
//     }
// }



// let daysOfWeeks = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// let day = new Date().getDay(); 

// for (let i = 0; i < daysOfWeek.length; i++) {
//     if (i === day) {
//         document.write("<em>" + daysOfWeek[i] + "</em><br>");
//     } else {
//         document.write(daysOfWeek[i] + "<br>");
//     }
// }



// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// };
// for (let employee in obj) {
//     if (obj.hasOwnProperty(employee)) {
//         obj[employee] *= 1.1; 
//     }
// }
// console.log(obj);



// let objz = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// };
// for (let employee in obj) {
//     if (obj.hasOwnProperty(employee) && obj[employee] <= 400) {
//         objz[employee] *= 1.1;
//     }
// }
// console.log(objz);



// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let newObj = {};

// for (let i = 0; i < arr1.length; i++) {
//     newObj[arr1[i]] = arr2[i];
// }
// console.log(newObj);



// let objx = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sumOfKeys = 0;
// let sumOfValues = 0;

// for (let key in objx) {
//     if (objx.hasOwnProperty(key)) {
//         sumOfKeys += parseInt(key);
//         sumOfValues += objx[key];
//     }
// }
// let result = sumOfKeys / sumOfValues;
// console.log(result);



// let objq = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let keysArray = Object.keys(objq);
// let valuesArray = Object.values(objq);
// console.log('Массив ключей:', keysArray);
// console.log('Массив значений:', valuesArray);



// let objw = {
//     1: 125,
//     2: 225,
//     3: 128,
//     4: 356,
//     5: 145,
//     6: 281,
//     7: 452,
// };

// let newArray = [];
// for (let key in objw) {
//     if (objw.hasOwnProperty(key)) {
//         let value = obw[key].toString(); 
//         if (value.charAt(0) === '1' || value.charAt(0) === '2') {
//             newArray.push(objw[key]); 
//         }
//     }
// }
// console.log(newArray);



// let arrr = ['a', 'b', 'c', 'd', 'e'];
// let newObjj = {};

// for (let i = 0; i < arrr.length; i++) {
//     newObjj[i + 1] = arrr[i];
// }
// console.log(newObjj);



let arrs = ['a', 'b', 'c', 'd', 'e'];
let newObjs = {};

for (let i = 0; i < arrs.length; i++) {
    newObjs[arrs[i]] = i + 1;
}
console.log(newObjs);