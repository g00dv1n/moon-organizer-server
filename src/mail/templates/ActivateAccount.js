const loginLink = 'https://moonorganizer.com/calendar/#/?forcelogin=1'

const ru = `
Ваш Персональный календарь успешно активирован.
<br>
<br>
Ваши данные для входа:
<br>
логин: <b>%(email)s</b>
<br>
пароль: <b>%(password)s</b>
<br>
<br>
Авторизуйтесь здесь: ${loginLink}
<br>
<br>
Ваша книга прийдет в следующем письме!
`
const en = `
Your Personal Calendar has been successfully activated.
<br>
<br>
Your login information:
<br>
login: <b>%(email)s</b>
<br>
password: <b>%(password)s</b>
<br>
<br>
Please, log in here: ${loginLink}
`

export const template = {
  ru,
  en
}

export const subject = {
  ru: 'Персональный Лунный Календарь',
  en: 'Moon Organizer - Personal Calendar'
}
