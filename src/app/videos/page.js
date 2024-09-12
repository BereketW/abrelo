"use client"
import React, { useEffect, useState } from 'react'
import VideosHeader from '../../components/VideosHeader'
import Header from '../../components/Header'
export default function Page() {
    const [videos, setVideos] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getData() {
          try {
            const response = await fetch(
              "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCJovcEa_LAaf1oEMVOyjoU8ntdrCHFVto&channelId=UCHxhjHSPRdm837kwfL8hIIA&part=snippet,id&order=date&maxResults=10"
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const json = await response.json();
            // console.log(json);
            setVideos(json.items);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
        getData();
      }, []);
   
  return (
    <div>
        <Header />
        <VideosHeader />
        <div className='flex flex-wrap gap-10'>
        {videos.map((video) => (
              <div key={video.id.videoId} className="p-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}?mute=1`}
                ></iframe>
                <h2 className="mt-2">{video.snippet.title}</h2>
              </div>
            ))}
        </div>
        </div>
  )
}
