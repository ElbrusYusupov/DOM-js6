// const clearLogBtn = document.querySelector("[data-action='clear']");

// const logList = document.querySelector('.log-list');

// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//     const markup =
//         `<div class="log-item">
//         <span class="chip">${keypressCounter}</span>
//         <ul>
//             <li><b>Event</b>: ${type}</li>
//             <li><b>Key</b>: ${key}</li>
//             <li><b>Code</b>: ${code}</li>
//         </ul>
//     </div>`;

//     logList.insertAdjacentHTML('afterbegin', markup);

//     if (type === 'keyup') {
//         incrementKeypressCounter();
//     }
// }
// function reset() {
//     keypressCounter = 1;
//     logList.innerHTML = '';

// }

// function incrementKeypressCounter() {
//     keypressCounter += 1;
// }


// Свойство classList_________________________________________________________________________________________________________________________________
/*
В свойстве classList хранится объект с методами для работы с классами элемента.

elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.
elem.classList.add(cls) - добавляет класс cls в список классов элемента.
elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.
elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass.
*/

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset.id);
});
// /Свойство classList_________________________________________________________________________________________________________________________________