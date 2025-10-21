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

// function getDigits(str: string): string {
//     let digits: string = '';
//     for (let char of str) {
//         if(!isNaN(parseInt(char))) {
//             digits += char;
//         }
//     }
//     return digits;
// }

// console.log(getDigits("m14i1t")); // "141"

// ==============================================================

// TASK-I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4
// Yuqoridag misolda argument sifatida kiritilayotgan
// array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// function majorityElement(arr: number[]): number {
//     let countMap = new Map<number, number>();
//     let maxCount = 0;
//     let maxElement: number | null = null;

//     for (let num of arr) {
//         let count = (countMap.get(num) || 0) + 1;
//         countMap.set(num, count);

//         if (count > maxCount) {
//             maxCount = count;
//             maxElement = num;
//         }
//     }

//     return maxElement!;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // Output: 4

// TASK J:
// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.
// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"
// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

function findLongestWord(str: string): string {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("I came from Uzbekistan!")); // Output: "Uzbekistan!"
