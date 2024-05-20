import { Link,useNavigate } from 'react-router-dom';


function ImageLink({ imgPath, name, price, roomCapacity, status }) {
  const navigate = useNavigate();

  function handleNavigations() {
    navigate('/MakePaymentPage')

  }
  return (
    <div className='relative h-28 bg-slate-300 pt-2 flex items-center m-auto pl-10 pr-10 border-4 border-gray-400 rounded-lg p-4 bg-'>
      <Link to='/DetailsPage' className='flex-shrink-0'>
        <img src={imgPath} alt='' className='w-32 h-24 cursor-pointer' />
      </Link>
      <div className='flex-grow flex justify-between items-center pl-10'>
        <span className="bg-slate-300 p-6 rounded-full shadow-md">{name}</span>
        <h1 className="bg-slate-300 p-6 rounded-full shadow-md">{price}</h1>
        <h1 className="bg-slate-300 p-6 rounded-full shadow-md">{roomCapacity}</h1>
        <h1 className='pr-10 bg-slate-300 p-6 rounded-full shadow-md'>{status}</h1>
        
        <button className='button bg-blue-600 rounded-full text-white h-8 w-20 font-serif'
        onClick={handleNavigations}
        
        
        >book      
        </button>
      </div>
    </div>
  );
}

export default ImageLink;
