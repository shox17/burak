/* Project 
- loging standarts
- Naming standarts
   function, method, variable => Camel case      goHome 
   class => Pacal case                           MemberService 
   folder,file => KEBAB case 
   css => SNAKE  case                 
  - Error handling 

*/

// cluster => database => collection=> document => dataSet 
// CRUD => Create, Read, Update, Delete
// Mongoose => we used mongoose because it works well with MongoDB and Nodejs
// MVC => Model View Controller

// G - Task

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

// function getHighestIndex(arr: number[]): number {
//     let max = Math.max(...arr);
//     return arr.indexOf(max);
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1

// H - Task

// shunday function tuzing, 
// u integerlardan iborat arrayni argument sifatida qabul qilib, 
// faqat positive qiymatlarni olib string holatda return qilsin

// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr: number[]): string {
//     let positiveArr = arr.filter(num => num > 0);
//     return positiveArr.join('');
// }

// console.log(getPositive([1, -4, 2])); // "12"

// H2 - TASK: 
// Shunday function tuzing, unga string argument pass bolsin. 
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(str: string): string {
    let digits: string = '';
    for (let char of str) {
        if(!isNaN(parseInt(char))) {
            digits += char;
        }  
    }
    return digits; 
}

console.log(getDigits("m14i1t")); // "141"
