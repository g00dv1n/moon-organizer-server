import MauticConnector from 'node-mautic'

const mauticConnector = new MauticConnector({
  apiUrl: 'https://mautic.lykeion.com.ua',
  username: process.env.MAUTIC_USER,
  password: process.env.MAUTIC_PWD
})

const SEGMENT_ID = 12

export const sendAbandonedToMautic = async (params) => {
  const { email, firstname } = params

  const existsContacts = await mauticConnector.contacts.getContactByEmailAddress(email)
  if (existsContacts.total > 0) {
    return
  }

  const createdContact = await mauticConnector
    .contacts.createContact({email, firstname})

  if (createdContact && createdContact.contact && createdContact.contact.id) {
    await mauticConnector
      .segments.addContactToSegment(SEGMENT_ID, createdContact.contact.id)
  }
}

/* sendAbandonedToMautic({email: 'g00dv1n.private12@gmail.com', firstname: 'Alex'})
  .then(() => console.log('OK'))
  .catch(e => console.log(e))
*/
