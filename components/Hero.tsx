import Image from 'next/image';
import { SearchBar } from '@/components'

const Hero = () => {
return(
        <div className='hero'>
            <div className='flex flex-col w-full mt-9 justify-between'>
            <div className='hero__content '>
            <h1 className='hero__title w-[33rem]'>
            Votre chez-vous notre passion
            </h1>
            <p className='hero__subtitle'>
            Réalisons vos rêves immobiliers 
            avec <br />passion et professionnalisme.
            </p>
            
            </div>
        <div className='padding-x padding-y top-14 max-width z-10 rounded-2xl bg-white relative bg-opacity-35 backdrop-blur-sm' id='discover'>
              <SearchBar/>
        </div>
        </div>
            <div className='hero__image'>
                <Image src="/ac9aaea1c3033366e4c68742baa01ba8.jpg" alt='hero'
                fill className='object-cover w-full h-full'
                />
            </div>
            
        </div>
)
}
export default Hero;