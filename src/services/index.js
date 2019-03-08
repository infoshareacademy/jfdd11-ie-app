import firebase from 'firebase';



export const getUserPromise = () =>
  firebase
    .database()
    .ref('user')
    .once('value')
    .then(snapshot => snapshot.val())
    .then(data =>
      Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }))
    );



export const updateUserPromise = (id, name, surname, phone, email, company) =>
  firebase
    .database()
    .ref('user')
    .child(id)
    .update({
      name,
      surname,
      phone,
      email,
      company
    });
