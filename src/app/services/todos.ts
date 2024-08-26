// Add a second document with a generated ID.
import {
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  collection,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";
import { nanoid } from "nanoid";

import { db } from ".";
import { ITodo } from "../utils/typings";
import { format } from "date-fns";

enum COLLECTIONS {
  TODOS = "todos",
}

export const addTodo = async (todo: ITodo) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.TODOS), {
      ...todo,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getTodos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.TODOS));

    const todos: ITodo[] = [];

    querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      todos.push({
        id: doc.id,
        ...doc.data(),
        createdAt: format(
          new Date(doc.data().createdAt.seconds * 1000),
          "yyyy-MM-dd"
        ),
        updatedAt: format(
          new Date(doc.data().updatedAt.seconds * 1000),
          "yyyy-MM-dd"
        ),
      } as ITodo);
    });

    return todos;
  } catch (e) {
    console.log(e);
  }
};

export const getTodosByUserId = async (userId: string) => {
  console.log(userId);
  try {
    const q = query(
      collection(db, COLLECTIONS.TODOS),
      where("userId", "==", userId)
    );

    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);

    const todos: ITodo[] = [];

    querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      todos.push({
        id: doc.id,
        ...doc.data(),
        createdAt: format(
          new Date(doc.data().createdAt.seconds * 1000),
          "yyyy-MM-dd"
        ),
        updatedAt: format(
          new Date(doc.data().updatedAt.seconds * 1000),
          "yyyy-MM-dd"
        ),
      } as ITodo);
    });

    return todos;
  } catch (e) {
    console.log(e);
  }
};

export const updateTodo = async (todoId: string, data: ITodo) => {
  try {
    const todoRef = doc(db, COLLECTIONS.TODOS, todoId);

    // Set the "capital" field of the city 'DC'
    await updateDoc(todoRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } catch (e: any) {
    throw new Error(e);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    await deleteDoc(doc(db, COLLECTIONS.TODOS, todoId));
  } catch (e: any) {
    throw new Error(e);
  }
};
