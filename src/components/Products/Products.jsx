import React from 'react'
import Img1 from "../../assets/cakes/cake1.jpg"
import Img2 from "../../assets/cakes/cake2.jpg"
import Img3 from "../../assets/cakes/cake3.jpg"
import Img4 from "../../assets/cakes/cake4.jpg"
import Img5 from "../../assets/cakes/cake5.jpg"
// import Img6 from "../../assets/cakes/cake6.jpg"
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Red Velvet Cake",
        rating: 4.5,
        color: 'red',
        aosDelay: "100"
    },
    {
        id: 2,
        img: Img2,
        title: "Chocolate Fudge Cake",
        rating: 4.8,
        color: 'brown',
        aosDelay: "200"
    },
    {
        id: 3,
        img: Img3,
        title: "Vanilla Bean Cake",
        rating: 4.3,
        color: 'ivory',
        aosDelay: "300"
    },
    {
        id: 4,
        img: Img4,
        title: "Lemon Zest Cake",
        rating: 4.6,
        color: 'yellow',
        aosDelay: "400"
    },
    {
        id: 5,
        img: Img5,
        title: "Strawberry Delight Cake",
        rating: 4.9,
        color: 'pink',
        aosDelay: "500"
    },
    // {
    //     id: 6,
    //     img: Img6,
    //     title: "Blueberry Bliss Cake",
    //     rating: 4.7,
    //     color: 'blue',
    //     aosDelay: "600"
    // },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='text-sm text-primary '>Top Selling Products for you.</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
                <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Perferendis impedit 
                    enim saepe.
                </p>
            </div>
            {/* Body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 
                    md:grid-cols-4 lg:grid-cols-5 place-items-center
                    gap-5'>
                    {/* card section */}
                    {ProductsData.map((data) =>(
                        <div 
                        data-aos='fade-up'
                        data-aos-delay={data.aosDelay}
                        key={data.id}
                        className='space-y-3'>
                            <img src={data.img} alt="" 
                            className='h-[220px] w-[150px] object-cover rounded-md'
                            />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-2'>
                                    <FaStar className='text-yellow-500'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* view all */}
                <div 
                data-aos='fade-up' 
                className='flex justify-center'>
                    <button onClick={() => alert("This not available yet")} className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:scale-105 duration-200'>View All Button</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
