import { useState } from "react";
import Menu from "./Menu";
import Video from "./Video";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};
const Videoplayer = () => {
    const[videosrc,setVideosrc] = useState(videos.deer)
    const videoname = Object.keys(videos)

        function onSelectVideo(video) {
            const videoSrc = videos[video];
            setVideosrc(videoSrc);
          }
  return (
    <div>
      <h2>Project 5: Video Player</h2>
       <Menu videoValues={videoname} onSelectVideo={onSelectVideo}/>
       <Video videoSrc={videosrc} />
    </div>
  );
};

export default Videoplayer;
