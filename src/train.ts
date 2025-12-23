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

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;
//   for (let item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }
//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); // Output: 45

// ============================================================

// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   let result: [string, any][] = [];
//   for (let key in obj) {
//     result.push([key, obj[key]]);
//   }
//   return result;
// }
// console.log(objectToArray({ a: 10, b: 20 })); // Output: [['a', 10], ['b', 20]]

// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
// Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
// propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.

// function hasProperty(obj: object, key: string): boolean {
//     return key in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false

// ============================================================================

// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// function calculate(str: string): number {
//   let parts = str.split(" + ");
//   let sum = 0;
//   for (let part of parts) {
//     sum += parseInt(part);
//   }
//   return sum;
// }

// console.log(calculate("1 + 3")); // Output: 4

// ============================================================================

// TASK-S:

// Shunday function yozing,
// u numberlardan tashkil topgan array qabul qilsin
// va osha numberlar orasidagi
// tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(arr: number[]): number {
//     const n = arr.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = arr.reduce((acc, num) => acc + num, 0);
//     return expectedSum - actualSum;
// }

// console.log(missingNumber([3, 0, 1])); // Output: 2

// ==========================================================

// TASK T

// Shunday function tuzing,
// u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

// function mergeSortedArrays(arr1: number[], arr2: number[] ): number[] {
//   const combinedArray = [...arr1, ...arr2];

//   combinedArray.sort((a, b) => a - b);

//   return combinedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // Output: [0, 3, 4, 4, 6, 30, 31]

// ============================================================

// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud.
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

// function sumOdds(num: number): number {
//   return Math.floor(num / 2);
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));

// ========================================================

// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

// TASK V

// function countChars(str: string): { [key: string]: number } {
//   const charCount: { [key: string]: number } = {};
//   for (let char of str) {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
//   return charCount;
// }

// console.log(countChars("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

// ======================================================

// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

// function chunkArray(arr: any[], chunkSize: number): any[][] {
//   const result: any[][] = [];

//   for (let i = 0; i < arr.length; i += chunkSize) {
//     const chunk = arr.slice(i, i + chunkSize);
//     result.push(chunk);
//   }

//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// function countOccurrences(obj: any, key: string): number {
//   let count = 0;

//   for (let prop in obj) {
//     if (prop === key) {
//       count++;
//     }
//     if (typeof obj[prop] === "object" && obj[prop] !== null) {
//       count += countOccurrences(obj[prop], key);
//     }
//   }
//   return count;
// }

// console.log(countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model')); // 2

// ============================================================

// TASK Y

// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.

// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda.

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//     const set2 = new Set(arr2);

//     return arr1.filter(item => set2.has(item));
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

// function sumEvens(arr: number[]): number {
//     return arr.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0);
// }

// console.log(sumEvens([1, 2, 3])); // return 2
// console.log(sumEvens([1, 2, 3, 2])); // return 4

// TASK-ZB:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin

// MASALAN: randomBetween(30, 50) return 45

// function randomBetween(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // Tekshirish:
// console.log(randomBetween(30, 50));

// ================================================

// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 1.8) + 32;
// }

// console.log(celsiusToFahrenheit(0));  // Output: 32
// console.log(celsiusToFahrenheit(10)); // Output: 50

// ==============================================================

// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.

// TASK ZD

// function changeNumberInArray(
//   index: number,
//   arr: number[],
//   value: number
// ): number[] {
//   const newArr = [...arr];
//   newArr[index] = value;
//   return newArr;
// }

// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2)); // Output: [1, 2, 7, 2]

// ===========================================

// TASK-ZF:
// Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function capitalizeWords(str: string): string {
//   const words = str.split(" ");

//   const result = words.map((word) => {
//     if (word.length > 2) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     } else {
//       return word;
//     }
//   });

//   return result.join(" ");
// }

// console.log(capitalizeWords("name should be a string"));

// TASK-ZG:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

// TASK-ZG

// function convertToSnakeCase(str: string): string {
//     const lowerStr = str.toLowerCase();
//     return lowerStr.split(' ').join('_');
// }

// console.log(convertToSnakeCase('name should be a string'));

// =================================================

// TASK-ZH:

// Shunday function yozing, u berilgan array parametrni ichidagi
// eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin.
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

// function findDisappearedNumbers(arr: number[]): number[] {
//   const result: number[] = [];
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   const numSet = new Set(arr);

//   for (let i = min; i <= max; i++) {
//     if (!numSet.has(i)) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(findDisappearedNumbers([1, 3, 4, 7]));

// TASK ZI

// Shundan function yozing, bu function 3 soniydan so'ng
// "Hello World!" so'zini qaytarsin.

// MASALAN: delayHelloWorld("Hello World"); return "Hello World";

// TASK ZI

// function delayHelloWorld(message: string): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(message);
//     }, 3000);
//   });
// }

// delayHelloWorld("Hello World").then((data) => {
//   console.log(data);
// });

// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda.

function reduceNestedArray(arr: any[]): number {
    const flatArr = arr.flat(Infinity);
    return flatArr.reduce((acc: number, val: number) => acc + val, 0);
}

console.log(reduceNestedArray([1, [1, 2, [4]]])); // Output: 8