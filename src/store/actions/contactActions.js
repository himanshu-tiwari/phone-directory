export const updateContacts = (newContacts) => {
    return {
        type: 'UPDATE_CONTACTS',
        data: newContacts.filter(contact => (
            (typeof(contact.name) === "string" && contact.name.length > 0) &&
            (typeof(contact.location) === "string" && contact.location.length > 0) &&
            (typeof(contact.emaillist) === "object" && contact.emaillist instanceof Array && contact.emaillist.length > 0) &&
            (typeof(contact.phonelist) === "object" && contact.phonelist instanceof Array && contact.phonelist.length > 0)
        ))
    }
};