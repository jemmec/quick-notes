import Note from '@/models/note';
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/utils/db';
import { Timestamp } from 'firebase/firestore';

const handler = function (req: NextApiRequest, res: NextApiResponse<any>) {
    switch (req.method) {
        case 'POST': {
            handlePost(req, res);
            break;
        };
        case 'GET': {
            handleGet(req, res)
            break;
        };
        default: break;
    }
}

function handlePost(req: NextApiRequest, res: NextApiResponse<void>) {
    
    res.status(200).json();
}

function handleGet(req: NextApiRequest, res: NextApiResponse<Note[]>) {
    res.status(200).json([]);
}

export default handler;