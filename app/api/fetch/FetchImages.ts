import {DataGoogle} from "../../../../Laviree/laviree/sanity/types/componentTypes";
import axios from "axios";

export default async function FetchImages(folderId:string): Promise<DataGoogle[]> {
    // Replace with your own API route and folder ID
    const folder1Res = await axios.get(`/api/GoogleApi?${folderId}=YOUR_FOLDER1_ID`);
    return folder1Res.data.files;
}