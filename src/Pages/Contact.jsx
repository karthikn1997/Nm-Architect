import React, { useEffect } from 'react';
import Bg from "../assets/cont.png"
import ContactForm from '../Contact-component/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full min-h-screen -mt-40'>
      <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>

        <div className="w-full absolute inset-0 bg-cover bg-center  "
          style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.9 }}
        ></div>

        <div className='relative text-white text-center '>
          <h2 className='text-4xl md:text-6xl uppercase tracking-widest text-white' style={{ fontFamily: "Rolland", textShadow: "1px 1px 0px gray" }}>Contact Us</h2>
        </div>

      </section>

      <div className='relative -mt-[100px] z-50'>
        <ContactForm />
      </div>

    </div>
  )
}

export default Contact