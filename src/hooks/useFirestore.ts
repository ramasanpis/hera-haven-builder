import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const useFirestore = (collectionName: string) => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDocuments(docs);
      setLoading(false);
    });

    return unsubscribe;
  }, [collectionName]);

  const addDocument = async (data: any) => {
    return addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date()
    });
  };

  const updateDocument = async (id: string, data: any) => {
    return updateDoc(doc(db, collectionName, id), data);
  };

  const deleteDocument = async (id: string) => {
    return deleteDoc(doc(db, collectionName, id));
  };

  return {
    documents,
    loading,
    addDocument,
    updateDocument,
    deleteDocument
  };
};