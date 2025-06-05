// Next Image
import Img from 'next/image';

const Avatar = () => {
  return (
    <div className='flex items-center justify-center w-full h-full '>
      <Img
        src={'/Avatar-1.png'}
        width={737}
        height={678}
        priority={true}
        alt='Developer Avatar'
        className='w-auto h-auto max-w-full max-h-[90vh]   '
      />
    </div>
  );
};

export default Avatar;