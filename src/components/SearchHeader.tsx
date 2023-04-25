import { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
const SearchHeader = (): JSX.Element => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const { keyword } = useParams();

  useEffect(() => {
    setText(keyword === undefined ? '' : keyword);
  }, [keyword]);

  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
