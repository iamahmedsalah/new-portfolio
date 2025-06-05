// Next Image
import Img from'next/image';




const Bulb = () => {
  return <div className=' absolute -left-2 -bottom-9 rotate-12 animate-pulse duration-75  max-lg:-z-10 max-md:opacity-50  w-[200px] '> 
      <Img 
      src={'/bulb.png'}
      width={260}
      height={200}
      alt=''
      priority='true'
      className='w-full h-full'/>
    </div>;
};

export default Bulb;
