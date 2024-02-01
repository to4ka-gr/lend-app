function createMainHTML() {
    
    root.insertAdjacentHTML(
        
        'afterbegin',
    
        `<div class='container'>
            <div class='wrapper'>
    
                <button class='button btn_show_my_users' id='btn_show_my_users'>
                    Мои заемщики
                </button>

                <div class='modal_submit-delete hiden' id='modal_submit-delete'>
                    <div class='modal_submit-delete-wrapper' id='modal_submit-delete-wrapper'>
                        <div class='modal_submit-delete-wrapper-list'>
                            <span class='modal_submit-delete-message'>
                                вы уверены, что хотите удалить пользователя:
                                <span class='modal_submit-delete-user' id='modal_submit-delete-user'></span>
                            </span>
    
                            <div class='button_wrapper'>
                                <button type='button' class='button modal_submit-delete-button modal_submit-delete-button-no' id='modal_submit-delete-button-no'>
                                    отмена
                                </button>
                    
                                <button type='button' class='button modal_submit-delete-button modal_submit-delete-button-yes' id='modal_submit-delete-button-yes'>
                                    удалить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='modal_main' id='modal_main'>

                    <div class='modal_edit_user hiden' id='modal_edit_user'>

                        <div class='close_modal_edit_user' id='close_modal_edit_user'></div>
                
                        <form class='form_mini' id='form_mini'>
                        
                            <input type='text' placeholder='Фамилия' class='input input_edit input_edit_user_surname' name='input_edit_user_surname' autocomplete='on'/>            
                            <input type='text' placeholder='Имя' class='input input_edit input_edit_user_name' name='input_edit_user_name' autocomplete='on'/>
                            <input type='text' placeholder='Отчество' class='input input_edit input_edit_user_patronymic' name='input_edit_user_patronymic' autocomplete='on'/>
                            <input type='date' placeholder='' class='input input_edit input_edit_loan_date' name='input_edit_loan_date' autocomplete='on'/>
                            <input type='date' placeholder='' class='input input_edit input_edit_expiration_date' name='input_edit_expiration_date' autocomplete='on'/>
                            <input type='number' min='1' placeholder='Сумма займа' class='input input_edit input_edit_loan_amount' name='input_edit_loan_amount' autocomplete='on'/>
                        
                            <button type='button' class='input input_edit submit_edit button' id='submit_edit'>
                                изменить
                            </button>
                        
                        </form>
                    </div>

                    <div class='close_modal_main' id='close_modal_main'></div>
    
                    <div class='users_list-head' id='users_list-head'>
                        <div class='users_list-wrapper'>
                            <div class='index'>
                                №
                            </div>
                            <div class='full_name'>
                                ФИО
                                <div class='sort_icon sort_icon-surname' id='sort_icon-surname'></div>
                                <div class='sort_icon sort_icon-reset_surname hiden' id='sort_icon-reset_surname'></div>
                            </div>
                            <div class='loan_date'>
                                Дата займа
                            </div>
                            <div class='expiration_date'>
                                Дата окончания
                            </div>
                            <div class='date_added'>
                                Дата добавления
                                <div class='sort_icon sort_icon-added_date' id='sort_icon-added_date'></div>
                                <div class='sort_icon sort_icon-reset_added_date hiden' id='sort_icon-reset_added_date'></div>
                            </div>
                            <div class='loan_amount'>
                                Сумма
                                <div class='sort_icon sort_icon-loan_amount' id='sort_icon-loan_amount'></div>
                                <div class='sort_icon sort_icon-reset_amount hiden' id='sort_icon-reset_amount'></div>
                            </div>
                            <div class='id'>
                                ID
                            </div>
                            <div class='filter_rounds'>
                                <div class='filter_rounds-item filter_rounds-all' id='filter_rounds-all'></div>
                                <div class='filter_rounds-item filter_rounds-warning' id='filter_rounds-warning'></div>
                                <div class='filter_rounds-item filter_rounds-expired' id='filter_rounds-expired'></div>
                            </div>
                        </div>
    
                        <ul class='users_list' id='users_list'>
                            <li></li>
                        </ul>

                    </div>

                    <div class='search_modal hiden'>
                        <div class='search_modal-wrapper'>
                            <div class='icon_calendar hiden' id='icon_calendar'></div>
            
                            <div class='dynamic_search hiden'>
                                <form class='form_search' id='form_dynamic'>
                                    <input type='text' class='input input_search' name='input_search' placeholder='Что ищем?' />
                                    <div class='form_search-reset' id='form_search-reset'></div>
                                </form>
                            </div>
            
                            <div class='search_modal_close hiden' id='search_modal_close'></div>
            
                            <form class='icon_calendar-form hiden' id='icon_calendar-form'>
                                <div class='div_for_calendar-input'>
                                    
                                    <label for='input_date-start' class='span_for_calendar_form span_for_calendar_form-from'>
                                        с 
                                    </label>
                                    <input type='date' class='input input_date-search input_date-start' name='input_date-start' id='input_date-start' placeholder='дд/мм/год' autocomplete='on' />
                                </div>

                                <div class='div_for_calendar-input'>
                                    <label for='input_date-end' class='span_for_calendar_form span_for_calendar_form-to'>
                                        по 
                                    </label>
                                    <input type='date' class='input input_date-search input_date-end' name='input_date-end' id='input_date-end' autocomplete='on' />
                                </div>
                            
                                <button type='button' class='submit_search' id='submit_search'></button>
                            </form>
            
                            <div class='close_calendar-form hiden' id='close_calendar-form'></div>
                        </div>
                    </div>

                    <div class='icon_search_users' id='search'></div>

                    <div class='icon_modal_notification' id='icon_modal_notification'></div>

                    <div class='new_notification-indicator' id='indicator'>
                        <div class='background_for_notification hiden' id='background_for_notification'>
                            <div class='modal_notification'>
        
                                <div class='modal_notification-wrapper'>
                                    <div class='modal_notification-warning'>
                                        <div class='span_for_attention-list span_for_attention-list-warning'>
                                            Пользователи у которых заканчитвается срок:
                                        </div>
                                        <ul class='modal_notification-warning_list'></ul>
                                    </div>

                                    <div class='modal_notification-expired'>
                                        <div class='span_for_attention-list span_for_attention-list-expired'>
                                            Пользователи у которых закончился срок:
                                        </div>
                                        <ul class='modal_notification-expired_list'></ul>
                                    </div>
                                </div>

                                <div class='wrapper_for_btn'>
                                    <button class='button btn_notification-hiden' id='btn_notification-hiden'>
                                        понятно
                                    </button>
                                </div>

                                <div class='modal_notification-close' id='modal_notification-close'></div>

                            </div>
                        </div>
                    </div>
    
                    <button class='button btn_add_new_user' id='btn_add_new_user'>
                        Добавить
                    </button>

                </div>

                <div class='modal_form_add_user-wrapper hiden' id='modal_form_add_user-wrapper'>
                    <div class='modal_form_add_user'>
    
                        <div class='close_modal_form_add_users' id='close_modal_form_add_users'></div>

                        <form class='form' id='form'>

                            <input required type='text' placeholder='Ваша фамилия' class='input input_user_surname' name='input_user_surname' autocomplete='on'/>
                            <input required type='text' placeholder='Ваше имя' class='input input_user_name' name='input_user_name' autocomplete='on'/>
                            <input required type='text' placeholder='Ваше отчество' class='input input_user_patronymic' name='input_user_patronymic' autocomplete='on'/>
                            <input required type='date' class='input input_loan_date' name='input_loan_date' autocomplete='on'/>
                            <input required type='date' class='input input_expiration_date' name='input_expiration_date' autocomplete='on'/>
                            <input required type='number' min='1' placeholder='Сумма займа' class='input input_loan_amount' name='input_loan_amount' autocomplete='on'/>

                            <button type='submit' class='button input submit' id='submit'>
                                подтвердить
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>`
    );
}

