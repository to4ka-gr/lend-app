// import createHtmlElem from './html/html.js';
// import {arrMyUsers, myUsersList, user, apiService, lists, li, myUsersBtn, modalAdminPanel, closeModalAdminPanel, addUsersBtn, modalAddUsers, closeModalAddUsers} from './variables/variables.js';
// import {pushUserInArr, stringifyArrInLS, parseArrInLS, addNewUserInUI} from './function/functions.js';
// import User from './user/user.js';
// import APIService from './api/api-service.js';

// function createHtmlElem() {
    
//     root.insertAdjacentHTML(
//         'afterbegin',
        
//         `<div class='container'>
//             <div class='wrapper'>
    
//                 <button class='button myUsersBtn'>
//                     Мои заемщики
//                 </button>
    
//                 <div class='modalAdminPanel'>
//                     <div class='closeModalAdminPanel'></div>
//                     <div class='myUseresList'>
//                         <div class='showUserName'></div>
//                         <div class='showLoanDate'></div>
//                         <div class='showExpirationDate'></div>
//                         <div class='showLoanAmount'></div>
//                         <div class='showUserId'></div>
//                         <ul class='list'></ul>
//                     </div>
//                     <div class='adminButtons'>
//                         <button class='button addUsersBtn'>
//                             Добавить
//                         </button>
//                         <button class='button changeUsersBtn'>
//                             Изменить
//                         </button>
//                         <button class='button removeUsersBtn'>
//                             Удалить
//                         </button>
//                     </div>
//                 </div>
            
//                 <div class='modalAddUsers'>
//                     <div class='closeModalAddUsers'></div>
//                     <form class='form' id='form'>
//                         <input required type='text' placeholder='Ваше имя' class='input userName'/>
//                         <input required type='date' class='input loanDate'/>
//                         <input required type='date' class='input expirationDate'/>
//                         <input required type='number' min='1'  placeholder='Сумма займа' class='input loanAmount'/>
//                         <button type='submit' class='input submit'>подтвердить</button>
//                     </form>
//                 </div>
    
//             </div>
//         </div>`
//     );  
// }

// createHtmlElem();

root.insertAdjacentHTML(
    'afterbegin',

    `<div class='container'>
        <div class='wrapper'>

            <button class='button myUsersBtn' id='myUsersBtn'>
                Мои заемщики
            </button>

            <div class='modalAdminPanel'>

                <div class='closeModalAdminPanel'></div>

                <div class='myUseresList' id='usersUi'>
                    <div class='wrapper_for_list'>
                        <div class='number'>
                            №
                        </div>
                        <div class='user_name'>
                            ФИО
                        </div>
                        <div class='loan_date'>
                            Дата займа
                        </div>
                        <div class='expiration_date'>
                            Дата окончания
                        </div>
                        <div class='date_added'>
                            Дата добавления
                        </div>
                        <div class='loan_amount'>
                            Сумма
                        </div>
                        <div class='id'>
                            ID
                        </div>
                    </div>

                    <ul class='users_list'></ul>
                </div>

                <button class='button addUsersBtn'>
                    Добавить
                </button>

            </div>
        
            <div class='modalAddUsers'>

                <div class='closeModalAddUsers'></div>

                <form class='form' id='form'>

                    <input required type='text' placeholder='Ваше имя' class='input userName' name='userName' autocomplete='on'/>

                    <!-- <input required type='text' placeholder='Ваше отчество' class='input userPatronymic' name='userPatronymic' autocomplete='on'/>
                    <input required type='text' placeholder='Ваша фамилия' class='input userSurname' name='userSurname' autocomplete='on'/> -->

                    <input required type='date' class='input loanDate' name='loanDate' autocomplete='on'/>
                    <input required type='date' class='input expirationDate' name='expirationDate' autocomplete='on'/>
                    <input required type='number' min='1' placeholder='Сумма займа' class='input loanAmount' name='loanAmount' autocomplete='on'/>

                    <button type='submit' class='input submit button'>
                        подтвердить
                    </button>

                </form>
            </div>

            <div class='modalAddUsers'>

                <div class='closeModalAddUsers'></div>

                <form class='form' id='form'>

                    <input required type='text' placeholder='Ваше имя' class='input userName' name='userName' autocomplete='on'/>

                    <!-- <input required type='text' placeholder='Ваше отчество' class='input userPatronymic' name='userPatronymic' autocomplete='on'/>
                    <input required type='text' placeholder='Ваша фамилия' class='input userSurname' name='userSurname' autocomplete='on'/> -->

                    <input required type='date' class='input loanDate' name='loanDate' autocomplete='on'/>
                    <input required type='date' class='input expirationDate' name='expirationDate' autocomplete='on'/>
                    <input required type='number' min='1' placeholder='Сумма займа' class='input loanAmount' name='loanAmount' autocomplete='on'/>

                    <button type='submit' class='input submit button'>
                        подтвердить
                    </button>

                </form>
            </div>
        </div>
    </div>`
);

