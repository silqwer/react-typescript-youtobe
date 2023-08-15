import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { fakeVideo as video } from '../../tests/videos';
import { formatAgo } from '../../utils/date';
import VideoCard from '../VideoCard';

describe('VideoCard', () => {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  it('renders video item', () => {
    render(
      <MemoryRouter>
        <VideoCard video={video} />
      </MemoryRouter>
    );

    const image = screen.getByRole('img');
    const imgEl = image as HTMLImageElement;
    expect(imgEl.src).toBe(thumbnails.medium.url);
    expect(imgEl.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatAgo(publishedAt, 'ko'))).toBeInTheDocument();
  });

  it('navigates to detailed video page with video state when clicked', () => {
    // 특정한 로케이션의 상태를 검증할 수 있는 테스트 컴포넌트를 만든다.
    const LocationStateDisplay = (): JSX.Element => {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    };

    // 동적으로 이동을 테스트하기 위해서 비디오 카드의 라우트를 세팅을 해준다.
    render(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<VideoCard video={video} />} />
          <Route path={`/videos/watch/${video.id}`} element={<LocationStateDisplay />} />
        </Routes>
      </MemoryRouter>
    );

    // 스크린에 listitem 롤을 가지고와 클릭 이벤트를 적용한다.
    const card = screen.getByRole('listitem');
    userEvent.click(card);

    // 클릭 후 이동해서 테스트 컴포넌트가 화면에 나타나는지 테스트한다.
    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument();

    // 비디오 카드 컴포넌트만 테스트를 한다.
  });

  it('renders grid type correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<VideoCard video={video} />} />
        </Routes>
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders list type correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<VideoCard video={video} type='list' />} />
        </Routes>
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
