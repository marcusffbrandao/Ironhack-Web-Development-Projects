import firebase from '../firebase/FirebaseConnection';

export default async (imageRef) => {
  const storageRef = firebase.storage().ref(imageRef);
  const url = await storageRef.getDownloadURL();
  return url;
};
