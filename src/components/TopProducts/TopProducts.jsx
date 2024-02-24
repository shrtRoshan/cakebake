import React from 'react'
import Img1 from "../../assets/topcakes/cake1.png"
import Img2 from "../../assets/topcakes/cake2.png"
import Img3 from "../../assets/topcakes/cake3.png"
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Red Velvet Dream Cake',
        description: "Moist red velvet, cream cheese frosting, perfect for any occasion.",
    },
    {
        id: 2,
        img: Img2,
        title: 'Decadent Chocolate Cake',
        description: "Rich chocolate, luscious ganache, topped with chocolate curls.",
    },
    {
        id: 3,
        img: Img3,
        title: 'Classic Vanilla Bean Cake',
        description: "Real vanilla beans, moist sponge, fresh berries, timeless elegance.",
    },
];



const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className='text-left mb-24 '>
            <p data-aos='fade-up' className='text-sm text-primary '>Top Raited Products for you.</p>
            <h1 data-aos='fade-up' className='text-3xl font-bold'>Best Products</h1>
            <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Perferendis impedit 
                enim saepe.
            </p>
         </div>
        {/* Body Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 
                    md:grid-cols-3 md:gap-5 place-items-center'>
            {ProductsData.map((data) => (
                <div
                data-aos='zoom-in'
                className='rounded-2xl bg-white dark:bg-gray-800 
                hover:bg-black/80 dark:hover:bg-primary
                hover:text-white relative shadow-xl duration-300 group max-w-[300px]'
                >
                    {/* image Section */}
                    <div className='h-[120px]'>
                        <img src={data.img} alt="" 
                        className='max-w-[140px] block mx-auto transform -translate-y-20 
                        group-hover:scale-105 duration-300 drop-shadow-md'/>
                    </div>
                    {/* details Section */}
                    <div className="p-4 text-center">
                        {/* star rating */}
                        <div className="w-full flex items-center justify-center gap-1">
                            <FaStar className="text-yellow-500"></FaStar>
                            <FaStar className="text-yellow-500"></FaStar>
                            <FaStar className="text-yellow-500"></FaStar>
                            <FaStar className="text-yellow-500"></FaStar>
                        </div>
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                        <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 
                        rounded-full mt-4 group-hover:bg-white group-hover:last:text-primary'>Order Now</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
