import {DataGoogle} from "../../../../Laviree/laviree/sanity/types/componentTypes";
import axios from "axios";

export default async function fetchOne(fileId:string): Promise<DataGoogle> {
    // Replace with your own API route and file ID
    const videoRes = await axios.get(`/api/GoogleApi?${fileId}=YOUR_VIDEO_FILE_ID`);
    return videoRes.data;

}
