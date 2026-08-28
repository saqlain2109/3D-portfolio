import React, { useRef, useState } from 'react'
import TitleHeader from "../components/TitleHeader";
import ContactExperience from '../components/ContactExperience'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ message: '', type: '' });
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus({ message: '', type: '' });

      try {
        const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLET_ID || import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey) {
          await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        }
        
        setStatus({ message: 'Thank you! Your message has been sent successfully.', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('EmailJs Error:', error);
        setStatus({ message: 'Something went wrong. Please try again or reach out directly via LinkedIn/Email.', type: 'error' });
      } finally {
        setLoading(false);
      }
    };

  return (
    <section id='contact' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
              title='Get In Touch With Me'
              sub='📧 Contact Information'
            /> 

            <div className="mt-16 grid-12-cols">
                <div className='xl:col-span-7'>
                    <div className='flex-center card-border rounded-xl p-6 md:p-10'>
                    <form onSubmit={handleSubmit} ref={formRef} className='w-full flex flex-col gap-6'>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input 
                              type="text" 
                              id='name' 
                              name='name' 
                              placeholder='Your Name' 
                              value={formData.name} 
                              onChange={handleChange} 
                              required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input 
                              type="email" 
                              id='email' 
                              name='email' 
                              placeholder='Your Email' 
                              value={formData.email} 
                              onChange={handleChange} 
                              required 
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea 
                              id='message' 
                              name='message' 
                              placeholder='Your Message' 
                              value={formData.message} 
                              onChange={handleChange} 
                              required 
                              rows={6} 
                              style={{resize: 'none'}} 
                            />
                        </div>

                        {status.message && (
                          <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30' : 'bg-rose-950/80 text-rose-300 border border-rose-500/30'}`}>
                            {status.message}
                          </div>
                        )}

                        <div>
                            <button type='submit' disabled={loading} className='w-full cursor-pointer'>
                                <div className='cta-button group px-10 md:px-20'>
                                <div className='bg-circle'/>
                                <p className='text'>{loading ? 'Sending...' : 'Send Message'}</p>
                                <div className='arrow-wrapper'>
                                    <img src="/images/arrow-down.svg" alt="arrow" />
                                </div>
                                </div>
                            </button>
                        </div>
                    </form>
                    </div>
                </div>

                <div className='xl:col-span-5 min-h-96'>
                    <div className='w-full h-full min-h-[400px] hover:cursor-grab rounded-3xl overflow-hidden card-border' >
                        <ContactExperience />
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact
