import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaCalendar, FaStar } from 'react-icons/fa';
import { MdOutlineAccessTime } from "react-icons/md";

const Products = () => {

    const { data: products, isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/products`);
            return data;
        }
    });

    if (isLoading) return <LoadingSpinner />
    console.log(products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:mx-14 lg:grid-cols-3 lg:mx-40 mx-5 gap-5 lg:gap-14'>
            {
                products.map(product => <div key={product._id} className=" rounded-md shadow-md hover:shadow-2xl dark:bg-gray-50 dark:text-gray-800">
                    <div>
                    <img src={product.Product_Image} alt="" className="object-cover object-center w-full rounded-t-md md:h-96 dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">{product.Product_Name}</h2>
                            <p className="dark:text-gray-800">{product.Description}</p>
                            <div className='md:flex justify-between pt-6'>
                            <p className="dark:text-gray-800 text-2xl font-semibold">Price: ${product.Price}</p>
                            <div className='flex gap-5 md:pt-0 pt-5 lg:gap-10'>
                            <p className="dark:text-gray-800 flex items-center gap-1"><FaCalendar/>{product.date}</p>
                            <p className="dark:text-gray-800 flex items-center gap-1"><MdOutlineAccessTime/>{product.time}</p>
                            </div>
                            </div>
                            <p className="dark:text-gray-800 text-xl pt-3">Category: {product.Category}</p>
                           <div className='flex justify-end'>
                           <p className="dark:text-gray-800 text-xl flex items-center"><FaStar/>{product.Ratings}</p>
                           </div>
                            
                        </div>
                       
                    </div>
                </div>)
            }
        </div>
    );
};

export default Products;