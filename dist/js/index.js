function createMainHTML() { // closeModalAddUsers
    
    root.insertAdjacentHTML(
        
        'afterbegin',
    
        `<div class='container'>
            <div class='wrapper'>
    
                <button class='button btn_show_my_users' id='btn_show_my_users'>
                    Мои заемщики
                </button>
    
                <div class='modal_main' id=''modal_main>

                    <div class='modal_edit_user hidden'>

                        <div class='close_modal_edit_user'></div>
                
                        <form class='form_mini' id='form_mini'>
                        
                            <input type='text' placeholder='Фамилия' class='input input_edit input_edit_user_surname' name='input_edit_user_surname' autocomplete='on'/>            
                            <input type='text' placeholder='Имя' class='input input_edit input_edit_user_name' name='input_edit_user_name' autocomplete='on'/>
                            <input type='text' placeholder='Отчество' class='input input_edit input_edit_user_patronymic' name='input_edit_user_patronymic' autocomplete='on'/>
                            <input type='date' placeholder='' class='input input_edit input_edit_loan_date' name='input_edit_loan_date' autocomplete='on'/>
                            <input type='date' placeholder='' class='input input_edit input_edit_expiration_date' name='input_edit_expiration_date' autocomplete='on'/>
                            <input type='number' min='1' placeholder='Сумма займа' class='input input_edit input_edit_loan_amount' name='input_edit_loan_amount' autocomplete='on'/>
                        
                            <button type='submit' class='input input_edit submit_edit button'>
                                изменить
                            </button>
                        
                        </form>
                    </div>

                    <div class='close_modal_main'></div>
    
                    <div class='users_list-head'>
                        <div class='users_list-wrapper'>
                            <div class='index'>
                                №
                            </div>
                            <div class='full_name'>
                                ФИО
                                <div class='sort_icon sort_icon-surname'></div>
                                <div class='sort_icon sort_icon-reset_surname hiden'></div>
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
                                <div class='sort_icon sort_icon-reset_added_date hiden'></div>
                            </div>
                            <div class='loan_amount'>
                                Сумма
                                <div class='sort_icon sort_icon-loan_amount'></div>
                                <div class='sort_icon sort_icon-reset_amount hiden'></div>
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
    
                        <ul class='users_list'>
                            <li></li>
                        </ul>
                    </div>

                    <div class='icon_search_users' id='search'></div>

                    <div class='icon_modal_notification'></div>
                    <div class='new_notification-indicator' id='indicator'>

                        <div class='background_for_notification hiden'>
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
        
                                <div class='modal_notification-close'></div>

                            </div>
                        </div>
                    </div>
    
                    <button class='button btn_add_new_user'>
                        Добавить
                    </button>
    
                </div>
            
                <div class='modal_form_add_user'>
    
                    <div class='close_modal_form_add_users'></div>
    
                    <form class='form' id='form'>
    
                    <input required type='text' placeholder='Ваша фамилия' class='input input_user_surname' name='input_user_surname' autocomplete='on'/>
                        <input required type='text' placeholder='Ваше имя' class='input input_user_name' name='input_user_name' autocomplete='on'/>
                        <input required type='text' placeholder='Ваше отчество' class='input input_user_patronymic' name='input_user_patronymic' autocomplete='on'/>
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
};

class APIService { // TODO: нужно все строяные элементы заменить на константы как сделано с формой
    
    addNewUser(user) {

        arrMyUsers.push(user);

        localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers); 
        
        modalAddUsers.classList.remove('active');
        modalAdminPanel.classList.add('active');

        filterAll(arrMyUsers.reverse());
    }

    deleteUser() {
        // обратиться в localStorage/ найти объекты/ вытащить div remove/ удалить родительский объект/ записать новые данные в массив из localStorage/обновить список
    }

    editUser() {
        // обратиться в localStorage/ найти объекты/ вытащить div edit/ добраться к каждому ключу и изменить его значение/ записать новые данные в массив из localStorage/обновить список
    }
};

class MyVariables {

    formElement() {
        const formElement = document.getElementById('form');
        return formElement;
    }

}

const myVariables = new MyVariables();

const formElement = myVariables.formElement(); // можно напрямую использовать без создания новыъ констант






// const formElement = document.getElementById('form');

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

const notificationBtn = document.querySelector('.icon_modal_notification');
const notificationIndicator = document.querySelector('.new_notification-indicator');
const backgroundForNotification = document.querySelector('.background_for_notification');
const myModalNotification = document.querySelector('.modal_notification');
const myNotificationWrapper = document.querySelector('.modal_notification-wrapper');
const myNotificationWarning = document.querySelector('.modal_notification-warning');
const myNotificationExpired = document.querySelector('.modal_notification-expired');
const notificationWarningList = document.querySelector('.modal_notification-warning_list');
const notificationExpiredList = document.querySelector('.modal_notification-expired_list');
const closeModalNotification = document.querySelector('.modal_notification-close');

const iconSearchUsers = document.querySelector('.icon_search_users');
const btnFilterAll = document.querySelector('.filter_rounds-all');
const btnFilterWarning = document.querySelector('.filter_rounds-warning');
const btnFilterexpired = document.querySelector('.filter_rounds-expired');

const iconSortBySurname = document.querySelector('.sort_icon-surname'); // эта копопка
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
// const inputEditAll = document.querySelectorAll('.input_edit');


// warningUser = [{
//     c: 2,
// }];

// expiredUser = [{
//     d: 3,
// }];
let observer = new MutationObserver(MutationRecords => {
    console.log(MutationRecords);

    // const checkWarArr = warningUser;
    // const checkExpArr = expiredUser;
    // 
    // if (checkWarArr !== warningUser) {
    //     // красить индикатор в крассный
    // } else if (checkExpArr !== expiredUser) {
    //     // красить индикатор в крассный
    // } else {
    //     // красить индикатор в черный
    // }

});

observer.observe(notificationWarningList, {
    childList: true,
});


function parseLSInArr() {

    if (localStorage[LOCAL_STORAGE.KEY]) {
        
        arrMyUsers = [];
        arrMyUsers = JSON.parse(localStorage[LOCAL_STORAGE.KEY]);
    }
}




function createUserString(users, parent) {

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

function deleteUser(remove, users) { // тут исправить

    remove.forEach((btn, i) => { // indexBtnRemove

        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            users.splice(i, 1);
            localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(arrMyUsers); // usres
            filterAll(arrMyUsers.reverse()); // users
        });
    });
}

function editUserSubmit(form, formData, user, indexBtn, users, parent) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log('click submit ===>', user);

        formData = new FormData(form);

        Object.defineProperty(user, 'userSurname', {
            value: formData.get('input_edit_user_surname') || user.userSurname
        });
        Object.defineProperty(user, 'userName', {
            value: formData.get('input_edit_user_name') || user.userName
        });
        Object.defineProperty(user, 'userPatronymic', {
            value: formData.get('input_edit_user_patronymic') || user.userPatronymic
        });
        Object.defineProperty(user, 'loanDate', {
            value: formData.get('input_edit_loan_date') || user.loanDate
        });
        Object.defineProperty(user, 'expirationDate', {
            value: formData.get('input_edit_expiration_date') || user.expirationDate
        });
        Object.defineProperty(user, 'loanAmount', {
            value: formData.get('input_edit_loan_amount') || user.loanAmount
        });

        indexBtn.parentElement.style.background='';

        modalEditUser.classList.add('hidden');
        closeModalAdminPanel.classList.remove('hidden');
        addUsersBtn.classList.remove('hidden');

        localStorage[LOCAL_STORAGE.KEY] = JSON.stringify(users);

        warningUser = [];
        expiredUser = [];
        parseLSInArr();
        createUsersList(users, parent);

        console.log('click submit2 ===>', user);

    });
}

function closeScript(form, indexBtn, closeBtn, btnAdd, modal) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    indexBtn.parentElement.style.background='';

    closeBtn.classList.remove('hidden');
    btnAdd.classList.remove('hidden');
    modal.classList.add('hidden');
}

function editUser(edit, users, parent) {// меняет только первого выбранного ползователя

    edit.forEach((btn, i) => {

        let editUserVar = users[i];

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            edit.forEach((line) => {
                line.parentElement.style.background = '';
            });

            btn.parentElement.style.background="rgb(165, 165, 165)";

            modalEditUser.classList.remove('hidden');
            closeModalAdminPanel.classList.add('hidden');
            addUsersBtn.classList.add('hidden');

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

            
            btnSubmitEdit.addEventListener('click', () => {
                editUserSubmit(formElementMini, formDataMini, editUserVar, btn, users, parent);
            });


            closeModalEditUser.addEventListener('click', () => {
                closeScript(formElementMini, btn, closeModalAdminPanel, addUsersBtn, modalEditUser);

                console.log('after close user[i] ===>', editUserVar);
            });
        });
    });
}

function checkDateAttention(users) { // добавить в другую функцию

    parseLSInArr();

    users.forEach((user, i) => {

        let dateNow = Date.now();
        let getEndDateInSec = Date.parse(user.expirationDate);
        let threeDaysInSec = 259200000;
        let stringOfUser = document.querySelectorAll('.each_user');

        if ((getEndDateInSec) <= dateNow) {
            expiredUser.push(user);
            stringOfUser[i].classList.remove('each_warning');
            stringOfUser[i].classList.add('each_expired');
        } else if (getEndDateInSec <= (dateNow + threeDaysInSec)) {
            warningUser.push(user);
            stringOfUser[i].classList.remove('each_expired');
            stringOfUser[i].classList.add('each_warning');
        }
    });
}

function createUsersList(users, parent) {

    parent.innerHTML = '';

    createUserString(users, parent);

    const removeIcon = document.querySelectorAll('.icon_remove');
    const editIcon = document.querySelectorAll('.icon_edit');

    deleteUser(removeIcon, users);

    editUser(editIcon, users, parent);

    checkDateAttention(users);
}



function createUsersListAttention(users, parent) {

    parent.innerHTML = '';

    createUserString(users, parent);

    const removeIcon = document.querySelectorAll('.icon_remove');
    const editIcon = document.querySelectorAll('.icon_edit');

    deleteUser(users, removeIcon);

    editUser(editIcon, users);
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
            </li>
        `;
    });
}