class User {
    constructor({userName, loanDate, expirationDate, loanAmount}) {
        this.userName = userName;
        // this.userPatronymic = data.userPatronymic;
        // this.userSurname = data.userSurname;
        this.loanDate = loanDate;
        this.expirationDate = expirationDate;
        this.loanAmount = loanAmount;
        this.dateAdded = this._getDateAdded();
        this.userId = this._getUserID(1_000_000_000, 9_999_999_999)
    }
    _getDateAdded() {
        let nowDate = new Date();
        let getYear = nowDate.getFullYear();
        let getMonth = () => {
            let i = nowDate.getMonth();
            if (i >= 9) {
                getMonth = i + 1;
                return i;
            } else {
                getMonth = '0' + (i + 1);
                return i;
            }
        };
        getMonth();
        let getDay = nowDate.getDate();
        let normalMonth = getMonth;
        return `${getYear}-${normalMonth}-${getDay}`;
    }
    _getUserID(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return String(Math.floor(Math.random() * (max - min + 1)) + min);
    }
};

class APIService {
    addNewUser(user) {

        arrMyUsers.push(user);
// TODO: нужно все строяные елементы заменить на константы как сделано с userName
        localStorage['myUsers'] = JSON.stringify(arrMyUsers); 
        
        modalAddUsers.classList.remove('active');
        modalAdminPanel.classList.add('active');

        createUsersList(arrMyUsers, usersList);

        formElement.reset();  
    }

    deleteUser() {
        // обратиться в localStorage/ найти объекты/ вытащить div remove/ удалить родительский объект/ записать новые данные в массив из localStorage/обновить список
    }

    editUser() {
        // обратиться в localStorage/ найти объекты/ вытащить div edit/ добраться к каждому ключу и изменить его значение/ записать новые данные в массив из localStorage/обновить список
    }
};

const formElement = document.getElementById('form');
let formData = new FormData(formElement);
const USER_FORM_FIELDS = {
    USER_NAME: 'userName',
    USER_PATRONYMIC: 'userPatronymic',
    USER_SURNAME: 'userSurname',
    USER_LOAN_DATE: 'loanDate',
    USER_EXPIRATION_DATE: 'expirationDate',
    USER_LOAN_AMOUNT: 'loanAmount',
};
let user  = new User({
    userName: formData.get(USER_FORM_FIELDS.USER_NAME),
    // userPatronymic: formData.get(USER_FORM_FIELDS.USER_PATRONYMIC),
    // userSurname: formData.get(USER_FORM_FIELDS.USER_SURNAME),
    loanDate: formData.get(USER_FORM_FIELDS.USER_LOAN_DATE),
    expirationDate: formData.get(USER_FORM_FIELDS.USER_EXPIRATION_DATE),
    loanAmount: formData.get(USER_FORM_FIELDS.USER_LOAN_AMOUNT),
});
let arrMyUsers = [];
const apiService = new APIService();
const usersList = document.querySelector('.users_list');
const myUsersBtn = document.querySelector('.myUsersBtn');
const modalAdminPanel = document.querySelector('.modalAdminPanel');
const closeModalAdminPanel = document.querySelector('.closeModalAdminPanel');
const addUsersBtn = document.querySelector('.addUsersBtn');
const modalAddUsers = document.querySelector('.modalAddUsers');
const closeModalAddUsers = document.querySelector('.closeModalAddUsers');

function parseLSInArr() {
    if (localStorage['myUsers']) {
        arrMyUsers = [];
        arrMyUsers = JSON.parse(localStorage['myUsers']);
    };
}

