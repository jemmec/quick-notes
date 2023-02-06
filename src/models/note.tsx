import { Timestamp, FirestoreDataConverter } from 'firebase/firestore'

/**
 * A note model 
 */
export default interface Note {
    title: string;
    id: number;
    body: string;
    timestamp: Timestamp;
    tags: string[];
}

