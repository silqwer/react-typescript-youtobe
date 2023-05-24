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
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe id='player' width='100%' height='640' src={`https://www.youtube.com/embed/${videoId}`}></iframe>
        <div>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos id={videoId} />
      </section>
    </section>
  );
};

export default VideoDetail;
