import React, { ReactElement, useEffect, useState } from 'react';
import { Divider } from '../main/main';
import { ThemeSwitch } from '../theme-switch/theme-switch';
import styles from './text-document.module.css';
interface TextDocumentProps {

}
export function TextDocument({ }: TextDocumentProps) {

    const [text, setText] = useState('');
    const [lines, setLines] = useState([0]);
    const [title, setTitle] = useState('');

    function handleEditorChange(e: any) {
        //handle text change
        const text = e.target.value;
        const newLines = [];
        for (let i = 0; i < text.split(/\r|\r\n|\n/).length; i++)
            newLines.push(i);
        setLines(newLines);
        setText(e.target.value);
    }

    return (
        <>
            <div className={styles.textDocument}>
                <Toolbar title={title} setTitle={setTitle} />
                <Divider thickness={2} />
                <div className={styles.textField}>
                    <div className={styles.editor}>
                        <div className={styles.lineCount}>
                            {
                                lines.map(x =>
                                    <div key={x}>
                                        {x}
                                    </div>
                                )
                            }
                        </div>
                        <textarea onChange={handleEditorChange} value={text} />
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
        setTitle(e.target.value);
    }

    return (
        <>
            <div className={styles.toolbar}>
                <div className={styles.documentName}>
                    <input value={title} onChange={handleTitleChange} />
                </div>
                <ThemeSwitch />
            </div>
        </>
    )
}