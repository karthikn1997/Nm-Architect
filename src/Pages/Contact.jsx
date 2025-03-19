import React from 'react';
import Bg from "../assets/cont.png"
import ContactForm from '../Contact-component/ContactForm';


const Contact = () => {

  return (
    <div className='w-full min-h-screen -mt-40'>
      <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>

        <div className="w-full absolute inset-0 bg-cover bg-center  "
          style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.9 }}
        ></div>

        <div className='relative text-white text-center '>
          <h2 className='text-6xl uppercase font-extrabold tracking-widest text-gold' style={{ fontFamily: "Wallpoet", textShadow: "2px 4px 0px black" }}><span className="text-gray-300" >Contact</span> Us</h2>
        </div>

      </section>

      <div className='relative -mt-[150px] z-50'>
        <ContactForm />
      </div>

    </div>
  )
}

export default Contact