createMainHTML();



class User {
    
    constructor({userName, userPatronymic, userSurname, loanDate, expirationDate, loanAmount}) {
        this.userSurname = userSurname;
        this.userName = userName;
        this.userPatronymic = userPatronymic;
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
}

class APIService {
    
    addNewUser(user) {

        arrMyUsers.push(user);

        localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers); 
        
        modalAddUsers.classList.remove('active');
        modalAdminPanel.classList.add('active');

        filterAll();
    }

    // deleteUser() {
    //     // обратиться в localStorage/ найти объекты/ вытащить div remove/ удалить родительский объект/ записать новые данные в массив из localStorage/обновить список
    // }

    // editUser() {
    //     // обратиться в localStorage/ найти объекты/ вытащить div edit/ добраться к каждому ключу и изменить его значение/ записать новые данные в массив из localStorage/обновить список
    // }
}



const formElement = document.getElementById('form');
const formElementMini = document.getElementById('form_mini');

let formData = new FormData(formElement);
let formDataMini = new FormData(formElementMini);

const USER_FORM_FIELDS = {
    USER_SURNAME: 'input_user_surname',
    USER_NAME: 'input_user_name',
    USER_PATRONYMIC: 'input_user_patronymic',
    USER_LOAN_DATE: 'input_loan_date',
    USER_EXPIRATION_DATE: 'input_expiration_date',
    USER_LOAN_AMOUNT: 'input_loan_amount',
};
const LOCAL_STORAGE = {
    KEY: 'myUsers',
};
let user  = new User({
    userSurname: formData.get(USER_FORM_FIELDS.USER_SURNAME),
    userName: formData.get(USER_FORM_FIELDS.USER_NAME),
    userPatronymic: formData.get(USER_FORM_FIELDS.USER_PATRONYMIC),
    loanDate: formData.get(USER_FORM_FIELDS.USER_LOAN_DATE),
    expirationDate: formData.get(USER_FORM_FIELDS.USER_EXPIRATION_DATE),
    loanAmount: formData.get(USER_FORM_FIELDS.USER_LOAN_AMOUNT),
});

let arrMyUsers = [];
let warningUser = [];
let expiredUser = [];
let sortArr = [];
let id;
let idEditBtn;
let idRemoveBtn;
let searchId;
let indexOfUser;
let editUserVar;
let deleteUserVar;
let childElem;

const apiService = new APIService();

const showAllUsers = document.querySelector('.filter_rounds-all');
const showWarningUsers = document.querySelector('.filter_rounds-warning');
const showExpiredUsers = document.querySelector('.filter_rounds-expired');

const usersList = document.querySelector('.users_list');
const myUsersBtn = document.querySelector('.btn_show_my_users');

const modalAdminPanel = document.querySelector('.modal_main');
const closeModalAdminPanel = document.querySelector('.close_modal_main');

const addUsersBtn = document.querySelector('.btn_add_new_user');
const modalAddUsers = document.querySelector('.modal_form_add_user');
const closeModalAddUsers = document.querySelector('.close_modal_form_add_users');
const backgroundFormAddUser = document.querySelector('.modal_form_add_user-wrapper');

const notificationBtn = document.querySelector('.icon_modal_notification');
const notificationIndicator = document.querySelector('.new_notification-indicator');
const backgroundForNotification = document.querySelector('.background_for_notification');
const myModalNotification = document.querySelector('.modal_notification');
const myNotificationWrapper = document.querySelector('.modal_notification-wrapper');
const myNotificationWarning = document.querySelector('.modal_notification-warning');
const myNotificationExpired = document.querySelector('.modal_notification-expired');
const notificationWarningList = document.querySelector('.modal_notification-warning_list');
const notificationExpiredList = document.querySelector('.modal_notification-expired_list');
const btnHidenNotification = document.querySelector('.btn_notification-hiden');
const closeModalNotification = document.querySelector('.modal_notification-close');

const iconSearchUsers = document.querySelector('.icon_search_users');
const btnFilterAll = document.querySelector('.filter_rounds-all');
const btnFilterWarning = document.querySelector('.filter_rounds-warning');
const btnFilterExpired = document.querySelector('.filter_rounds-expired');

const iconSortBySurname = document.querySelector('.sort_icon-surname');
const iconSortByAddedDate = document.querySelector('.sort_icon-added_date');
const iconSortByLoanAmount = document.querySelector('.sort_icon-loan_amount');

const iconSortResetSurname = document.querySelector('.sort_icon-reset_surname');
const iconSortResetAddedDate = document.querySelector('.sort_icon-reset_added_date');
const iconSortResetLoanAmount = document.querySelector('.sort_icon-reset_amount');

const inputEditSurname = document.querySelector('.input_edit_user_surname');
const inputEditName = document.querySelector('.input_edit_user_name');
const inputEditpatroniymic = document.querySelector('.input_edit_user_patronymic');
const inputEditLoanDate = document.querySelector('.input_edit_loan_date');
const inputEditExpDate = document.querySelector('.input_edit_expiration_date');
const inputEditLoanAmount = document.querySelector('.input_edit_loan_amount');
const modalEditUser = document.querySelector('.modal_edit_user');
const closeModalEditUser = document.querySelector('.close_modal_edit_user');
const btnSubmitEdit = document.querySelector('.submit_edit');

const searchModal = document.querySelector('.search_modal');
const iconCalendar = document.querySelector('.icon_calendar');
const dynamicSearch = document.querySelector('.dynamic_search'); 
const formDynamicSubmit = document.querySelector('.form_search');
const inputSearch = document.querySelector('.input_search');
const closeSearchForm = document.querySelector('.search_modal_close');
const resetFormSearch = document.querySelector('.form_search-reset');

