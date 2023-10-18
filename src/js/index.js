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
                                <div class='sort_icon sort_icon-surname'></div>
                            </div>
                            <div class='loan_date'>
                                Дата займа
                            </div>
                            <div class='expiration_date'>
                                Дата окончания
                            </div>
                            <div class='date_added'>
                                Дата добавления
                                <div class='sort_icon sort_icon-added_date'></div>
                            </div>
                            <div class='loan_amount'>
                                Сумма
                                <div class='sort_icon sort_icon-loan_amount'></div>
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

                    <div class='icon_search_users' id='search'></div>

                    <div class='icon_modal_notification'></div>
                    <div class='new_notification-indicator'></div>
    
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

        // createUsersList(arrMyUsers, usersList);
        filterAll(arrMyUsers);
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
    USER_NAME: 'input_user_name',
    USER_PATRONYMIC: 'input_user_patronymic',
    USER_SURNAME: 'input_user_surname',
    USER_LOAN_DATE: 'input_loan_date',
    USER_EXPIRATION_DATE: 'input_expiration_date',
    USER_LOAN_AMOUNT: 'input_loan_amount',
};
const LOCAL_STORAGE = {
    KEY: 'myUsers',
};
let user  = new User({
    userName: formData.get(USER_FORM_FIELDS.USER_NAME),
    userPatronymic: formData.get(USER_FORM_FIELDS.USER_PATRONYMIC),
    userSurname: formData.get(USER_FORM_FIELDS.USER_SURNAME),
    loanDate: formData.get(USER_FORM_FIELDS.USER_LOAN_DATE),
    expirationDate: formData.get(USER_FORM_FIELDS.USER_EXPIRATION_DATE),
    loanAmount: formData.get(USER_FORM_FIELDS.USER_LOAN_AMOUNT),
});
const SPAN_FOR_LIST = {
    SPAN_WARNING: '<span>Пользователи у которых закончился срок:</span>',
    SPAN_EXPIRED: '<span>Пользователи у которых заканчитвается срок:</span>',
}
let arrMyUsers = [];
let warningUser = [];
let expiredUser = [];
let sortArr = [];
const notificationIndicator = document.querySelector('.new_notification-indicator');
const notificationBtn = document.querySelector('.icon_modal_notification');
const showAllUsers = document.querySelector('.filter_rounds-all');
const showWarningUsers = document.querySelector('.filter_rounds-warning');
const showExpiredUsers = document.querySelector('.filter_rounds-expired');
const apiService = new APIService();
const usersList = document.querySelector('.users_list');
const myUsersBtn = document.querySelector('.btn_show_my_users');
const modalAdminPanel = document.querySelector('.modal_main');
const closeModalAdminPanel = document.querySelector('.close_modal_main');
const addUsersBtn = document.querySelector('.btn_add_new_user');
const modalAddUsers = document.querySelector('.modal_form_add_user');
const closeModalAddUsers = document.querySelector('.close_modal_form_add_users');

const backgroundForNotification = document.createElement('div');
const myModalNotification = document.createElement('div');
const myNotificationWrapper = document.createElement('div');
const myNotificationWarning = document.createElement('div');
const myNotificationExpired = document.createElement('div');
const closeModalNotification = document.createElement('div');
const notificationWarningList = document.createElement('ul'); // проверить название
const notificationExpiredList = document.createElement('ul'); // тут тоже

const iconSearchUsers = document.querySelector('.icon_search_users');
const btnFilterAll = document.querySelector('.filter_rounds-all');
const btnFilterWarning = document.querySelector('.filter_rounds-warning');
const btnFilterexpired = document.querySelector('.filter_rounds-expired');
const iconSortBySurname = document.querySelector('.sort_icon-surname');
const iconSortByAddedDate = document.querySelector('.sort_icon-added_date');
const iconSortByLoanAmount = document.querySelector('.sort_icon-loan_amount');

function filterAll() {
    btnFilterAll.addEventListener('click', (e) => {
        e.preventDefault;
        warningUser = [];
        expiredUser = [];
        parseLSInArr();
        createUsersList(arrMyUsers, usersList);
        // usersList.style.background="rgba(199, 197, 197, 1)";
    });
}

function filterWarning() {
    btnFilterWarning.addEventListener('click', (e) => {
        e.preventDefault;
        usersList.innerHTML = '';
        createUserString(warningUser, usersList);
        // usersList.style.background="rgba(255, 215, 51, 0.639)";
    });
}

function filterExpired() {
    btnFilterexpired.addEventListener('click', (e) => {
        e.preventDefault;
        usersList.innerHTML = '';
        createUserString(expiredUser, usersList);
        // usersList.style.background="rgba(171, 47, 13, 0.42)";
    });
}

