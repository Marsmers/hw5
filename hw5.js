// let answers = [
//     confirm("Ви погоджуєтеся з першим запитанням?"),
//     confirm("Ви погоджуєтеся з другим запитанням?"),
//     confirm("Ви погоджуєтеся з третім запитанням?"),
//   ];

// let answers1 = [];
// answers[0] = prompt("Яке ваше ім'я?");
// answers[1] = prompt("Скільки вам років?");
// answers[2] = prompt("Який ваш улюблений кольор?");


// const arr = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
// const index = prompt ("Вкажіть номер індексу(0-9)")

// if (index >= 0 && index < arr.length){
//     console.log (arr[index])
// } else {
//     console.log ("Такий індекс відсутній")
// }



// const arr = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
// const index = prompt ("Вкажіть номер індексу(0-9)")
// const index2 = prompt ("Вкажіть значення індексу")

// if (index >= 0 && index < arr.length){
//     console.log (arr[index]=index2)
// }



// const arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16]
// ];

//Це до верхнього завдання  
//   const newTable = arr.slice(1).map(row => row.slice(1));
  

// let answers = prompt("Вкажіть декілька слів")
// let answers2 = prompt ("Вкажіть потрібне слово з попередньо написаних вами")

// let answers3 =answers.split(" ")
// let index = answers3.indexOf(answers2)

// console.log(index)
// if (index === -1) {
//     console.log("Слово не знайдено");
// } else {
//     console.log(`Слово "${answers}" знаходиться під номером "${index + 1}"`);
// }


// const arr =[]
// arr.push(prompt("Вкажіть одне слово"))
// arr.push(prompt("Вкажіть одне слово"))
// arr.push(prompt("Вкажіть одне слово"))
// arr.push(prompt("Вкажіть одне слово"))
// arr.push(prompt("Вкажіть одне слово"))

// const arr2 =[]
// arr2.push(arr.pop())
// arr2.push(arr.pop())
// arr2.push(arr.pop())
// arr2.push(arr.pop())
// arr2.push(arr.pop())

// const arr3 = []
// arr3.unshift(arr2.shift())
// arr3.unshift(arr2.shift())
// arr3.unshift(arr2.shift())
// arr3.unshift(arr2.shift())
// arr3.unshift(arr2.shift())


// const arrCopy =[...arr]

// const arrCopy = JSON.parse(JSON.stringify(arr));

// const arr = [1, 2, 3]; 
// const arr2 = arr; 
// arr === arr2


// let arr = prompt('Введіть речення'); 
// console.log(arr[0]); 
// console.log(arr[4]); 
// console.log(arr[8]);


// const inputString = prompt('Введіть рядок:');
// const [, ...letters] = inputString;

// const secondLetter = letters[1] || '!';
// const fourthLetter = letters[3] || '!';
// const fifthLetter = letters[4] || '!';

// console.log(secondLetter, fourthLetter, fifthLetter);




// const arr = ["John", "Paul", "George", "Ringo"];
// for (const name of arr) {
//     alert(name)
// }




// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let str = "<select>"
// for (const currency of currencies){
//   str += `<option value="${currency}">${currency}</option>`
// }
// str += "</select>"
// document.write(str)


// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (const name of names){
//     str += `<td>${name}</td>`
// }
// document.write(str)


// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (const name of names){
//     str += "<tr>"
//     str += `<td>${name}</td>`
//     str += "</tr>"
// }
// str+= "</table>"
// document.write(str)




// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let   str = "<table>"
// for (const currency of currencies){ //цикл створює рядки
//      // Одна ітерація циклу створює ОДНИЙ РЯДОК
//     console.log(currency)
//     for (const letter of currency){ //цикл створює осередки в одному рядку
//          //одна ітерація циклу створює ОДИН осередок
//         console.log(letter)
//     }
//     str += `<tr>`
//     str += `<td>${currency[0]}`
//     str += `<td>${currency[1]}`
//     str += `<td>${currency[2]}`
//     str += `</tr>`
// }
// str+= "</table>"
// document.write(str)



// const calculator = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
//   ];
  
//   // Define background colors for even and odd rows
//   const evenRowBgColor = "#f0f0f0";
//   const oddRowBgColor = "#ffffff";
  
//   // Start table
//   document.write("<table>");
  
//   // Loop through each row
//   for (let i = 0; i < calculator.length; i++) {
//     // Determine row background color
//     const bgColor = i % 2 === 0 ? evenRowBgColor : oddRowBgColor;
    
//     // Start table row with the background color
//     document.write(`<tr style="background-color:${bgColor}">`);
    
//     // Loop through each column in the row
//     for (let j = 0; j < calculator[i].length; j++) {
//       // Output the product of row and column as a table cell
//       document.write(`<td>${calculator[i][j]}</td>`);
//     }
    
//     // End table row
//     document.write("</tr>");
//   }
  
//   // End table
//   document.write("</table>");





// const input = prompt("Введіть рядок:");
// const words = input.split(" ");
// const capitalizedWords = words.map(word => capitalize(word));
// const output = capitalizedWords.join(" ");
// console.log(output);
// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }



// const notAllowedWords = ['bad', 'forbidden', 'wrong'];
// function isWordAllowed(word) {
//   return !notAllowedWords.includes(word);
// }
// const userInput = prompt("Введіть рядок:");

// const words = userInput.split(" ");

// const filteredWords = words.filter(isWordAllowed);

// const result = filteredWords.join(" ");
// console.log(result);


// function censorWords(sentence, forbiddenWords) {
//     const words = sentence.split(" ");
//     const censoredWords = words.map((word) =>
//       forbiddenWords.includes(word) ? "BEEP" : word
//     );
//     return censoredWords.join(" ");
//   }
  
//   const sentence = prompt("Вкажіть ваші слова");
//   const forbiddenWords = ["заборонене", "слово"];
//   const censoredSentence = censorWords(sentence, forbiddenWords);
//   console.log(censoredSentence);