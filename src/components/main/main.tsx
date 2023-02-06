import React, { ReactElement, useEffect, useState } from 'react';
import { TextDocument } from '../document/text-document';
import { SideBar } from '../sidebar/sidebar';
import styles from './main.module.css';

interface MainProps {

}

export function Main({ }: MainProps) {
    return (
        <>
            <div className={styles.main}>
                <SideBar />
                <Divider vertical thickness={2} />
                <TextDocument />
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