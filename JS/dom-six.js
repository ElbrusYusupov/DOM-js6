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
*/ // /Свойство classList_________________________________________________________________________________________________________________________________
/* for task #1_________________________________________________________________________________________________________________________________________
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector('.list');

const markup = technologies.map((technology) => `<li class="list-item">${technology}</li>`).join("");

console.log(markup);

list.innerHTML = markup
*/ //for task #1_________________________________________________________________________________________________________________________________________

const div = document.querySelector('.collection')

const makeBtn = document.createElement('button')
makeBtn.classList.add("my-button")
makeBtn.setAttribute('type', 'button')
makeBtn.style.backgroundColor = "teal"
makeBtn.style.fontSize = "24px"
makeBtn.textContent = "Я кнопка"

div.append(makeBtn)




const startBtn = document.querySelector('.js-start')
const stopBtn = document.querySelector('.js-stop')
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    console.log(`I love async JS! ${Math.random()}`);
  }, 1000)
})

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with ID ${timerId} has stopped!`);
})



const date = new Date("March 16, 2030 14:25:00");

date.setMinutes(50);

// date.setFullYear(2040, 4, 8);


console.log(date);