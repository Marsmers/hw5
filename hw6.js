// const dog = {
//     name: "Marsel",
//     age: "1 year",
//     weight: "2kg"
// }



// const keyName = prompt("Вкажіть ключ")
// const objName = prompt("Вкажіть значення об\ʼєкта")
// const obj = {
//     [keyName]:objName
// }


// const newObj = {...obj}
// const newKey = prompt("Вкажіть ще один ключ")
// const newName = prompt("Вкажіть нове значення")
// newObj[newKey] = newName




// const url = 'https://open.er-api.com/v6/latest/USD';
// fetch(url)
//    .then(res => res.json())
//    .then(data => {
//       const rates = data.rates;
//       const inputCurrency = prompt('Введіть вхідну валюту (наприклад, USD):').toUpperCase();
//       const outputCurrency = prompt('Введіть валюту, в яку відбувається конвертація (наприклад, EUR):').toUpperCase();
//       const amount = parseFloat(prompt('Введіть суму у вхідній валюті:'));

//       if (isNaN(amount)) {
//          console.log('Неправильний формат введеної суми');
//       } else if (!rates[inputCurrency]) {
//          console.log('Вхідна валюта не підтримується');
//       } else if (!rates[outputCurrency]) {
//          console.log('Валюта для конвертації не підтримується');
//       } else {
//          const result = (amount / rates[inputCurrency]) * rates[outputCurrency];
//          alert(`${amount} ${inputCurrency} = ${result.toFixed(2)} ${outputCurrency}`);
//       }
//    })
//    .catch(error => console.log(error));


// const url = 'https://open.er-api.com/v6/latest/USD';
// fetch(url)
//    .then(res => res.json())
//    .then(data => {
//       const rates = data.rates;
//       const currencySelect = document.createElement('select');

//       for (const currency in rates) {
//          const option = document.createElement('option');
//          option.text = currency;
//          currencySelect.add(option);
//       }

//       document.body.appendChild(currencySelect);
//    })
//    .catch(error => console.log(error));


// const car = {
//    "Name": "chevrolet chevelle malibu",
//    "Cylinders": 8,
//    "Displacement": 307,
//    "Horsepower": 130,
//    "Weight_in_lbs": 3504,
//    "Origin": "USA",
//    "in_production": false
// };
// const form = document.createElement("form");
// for (const key in car) {
//    const label = document.createElement("label");
//    label.textContent = key;
//    const input = document.createElement("input");
//    input.type = typeof car[key] === "boolean" ? "checkbox" : "text";
//    input.value = car[key];
//    input.name = key;
//    form.appendChild(label);
//    form.appendChild(input);
//    form.appendChild(document.createElement("br"));
// }
// document.body.appendChild(form);


// const columns = [];
// persons.forEach(person => {
//    Object.keys(person).forEach(key => {
//       if (!columns.includes(key)) {
//          columns.push(key);
//       }
//    });
// });
// // Створити заголовок таблиці
// const table = document.createElement('table');
// const headerRow = document.createElement('tr');
// columns.forEach(column => {
//    const headerCell = document.createElement('th');
//    headerCell.textContent = column;
//    headerRow.appendChild(headerCell);
// });
// table.appendChild(headerRow);
// // Відобразити дані у таблиці
// persons.forEach(person => {
//    const dataRow = document.createElement('tr');
//    columns.forEach(column => {
//       const dataCell = document.createElement('td');
//       dataCell.textContent = person[column] || '-';
//       dataRow.appendChild(dataCell);
//    });
//    table.appendChild(dataRow);
// });
// // Додати таблицю на сторінку
// document.body.appendChild(table);


// const currencies = ["USD", "EUR", "UAH", "PLN"];
// const rates = [
//    [1, 1.03, 36.82, 4.94],
//    [0.97, 1, 35.80, 4.81],
//    [0.027, 0.028, 1, 0.13],
//    [0.2, 0.21, 7.45, 1]
// ];
// const table = document.createElement("table");
// const thead = document.createElement("thead");
// const trHead = document.createElement("tr");
// trHead.appendChild(document.createElement("th"));
// currencies.forEach((currency) => {
//    const th = document.createElement("th");
//    th.textContent = currency;
//    trHead.appendChild(th);
// });
// thead.appendChild(trHead);
// table.appendChild(thead);
// const tbody = document.createElement("tbody");
// currencies.forEach((currency, index) => {
//    const trBody = document.createElement("tr");
//    const th = document.createElement("th");
//    th.textContent = currency;
//    trBody.appendChild(th);
//    rates[index].forEach((rate) => {
//       const td = document.createElement("td");
//       td.textContent = rate.toFixed(2);
//       trBody.appendChild(td);
//    });
//    tbody.appendChild(trBody);
// });
// table.appendChild(tbody);
// document.body.appendChild(table);