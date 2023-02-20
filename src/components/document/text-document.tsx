import Note from '@/models/note';
import { Timestamp } from 'firebase/firestore';
import React, { ReactElement, useEffect, useState } from 'react';
import { Divider } from '../main/main';
import { ThemeSwitch } from '../theme-switch/theme-switch';
import styles from './text-document.module.css';
interface TextDocumentProps {
    currentNote: Note;
}
export function TextDocument({ currentNote }: TextDocumentProps) {

    const [note, setNote] = useState<Note>({
        title: "Untitled Document",
        body: '',
        dateCreated: Timestamp.fromDate(new Date()),
        dateModified: Timestamp.fromDate(new Date()),
        id: "blbalb",
        path: "",
        starred: false,
        tags: []
    });

    useEffect(() => {
        if (currentNote) {
            setNote(currentNote);
        }
    }, [note])


    function handleOnBlur(e: any) {
    }

    function handleNoteChange(prop: string, value: any) {
        setNote({ ...note, [prop]: value });
    }

    function handleNoteSaved() {

    }


    function handleTextAreaChange(e: any) {
        const lines = e.target.value.split(/\r|\r\n|\n/);
        handleNoteChange('body', e.target.value);
        //handle text change
        // const text = e.target.value;
        // const newLines = [];
        // for (let i = 0; i < text.split(/\r|\r\n|\n/).length; i++)
        //     newLines.push(i);
        // setLines(newLines);
        // setText(e.target.value);
    }

    return (
        <>
            <div className={styles.textDocument}>
                <Toolbar
                    title={note.title}
                    onTitleChange={(value: string) => handleNoteChange('title', value)}
                />
                <Divider thickness={3} />
                <div className={styles.textField}>
                    <div className={`${styles.editor}`}>
                        {/* <div className={styles.lineCount}>
                            {

                            }
                        </div> */}
                        <textarea
                            className={`prism-live language-md`}
                            onChange={handleTextAreaChange}
                            onBlur={handleOnBlur}
                            value={note.body} />
                    </div>
                </div>
            </div>
        </>
    )
}

interface ToolbarProps {
    title: string;
    onTitleChange: (title: string) => void;
}

export function Toolbar({ title, onTitleChange }: ToolbarProps) {

    function handleTitleChange(e: any) {
        const val = e.target.value;
        onTitleChange(val);
    }

    return (
        <>
            <div className={styles.toolbar}>
                <QuickTools />
                <div className={styles.documentName}>
                    <input
                        value={title}
                        onChange={handleTitleChange}
                        onFocus={(e: any) => { e.target.select() }}
                    />
                </div>
                <ThemeSwitch size={24} />
            </div>
        </>
    )
}

export function QuickTools({ }) {
    return (
        <>
            <div className={styles.quickTools}>
                <QuickToolIcon codepoint='&#xe242;' />
                <QuickToolIcon codepoint='&#xe745;' />
                <QuickToolIcon codepoint='&#xe838;' />
            </div>
        </>
    )
}

export function QuickToolIcon({ codepoint, size = 24 }: { codepoint: string, size?: 18 | 24 | 36 | 48 }) {
    return (
        <>
            <div className={styles.quickToolIcon}>
                <span className={`material-icons md-${size}`}>{`${codepoint}`}</span>
            </div>
        </>
    )
}