function createUsersList(users, parent) { // (arrMyUsers, usersList(ul))
    parent.innerHTML = '';
    // arr.sort();
    // <!-- ${myUser.userPatronymic}. ${myUser.userSurname} --> ${myUser.USER_FORM_FIELDS.USER_NAME.substring(2, 20)}.
    users.forEach((myUser, i) => { // (каждый объект, его индекс)
        parent.innerHTML += `
            <li class="each_user"> 
                <span class='each_user-number'>
                    ${i + 1}.
                </span>
                <span class='each_user-userName'>
                    ${myUser.userName.substring(0, 1)}.
                </span>
                <span class='each_user-loanDate'>
                    ${myUser.loanDate}
                </span>
                <span class='each_user-expirationDate'>
                    ${myUser.expirationDate}
                </span>
                <span class='each_user-dateAdded'>
                    ${myUser.dateAdded}
                </span>
                <span class='each_user-loanAmount'>
                    ${myUser.loanAmount}
                </span>
                <span class='each_user-userId'>
                    #${myUser.userId}
                </span>
                <div class='edit'></div> 
                <div class='remove'></div> 
            </li>
        `;
    });

    document.querySelectorAll('.remove').forEach((btn, i) => { // удаление пользователей
        btn.addEventListener('click', () => {
                btn.parentElement.remove();
                arrMyUsers.splice(i, 1);
                localStorage['myUsers'] = JSON.stringify(arrMyUsers);
                createUsersList(users, parent);
        });
    });

    document.querySelectorAll('.edit').forEach((btn, i) => { // изменение пользователя
        btn.addEventListener('click', () => {
            // создать новую модалку в html, котрая открывется по нажатию кнопки, в ней добавить (ключ: input.placeholder = старое значениями), элементы котрые не редактирются, chekbox, submit 
            let userInArr = arrMyUsers[i];
            Object.defineProperty(userInArr, {
                userName: prompt('Введите новое имя', `${arrMyUsers[i].userName}`),
                // userPatronymic: ,
                // userSurname: ,
                // loanDate: ,
                // expirationDate: ,
                // loanAmount: ,
            });
            localStorage['myUsers'] = JSON.stringify(arrMyUsers);
            createUsersList(users, parent);
        });
    });

    let stringOfUser = document.querySelectorAll('.each_user');
    let warningUser = [];
    let expiredUser = [];

    function showWarningNotification(arr) {
        console.log('Пользоваталили у которых осталось 3 дня:');
        arr.forEach((obj, i) => {
            console.log(`${i + 1}. ${obj.userName}`);

        });
    }

    function showExpiredNotification(arr) {
        console.log('Пользоваталили у которых закончился срок:');
        arr.forEach((obj, i) => {
            console.log(`${i + 1}. ${obj.userName}`);
        });
    }

    users.forEach((myUser, i) => {
        let dateNow = Date.now();
        let getEndDateInSec = Date.parse(myUser.expirationDate);
        let threeDaysInSec = 259200000;

        if ((getEndDateInSec) <= dateNow) {
            expiredUser.push(myUser);
            stringOfUser[i].classList.remove('each_warning');
            stringOfUser[i].classList.add('each_expired');
        } else if (getEndDateInSec <= (dateNow + threeDaysInSec)) {
            warningUser.push(myUser);
            stringOfUser[i].classList.remove('each_expired');
            stringOfUser[i].classList.add('each_warning');
        } else {
            stringOfUser[i].classList.remove('each_warning');
            stringOfUser[i].classList.remove('each_expired');
        }
    });
    showWarningNotification(warningUser);
    showExpiredNotification(expiredUser);
}

myUsersBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalAdminPanel.classList.add('active');
    myUsersBtn.classList.add('hidden');
    parseLSInArr();
    createUsersList(arrMyUsers, usersList);
});

closeModalAdminPanel.addEventListener('click', (e) => {
    e.preventDefault();
    modalAdminPanel.classList.remove('active');
    myUsersBtn.classList.remove('hidden');
});

addUsersBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalAddUsers.classList.add('active');
    modalAdminPanel.classList.remove('active');
});

closeModalAddUsers.addEventListener('click', (e) => {
    e.preventDefault();
    modalAddUsers.classList.remove('active');
    modalAdminPanel.classList.add('active');
});

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    formData = new FormData(formElement);
    user = new User({
        userName: formData.get(USER_FORM_FIELDS.USER_NAME),
        // userPatronymic: formData.get(USER_FORM_FIELDS.USER_PATRONYMIC),
        // userSurname: formData.get(USER_FORM_FIELDS.USER_SURNAME),
        loanDate: formData.get(USER_FORM_FIELDS.USER_LOAN_DATE),
        expirationDate: formData.get(USER_FORM_FIELDS.USER_EXPIRATION_DATE),
        loanAmount: formData.get(USER_FORM_FIELDS.USER_LOAN_AMOUNT),
    }); 
    apiService.addNewUser(user);
    
});