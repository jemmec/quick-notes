import Note from '@/models/note';
import React, { ReactElement, useEffect, useState } from 'react';
import { Divider } from '../main/main';
import { ThemeSwitch } from '../theme-switch/theme-switch';
import styles from './text-document.module.css';
interface TextDocumentProps {
    currentNote: Note;
}
export function TextDocument({ currentNote }: TextDocumentProps) {

    const [text, setText] = useState('');
    const [lines, setLines] = useState([0]);
    const [title, setTitle] = useState('Untitled Document');

    function handleEditorChange(e: any) {
        //handle text change
        const text = e.target.value;
        const newLines = [];
        for (let i = 0; i < text.split(/\r|\r\n|\n/).length; i++)
            newLines.push(i);
        setLines(newLines);
        setText(e.target.value);
    }

    function handleOnBlur(e: any) {
    }

    return (
        <>
            <div className={styles.textDocument}>
                <Toolbar title={title} setTitle={setTitle} />
                <Divider thickness={2} />
                <div className={styles.textField}>
                    <div className={`${styles.editor}`}>
                        <div className={styles.lineCount}>
                            {
                                lines.map(x =>
                                    <div key={x}>
                                        {x}
                                    </div>
                                )
                            }
                        </div>
                        <textarea
                            className={`prism-live language-md`}
                            onChange={handleEditorChange}
                            onBlur={handleOnBlur}
                            value={text} />
                    </div>
                </div>
            </div>
        </>
    )
}

interface ToolbarProps {
    title: string;
    setTitle: (title: string) => void;
}

export function Toolbar({ title, setTitle }: ToolbarProps) {

    function handleTitleChange(e: any) {
        const val = e.target.value;
        setTitle(val);
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