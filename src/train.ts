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

/*
 Cookies:
 request join => each request will have the created cookie
 self destroy after the session expired

*/

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

// function findLongestWord(str: string): string {
//   let words = str.split(" ");
//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("I came from Uzbekistan!")); // Output: "Uzbekistan!"

// =============================================================

// TASK K:

// Shunday function yozing, u string qabul qilsin va
// string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(str: string): number {
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("string")); // Output: 1

// TASK L:

// Shunday function yozing, u string qabul qilsin va
// string ichidagi hamma sozlarni chappasiga yozib va
// sozlar ketma-ketligini buzmasdan stringni qaytarsin.

// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(str: string): string {
//     let words = str.split(" ");
//     let reversedWords = words.map(word => word.split("").reverse().join(""));
//     return reversedWords.join(" ");
// }
// console.log(reverseSentence("we like coding!")); // Output: "ew ekil !gnidoc"

// =============================================================

// TASK M:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamni ozi
// va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib,
// hosil bolgan objectlarni array ichida qaytarsin.

// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(arr: number[]): {number: number, square: number}[] {
//     return arr.map(num => ({ number: num, square: num * num }));
// }

// console.log(getSquareNumbers([1, 2, 3])); // Output: [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]

// ============================================================

// TASK N:

// Shunday function yozing, u string qabul qilsin
// va string palindrom yani togri oqilganda ham,
// orqasidan oqilganda ham bir hil oqiladigan
// soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(str: string): boolean {
//     let reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
// }

// console.log(palindromCheck("dad")); // Output: true
// console.log(palindromCheck("son")); // Output: false

// ============================================================

// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

function calculateSumOfNumbers(arr: any[]): number {
  let sum = 0;
  for (let item of arr) {
    if (typeof item === "number") {
      sum += item;
    }
  }
  return sum;
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); // Output: 45
