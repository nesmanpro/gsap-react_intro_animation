
import Image from "next/image";
import img1 from '@/assets/img1.jpg'

export default function Home() {
  return (
    <>
      <div className="hero-img top-0 -z-10">
        <Image className='pointer-events-none' src={img1} alt='Logo' />
      </div>
    </>
  );
}
