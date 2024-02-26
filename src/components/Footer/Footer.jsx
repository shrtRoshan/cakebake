import React from 'react'
import footerLogo from "../../assets/logo.png"
import Banner from "../../assets/website/footer-patern.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone } from 'react-icons/fa6'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    height: '100%',
    width: '100%',
}

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "Home",
        link: "/#"
    },
]

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white bg-gray-600 '>
      <div className='container'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 pv-44 pt-5'>
            {/* company detail */}
            <div className="py-8 px-4">
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 italic'>
                    <img src={footerLogo} alt=""
                    className='max-w-[50px]' />
                    Cake Bake
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eaque soluta alias cumque obcaecati atque? Minus earum suscipit facilis quibusdam?</p>
            </div>
            {/* footer link */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {FooterLinks.map((link) => (
                                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Social Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {FooterLinks.map((link) => (
                                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>  
                {/* Social link */}
                <div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaInstagram className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl'/>
                        </a>
                    </div>
                    <div className="mt-6">
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Dakxindhoka, Kathmandu</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className='flex items-center gap-3'>
                            <FaPhone />
                            <p>+977 9800000000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
