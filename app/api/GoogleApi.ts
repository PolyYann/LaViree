import { google } from 'googleapis';
import {NextApiRequest, NextApiResponse} from "next";
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000/api/callback';
const REFRESH_TOKEN = 'YOUR_REFRESH_TOKEN';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

async function getFiles(folderId:string) {
    const res = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false`,
        fields: 'files(id, name, thumbnailLink, webContentLink)',
    });
    return res.data.files;
}

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // Replace with your own folder IDs
    const FOLDER_IDS = {images: 'YOUR_IMAGES_FOLDER_ID', videos: 'YOUR_VIDEOS_FOLDER_ID',};

    const type = req.query.type;
    // @ts-ignore
    const folderId = FOLDER_IDS[type];

    if (!folderId) {
        res.status(400).send('Invalid type');
        return;
    }

    try {
        const files = await getFiles(folderId);
        res.status(200).json(files);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
}
