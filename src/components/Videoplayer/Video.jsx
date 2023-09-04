const Video = ({ videoSrc }) => {
  return (
    <div>
      <video  loop controls autoPlay src={videoSrc}></video>
    </div>
  );
};

export default Video;
