import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

const VideoDetail = (): JSX.Element => {
  const {
    state: { video }
  } = useLocation();

  const videoId: string = video.id;
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section>
      <article>
        <iframe id='player' width='100%' height='640' src={`http://www.youtube.com/embed/${videoId}`}></iframe>
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <RelatedVideos id={videoId} />
      </section>
    </section>
  );
};

export default VideoDetail;
