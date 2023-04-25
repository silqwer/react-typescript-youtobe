import { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          type='text'
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          placeholder='Search...'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
