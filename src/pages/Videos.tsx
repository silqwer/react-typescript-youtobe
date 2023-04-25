import React from 'react';
import { useParams } from 'react-router-dom';

const Videos = (): JSX.Element => {
  const { keyword } = useParams();
  return <div>Videos:{keyword !== undefined ? `🔎${keyword}` : '🔥'}</div>;
};

export default Videos;