const dateSerachForm = document.querySelector('.icon_calendar-form');
const inputDateStart = document.querySelector('.input_date-start');
const inputDateEnd = document.querySelector('.input_date-end');
const btnSubmitSearch = document.querySelector('.submit_search');
const formDateSubmit = document.querySelector('.icon_calendar-form');
const closeDateSearchForm = document.querySelector('.close_calendar-form');

const modalSubmitDelete = document.querySelector('.modal_submit-delete');
const spanForUserDelete = document.querySelector('.modal_submit-delete-user');



// function deleteUser(remove, arrUsers) { // users, key

//     remove.forEach((indexBtnRemove, i) => {

//         indexBtnRemove.addEventListener('click', () => {

//             indexBtnRemove.parentElement.remove();
            
//             arrUsers.splice(i, 1);

//             localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrUsers.reverse());

//             parseLSInArr();

//             createUsersList(arrUsers.reverse(), usersList);
//         });
//     });
// }

// function editUserSubmit(user, indexBtn) { // key, formData, modalEditUser, closeModalAdminPanel, addUsersBtn

//     formData = new FormData(formElementMini);

//     user.userSurname = formData.get('input_edit_user_surname') || user.userSurname;
//     user.userName = formData.get('input_edit_user_name') || user.userName;
//     user.userPatronymic = formData.get('input_edit_user_patronymic') || user.userPatronymic;
//     user.loanDate = formData.get('input_edit_loan_date') || user.loanDate;
//     user.expirationDate = formData.get('input_edit_expiration_date') || user.expirationDate;
//     user.loanAmount = formData.get('input_edit_loan_amount') || user.loanAmount;

//     localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers);

//     // indexBtn.parentElement.style.background='';

//     modalEditUser.classList.add('hiden');
//     closeModalAdminPanel.classList.remove('hiden');
//     addUsersBtn.classList.remove('hiden');

//     warningUser = []; 
//     expiredUser = [];
//     arrMyUsers = [];

//     arrMyUsers = JSON.parse(localStorage[LOCAL_STORAGE.KEY]);

//     createUsersList(arrMyUsers.reverse(), usersList);
// }

// function checkDateAttention(arrUsers) { // добавить в другую функцию

//     parseLSInArr();

//     arrUsers.forEach((user, i) => {

//         let dateNow = Date.now();
//         let getEndDateInSec = Date.parse(user.expirationDate);
//         let threeDaysInSec = 259200000;
//         let stringOfUser = document.querySelectorAll('.each_user');

//         if (getEndDateInSec <= dateNow) {
//             expiredUser.push(user);
//             stringOfUser[i].classList.remove('each_warning');
//             stringOfUser[i].classList.add('each_expired');
//         } else if (getEndDateInSec <= (dateNow + threeDaysInSec)) {
//             warningUser.push(user);
//             stringOfUser[i].classList.remove('each_expired');
//             stringOfUser[i].classList.add('each_warning');
//         } else if (getEndDateInSec >= dateNow) {
//             stringOfUser[i].classList.remove('each_warning');
//             stringOfUser[i].classList.remove('each_expired');
//         }
//     });
// }

// function createUsersList(arrUsers, parent) {

//     parent.innerHTML = '';

//     createUserString(arrUsers, parent);

//     // const removeIcon = document.querySelectorAll('.icon_remove');
//     // const editIcon = document.querySelectorAll('.icon_edit');

//     // deleteUser(removeIcon, arrUsers);

//     // editUser(editIcon, arrUsers);

//     checkDateAttention(arrUsers);
// }

// function showNotificationList() { // notifBtn, arr, ulList
    
//     notificationBtn.addEventListener('click', (e) => {
//         e.preventDefault();

//         modalAdminPanel.classList.remove('active');
//         backgroundForNotification.classList.remove('hiden');
//         notificationBtn.classList.add('hiden');
//         notificationIndicator.classList.add('hiden');

//         function createNotificationlist(arr, ulList) {

//             ulList.innerHTML = '';
        
//             arr.forEach((user, i) => {
        
//                 ulList.innerHTML += `
//                     <li class='attention_notification'>
        
//                         <span class='attention_user-index'>
//                             ${i + 1}.
//                         </span>
        
//                         <span class='attention_user-full_name'>
//                             ${user.userSurname}
//                             ${user.userName.substring(0, 1)}.
//                             ${user.userPatronymic.substring(0, 1)}.
//                         </span>
//                     </li>
//                 `;
//             });
//         }

//         createNotificationlist(warningUser, notificationWarningList);
//         createNotificationlist(expiredUser, notificationExpiredList);

//     });
// }

// function showNotificationList() { // notifBtn, arr, ulList

//     modalAdminPanel.classList.remove('active');
//     backgroundForNotification.classList.remove('hiden');
//     notificationBtn.classList.add('hiden');
//     notificationIndicator.classList.add('hiden');

//     function createNotificationlist(arr, ulList) {

//         ulList.innerHTML = '';
    
//         arr.forEach((user, i) => {
    
//             ulList.innerHTML += `
//                 <li class='attention_notification'>
    
//                     <span class='attention_user-index'>
//                         ${i + 1}.
//                     </span>
    
//                     <span class='attention_user-full_name'>
//                         ${user.userSurname}
//                         ${user.userName.substring(0, 1)}.
//                         ${user.userPatronymic.substring(0, 1)}.
//                     </span>
//                 </li>
//             `;
//         });
//     }

//     createNotificationlist(warningUser, notificationWarningList);
//     createNotificationlist(expiredUser, notificationExpiredList);
// }
// function closeNotificationModal() {
//     modalAdminPanel.classList.add('active');
//     backgroundForNotification.classList.add('hiden');
//     notificationBtn.classList.remove('hiden');
//     notificationIndicator.classList.remove('hiden');
    
//     filterAll();
// }

// function showModalForm() { // btnAdd, modal, mainModal

//     addUsersBtn.addEventListener('click', (e) => {
//         e.preventDefault();

//         backgroundFormAddUser.classList.remove('hiden');
//         modalAddUsers.classList.add('active');
//         modalAdminPanel.classList.remove('active');

//         searchModal.classList.add('hiden');
//         dateSerachForm.classList.add('hiden');
//         closeDateSearchForm.classList.add('hiden');
        
//     });
// }

// function closeModalForm() { // одинаковые функции showModalForm() // closeBtn, modal, mainModal

//     closeModalAddUsers.addEventListener('click', (e) => {
//         e.preventDefault();

//         backgroundFormAddUser.classList.add('hiden');
//         modalAdminPanel.classList.add('active');
//         modalAddUsers.classList.remove('active');

//         iconSearchUsers.classList.remove('hiden');
//     });
// }

// function hideIconForSort(iconS, iconAD, iconLA, iconRS, iconRAD, iconRLA) {

