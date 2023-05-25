import React, { useState, useEffect } from 'react';
import fetchOne from "@/app/api/fetch/FetchOne";


interface VideoHeaderProps {
    fileId: string;
}

const VideoHeader: React.FC<VideoHeaderProps> = ({ fileId }) => {
    const [videoUrl, setVideoUrl] = useState<string | undefined>();

    useEffect(() => {
        if (fileId) {
            fetchOne(fileId).then((video) => {
                setVideoUrl(video.webContentLink);
            });
        }
    }, [fileId]);

    return (
        <div className="relative">
            {videoUrl && (
                <video
                    className="absolute inset-0 object-cover w-full h-full"
                    src={videoUrl}
                    autoPlay
                    muted
                    loop
                />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center h-screen">
                <div>
                    <h1 className="text-5xl text-white"></h1>
                </div>
                <div>
                    <h3 className="text-3xl text-white">Lorem ipsum</h3>
                </div>
            </div>
        </div>
    );
};
export default VideoHeader;