function showNotificationList(notifBtn, arr, ulList) {
    
    notifBtn.addEventListener('click', () => {

        backgroundForNotification.classList.remove('hiden');
        notifBtn.classList.add('hiden');
        notificationIndicator.classList.add('hiden');
    
        closeModalNotification.addEventListener('click', (e) => {
            e.preventDefault();

            // divSpan = '';

            backgroundForNotification.classList.add('hiden');
            notifBtn.classList.remove('hiden');
            notificationIndicator.classList.remove('hiden');
        });

        // checkDateAttention(arrMyUsers);
        createNotificationlist(arr, ulList);
    });
}



function showMainModal() { // mainBtn, modal, users, parent,

    myUsersBtn.addEventListener('click', (e) => {
        e.preventDefault();

        modalAdminPanel.classList.add('active');
        myUsersBtn.classList.add('hidden');
        parseLSInArr(); // users
        createUsersList(arrMyUsers.reverse(), usersList);
    });
}

function closeMainModal() { // closeBtn, modal, mainBtn, warArr, expArr

    closeModalAdminPanel.addEventListener('click', (e) => {
        e.preventDefault();

        modalAdminPanel.classList.remove('active');
        myUsersBtn.classList.remove('hidden');
        warningUser = [];
        expiredUser = [];
    });
}