//     iconS.classList.remove('hiden');
//     iconAD.classList.remove('hiden');
//     iconLA.classList.remove('hiden');

//     iconRS.classList.remove('hiden');
//     iconRAD.classList.remove('hiden');
//     iconRLA.classList.remove('hiden');

//     iconS.classList.add('hiden');
//     iconAD.classList.add('hiden');
//     iconLA.classList.add('hiden');

//     iconRS.classList.add('hiden');
//     iconRAD.classList.add('hiden');
//     iconRLA.classList.add('hiden');
// }

// function filterAll() { // btnFilter, parent, iconS, iconAD, iconLA, iconRS, iconRAD, iconRLA 
//     btnFilterAll.addEventListener('click', (e) => {
//         e.preventDefault();

//         usersList.classList.remove('users_list-warning');
//         usersList.classList.remove('users_list-expired');

//         warningUser = [];
//         expiredUser = [];

//         iconSortBySurname.classList.remove('hiden');
//         iconSortByAddedDate.classList.remove('hiden');
//         iconSortByLoanAmount.classList.remove('hiden');

//         iconSortResetSurname.classList.add('hiden');
//         iconSortResetAddedDate.classList.add('hiden');
//         iconSortResetLoanAmount.classList.add('hiden');

//         iconSortBySurname.classList.remove('active');
//         iconSortByLoanAmount.classList.remove('active');
//         iconSortByAddedDate.classList.add('active');

//         parseLSInArr(); // проверить
//         createUsersList(arrMyUsers.reverse(), usersList);
//     });
// }

// function filterWarning() { // btnFilter, parent, warArr, iconS, iconAD, iconLA, iconRS, iconRAD, iconRLA

//     btnFilterWarning.addEventListener('click', (e) => {
//         e.preventDefault();

//         usersList.innerHTML = '';

//         usersList.classList.add('users_list-warning');
//         usersList.classList.remove('users_list-expired');
        
//         hideIconForSort(iconSortBySurname, iconSortByAddedDate, iconSortByLoanAmount, iconSortResetSurname, iconSortResetAddedDate, iconSortResetLoanAmount);
        
//         createUserString(warningUser, usersList);
//     });
// }

// function filterExpired() { // btnFilter, parent, expArr, iconS, iconAD, iconLA, iconRS, iconRAD, iconRLA

//     btnFilterExpired.addEventListener('click', (e) => {
//         e.preventDefault();

//         usersList.innerHTML = '';

//         usersList.classList.remove('users_list-warning');
//         usersList.classList.add('users_list-expired');

//         hideIconForSort(iconSortBySurname, iconSortByAddedDate, iconSortByLoanAmount, iconSortResetSurname, iconSortResetAddedDate, iconSortResetLoanAmount);

//         createUserString(expiredUser, usersList);
//     });
// }





// function formModalSubmit() { // (form, formData, api, users, parent) // formElement, formData, apiService, usersList 

//     formData = new FormData(formElement);

//     user = new User({
//         userSurname: formData.get(USER_FORM_FIELDS.USER_SURNAME),
//         userName: formData.get(USER_FORM_FIELDS.USER_NAME),
//         userPatronymic: formData.get(USER_FORM_FIELDS.USER_PATRONYMIC),
//         loanDate: formData.get(USER_FORM_FIELDS.USER_LOAN_DATE),
//         expirationDate: formData.get(USER_FORM_FIELDS.USER_EXPIRATION_DATE),
//         loanAmount: formData.get(USER_FORM_FIELDS.USER_LOAN_AMOUNT),
//     }); 

//     backgroundFormAddUser.classList.add('hiden');
//     apiService.addNewUser(user);
//     formElement.reset();
//     searchUsers();
//     parseLSInArr();
//     createUsersList(arrMyUsers.reverse(), usersList);
// }

// const idUsersList = 'users_list';



