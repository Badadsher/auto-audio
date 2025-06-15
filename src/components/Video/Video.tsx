import "../Video/video.css";
const Video: React.FC = () => {
  return (
    <div className="video" id="video">
      <a>ВИДЕО РАСПАКОВКИ</a>
      <iframe
        src="https://rutube.ru/play/embed/328bcc1d65f31ac05ed44a81e8e70ede" // Замените VIDEO_ID на ID вашего видео
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