function showModalForm() { // btnAdd, modal, mainModal

    addUsersBtn.addEventListener('click', (e) => {
        e.preventDefault();

        modalAddUsers.classList.add('active');
        modalAdminPanel.classList.remove('active');
    });
}

function closeModalForm() { // closeBtn, modal, mainModal

    closeModalAddUsers.addEventListener('click', (e) => {
        e.preventDefault();

        modalAddUsers.classList.remove('active');
        modalAdminPanel.classList.add('active');
    });
}



function formModalSubmit() { // form, formData, api, users, parent

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
        apiService.addNewUser(user);
        formElement.reset();
        searchUsers(); // проверить
        parseLSInArr();
        createUsersList(arrMyUsers.reverse(), usersList);
    });
}



function hideIconForSort() {
    iconSortBySurname.classList.remove('hiden');
    iconSortByAddedDate.classList.remove('hiden');
    iconSortByLoanAmount.classList.remove('hiden');

    iconSortResetSurname.classList.remove('hiden');
    iconSortResetAddedDate.classList.remove('hiden');
    iconSortResetLoanAmount.classList.remove('hiden');

    iconSortBySurname.classList.add('hiden');
    iconSortByAddedDate.classList.add('hiden');
    iconSortByLoanAmount.classList.add('hiden');

    iconSortResetSurname.classList.add('hiden');
    iconSortResetAddedDate.classList.add('hiden');
    iconSortResetLoanAmount.classList.add('hiden');
}

function filterAll() { // btnFilter, parent, warArr, expArr, users

    btnFilterAll.addEventListener('click', (e) => {
        e.preventDefault();

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

        parseLSInArr(); // проверить
        createUsersList(arrMyUsers.reverse(), usersList);
    });
}

function filterWarning() { // btnFilter, parent, warArr

    btnFilterWarning.addEventListener('click', (e) => {
        e.preventDefault();

        // sortArr = warningUser;

        usersList.innerHTML = '';

        usersList.classList.add('users_list-warning');
        usersList.classList.remove('users_list-expired');
        
        hideIconForSort();
        
        createUserString(warningUser, usersList);
        // usersList.style.background="rgba(255, 215, 51, 0.639)";
        // sortArr = [];
    });
}

