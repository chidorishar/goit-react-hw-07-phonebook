import axios from 'axios';

axios.defaults.baseURL = 'https://63934c28ab513e12c50a197d.mockapi.io/contacts';

export async function fetchContacts() {
  let contactsData = null;

  contactsData = await networkRequestWrapper(() => axios());

  return contactsData?.data;
}

export async function addContact(contactObj) {
  let response = null;

  response = await networkRequestWrapper(() =>
    axios({
      method: 'post',
      data: contactObj,
    })
  );

  return response?.status === 201;
}

export async function deleteContact(contactID) {
  let response = null;

  response = await networkRequestWrapper(() =>
    axios({
      url: `${contactID}`,
      method: 'delete',
    })
  );

  return response?.status === 200;
}

async function networkRequestWrapper(requestMethod) {
  let requestResponse = null;

  try {
    requestResponse = await requestMethod();
  } catch (error) {
    console.log(
      'An error happened during network request. Here is some details: ' +
        error.message
    );
  }

  return requestResponse;
}
