import Note from '@/models/note';
import { getNotes } from '@/utils/notes-repository';
import React, { ReactElement, useEffect, useState } from 'react';
import { TextDocument } from '../document/text-document';
import { SideBar } from '../sidebar/sidebar';
import styles from './main.module.css';

interface MainProps {
    origin: string;
}

export function Main({ origin }: MainProps) {

    //get notes
    const [notes, setNotes] = useState<Note[]>([]);
    const [currentNote, setCurrentNote] = useState<Note>();

    useEffect(() => {
        getNotes().then(notes => setNotes(notes));
    }, [origin]);

    return (
        <>
            <div className={styles.main}>
                <TextDocument currentNote={currentNote} />
                <Divider vertical thickness={3} />
                <SideBar notes={notes} setCurrentNote={setCurrentNote} />
            </div>
        </>
    )
}

interface DividerProps {
    vertical?: boolean;
    thickness: number;
}

export function Divider({ vertical = false, thickness }: DividerProps) {
    return <div
        className={styles.divider}
        style={{
            height: vertical ? '100%' : `${thickness}px`,
            width: vertical ? `${thickness}px` : '100%'
        }}
    />
}