function parseLSInArr() { // users, key

    if (localStorage[LOCAL_STORAGE.KEY]) {
        
        arrMyUsers = [];
        arrMyUsers = JSON.parse(localStorage[LOCAL_STORAGE.KEY]);

    } else {

        console.log('parse fall');
    }
}
function createUserString(arrUsers, parent) {

    arrUsers.forEach((user, i) => {

        parent.innerHTML += `
            <li class="each_user">

                <span class='each_user-index'>
                    ${i + 1}.
                </span>

                <span class='each_user-user_name' data-tooltip="
                    ${user.userSurname}
                    ${user.userName} 
                    ${user.userPatronymic} 
                ">
                    ${user.userSurname}
                    ${user.userName.substring(0, 1)}. 
                    ${user.userPatronymic.substring(0, 1)}. 
                </span>

                <span class='each_user-loan_date'>
                    ${user.loanDate}
                </span>

                <span class='each_user-expiration_date'>
                    ${user.expirationDate}
                </span>

                <span class='each_user-date_added'>
                    ${user.dateAdded}
                </span>

                <span class='each_user-loan_amount'>
                    ${user.loanAmount}$
                </span>

                <span class='each_user-user_id'>
                    #${user.userId}
                </span>

                <div class='icon_edit icon_edit_${user.userId}' id='icon_edit_${user.userId}'></div> 
                <div class='icon_remove icon_remove_${user.userId}' id='icon_remove_${user.userId}'></div> 
            </li>
        `;
    });
}
function cancelDeleteUser() {

    childElem.parentElement.style.background="";
    modalSubmitDelete.classList.add('hiden');
    spanForUserDelete.innerHTML = '';
}
function deleteUser() { // users, key

    // modalAdminPanel.classList.remove('active');
    // myUsersBtn.classList.add('hiden');

    childElem.parentElement.style.background="";

    childElem.parentElement.remove();
            
    arrMyUsers.splice(indexOfUser, 1);

    localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers); // шевченко галивец рябичев

    parseLSInArr();

    createUsersList(arrMyUsers.reverse(), usersList);

    cancelDeleteUser();

}
function addUserInModalSubmitForDelete(user) {

    spanForUserDelete.innerHTML = `
        ${user.userSurname} 
        ${user.userName.substring(0, 1)}.
        ${user.userPatronymic.substring(0, 1)}.
        ?
    `;
}
function choseUserForDelete() {

    searchId = id.substring(12, 22);
    indexOfUser = arrMyUsers.findIndex(user => user.userId === searchId);
    deleteUserVar = arrMyUsers[indexOfUser];

    childElem = document.querySelector(`.icon_remove_${searchId}`);

    childElem.parentElement.style.background="rgb(165, 165, 165)"; // доделать

    modalSubmitDelete.classList.remove('hiden');
    addUserInModalSubmitForDelete(deleteUserVar);
}
function editUserSubmit(user, indexBtn) { // key, formData, modalEditUser, closeModalAdminPanel, addUsersBtn

    formData = new FormData(formElementMini);

    user.userSurname = formData.get('input_edit_user_surname') || user.userSurname;
    user.userName = formData.get('input_edit_user_name') || user.userName;
    user.userPatronymic = formData.get('input_edit_user_patronymic') || user.userPatronymic;
    user.loanDate = formData.get('input_edit_loan_date') || user.loanDate;
    user.expirationDate = formData.get('input_edit_expiration_date') || user.expirationDate;
    user.loanAmount = formData.get('input_edit_loan_amount') || user.loanAmount;

    localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers);

    modalEditUser.classList.add('hiden');
    closeModalAdminPanel.classList.remove('hiden');
    addUsersBtn.classList.remove('hiden');

    warningUser = []; 
    expiredUser = [];
    arrMyUsers = [];

    arrMyUsers = JSON.parse(localStorage[LOCAL_STORAGE.KEY]);

    createUsersList(arrMyUsers.reverse(), usersList);

    // btnSubmitEdit.addEventListener('submit', (e) => {
    //     e.preventDefault();
    // });
}
function editUser() {

    modalAdminPanel.classList.add('edit');

    parseLSInArr();

    searchId = id.substring(10, 21);
    indexOfUser = arrMyUsers.findIndex(user => user.userId === searchId);
    editUserVar = arrMyUsers[indexOfUser];

    childElem = document.querySelector(`.icon_edit_${searchId}`);

    childElem.parentElement.style.background="rgb(165, 165, 165)";

    modalEditUser.classList.remove('hiden');
    closeModalAdminPanel.classList.add('hiden');
    addUsersBtn.classList.add('hiden');

    inputEditSurname.value = editUserVar.userSurname;
    inputEditSurname.setAttribute('value', inputEditSurname.value);

    inputEditName.value = editUserVar.userName;
    inputEditName.setAttribute('value', inputEditName.value);

    inputEditpatroniymic.value = editUserVar.userPatronymic;
    inputEditpatroniymic.setAttribute('value', inputEditpatroniymic.value);

    inputEditLoanDate.value = editUserVar.loanDate;
    inputEditLoanDate.setAttribute('value', inputEditLoanDate.value);

    inputEditExpDate.value = editUserVar.expirationDate;
    inputEditExpDate.setAttribute('value', inputEditExpDate.value);

    inputEditLoanAmount.value = editUserVar.loanAmount;
    inputEditLoanAmount.setAttribute('value', inputEditLoanAmount.value);
}
function submitEditUser() {

    editUserSubmit(editUserVar, idEditBtn);

    childElem.parentElement.style.background="";

    modalAdminPanel.classList.remove('edit');
    modalEditUser.classList.add('hiden');

}
function closeEditUser() {

    childElem.parentElement.style.background="";

    modalEditUser.classList.add('hiden');
    closeModalAdminPanel.classList.remove('hiden');
    addUsersBtn.classList.remove('hiden');
    modalAdminPanel.classList.remove('edit');
}
function checkDateAttention(arrUsers) { // добавить в другую функцию

    parseLSInArr();

    arrUsers.forEach((user, i) => {

        let dateNow = Date.now();
        let getEndDateInSec = Date.parse(user.expirationDate);
        let threeDaysInSec = 259200000;
        let stringOfUser = document.querySelectorAll('.each_user');

        if (getEndDateInSec <= dateNow) {
            expiredUser.push(user);
            stringOfUser[i].classList.remove('each_warning');
            stringOfUser[i].classList.add('each_expired');
        } else if (getEndDateInSec <= (dateNow + threeDaysInSec)) {
            warningUser.push(user);
            stringOfUser[i].classList.remove('each_expired');
            stringOfUser[i].classList.add('each_warning');
        } else if (getEndDateInSec >= dateNow) {
            stringOfUser[i].classList.remove('each_warning');
            stringOfUser[i].classList.remove('each_expired');
        }
    });
}
function createUsersList(arrUsers, parent) {

    parent.innerHTML = '';

    createUserString(arrUsers, parent);

    // const removeIcon = document.querySelectorAll('.icon_remove');
    // const editIcon = document.querySelectorAll('.icon_edit');

    // deleteUser(removeIcon, arrUsers);

    // editUser(editIcon, arrUsers);

    checkDateAttention(arrUsers);
}
function createNotificationlist(arr, ulList) {

    ulList.innerHTML = '';

    arr.forEach((user, i) => {

        ulList.innerHTML += `
            <li class='attention_notification'>

                <span class='attention_user-index'>
                    ${i + 1}.
                </span>

                <span class='attention_user-full_name'>
                    ${user.userSurname}
                    ${user.userName.substring(0, 1)}.
                    ${user.userPatronymic.substring(0, 1)}.
                </span>

                <div class='icon_search icon_search_${user.userId}' id='icon_search_${user.userId}'></div>

                <div class='icon_remove icon_remove_${user.userId}' id='icon_remove_${user.userId}'></div>
            </li>
        `;
    });
}
function showNotificationList() { // notifBtn, arr, ulList

    modalAdminPanel.classList.remove('active');
    backgroundForNotification.classList.remove('hiden');
    notificationBtn.classList.add('hiden');
    notificationIndicator.classList.add('hiden');

    createNotificationlist(warningUser, notificationWarningList);
    createNotificationlist(expiredUser, notificationExpiredList);
}
function closeNotificationModal() {
    modalAdminPanel.classList.add('active');
    backgroundForNotification.classList.add('hiden');
    notificationBtn.classList.remove('hiden');
    notificationIndicator.classList.remove('hiden');
    
    filterAll();
}
function openMainModal() {

    modalAdminPanel.classList.add('active');
    myUsersBtn.classList.add('hiden');

    iconSortByAddedDate.classList.add('active');
    iconSortBySurname.classList.remove('active');
    iconSortByLoanAmount.classList.remove('active');
    iconSortResetSurname.classList.remove('active');
    iconSortResetAddedDate.classList.remove('active');
    iconSortResetLoanAmount.classList.remove('active');

    parseLSInArr();
    createUsersList(arrMyUsers.reverse(), usersList);
}
function closeMainModal() { // warArr, expArr // closeBtn, modal, mainBtn // ready

    usersList.classList.remove('users_list-warning');
    usersList.classList.remove('users_list-expired');

    modalAdminPanel.classList.remove('active');
    myUsersBtn.classList.remove('hiden');
    warningUser = [];
    expiredUser = [];

    filterAll();
}
function showModalForm() { // btnAdd, modal, mainModal

    backgroundFormAddUser.classList.remove('hiden');
    modalAddUsers.classList.add('active');
    modalAdminPanel.classList.remove('active');

    searchModal.classList.add('hiden');
    dateSerachForm.classList.add('hiden');
    closeDateSearchForm.classList.add('hiden');

}
function closeModalForm() { // одинаковые функции showModalForm() // closeBtn, modal, mainModal

    backgroundFormAddUser.classList.add('hiden');
    modalAdminPanel.classList.add('active');
    modalAddUsers.classList.remove('active');

    iconSearchUsers.classList.remove('hiden');
}



