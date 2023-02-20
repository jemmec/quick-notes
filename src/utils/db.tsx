
//firebase app
import { initializeApp, deleteApp, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APP_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_APP_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_APP_PROJECT_ID,
};

try {
    const app = getApp('camera');
    if (app) {
        //Delete app
        deleteApp(app);
    }
} catch (error) { }
//Re init app
const app = initializeApp(firebaseConfig, 'camera')
const db = getFirestore(app);
export default db;