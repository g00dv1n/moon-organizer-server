const loginLink = 'https://moonorganizer.com/calendar/#/me/login'

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
`
const en = `
Dear %(name)s,
<br>
thank you for your interest in our product!
<br>
<br>
Here is your login data:
<br>
<br>
Your login: <b>%(email)s</b>
<br>
Your password: <b>%(password)s</b>
<br>
<br>
Just copy and paste them into the form here:
<br>
${loginLink}
<br>
<br>
After login, please fill out your profile so the calendar can give you personalized advice.
<br>
<br>
Have a nice day!
`

export const template = {
  ru,
  en
}

export const subject = {
  ru: 'Лунный Календарь данные для входа',
  en: 'Moon Calendar login data'
}