function filterExpired() { // btnFilter, parent, expArr

    btnFilterexpired.addEventListener('click', (e) => {
        e.preventDefault();

        usersList.innerHTML = '';

        usersList.classList.remove('users_list-warning');
        usersList.classList.add('users_list-expired');

        hideIconForSort();

        createUserString(expiredUser, usersList);
    });
}



function searchUserModal() { // idElem

    search.insertAdjacentHTML(
        'beforebegin', 

        `<div class='search_modal hiden'>

            <div class='search_modal-wrapper'>
                <div class='icon_calendar hiden' id='icon_calendar'></div>

                <div class='dynamic_search hiden'>
                    <form class='form_search' id='form_dynamic'>
                        <input type='text' class='input input_search' placeholder='Что ищем?' />
                        <div class='form_search-reset'></div>
                    </form>
                </div>

                <div class='search_modal_close hiden'></div>

                <form class='icon_calendar-form hiden' id='form_date'>

                    <input type='date' class='input input_date-search input_date-start' name='input_date-start' autocomplete='on' />
                    <input type='date' class='input input_date-search input_date-end' name='input_date-end' autocomplete='on' />
                
                    <button type='submit' class='button input submit_search'>
                       найти
                    </button>

                </form>

                <div class='close_calendar-form hiden'></div>

            </div>

        </div>`
    );
}

