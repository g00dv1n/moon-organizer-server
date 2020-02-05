const loginLink = 'https://moonorganizer.com/calendar/#/me/registration?forcelogin=1'

const ru = `
Уважаемый Клиент,
<br>
спасибо, что Вы с нами!
<br>
<br>
Ваш новый пароль: <b>%(password)s</b>
<br>
Просто скопируйте его и вставьте в форму авторизации:
<br>
${loginLink}
<br>
<br>
<br>
<i style="font-size: 13px;">Пожалуйста, не отвечайте на это письмо.
<br>
По любым вопросам обращайтесь к нашей службе поддержки: moon.organizer@gmail.com</i>
`
const en = `
Dear Customer,
<br>
thank you for being with us!
<br>
<br>
Your new password: <b>%(password)s</b>
<br>
Just copy and paste it into the authorization form:
<br>
${loginLink}
<br>
<br>
<br>
<i style="font-size: 13px;">Please do not reply to this email. 
<br>
If you have any questions, please contact our support team: moon.organizer@gmail.com</i>
`

export const template = {
  ru,
  en
}

export const subject = {
  ru: 'Сброс пароля',
  en: 'Reset password'
}
