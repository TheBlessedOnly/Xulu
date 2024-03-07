import requests from '@/utils/requests';


function Nav() {
  return (
    <nav className='relative'>
        <div className='flex px-10 sm:px20 whitespace-nowrap space-x-10 text-md sm:space-x-20 overflow-x-scroll scrollbar-hide '>
      {Object.entries(requests).map(([key ,{title ,url}]) => (
        <h2 key={key}
        className='cursor-pointer transation duration-100 transform hover:scale-125 hover:text-white active:text-red-400 last:pr-24'>{title}</h2>
      ))}
      </div>
      <div className='absolute  top-0 right-0 bg-gradient-to-tl from-[#06202A] h-10 w-1/12' />
    </nav>
  );
}

export default Nav;