import app from "./init";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

const firestore = getFirestore(app);

export async function retreiveData(collectionName: string) {
  const q = query(collection(firestore, collectionName));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}