function parseLSInArr() { // получение объектов из local
    if (localStorage[LOCAL_STORAGE.KEY]) {
        arrMyUsers = [];
        arrMyUsers = JSON.parse(localStorage[LOCAL_STORAGE.KEY]);
    }
}

function createFormMini(arr, i) { // создание формы для редактирования
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

function createUserString(users, parent) { // создание сторки пользователя
    users.forEach((myUser, i) => {
        parent.innerHTML += `
            <li class="each_user">

                <span class='each_user-index'>
                    ${i + 1}.
                </span>

                <span class='each_user-user_name' data-tooltip="
                    ${myUser.userSurname}
                    ${myUser.userName} 
                    ${myUser.userPatronymic} 
                ">
                    ${myUser.userSurname}
                    ${myUser.userName.substring(0, 1)}. 
                    ${myUser.userPatronymic.substring(0, 1)}. 
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
                    ${myUser.loanAmount}$
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

function deleteUser(users, remove) { // удаление пользователей
    remove.forEach((btn, i) => { 
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            users.splice(i, 1);
            localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers);
            filterAll(arrMyUsers);
        });
    });
}

function editUser(edit, users) { // изменение пользователя
    edit.forEach((btn, i) => { 

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            edit.forEach((elem) => {
                elem.parentElement.style.background = '';
            });

            btn.parentElement.style.background="rgb(128, 128, 128)";

            createFormMini(users, i);

            const modalEditUser = document.querySelector('.modal_edit_user');
            const closeModalEditUser = document.querySelector('.close_modal_edit_user');
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
}

function checkDateAttention(users) { // проверка просрочки
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
}

function createUsersList(users, parent) { // создание списка пользователей

    parent.innerHTML = '';

    createUserString(users, parent);

    const removeIcon = document.querySelectorAll('.icon_remove');
    const editIcon = document.querySelectorAll('.icon_edit');

    deleteUser(users, removeIcon);

    editUser(editIcon, users);

    checkDateAttention(users);
}

function createUsersListAttention(users, parent) { // создание списка пользователей

    parent.innerHTML = '';

    createUserString(users, parent);

    const removeIcon = document.querySelectorAll('.icon_remove');
    const editIcon = document.querySelectorAll('.icon_edit');

    deleteUser(users, removeIcon);

    editUser(editIcon, users);
}

function createNotificationModalWindow() { // создание окна уведомлений

    backgroundForNotification.classList.add('background_for_notification');  // задний слой поаерх индикатора
    notificationIndicator.append(backgroundForNotification);

    myModalNotification.classList.add('modal_notification'); // модалку на задний слой
    document.querySelector('.background_for_notification').append(myModalNotification);

    myNotificationWrapper.classList.add('modal_notification-wrapper'); // обертку на модалку
    myNotificationWrapper.classList.add('modal_notification-wrapper-warning');
    myNotificationWrapper.classList.add('modal_notification-wrapper-expired');
    document.querySelector('.modal_notification').append(myNotificationWrapper);

    myNotificationWarning.classList.add('modal_notification-warning'); // левая часть обертки
    document.querySelector('.modal_notification-wrapper').append(myNotificationWarning);

    myNotificationExpired.classList.add('modal_notification-expired'); // правя часть обертку
    document.querySelector('.modal_notification-wrapper').append(myNotificationExpired);

    closeModalNotification.classList.add('modal_notification-close'); // иконка закрытия на модалку
    document.querySelector('.modal_notification').append(closeModalNotification);

    notificationWarningList.classList.add('modal_notification-warning_list'); // лист для отображения
    document.querySelector('.modal_notification-warning').append(notificationWarningList);

    notificationExpiredList.classList.add('modal_notification-expired_list'); // лист для отображения
    document.querySelector('.modal_notification-expired').append(notificationExpiredList);
}

function createNotificationlist(arr, ulList, divSpan) {

    if (arr === warningUser) {
        document.querySelector('.modal_notification-wrapper-warning').insertAdjacentHTML('afterbegin', `${divSpan}`); // сделать переменные и добавить как аргументы
    } else if (arr === expiredUser) {
        document.querySelector('.modal_notification-wrapper-expired').insertAdjacentHTML('afterbegin', `${divSpan}`);
    }

    ulList.innerHTML = '';

    arr.forEach((user, i) => {

        ulList.innerHTML += `
            <li class='attention_notification'>

                <span class='attention_user-index'>
                    ${i + 1}.
                </span>

                <span class='attention_user-full_name'>
                    ${user.userName.substring(0, 1)}. 
                    ${user.userPatronymic.substring(0, 1)}. 
                    ${user.userSurname}
                </span>
            </li>
        `;
    });
}

function showNotificationList(btn, arr, ulList, divSpan) {
    btn.addEventListener('click', (e) => {
        e.preventDefault;
    
        createNotificationModalWindow();
    
        backgroundForNotification.classList.remove('hiden');
        btn.classList.add('hiden');
        notificationIndicator.classList.add('hiden');
    
        document.querySelector('.modal_notification-close').addEventListener('click', (e) => {
            e.preventDefault;

            divSpan = '';

            backgroundForNotification.classList.add('hiden');
            btn.classList.remove('hiden');
            notificationIndicator.classList.remove('hiden');
        });

        createNotificationlist(arr, ulList, divSpan);
    });
}

function showMainModal() {
    myUsersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalAdminPanel.classList.add('active');
        myUsersBtn.classList.add('hidden');
        parseLSInArr();
        createUsersList(arrMyUsers, usersList);
    });
}

function closeMainModal() {
    closeModalAdminPanel.addEventListener('click', (e) => {
        e.preventDefault();
        modalAdminPanel.classList.remove('active');
        myUsersBtn.classList.remove('hidden');
        warningUser = [];
        expiredUser = [];
    });
}

function showModalForm() {
    addUsersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalAddUsers.classList.add('active');
        modalAdminPanel.classList.remove('active');
    });
}

function closeModalForm() {
    closeModalAddUsers.addEventListener('click', (e) => {
        e.preventDefault();
        modalAddUsers.classList.remove('active');
        modalAdminPanel.classList.add('active');
    });
}

function formModalSubmit() {
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
        filterAll(arrMyUsers);
    });
}

function searchUser() {
    iconSearchUsers.addEventListener('click', (e) => {
        e.preventDefault;

        search.insertAdjacentHTML(
            'beforebegin', 
            `<div class='search_modal'>
                <div class='search_modal-wrapper'>
                    <div></div>
                </div>
                <div class='search_modal_close'></div>
            </div>`
        );
    });
}

function sortListBySurname() {
    iconSortBySurname.addEventListener('click', (e) => {
        e.preventDefault;

        sortArr = arrMyUsers.sort(function (a, b) {
            if (a.userSurname > b.userSurname) {
              return 1;
            }
            if (a.userSurname < b.userSurname) {
              return -1;
            }
            return 0;
        });

        createUsersList(sortArr, usersList);
    });
}

function sortListByDateAded() {
    iconSortByAddedDate.addEventListener('click', (e) => {
        e.preventDefault;

        sortArr = arrMyUsers.sort(function (a, b) {
            let dateA = new Date(a.dateAdded);
            let dateB = new Date(b.dateAdded);
            
            return dateB - dateA;
        });
        createUsersList(sortArr, usersList);
        sortArr = [];
    });
}

function sortListByLoanAmount() {
    iconSortByLoanAmount.addEventListener('click', (e) => {
        e.preventDefault;
        sortArr = arrMyUsers.sort((a, b) => Number(a.loanAmount) - Number(b.loanAmount));
        warningUser = [];
        expiredUser = [];
        createUsersList(sortArr, usersList);
        sortArr = [];
    });
}

function runAll() {

    showNotificationList(notificationBtn, warningUser, notificationWarningList, SPAN_FOR_LIST.SPAN_WARNING);

    showNotificationList(notificationBtn, expiredUser, notificationExpiredList, SPAN_FOR_LIST.SPAN_EXPIRED);

    filterAll(arrMyUsers);

    filterWarning();

    filterExpired();

    showMainModal();

    closeMainModal();

    showModalForm();

    closeModalForm();

    formModalSubmit();

    sortListBySurname();

    sortListByDateAded();

    sortListByLoanAmount();
}

runAll(); // сделать все функции через аргументы и внести все сюда

// mutation.observer {
//     arr1 || arr2 в какаом из них будут изменения или в тои или в другом   
//     let startObserv = arr.lenght;
//     let endObserve = arr.lenght;
// startObserve !== endObserve      
// }

// function checkAttentionUsers() {
//     let startArrs = (warningUser.length || expiredUser.length);
//     if ()
// }


// editForm = form
// сделать 3 кружка серый желтый и красный и фильтровать список
// ajax
// json
// Использовать блок.remove() для удаления блока отображаемого на странице И потом создается заново этот блог
// Обернуть основные блоки функцию и вынести за блог
// Оповещение сделать отдельную кнопку и функциями туда записывать
// Фильтрах использовать мои массивы которые я использовал для сортировки просроченных и важных
// переиспользовать форму для уменьшения кода
// приятный цвет #816767