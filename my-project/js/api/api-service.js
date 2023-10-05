// import createHtmlElem from './html/html.js';
// import {arrMyUsers, myUsersList, user, apiService, lists, li, myUsersBtn, modalAdminPanel, closeModalAdminPanel, addUsersBtn, modalAddUsers, closeModalAddUsers} from './variables/variables.js';
// import {pushUserInArr, stringifyArrInLS, parseArrInLS, addNewUserInUI} from './function/functions.js';
// import User from './user/user.js';

// class APIService {

//     addNewUser() {
//         preventDefault();

//         user.userName = document.querySelector('.userName').value;
//         user.loanDate = document.querySelector('.loanDate').value;
//         user.expirationDate = document.querySelector('.expirationDate').value;
//         user.loanAmount = document.querySelector('.loanAmount').value;
        
//         pushUserInArr();
//         stringifyArrInLS();
//         parseArrInLS();
//         addNewUserInUI();

        
//         //     modalAddUsers.classList.remove('active');
//         //     modalAdminPanel.classList.add('active');

//         HTMLFormElement.reset();
//         console.log(User)
//     }

//     editUser(user) {

//         if (!user.userId) {
//             throw new Error('no id');
//         }
//     }

//     deleteUserById(userId) {
        
//     }
// }

// export default APIService;