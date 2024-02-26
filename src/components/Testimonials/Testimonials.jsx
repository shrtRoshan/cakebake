import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
    {
        id: "1",
        name: "Roshan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere mollitia harum nobis adipisci? Expedita quae officiis fugit nostrum nesciunt.",
        img: "https://picsum.photos/101/101"
    },
    {
        id: "2",
        name: "Roshan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere mollitia harum nobis adipisci? Expedita quae officiis fugit nostrum nesciunt.",
        img: "https://picsum.photos/101/102"
    },
    {
        id: "3",
        name: "Roshan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere mollitia harum nobis adipisci? Expedita quae officiis fugit nostrum nesciunt.",
        img: "https://picsum.photos/101/103"
    },
    {
        id: "4",
        name: "Roshan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere mollitia harum nobis adipisci? Expedita quae officiis fugit nostrum nesciunt.",
        img: "https://picsum.photos/101/104"
    },
    {
        id: "5",
        name: "Roshan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere mollitia harum nobis adipisci? Expedita quae officiis fugit nostrum nesciunt.",
        img: "https://picsum.photos/101/105"
    },
]

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

  return (
    <div className='py-10 mb-10'>
        <div className="container">
            {/* header */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='text-sm text-primary '>What our customers say.</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Testimonials</h1>
                <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Perferendis impedit 
                    enim saepe.
                </p>
            </div>
            {/* testimonial section */}
            <div data-aos='zoom-in'>
                <Slider {...settings}>
                    {TestimonialData.map((data) => (
                        <div className='my-6 '>
                            <div
                            key={data.id}
                            className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                            >
                                <div className='mb-4'>
                                    <img src={data.img} alt="" 
                                    className='rounded-full w-20 h-20'/>
                                </div>
                                <div className='flex flex-col item-center gap-4'>
                                    <div className='space-y-2'>
                                        <p className='text-xs text-gray-500'>{data.text}</p>
                                        <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                                    </div>
                                </div>
                                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
