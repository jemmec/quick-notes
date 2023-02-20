import Note from '@/models/note';
import React, { Children, ReactElement, useEffect, useState } from 'react';
import styles from './sidebar.module.css';
interface SideBarProps {
    notes: Note[];
    setCurrentNote: (note: Note) => void;
}

export function SideBar({ notes, setCurrentNote }: SideBarProps) {
    return (
        <>
            <div className={styles.sidebar}>
                {
                    notes.map(note => <File
                        note={note}
                        key={note.id}
                        onClick={() => setCurrentNote(note)}
                    />)
                }
            </div>
        </>
    )
}

function Folder({ name, children }: { name: string, children: any }) {
    const [open, setOpen] = useState(false);

    return <div className={styles.folder}>
        {children}
    </div>
}

function File({ note, onClick }: { note: Note, onClick: () => void, }) {
    return <div className={styles.file} onClick={onClick}>
        {note.starred ? <span className={`material-icons md-24`}>&#xe838;</span> : <></>}
        <div>
            {note.title}
        </div>
    </div>
}
