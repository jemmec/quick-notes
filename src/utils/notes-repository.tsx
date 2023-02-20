import Note from '@/models/note';
import db from './db';
import { collection, getDocs, query } from 'firebase/firestore';

/**
 * function to get all of the notes from firestore
 */
export async function getNotes(): Promise<Note[]> {
    console.log("Getting notes");
    const q = query(collection(db, "notes"));
    const querySnapshot = await getDocs(q);
    const notes: Note[] = [];
    querySnapshot.forEach(doc => {
        notes.push(doc.data() as Note);
    });
    return notes;
}
