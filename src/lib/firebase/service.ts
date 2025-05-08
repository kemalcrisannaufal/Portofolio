/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import app from "./init";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
} from "firebase/firestore";

import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const firestore = getFirestore(app);
const storage = getStorage(app);

export async function retreiveData(collectionName: string) {
  const q = query(collection(firestore, collectionName));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retreiveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function addData(
  collectionName: string,
  data: any,
  callback: Function
) {
  await addDoc(collection(firestore, collectionName), data)
    .then((res) => {
      callback(true, res);
    })
    .catch(() => {
      callback(false, null);
    });
}

export async function updateData(
  collectionName: string,
  id: string,
  data: any,
  callback: Function
) {
  await updateDoc(doc(firestore, collectionName, id), data)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}

export async function deletedData(
  collectionName: string,
  id: string,
  callback: Function
) {
  await deleteDoc(doc(firestore, collectionName, id))
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}

export async function uploadFile(
  id: string,
  file: any,
  newName: string,
  collection: string,
  callback: Function
) {
  if (file) {
    if (file.size < 5000000) {
      const storageRef = ref(storage, `images/${collection}/${id}/${newName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            callback(true, downloadURL);
          });
        }
      );
    } else {
      callback(false);
    }
  }
}

export async function deleteFile(url: string, callback: Function) {
  const storageRef = ref(storage, url);
  await deleteObject(storageRef)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}
