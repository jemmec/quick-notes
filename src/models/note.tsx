import { Timestamp } from 'firebase/firestore'

/**
 * A note model 
 */
export default interface Note {
    /**
     * The title of the note document
     */
    title: string;

    /**
     * The unique id of the note document
     */
    id: string;

    /**
     * The date the note document was created
     */
    dateCreated: Timestamp;

    /**
     * The date the note document was last modified
     */
    dateModified: Timestamp;

    /**
     * The folder path of the note document
     */
    path: string;

    /**
     * tags associated with note document
     */
    tags: string[];

    /**
     * the body content of the note document
     */
    body: string[];

    /**
     * Has this note been starred
     */
    starred: boolean;
}

