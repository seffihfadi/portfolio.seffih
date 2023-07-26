import { heroData } from '../utils/localData'
import { TypeAnimation } from 'react-type-animation'
import Theme from "./parts/Theme"

const Hero = () => {

  
  return (
    <section id="biography" className="me">
      <div className="flex absolute left-0 top-0 justify-between items-center py-2 px-6 w-full z-20">
        <div className="flex justify-center items-center">
          <span className="hidden mx-2 md:block">{heroData.phone}</span>
          <span className=" mx-2">{heroData.email}</span>
        </div>
        {/*<div className="lang">
          <button active="">En</button>
          <button>Ar</button>
  </div>*/}
        <Theme />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 min-h-screen items-center">
          <div className="col-span-12 lg:col-span-7 z-10">
            <span className="material-symbols-rounded mr-2">waving_hand</span>
            <span className="capitalize text-xl font-bold">hi, my name is :</span>
            <h1 className="capitalize text-4xl font-bold my-6">{heroData.name}</h1>
            <span className="capitalize">i'm a {''}
            <TypeAnimation
              sequence={[
                'fronend developer', 1000,
                'backend developer', 1000,
                'ui designer', 1000,
                /*'mobile developer', 1000*/
              ]}
              speed={50}
              repeat={Infinity}
            />
            </span>
            <p className="my-6 font-bold leading-7">{heroData.desc}</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero