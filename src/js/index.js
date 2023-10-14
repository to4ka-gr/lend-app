// import createHtmlElem from './html/html.js';
// import {arrMyUsers, myUsersList, user, apiService, lists, li, myUsersBtn, modalAdminPanel, closeModalAdminPanel, addUsersBtn, modalAddUsers, closeModalAddUsers} from './variables/variables.js';
// import {pushUserInArr, stringifyArrInLS, parseArrInLS, addNewUserInUI} from './function/functions.js';
// import User from './user/user.js';
// import APIService from './api/api-service.js';

function createMainHTML() {
    
    root.insertAdjacentHTML( // closeModalAddUsers
        'afterbegin',
    
        `<div class='container'>
            <div class='wrapper'>
    
                <button class='button btn_show_my_users' id='btn_show_my_users'>
                    Мои заемщики
                </button>
    
                <div class='modal_main'>
    
                    <div class='close_modal_main'></div>
    
                    <div class='users_list-head'>
                        <div class='users_list-wrapper'>
                            <div class='index'>
                                №
                            </div>
                            <div class='full_name'>
                                ФИО
                                <div class='sort_icon'></div>
                            </div>
                            <div class='loan_date'>
                                Дата займа
                            </div>
                            <div class='expiration_date'>
                                Дата окончания
                            </div>
                            <div class='date_added'>
                                Дата добавления
                                <div class='sort_icon'></div>
                            </div>
                            <div class='loan_amount'>
                                Сумма
                                <div class='sort_icon'></div>
                            </div>
                            <div class='id'>
                                ID
                            </div>
                            <div class='filter_rounds'>
                                <div class='filter_rounds-item filter_rounds-all'></div>
                                <div class='filter_rounds-item filter_rounds-warning'></div>
                                <div class='filter_rounds-item filter_rounds-expired'></div>
                            </div>
                        </div>
    
                        <ul class='users_list'></ul>
                    </div>

                    <div class='icon_modal_notification'></div>
                    <div class='new_notification'></div>
    
                    <button class='button btn_add_new_user'>
                        Добавить
                    </button>
    
                </div>
            
                <div class='modal_form_add_user'>
    
                    <div class='close_modal_form_add_users'></div>
    
                    <form class='form' id='form'>
    
                        <input required type='text' placeholder='Ваше имя' class='input input_user_name' name='input_user_name' autocomplete='on'/>
                        <input required type='text' placeholder='Ваше отчество' class='input input_user_patronymic' name='input_user_patronymic' autocomplete='on'/>
                        <input required type='text' placeholder='Ваша фамилия' class='input input_user_surname' name='input_user_surname' autocomplete='on'/>
                        <input required type='date' class='input input_loan_date' name='input_loan_date' autocomplete='on'/>
                        <input required type='date' class='input input_expiration_date' name='input_expiration_date' autocomplete='on'/>
                        <input required type='number' min='1' placeholder='Сумма займа' class='input input_loan_amount' name='input_loan_amount' autocomplete='on'/>
    
                        <button type='submit' class='button input submit'>
                            подтвердить
                        </button>
    
                    </form>
                </div>
            </div>
        </div>`
    );

}

createMainHTML();

class User {
    constructor({userName, userPatronymic, userSurname, loanDate, expirationDate, loanAmount}) {
        this.userName = userName;
        this.userPatronymic = userPatronymic;
        this.userSurname = userSurname;
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

class APIService { // TODO: нужно все строяные элементы заменить на константы как сделано с формой
    addNewUser(user) {

        arrMyUsers.push(user);

        localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers); 
        
        modalAddUsers.classList.remove('active');
        modalAdminPanel.classList.add('active');

        createUsersList(arrMyUsers, usersList);
    }

    deleteUser() {
        // обратиться в localStorage/ найти объекты/ вытащить div remove/ удалить родительский объект/ записать новые данные в массив из localStorage/обновить список
    }

    editUser() {
        // обратиться в localStorage/ найти объекты/ вытащить div edit/ добраться к каждому ключу и изменить его значение/ записать новые данные в массив из localStorage/обновить список
    }
};

const USER_FORM_FIELDS = {
    USER_NAME: 'input_user_name',
    USER_PATRONYMIC: 'input_user_patronymic',
    USER_SURNAME: 'input_user_surname',
    USER_LOAN_DATE: 'input_loan_date',
    USER_EXPIRATION_DATE: 'input_expiration_date',
    USER_LOAN_AMOUNT: 'input_loan_amount',
};
const formElement = document.getElementById('form');
let formData = new FormData(formElement);
let user  = new User({
    userName: formData.get(USER_FORM_FIELDS.USER_NAME),
    userPatronymic: formData.get(USER_FORM_FIELDS.USER_PATRONYMIC),
    userSurname: formData.get(USER_FORM_FIELDS.USER_SURNAME),
    loanDate: formData.get(USER_FORM_FIELDS.USER_LOAN_DATE),
    expirationDate: formData.get(USER_FORM_FIELDS.USER_EXPIRATION_DATE),
    loanAmount: formData.get(USER_FORM_FIELDS.USER_LOAN_AMOUNT),
});
let arrMyUsers = [];
const apiService = new APIService();
const usersList = document.querySelector('.users_list');
const myUsersBtn = document.querySelector('.btn_show_my_users');
const modalAdminPanel = document.querySelector('.modal_main');
const closeModalAdminPanel = document.querySelector('.close_modal_main');
const addUsersBtn = document.querySelector('.btn_add_new_user');
const modalAddUsers = document.querySelector('.modal_form_add_user');
const closeModalAddUsers = document.querySelector('.close_modal_form_add_users');
const LOCAL_STORAGE = {
    KEY: 'myUsers',
};

function parseLSInArr() {
    if (localStorage[LOCAL_STORAGE.KEY]) {
        arrMyUsers = [];
        arrMyUsers = JSON.parse(localStorage[LOCAL_STORAGE.KEY]);
    }
}

function showWarningNotification(arr) {
    if (!arr[0] == '') {
        console.log('Пользоваталили у которых осталось 3 дня:');
        arr.forEach((obj, i) => {
            console.log(`${i + 1}. ${obj.userSurname} ${obj.userName} ${obj.userPatronymic}`);
        });
    }
}

function showExpiredNotification(arr) {
    if (!arr[0] == '') {
        console.log('Пользоваталили у которых закончился срок:');
        arr.forEach((obj, i) => {
            console.log(`${i + 1}. ${obj.userSurname} ${obj.userName} ${obj.userPatronymic}`);
        });
    }
}

function createFormMini(arr, i) {
    myUsersBtn.insertAdjacentHTML(
        'beforebegin',

        `<div class='modal_edit_user hidden'>

            <div class='close_modal_edit_user'></div>
            
            <form class='form_mini' id='form_mini'>
            
                <input type='text' placeholder=${arr[i].userName} class='input input_edit input_edit_user_name' name='input_edit_user_name' autocomplete='on'/>
                <input type='text' placeholder=${arr[i].userPatronymic} class='input input_edit input_edit_user_patronymic' name='input_edit_user_patronymic' autocomplete='on'/>
                <input type='text' placeholder=${arr[i].userSurname} class='input input_edit input_edit_user_surname' name='input_edit_user_surname' autocomplete='on'/>            
                <input type='date' value=${arr[i].loanDate} class='input input_edit input_edit_loan_date' name='input_edit_loan_date' autocomplete='on'/>
                <input type='date' value=${arr[i].expirationDate} class='input input_edit input_edit_expiration_date' name='input_edit_expiration_date' autocomplete='on'/>
                <input type='number' min='1' placeholder=${arr[i].loanAmount} class='input input_edit input_edit_loan_amount' name='input_edit_loan_amount' autocomplete='on'/>
            
                <button type='submit' class='input input_edit submit_edit button'>
                    изменить
                </button>
            
            </form>
        </div>
    `);
}

function createUserString(users, parent) {
    users.forEach((myUser, i) => {
        parent.innerHTML += `
            <li class="each_user">

                <span class='each_user-index'>
                    ${i + 1}.
                </span>

                <span class='each_user-user_name' data-tooltip="
                    ${myUser.userName} 
                    ${myUser.userPatronymic} 
                    ${myUser.userSurname}
                ">
                    ${myUser.userName.substring(0, 1)}. 
                    ${myUser.userPatronymic.substring(0, 1)}. 
                    ${myUser.userSurname}
                </span>

                <span class='each_user-loan_date'>
                    ${myUser.loanDate}
                </span>

                <span class='each_user-expiration_date'>
                    ${myUser.expirationDate}
                </span>

                <span class='each_user-date_added'>
                    ${myUser.dateAdded}
                </span>

                <span class='each_user-loan_amount'>
                    ${myUser.loanAmount} $
                </span>

                <span class='each_user-user_id'>
                    #${myUser.userId}
                </span>

                <div class='icon_edit'></div> 
                <div class='icon_remove'></div> 
            </li>
        `;
    });
}

function createUsersList(users, parent) {

    let warningUser = [];
    let expiredUser = [];

    parent.innerHTML = '';

    createUserString(users, parent);

    function deleteUser() { // удаление пользователей
        document.querySelectorAll('.icon_remove').forEach((btn, i) => { 
            btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    arrMyUsers.splice(i, 1);
                    localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers);
                    createUsersList(users, parent);
            });
        });
    }

    deleteUser();

    document.querySelectorAll('.icon_edit').forEach((btn, i) => { // изменение пользователя

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('.icon_edit').forEach((elem) => {
                elem.parentElement.style.background = '';
            });

            btn.parentElement.style.background="rgb(128, 128, 128)";

            createFormMini(users, i);

            let modalEditUser = document.querySelector('.modal_edit_user');
            let closeModalEditUser = document.querySelector('.close_modal_edit_user');
            const formElementMini = document.getElementById('form_mini');
            let formDataMini = new FormData(formElementMini);
            let userInArr = users[i];
            
            modalEditUser.classList.remove('hidden');
            closeModalAdminPanel.classList.add('hidden');
            addUsersBtn.classList.add('hidden');
            
            closeModalEditUser.addEventListener('click', (e) => {
                e.preventDefault();

                createFormMini(users, i);

                btn.parentElement.style.background='';

                closeModalAdminPanel.classList.remove('hidden');
                addUsersBtn.classList.remove('hidden');

                modalEditUser.classList.add('hidden');
                formElementMini.reset();
            });

            formElementMini.addEventListener('submit', (e) => {
                e.preventDefault();

                formDataMini = new FormData(formElementMini);

                Object.defineProperty(userInArr, 'userName', {
                    value: formDataMini.get('input_edit_user_name') || userInArr.userName
                });
                Object.defineProperty(userInArr, 'loanDate', {
                    value: formDataMini.get('input_edit_loan_date') || userInArr.loanDate
                });
                Object.defineProperty(userInArr, 'expirationDate', {
                    value: formDataMini.get('input_edit_expiration_date') || userInArr.expirationDate
                });
                Object.defineProperty(userInArr, 'loanAmount', {
                    value: formDataMini.get('input_edit_loan_amount') || userInArr.loanAmount
                });

                btn.parentElement.style.background='';
                localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers);
                createUsersList(users, parent);
                modalEditUser.classList.add('hidden');
                closeModalAdminPanel.classList.remove('hidden');
                addUsersBtn.classList.remove('hidden');
                formElementMini.reset();
                myUsersBtn.insertAdjacentHTML('beforebegin', ``);
            });
        });
    });

    users.forEach((myUser, i) => {
        let dateNow = Date.now();
        let getEndDateInSec = Date.parse(myUser.expirationDate);
        let threeDaysInSec = 259200000;
        let stringOfUser = document.querySelectorAll('.each_user');

        if ((getEndDateInSec) <= dateNow) {
            expiredUser.push(myUser);
            stringOfUser[i].classList.remove('each_warning');
            stringOfUser[i].classList.add('each_expired');
        } else if (getEndDateInSec <= (dateNow + threeDaysInSec)) {
            warningUser.push(myUser);
            stringOfUser[i].classList.remove('each_expired');
            stringOfUser[i].classList.add('each_warning');
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
        userPatronymic: formData.get(USER_FORM_FIELDS.USER_PATRONYMIC),
        userSurname: formData.get(USER_FORM_FIELDS.USER_SURNAME),
        loanDate: formData.get(USER_FORM_FIELDS.USER_LOAN_DATE),
        expirationDate: formData.get(USER_FORM_FIELDS.USER_EXPIRATION_DATE),
        loanAmount: formData.get(USER_FORM_FIELDS.USER_LOAN_AMOUNT),
    }); 
    apiService.addNewUser(user);
    formElement.reset();
});


// editForm = form
// сделать 3 кружка серый желтый и красный и фильтровать список
// ajax
// json
// Использовать блок.remove() для удаления блока отображаемого на странице И потом создается заново этот блог
// Обернуть основные блоки функцию и вынести за блог
// Оповещение сделать отдельную кнопку и функциями туда записывать
// Фильтрах использовать мои массивы которые я использовал для сортировки просроченных и важных
// переиспользовать форму для уменьшения кода