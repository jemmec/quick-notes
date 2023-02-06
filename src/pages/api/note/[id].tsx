import Note from '@/models/note';
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/utils/db';

const handler = function (req: NextApiRequest, res: NextApiResponse<Note>) {
    switch (req.method) {
        case 'GET': {
            handleGet(req, res)
            break;
        };
        case 'PUT': {
            handleUpdate(req, res);
            break;
        };
        case 'DELETE': {
            handleDelete(req, res);
            break;
        };
        default: break;
    }
}

function handleGet(req: NextApiRequest, res: NextApiResponse<Note>) {
    
}

function handleUpdate(req: NextApiRequest, res: NextApiResponse<Note>) {

}

function handleDelete(req: NextApiRequest, res: NextApiResponse<Note>) {

}

export default handler;