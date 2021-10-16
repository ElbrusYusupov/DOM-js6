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

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
// console.log(listWithId);

const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
