import { Link } from 'react-router-dom';

function ImageLink({ imgPath, name, price, roomCapacity, status }) {
  return (
    <div className='relative h-28 bg-slate-300 pt-2 flex items-center m-auto pl-10 pr-10'>
      <Link to='/Details' className='flex-shrink-0'>
        <img src={imgPath} alt='' className='w-32 h-24 cursor-pointer' />
      </Link>
      <div className='flex-grow flex justify-between items-center pl-10'>
        <span>{name}</span>
        <h1>{price}</h1>
        <h1>{roomCapacity}</h1>
        <h1 className='pr-10'>{status}</h1>
      </div>
    </div>
  );
}

export default ImageLink;
