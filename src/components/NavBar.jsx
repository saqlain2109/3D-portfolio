import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll)

        return() => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} `}>
            <div className='inner'>
                <a href="#hero" className="logo">
                    Saqlain | Stuff
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link , name})=>(
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline'/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='flex items-center gap-3'>
                    <a href="#contact" className='contact-btn group hidden sm:flex'>
                        <div className="inner">
                            <span>Contact Me</span>
                        </div>
                    </a>

                    {/* Mobile Menu Hamburger Button */}
                    <button
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        className='lg:hidden p-2.5 rounded-lg border border-white/10 bg-black-100/90 text-white flex flex-col justify-center items-center gap-1.5 cursor-pointer z-50'
                        aria-label="Toggle navigation menu"
                    >
                        <span className={`w-5 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-5 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-5 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className='lg:hidden fixed top-full left-0 w-full bg-black-100/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-5 animate-fadeIn z-40 shadow-2xl'>
                    <ul className='flex flex-col gap-4'>
                        {navLinks.map(({ link, name }) => (
                            <li key={name}>
                                <a
                                    href={link}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className='text-white-50 hover:text-cyan-400 text-lg font-medium transition-colors block py-1'
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className='w-full py-3 rounded-lg bg-cyan-400 text-black font-semibold text-center mt-2'
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </header>
    )
}

export default NavBar
