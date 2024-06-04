            // 1-masala


// let a = prompt("1-sonni kiriting") - 0
// let b = prompt("2-sonni kiriting") - 0

// function addNUmber(num1, num2){
//     return num1 + num2
// }
// const res = addNUmber( a, b)
// console.log(res);


            // 2-masala


// function sumArray(numbers){
//     let sum = 0;

//     for (let i = 0; i< numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }

// let myArray = [1,2,3,4,5,4]
// console.log(sumArray (myArray));



            // 3-masala

// function musbatSon(array){
//     let musbatArray = [];
//     for(let i = 0; i < array.length; i++){
//         if (array[i] > 0 ){
//             musbatArray.push(array[i]);
//         }
//     } 
//     return musbatArray
// }

// // misol uchun:

// let array = [-3, -2, -4, -5, 5, 6, 7, 8, -9];
// let res = musbatSon(array);
// console.log(res);



            // 4-masala


// let array = ["5", "6", "true", "false", "null"]

// function changeValue(arr1){
//     for (let i = 0; i < arr1.length; i++){
//         if(Number(arr1[i]) - 0){
//             arr1[i] = Number(arr1[i])
//         }
//         else{
//             arr1[i] = 0
//         }
//     }
//     return arr1
// }
// console.log(changeValue(array));




            // 6-masala


// function ortaArifmetik(){
//     if(arguments.length ===0){
//         return 0;
//     }
//     else{
//         let total = 0
//         for ( let i = 0; i < arguments.length; i++){
//             total += arguments[i];
//         }
//         let ortaArifmetik = total / arguments.length;
//         return ortaArifmetik;
//     }
// }

// console.log(ortaArifmetik(2,4,6,2,8));




            // 7-masala


// function changeValue(array) {
//         if (array.length === 0) {
//                return []; 
//         } else {
//             let modifiedArray = [];
//                     for (let i = 0; i < array.length; i++) {
//             if (array[i] % 2 === 0) {
//                             modifiedArray.push(array[i] + 1); 
//              } else {
//                      modifiedArray.push(array[i] - 1); 
//                 }
//                }
//                 return modifiedArray;
//             }
//  }          
//    console.log(changeValue([1, 2, 3, 4, 5]));



                // 8-masala

// function findCommonElements(array1, array2) {
//     let commonElements = [];

//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) {
//                 commonElements.push(array1[i]);
//                 break;
//             }
//         }
//     }

//     return commonElements;
// }


// let array1 = ["apple", "banana", "cherry", "date", "kiwi", "elderberry"];
// let array2 = ["fig", "grape", "apple", "honeydew", "cherry", "kiwi"];
// let result = findCommonElements(array1, array2);

// console.log("Ikkala array ichida bir xil bo'lgan elementlar: ", result);