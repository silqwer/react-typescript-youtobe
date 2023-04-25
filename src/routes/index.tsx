import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Videos from '../pages/Videos';
import VideoDetail from '../pages/VideoDetail';
import App from '../App';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: 'videos', element: <Videos /> },
      { path: 'videos/:keyword', element: <Videos /> },
      { path: 'videos/watch/:videoId', element: <VideoDetail /> }
    ]
  }
]);

export default routes;
