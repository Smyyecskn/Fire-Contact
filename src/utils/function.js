//ADD USER

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
import toastify, { toastSuccessNotify } from "../helper/toastify";

//!DB'YE EKLEME //write info databasee yazmak

export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/"); //"users/" referansı oluşturuluyor
  const newUserRef = push(userRef); //Yeni bir kullanıcı referansı oluşturdu
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });

  console.log("add user");
};

// getDatabase(firebase) ile Firebase veritabanına bağlanıyorsunuz.
// ref(db, "users/") ile kullanıcı verilerinin saklanacağı "users" isimli bir node'a referans oluşturuyorsunuz.
// push(userRef) ile "users/" node'unda yeni bir referans (ID) oluşturuluyor. Firebase otomatik olarak her kullanıcıya bir ID atar.
// set(newUserRef, {...}) ile kullanıcının bilgileri veritabanına kaydediliyor. Burada info parametresi ile gelen username, phoneNumber ve gender bilgileri set ediliyor.

//! DBDEN CONTACTSA GETIRME  Kullanıcı Verilerini Çekme (useFetch):

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState([]);
  //! useFetch hook'u veritabanındaki kullanıcıları çeker ve contactList state'ine kaydeder.
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      //       onValue(userRef, ...) fonksiyonu, belirtilen referansta (user/) değişiklik olduğunda çalışır. snapshot.val() ile bu referanstan dönen veriler alınıyor.
      // Alınan veriler userArray içerisine id'leriyle birlikte eklenir ve en sonunda setContactList ile state'e kaydedilir. Yüklenme tamamlandıktan sonra ise isLoading false yapılır.
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};
//! DBDEN CONTACTS'DAN SILME

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  // const userRef = ref(db, "users/");
  remove(ref(db, "users/" + id));
  toastify("Deleted Successfully");
};

//! DBDEN CONTACTS'DAN GÜNCELLEME
export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");

  const updates = {};

  updates["users/" + info.id] = info;

  return update(ref(db), updates);
};
