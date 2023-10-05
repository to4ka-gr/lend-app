// import {createHtmlElem} from './html/html.js';
// import {arrMyUsers, myUsersList, user, apiService, lists, li, myUsersBtn, modalAdminPanel, closeModalAdminPanel, addUsersBtn, modalAddUsers, closeModalAddUsers} from './variables/variables.js';
// import User from './user/user.js';
// import {APIService} from './api/api-service.js';



// myUsersBtn.addEventListener('click', () => {
//     modalAdminPanel.classList.add('active');
// });

// closeModalAdminPanel.addEventListener('click', () => {
//     modalAdminPanel.classList.remove('active');
// });

// addUsersBtn.addEventListener('click', () => {
//     modalAddUsers.classList.add('active');
//     modalAdminPanel.classList.remove('active');
// });

// closeModalAddUsers.addEventListener('click', () => {
//     modalAddUsers.classList.remove('active');
//     modalAdminPanel.classList.add('active');
// });



// function pushUserInArr() {
//     arrMyUsers.push(user);
// };
 
// function stringifyArrInLS() {
//     localStorage[myUsers] = JSON.stringify(arrMyUsers);
// };
 
// function parseArrInLS() {
//     myUsersList = JSON.parse(localStorage[myUsers]);
// };
 
// function addNewUserInUI(user) {
//     li.textContent = user.userName + ', Взял ' + user.loanDate + ', Отдать ' + user.expirationDate + ', Сумма ' + user.loanAmount + ', ID ' + user.userId;
//     lists.prepend(li);
// }

// export {pushUserInArr, stringifyArrInLS, parseArrInLS, addNewUserInUI};