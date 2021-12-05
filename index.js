// console.log("2+2" * 3);

// function abc(a = 1, b = 2) {
//     console.log(a + b);
// }

// abc(8);

// const array = [0, 5, 7, 1, 2, 2, 3, 4, 5, 5];
// let count
// array.sort((a, b) => a - b);
// for (i = 0; i < array.length; i++) {
//     if (array[i] == array[i + 1]) {
//         count++;
//     }
//     if (count != 0) {
//         array.splice(i, count)
//     }
//     count = 0;
// }
// console.log(array);

// function getData(arr, num) {
//     let count = 0;
//     let sum = 0;

//     for (i = 0; i < arr.length; i++) {
//         for (j = i; j < arr.length; j++) {
//             sum += arr[j]

//             if (sum / (j - i + 1) == num) {
//                 count++;
//                 console.log(sum,  (j - i + 1));
//             }
//         }
//         sum = 0;
//     }
//     console.log(count);
// }
// getData([1, 3, 2, 2], 2);

// let str = "AAABBD";
// list = []
// count = 1

// for (i = 0; i < str.length; i++) {
//     if (str[i] == str[i + 1]) {
//         count++;        
//     } 
//     else {
//         var value = `${str[i]}${count == 1? '': count}`
//         list = [...list, value]
//         count = 1
//         // strNew += str[i] + (count + 1);
//     }


//     // if (count != 0) strNew += str[i] + (count + 1)
//     // else strNew += str[i];
// }
// console.log(list.join(''));


// const title = [
//     {
//         id:1,
//         name:'Asadaaa',
//         status:'Students',
//     }
// ];
// a =0;
// s = 0;
// for (let i = 0; i < title.length; i++) {
// NewNAme = title[0].name;
// NewStatus = title[0].status;
// for (let j = 0; j < NewNAme.length; j++) {
//     (NewNAme[j] === 'a' || NewNAme[j] === 'A') && a++;
// }
// for (let k = 0; k < NewStatus.length; k++) {
//     (NewStatus[k] === 's' || NewStatus[k] === 'S') && s++;
// }
// }
// console.log(a,'=a');
// console.log(s,'=s');

// 1
const title = 'WebBrain Academy Number One'
const res = title.split('').filter((value) => (value === value.toUpperCase() && value != ' ') );
console.log(res.join(''));

// 2
const array = [4, 2, 6, 16, 27, 81];
console.log(array.filter((value) => Math.sqrt(value) % 1 ===0 ));

// 3
//2-xonali uchun
const numbers = [4, 2, 6, 16, 27, 81, 3456];
console.log(
    numbers.map((value) => {
        if(`${value}`.length ===1) {
            return value;
        } else {
            let temp = `${value}`;
            temp = `${temp[1]}${temp[0]}`;
            return parseInt(temp)
        }
    })
);
//universal yechim
console.log(numbers.map((value) => parseInt(`${value}`.split('').reverse().join(''))));



