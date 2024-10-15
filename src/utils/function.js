//ADD USER

//write info databasee yazmak
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import firebase from "./firebase";
import { useEffect, useState } from "react";

export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });

  console.log("add user");
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "user/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

// export const DeleteUser = (id) => {
//   const db = getDatabase(firebase);
//   const userRef = ref(db, "user/");
//   remove(ref(db, "user/" + id));
//   //   Toastify("Deleted Successfully");
// };

// export const UpdateUser = (info) => {
//   const db = getDatabase(firebase);
//   const userRef = ref(db, "user/");

//   const updates = {};

//   updates["user/" + info.id] = info;

//   return update(ref(db), updates);
// };