function searchUsers() { // iconSearch, btnAdd, closebtnModal, users, 

    if (!localStorage[LOCAL_STORAGE.KEY]) {
        iconSearchUsers.classList.add('hiden');
    } else if (localStorage[LOCAL_STORAGE.KEY]) {
        iconSearchUsers.classList.remove('hiden');

        iconSearchUsers.addEventListener('click', (e) => {
            e.preventDefault();
            

            warningUser = [];
            expiredUser = [];


            iconSearchUsers.classList.add('hiden');
    
            const searchModal = document.querySelector('.search_modal');
            // const serachModalWrapper = document.querySelector('.search_modal-wrapper');
            const iconCalendar = document.querySelector('.icon_calendar');
            const dynamicSearch = document.querySelector('.dynamic_search'); 
            const formDynamicSubmit = document.querySelector('.form_search');
            const inputSearch = document.querySelector('.input_search');
            const closeSearchForm = document.querySelector('.search_modal_close');
            const resetFormSearch = document.querySelector('.form_search-reset'); // переместил сюда из 

            iconCalendar.classList.remove('hiden');
            searchModal.classList.remove('hiden');
            dynamicSearch.classList.remove('hiden');
            closeSearchForm.classList.remove('hiden');
            
            addUsersBtn.addEventListener('click', () => {
                searchModal.classList.add('hiden');
            });

            closeModalAddUsers.addEventListener('click', () => {
                iconSearchUsers.classList.remove('hiden');
            });


            function resetFormSearchNow() {
                resetFormSearch.addEventListener('click', (e) => {
                    e.preventDefault();

                    formDynamicSubmit.reset();
                    createUsersList(arrMyUsers.reverse(), usersList);
                });
            }
            
            // поиск по датам - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            iconCalendar.addEventListener('click', (e) => {
                e.preventDefault();

                const dateSerachForm = document.querySelector('.icon_calendar-form');
                const inputDateStart = document.querySelector('.input_date-start');
                const inputDateEnd = document.querySelector('.input_date-end');
                // const btnSubmitSearch = document.querySelector('.submit_search');
                const formDateSubmit = document.querySelector('.icon_calendar-form');
                const closeDateSearchForm = document.querySelector('.close_calendar-form');
                
    
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
                });
    
                formDateSubmit.addEventListener('submit', (e) => {
                    e.preventDefault();
    
                    const resultArrForDate = [];
                    parseLSInArr(); // проверить
    
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
                
                iconSearchUsers.classList.remove('hiden');
                searchModal.classList.add('hiden');

                formDynamicSubmit.reset();
                parseLSInArr(); // users
                createUsersList(arrMyUsers.reverse(), usersList);
            });
    

            // динамический поиск - - - - - - - - - - - - - - - - - - - - - - - - - -
            // const resetFormSearch = document.querySelector('.form_search-reset'); // от сюда переместил
            const findUsers = [];
            let arrFromLS = [];
    
            arrFromLS = JSON.parse(localStorage[LOCAL_STORAGE.KEY]);
            
            arrFromLS.forEach(user => {
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

    iconSortBySurname.addEventListener('click', (e) => {
        e.preventDefault();

        warningUser = [];
        expiredUser = [];

        iconSortBySurname.classList.add('hiden');
        iconSortResetSurname.classList.remove('hiden');

        iconSortByAddedDate.classList.remove('hiden');
        iconSortByLoanAmount.classList.remove('hiden');
        iconSortResetAddedDate.classList.add('hiden');
        iconSortResetLoanAmount.classList.add('hiden');

        sortArr = arrMyUsers.sort(function (a, b) {
            if (a.userSurname > b.userSurname) {
              return 1;
            }
            if (a.userSurname < b.userSurname) {
              return -1;
            }
            return 0;
        });

        // checkDateAttention(sortArr);
        createUsersList(sortArr, usersList);
        sortListReset(iconSortBySurname, iconSortResetSurname);
        sortArr = [];
    });
}

function sortListByDateAded() { // iconSort, users, parent, sortArr

    iconSortByAddedDate.addEventListener('click', (e) => {
        e.preventDefault();

        warningUser = [];
        expiredUser = [];

        iconSortByAddedDate.classList.add('hiden');
        iconSortResetAddedDate.classList.remove('hiden');

        iconSortBySurname.classList.remove('hiden');
        iconSortByLoanAmount.classList.remove('hiden');
        iconSortResetSurname.classList.add('hiden');
        iconSortResetLoanAmount.classList.add('hiden');

        sortArr = arrMyUsers.sort(function (a, b) {
            let dateA = new Date(a.dateAdded);
            let dateB = new Date(b.dateAdded);
            
            // return dateB - dateA;
            return dateA - dateB;
        });

        // checkDateAttention(sortArr);
        createUsersList(sortArr, usersList);
        sortListReset(iconSortByAddedDate, iconSortResetAddedDate);
        sortArr = [];
    });
}

function sortListByLoanAmount() { // iconSort, users, parent, sortArr, warArr, expArr

    iconSortByLoanAmount.addEventListener('click', (e) => {
        e.preventDefault();
        
        warningUser = [];
        expiredUser = [];

        iconSortByLoanAmount.classList.add('hiden');
        iconSortResetLoanAmount.classList.remove('hiden');

        iconSortBySurname.classList.remove('hiden');
        iconSortByAddedDate.classList.remove('hiden');
        iconSortResetSurname.classList.add('hiden');
        iconSortResetAddedDate.classList.add('hiden');

        sortArr = arrMyUsers.sort((a, b) => Number(a.loanAmount) - Number(b.loanAmount));

        // checkDateAttention(sortArr);
        createUsersList(sortArr, usersList);
        sortListReset(iconSortByLoanAmount, iconSortResetLoanAmount);
        sortArr = [];
    });
}

function sortListReset(iconSort, iconReset) { // users, parent
    
    iconReset.addEventListener('click', (e) => {
        e.preventDefault();
        
        warningUser = [];
        expiredUser = [];

        iconReset.classList.add('hiden');
        iconSort.classList.remove('hiden');

        parseLSInArr();
        // checkDateAttention(arrMyUsers);
        createUsersList(arrMyUsers.reverse(), usersList);

        sortArr = [];
    });
}



function runAll() { // выенести все аргументы сюда

    showNotificationList(notificationBtn, warningUser, notificationWarningList); // проверить и добавить

    showNotificationList(notificationBtn, expiredUser, notificationExpiredList); // проверить и добавить

    filterAll(arrMyUsers.reverse());  // проверить и добавить

    filterWarning(); // проверить и добавить

    filterExpired(); // проверить и добавить

    showMainModal(); // проверить и добавить

    closeMainModal(); // проверить и добавить

    showModalForm(); // проверить и добавить

    closeModalForm(); // проверить и добавить

    formModalSubmit(); // проверить и добавить

    sortListBySurname(); // проверить и добавить

    sortListByDateAded(); // проверить и добавить

    sortListByLoanAmount(); // проверить и добавить

    // sortListReset(); // проверить и добавить

    searchUserModal(); // проверить и добавить

    searchUsers(); // проверить и добавить
}

runAll(); // заменить аргументы элементами тут




// mutation.observer {
//     arr1 || arr2 в какаом то из них будут изменения или в тои или в другом   
//     let startObserv = arr.lenght;
//     let endObserve = arr.lenght;
// startObserve !== endObserve      
// }

// function checkAttentionUsers() {
//     let startArrs = (warningUser.length || expiredUser.length);
//     if ()
// }