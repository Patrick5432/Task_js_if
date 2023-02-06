"use strict"

let login = prompt('Введите логин', '')

if (login === '' || login === null) {
    alert('Отменено')
} else if (login === 'Админ') {

    let password = prompt('Введите пароль', '')

    if (password === 'Я главный') {
        alert('Здравсвуйте!')
    } else if (password === '' || password === null) {
        alert('Отмненено')
    } else {
        alert('Неверный пароль')
    }

} else {
    alert('Я вас не знаю')
}