function formModalSubmit() { // (form, formData, api, users, parent) // formElement, formData, apiService, usersList 

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();

        formData = new FormData(formElement);

        user = new User({
            userSurname: formData.get(USER_FORM_FIELDS.USER_SURNAME),
            userName: formData.get(USER_FORM_FIELDS.USER_NAME),
            userPatronymic: formData.get(USER_FORM_FIELDS.USER_PATRONYMIC),
            loanDate: formData.get(USER_FORM_FIELDS.USER_LOAN_DATE),
            expirationDate: formData.get(USER_FORM_FIELDS.USER_EXPIRATION_DATE),
            loanAmount: formData.get(USER_FORM_FIELDS.USER_LOAN_AMOUNT),
        }); 

        backgroundFormAddUser.classList.add('hiden');
        apiService.addNewUser(user);
        formElement.reset();

        searchUsers();
        parseLSInArr();
        createUsersList(arrMyUsers.reverse(), usersList);
    });
}

// function formModalSubmit() { // (form, formData, api, users, parent) // formElement, formData, apiService, usersList 

    
//     formData = new FormData(idForm);

//     user = new User({
//         userSurname: formData.get(USER_FORM_FIELDS.USER_SURNAME),
//         userName: formData.get(USER_FORM_FIELDS.USER_NAME),
//         userPatronymic: formData.get(USER_FORM_FIELDS.USER_PATRONYMIC),
//         loanDate: formData.get(USER_FORM_FIELDS.USER_LOAN_DATE),
//         expirationDate: formData.get(USER_FORM_FIELDS.USER_EXPIRATION_DATE),
//         loanAmount: formData.get(USER_FORM_FIELDS.USER_LOAN_AMOUNT),
//     }); 

//     backgroundFormAddUser.classList.add('hiden');
//     apiService.addNewUser(user);
//     formElement.reset();

//     searchUsers();
//     parseLSInArr();
//     createUsersList(arrMyUsers.reverse(), usersList);
// }



function hideIconForSort(iconS, iconAD, iconLA, iconRS, iconRAD, iconRLA) {

    iconS.classList.remove('hiden');
    iconAD.classList.remove('hiden');
    iconLA.classList.remove('hiden');

    iconRS.classList.remove('hiden');
    iconRAD.classList.remove('hiden');
    iconRLA.classList.remove('hiden');

    iconS.classList.add('hiden');
    iconAD.classList.add('hiden');
    iconLA.classList.add('hiden');

    iconRS.classList.add('hiden');
    iconRAD.classList.add('hiden');
    iconRLA.classList.add('hiden');
}
function filterAll() { // btnFilter, parent, iconS, iconAD, iconLA, iconRS, iconRAD, iconRLA 

    usersList.classList.remove('users_list-warning');
    usersList.classList.remove('users_list-expired');

    warningUser = [];
    expiredUser = [];

    iconSortBySurname.classList.remove('hiden');
    iconSortByAddedDate.classList.remove('hiden');
    iconSortByLoanAmount.classList.remove('hiden');

    iconSortResetSurname.classList.add('hiden');
    iconSortResetAddedDate.classList.add('hiden');
    iconSortResetLoanAmount.classList.add('hiden');

    iconSortBySurname.classList.remove('active');
    iconSortByLoanAmount.classList.remove('active');
    iconSortByAddedDate.classList.add('active');

    parseLSInArr();
    createUsersList(arrMyUsers.reverse(), usersList);
}
function filterWarning() { // btnFilter, parent, warArr, iconS, iconAD, iconLA, iconRS, iconRAD, iconRLA

    usersList.innerHTML = '';

    usersList.classList.add('users_list-warning');
    usersList.classList.remove('users_list-expired');
    
    hideIconForSort(iconSortBySurname, iconSortByAddedDate, iconSortByLoanAmount, iconSortResetSurname, iconSortResetAddedDate, iconSortResetLoanAmount);
    
    createUserString(warningUser, usersList);
}
function filterExpired() { // btnFilter, parent, expArr, iconS, iconAD, iconLA, iconRS, iconRAD, iconRLA

    usersList.innerHTML = '';

    usersList.classList.remove('users_list-warning');
    usersList.classList.add('users_list-expired');

    hideIconForSort(iconSortBySurname, iconSortByAddedDate, iconSortByLoanAmount, iconSortResetSurname, iconSortResetAddedDate, iconSortResetLoanAmount);

    createUserString(expiredUser, usersList);

}



