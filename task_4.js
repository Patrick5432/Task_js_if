let login = prompt('Введите логин', '')

let message = (login == 'Сотрудник') ? alert('Привет') : (login == 'Директор') ? alert('Здравствуйте') : alert('Нет логина')