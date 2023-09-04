export default function Menu({ onSelectVideo, videoValues }) {
  console.log(videoValues);
  return (
    <form onClick={(event) => onSelectVideo(event.target.value)}>
      {videoValues.map((val) => {
        return (
          <>
            <input type="radio" name="src" value={val} />
            {val}
          </>
        );
      })}
    </form>
  );
}