function searchUsers() { // iconSearch, btnAdd, closeBtnModal, users, parent // users, key, arrWar, arrExp // iconSearchUsers, addUsersBtn, closeModalAddUsers, arrMyUsers, usersList, 

    if (!localStorage[LOCAL_STORAGE.KEY]) {

        iconSearchUsers.classList.add('hiden');

    } else if (localStorage[LOCAL_STORAGE.KEY]) {

        iconSearchUsers.classList.remove('hiden');

        iconSearchUsers.addEventListener('click', (e) => {
            e.preventDefault();

            warningUser = [];
            expiredUser = [];

            iconSearchUsers.classList.add('hiden');
            notificationBtn.classList.add('hiden');
            notificationIndicator.classList.add('hiden');

            iconCalendar.classList.remove('hiden');
            searchModal.classList.remove('hiden');
            dynamicSearch.classList.remove('hiden');
            closeSearchForm.classList.remove('hiden');

            function resetFormSearchNow() { // parent

                resetFormSearch.addEventListener('click', (e) => {
                    e.preventDefault();

                    formDynamicSubmit.reset();
                    createUsersList(arrMyUsers.reverse(), usersList);
                });
            }
            
            // поиск по датам - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            iconCalendar.addEventListener('click', (e) => {
                e.preventDefault();
    
                closeDateSearchForm.classList.remove('hiden');
                iconCalendar.classList.add('hiden');
                closeSearchForm.classList.add('hiden');
                dateSerachForm.classList.remove('hiden');
                dynamicSearch.classList.add('hiden');
                formDynamicSubmit.reset();
    
                closeDateSearchForm.addEventListener('click', (e) => {
                    e.preventDefault();

                    formDynamicSubmit.reset();
                    iconSearchUsers.classList.remove('hiden');
                    dateSerachForm.classList.add('hiden');
                    closeDateSearchForm.classList.add('hiden');

                    notificationBtn.classList.remove('hiden');
                    notificationIndicator.classList.remove('hiden');

                    // parseLSInArr();
                    // createUsersList(arrMyUsers.reverse(), usersList);
                    filterAll();
                });
    
                formDateSubmit.addEventListener('submit', (e) => {
                    e.preventDefault();
    
                    const resultArrForDate = [];
                    parseLSInArr();
    
                    const dateA = Date.parse(`${inputDateStart.value}`);
                    const dateC = Date.parse(`${inputDateEnd.value}`);
    
                    arrMyUsers.forEach(user => {
    
                        const dateB = Date.parse(`${user.dateAdded}`);
    
                        if (dateB >= dateA && dateB <= dateC) {
    
                            resultArrForDate.push(user);
                            createUsersList(resultArrForDate, usersList);
                        }
    
                        formDateSubmit.reset();
                    });
                });
            });
    
            closeSearchForm.addEventListener('click', (e) => {
                e.preventDefault();
                
                usersList.classList.remove('users_list-warning');
                usersList.classList.remove('users_list-expired');

                notificationBtn.classList.remove('hiden');
                notificationIndicator.classList.remove('hiden');

                iconSearchUsers.classList.remove('hiden');
                searchModal.classList.add('hiden');

                formDynamicSubmit.reset();

                // parseLSInArr();
                // createUsersList(arrMyUsers.reverse(), usersList);
                filterAll();
            });
    

            // динамический поиск - - - - - - - - - - - - - - - - - - - - - - - - - -
            const findUsers = [];
            let arrFromLS = [];
    
            arrFromLS = JSON.parse(localStorage[LOCAL_STORAGE.KEY]);
            
            arrFromLS.reverse().forEach(user => {
                findUsers.push(user);
            });
    
            function getThisUsersByFullName(symbol, arr) {
                return arr.filter(elem => {
                    const regex = new RegExp(symbol, 'gi');
                    return elem.userSurname.match(regex) || elem.userName.match(regex) || elem.userPatronymic.match(regex);
                });
            }
    
            function getThisUsersLoanAmount(symbol, arr) {
    
                return arr.filter(elem => {
                    const regex = new RegExp(symbol, 'gi');
                    return elem.loanAmount.match(regex);
                });
            }
    
            function showUsers() {
    
                if (this.value == +(this.value)) {
                    
                    const getUsersLoanAmount = getThisUsersLoanAmount(this.value, arrFromLS);
                    createUsersList(getUsersLoanAmount, usersList);
                } else if (this.value == String(this.value)) {
    
                    const getUsersByFullNameVar = getThisUsersByFullName(this.value, arrFromLS);
                    createUsersList(getUsersByFullNameVar, usersList);
                }
            }
            
            inputSearch.addEventListener('change', showUsers);
            inputSearch.addEventListener('keyup', showUsers);
    
            formDynamicSubmit.addEventListener('submit', (e) => {
                e.preventDefault();
            });

            resetFormSearchNow();
        });
    }
}



function sortListBySurname() { // iconSort, users, parent, sortArr

    warningUser = [];
    expiredUser = [];

    iconSortBySurname.classList.add('hiden');
    iconSortResetSurname.classList.remove('hiden');

    iconSortByAddedDate.classList.remove('hiden');
    iconSortByLoanAmount.classList.remove('hiden');
    iconSortResetAddedDate.classList.add('hiden');
    iconSortResetLoanAmount.classList.add('hiden');

    iconSortResetSurname.classList.add('active');
    iconSortBySurname.classList.remove('active');
    iconSortResetAddedDate.classList.remove('active');
    iconSortByAddedDate.classList.remove('active');
    iconSortByLoanAmount.classList.remove('active');
    iconSortResetLoanAmount.classList.remove('active');

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
    sortArr = [];
}
function resetSortListBySurname() {

    warningUser = [];
    expiredUser = [];

    iconSortBySurname.classList.remove('hiden');
    iconSortResetSurname.classList.add('hiden');

    iconSortByAddedDate.classList.remove('hiden');
    iconSortByLoanAmount.classList.remove('hiden');
    iconSortResetAddedDate.classList.add('hiden');
    iconSortResetLoanAmount.classList.add('hiden');

    iconSortBySurname.classList.add('active');
    iconSortResetSurname.classList.remove('active');
    iconSortResetAddedDate.classList.remove('active');
    iconSortByAddedDate.classList.remove('active');
    iconSortByLoanAmount.classList.remove('active');
    iconSortResetLoanAmount.classList.remove('active');

    sortArr = arrMyUsers.sort(function (a, b) {
        if (b.userSurname > a.userSurname) {
            return 1;
        }
        if (b.userSurname < a.userSurname) {
            return -1;
        }
        return 0;
    });

    createUsersList(sortArr, usersList);
    sortArr = [];
}
function sortListByDateAded() { // iconSort, users, parent, sortArr

    warningUser = [];
    expiredUser = [];

    iconSortByAddedDate.classList.add('hiden');
    iconSortResetAddedDate.classList.remove('hiden');

    iconSortBySurname.classList.remove('hiden');
    iconSortByLoanAmount.classList.remove('hiden');
    iconSortResetSurname.classList.add('hiden');
    iconSortResetLoanAmount.classList.add('hiden');

    iconSortResetAddedDate.classList.add('active');
    iconSortByAddedDate.classList.remove('active');
    iconSortBySurname.classList.remove('active');
    iconSortResetSurname.classList.remove('active');
    iconSortByLoanAmount.classList.remove('active');
    iconSortResetLoanAmount.classList.remove('active');

    sortArr = arrMyUsers.sort(function (a, b) {
        let dateA = new Date(a.dateAdded);
        let dateB = new Date(b.dateAdded);
        
        return dateA - dateB;
    });

    createUsersList(sortArr, usersList);
    sortArr = [];
}
function resetSortListByDateAded() {
    
    warningUser = [];
    expiredUser = [];

    iconSortResetAddedDate.classList.add('hiden');
    iconSortByAddedDate.classList.remove('hiden');

    iconSortByAddedDate.classList.add('active');
    iconSortResetAddedDate.classList.remove('active');
    iconSortBySurname.classList.remove('active');
    iconSortResetSurname.classList.remove('active');
    iconSortByLoanAmount.classList.remove('active');
    iconSortResetLoanAmount.classList.remove('active');

    createUsersList(arrMyUsers.reverse(), usersList);

    sortArr = [];
}
function sortListByLoanAmount() { // iconSort, users, parent, sortArr, warArr, expArr
        
    warningUser = [];
    expiredUser = [];

    iconSortByLoanAmount.classList.add('hiden');
    iconSortResetLoanAmount.classList.remove('hiden');
    iconSortBySurname.classList.remove('hiden');
    iconSortByAddedDate.classList.remove('hiden');
    iconSortResetSurname.classList.add('hiden');
    iconSortResetAddedDate.classList.add('hiden');

    iconSortResetLoanAmount.classList.add('active');
    iconSortByLoanAmount.classList.remove('active');
    iconSortByAddedDate.classList.remove('active');
    iconSortResetAddedDate.classList.remove('active');
    iconSortBySurname.classList.remove('active');
    iconSortResetSurname.classList.remove('active');

    sortArr = arrMyUsers.sort((a, b) => Number(a.loanAmount) - Number(b.loanAmount));

    createUsersList(sortArr, usersList);

    sortArr = [];
}
function resetSortListByLoanAmount() {
    
    warningUser = [];
    expiredUser = [];

    iconSortResetLoanAmount.classList.add('hiden');
    iconSortByLoanAmount.classList.remove('hiden');
    iconSortBySurname.classList.remove('hiden');
    iconSortByAddedDate.classList.remove('hiden');
    iconSortResetSurname.classList.add('hiden');
    iconSortResetAddedDate.classList.add('hiden');

    iconSortByLoanAmount.classList.add('active');
    iconSortResetLoanAmount.classList.remove('active');
    iconSortByAddedDate.classList.remove('active');
    iconSortResetAddedDate.classList.remove('active');
    iconSortBySurname.classList.remove('active');
    iconSortResetSurname.classList.remove('active');

    sortArr = arrMyUsers.sort((a, b) => Number(b.loanAmount) - Number(a.loanAmount));

    createUsersList(sortArr, usersList);

    sortArr = [];
}



