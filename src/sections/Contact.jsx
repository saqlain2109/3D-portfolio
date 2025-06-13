import React from 'react'
import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from '../components/ContectExperience'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit =  async (e) => {
      e.preventDefault();

      setLoading(true   )

      try{
        await emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLET_ID,
            formRef.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            
        )
        setFormData({name:'', email: '', message: ''});

      }catch(error){
        console.log('EmailJs Error', error);
        
      }finally{

      }
      
    };

  return (
    <section id='contact' className ='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            title='Get In Touch With Me'
            sub='📧 Contact Infomation'
            /> 

            <div className="mt-16 grid-12-cols">
                <div className='xl:col-span-7 border-2'>
                    <div className='flex-center card-border rounded-xl p-10'>
                    <form onSubmit={handleSubmit} ref={formRef} className='w-full flex flex-col gap-7'>
                        <div className='mb-6'>
                            <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className='mb-6'>
                            <label htmlFor="Message">Message</label>
                            <textarea type="textarea" id='Message' name='message' placeholder='Your Message' value={formData.message} onChange={handleChange} required rows={8} style={{resize: 'none'}} />
                            </div>
                            <div>
                            <button type='submit' disabled={loading}>
                                <div className='cta-button group px-20'>
                                <div className='bg-circle'/>
                                <p className='text'>{loading ? 'Sending....' : 'Send Message'}</p>
                                <div className='arrow-wrapper'>
                                    <img src="/images/arrow-down.svg" alt="arrow" />

                                </div>
                                </div>
                            </button>
                            </div>

                        </div>
                    </form>
                    </div>
                </div>

                <div className='xl:col-span-5 min-h-96'>
                    <div className='w-full h-full hover:cursor-grab rounded-3xl overflow-hidden' >
                        <ContactExperience />
                    </div>
                </div>
            </div>

        </div>
    </section>
    

  )
}

export default Contact
