import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaCalendar, FaStar } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';

const Products = () => {
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');
    const [asc, setAsc] = useState(true);
    const [sortByDate, setSortByDate] = useState(false);
    const [filter, setFilter] = useState('')


    const { data: products, isLoading } = useQuery({
        queryKey: ['products', currentPage, itemsPerPage, search, asc, sortByDate, filter],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}&search=${search}&sort=${asc ? 'asc' : 'desc'}&sortByDate=${sortByDate}&filter=${filter}`);
            return data;
        }
    });

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios.get(`http://localhost:5000/product-count`);
            setCount(data.count);
        };
        getCount();
    }, []);

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1);
    const handlePaginationButton = value => {
        setCurrentPage(value);
    };

    const handleSearch = e => {
        e.preventDefault();
        setSearch(searchText);
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div>
            <div className="text-center">
                <form onSubmit={handleSearch} className="mb-10">
                    <div>
                        <input
                            className="input  rounded-r-none input-primary input-bordered border-blue-500  w-1/2"
                            type='text'
                            name='search'
                            onChange={e => setSearchText(e.target.value)}
                            value={searchText}
                            placeholder='Search By Tag Name'
                        />
                        <button className='px-1 h-[50px] rounded-l-none md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <button
                className="btn btn-secondary"
                onClick={() => setAsc(!asc)}
            >
                {asc ? 'Price: Low To High' : 'Price: High to Low'}
            </button>
            <button
                className="btn btn-secondary"
                onClick={() => setSortByDate(!sortByDate)}
            >
                {sortByDate ? 'Date: Newest First' : 'Date: Oldest First'}
            </button>

            <div>
                <select
                    onChange={e => {
                        setFilter(e.target.value)
                        setCurrentPage(1)
                    }}
                    name='category'
                    id='category'
                    value={filter}
                    className='border p-4 rounded-lg'
                >
                    <option value=''>Filter By Category</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Home Appliances'>Home Appliances</option>
                    <option value='Fashion'>Fashion</option>
                    <option value='Fitness'>Fitness</option>
                    <option value='Groceries'>Groceries</option>
                </select>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 md:mx-14 lg:grid-cols-3 lg:mx-40 mx-5 gap-5 lg:gap-14'>
                {
                    products.map(product => (
                        <div key={product._id} className="rounded-md shadow-md hover:shadow-2xl dark:bg-gray-50 dark:text-gray-800">
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
                                            <p className="dark:text-gray-800 flex items-center gap-1"><FaCalendar />{product.date}</p>
                                            <p className="dark:text-gray-800 flex items-center gap-1"><MdOutlineAccessTime />{product.time}</p>
                                        </div>
                                    </div>
                                    <p className="dark:text-gray-800 text-xl pt-3">Category: {product.Category}</p>
                                    <div className='flex justify-end'>
                                        <p className="dark:text-gray-800 text-xl flex items-center"><FaStar />{product.Ratings}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center mt-12'>
                {/* Previous Button */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePaginationButton(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>
                        <span className='mx-1'>previous</span>
                    </div>
                </button>
                {/* Numbers */}
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePaginationButton(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-blue-500 text-white' : ''
                            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}
                {/* Next Button */}
                <button
                    disabled={currentPage === numberOfPages}
                    onClick={() => handlePaginationButton(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Products;