function runAll() {
    
    searchUsers();

    const idRoot = 'root';
    const idMyUsersBtn = 'btn_show_my_users';
    const idModalMainClose = 'close_modal_main';
    const idModalMain = 'modal_main';
    const idModalEditUser = 'modal_edit_user';
    const idCloseModalEditUser = 'close_modal_edit_user';
    const idFormMini = 'form_mini';
    const idSubmitEdit = 'submit_edit'; // submit
    const idUsersListHead = 'users_list-head';
    const idIconSortBySurname = 'sort_icon-surname';
    const idIconSortBySurnameReset = 'sort_icon-reset_surname';
    const idIconSortByDateAdded = 'sort_icon-added_date';
    const idIconSortByDateAddedReset = 'sort_icon-reset_added_date';
    const idIconSortByLoanAmount = 'sort_icon-loan_amount';
    const idIconSortByLoanAmountReset = 'sort_icon-reset_amount';
    const idFilterRoundsAll = 'filter_rounds-all';
    const idFilterRoundsWarning = 'filter_rounds-warning';
    const idFilterRoundsExpired = 'filter_rounds-expired';
    const idIconCalendar = 'icon_calendar';
    const idFormDynamic = 'form_dynamic';
    const idFormSearchReset = 'form_search-reset';
    const idSearchModalClose = 'search_modal_close';
    const idIconCalendarForm = 'icon_calendar-form';
    const idCloseCalendarForm = 'close_calendar-form';
    const idSubmitSearch = 'submit_search'; // submit
    const idSearch = 'search';
    const idIconModalNotification = 'icon_modal_notification';
    const idIndicator = 'indicator';
    const idBackgroundForNotification = 'background_for_notification';
    const idBtnNotificationHiden = 'btn_notification-hiden';
    const idModalNotificationClose = 'modal_notification-close';
    const idBtnAddNewUser = 'btn_add_new_user';
    const idModalFormAddUserWrapper = 'modal_form_add_user-wrapper';
    const idCloseModalFormAddUsers = 'close_modal_form_add_users';
    const idForm = 'form';
    const idSubmit = 'submit'; // submit
    const idModalSubmitDelete = 'modal_submit-delete';
    const idBtnDeleteNo = 'modal_submit-delete-button-no';
    const idBtnDeleteYes = 'modal_submit-delete-button-yes';


    
    const eventsHandlers = {
        [idMyUsersBtn]: openMainModal,
        [idRoot]: closeMainModal,
        [idModalMainClose]: closeMainModal,
        [idSubmitEdit]: submitEditUser,
        [idCloseModalEditUser]: closeEditUser,
        [idIconModalNotification]: showNotificationList,
        [idModalNotificationClose]: closeNotificationModal,
        [idBackgroundForNotification]: closeNotificationModal,
        [idBtnNotificationHiden]: closeNotificationModal,
        [idBtnAddNewUser]: showModalForm,
        [idCloseModalFormAddUsers]: closeModalForm,
        [idModalFormAddUserWrapper]: closeModalForm,
        [idFilterRoundsAll]: filterAll,
        [idFilterRoundsWarning]: filterWarning,
        [idFilterRoundsExpired]: filterExpired,
        // [idModalMain]: ,
        [idIconSortBySurname]: sortListBySurname,
        [idIconSortBySurnameReset]: resetSortListBySurname,
        [idIconSortByDateAdded]: sortListByDateAded,
        [idIconSortByDateAddedReset]: resetSortListByDateAded,
        [idIconSortByLoanAmount]: sortListByLoanAmount,
        [idIconSortByLoanAmountReset]: resetSortListByLoanAmount,
        // [idForm]: formModalSubmit,
        [idBtnDeleteYes]: deleteUser,
        [idBtnDeleteNo]: cancelDeleteUser,
        [idModalSubmitDelete]: cancelDeleteUser,
        
    }

    window.addEventListener('click', (e) => {
        // console.log(e.target.id);

        id = e.target.id;
        
        // if (e.target.id === idForm) { 
        //     console.log('ok')   
        //     e.preventDefault();
        // } else 
        if (id.substring(0, 10) === ('icon_edit_')) {
            idEditBtn = id;
            eventsHandlers[idEditBtn] = editUser;
        } else if (id.substring(0, 12) === ('icon_remove_')) {
            idRemoveBtn = id;
            eventsHandlers[idRemoveBtn] = choseUserForDelete;
        } 

        if (!eventsHandlers[id]) return;
        
        eventsHandlers[id]();
    });
}

runAll();


// объеденить все if else в wwindow.addeventlistener

// переделать переменные в универсальные id idBtn idUser

// submit сделать не работает e.preventDefault();

// все events переделать и останавливать где нужнока

// при попытке поиска юзера не показывает списки просроченных юзеров

// сделвть индикацию уведомлений

// вынести все константы в глобальную область и заменить на них константы по классам



// arrMyUsers.forEach((user, i) => {
//     if (e.target.id.substring(10, 21) == user.userId) {
//         console.log(i, user.userSurname, user.userName, user.userPatronymic, user.loanDate, user.expirationDate, user.loanAmount);
//     } else return;
// })


// let observer = new MutationObserver(MutationRecords => {
//     console.log(MutationRecords);

//     // const checkWarArr = warningUser;
//     // const checkExpArr = expiredUser;
//     // 
//     // if (checkWarArr !== warningUser) {
//     //     // красить индикатор в крассный
//     // } else if (checkExpArr !== expiredUser) {
//     //     // красить индикатор в крассный
//     // } else {
//     //     // красить индикатор в черный
//     // }

// });

// observer.observe(notificationWarningList, {
//     childList: true,
// });