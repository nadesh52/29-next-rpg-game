"use client";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";

const docRef = collection(db, "message");

const TestComponent = () => {
  const [item, setItem] = useState<any>({ name: "" });
  const [list, setList] = useState<any>([]);

  const addItem = async (e: any) => {
    e.preventDefault();

    await addDoc(docRef, {
      ...item,
      createdAt: serverTimestamp(),
    });
  };

  useEffect(() => {
    const q = query(docRef);
    const unsub = onSnapshot(q, (querySnapshot) => {
      let itemArr: any = [];
      querySnapshot.forEach((doc: any) => {
        itemArr.push({ ...doc.data(), id: doc.id });
      });
      setList(itemArr);
    });
    return () => unsub();
  }, []);

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          value={item.name}
          type="text"
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />
        <button type="submit">add</button>
      </form>
      <div>
        {list.map((item: any, idx: any) => (
          <div key={idx}>
            {item.name} - {item.createdAt.toString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestComponent;
