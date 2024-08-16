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
    const [filter, setFilter] = useState('');
    const [arr, setArr] = useState(true);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const { data: products, isLoading } = useQuery({
        queryKey: ['products', currentPage, itemsPerPage, search, asc, sortByDate, filter, minPrice, maxPrice],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}&search=${search}&sort=${asc ? 'asc' : 'desc'}&sortByDate=${sortByDate}&filter=${filter}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
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

    const handlePriceChange = (e, setter) => {
        setter(e.target.value);
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div>
            <div className="text-center mt-10 md:mt-20">
                <form onSubmit={handleSearch} className="mb-4 md:mb-10">
                    <div>
                        <input
                            className="input rounded-r-none input-primary input-bordered border-blue-500 w-1/2"
                            type='text'
                            name='search'
                            onChange={e => setSearchText(e.target.value)}
                            value={searchText}
                            placeholder='Search By Name . . .'
                        />
                        <button
                            type="submit"
                            className='px-1 h-[50px] rounded-l-none md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none'
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div className='lg:flex mb-10 md:mb-20 flex-row-reverse text-center lg:mx-60 items-center justify-around'>
                <div>
                    <details className="dropdown md:mb-0 mb-5" onClick={() => setArr(!arr)}>
                        <summary className="m-1 border-2 rounded-lg p-4 cursor-pointer text-gray-600">Sort By Date & Time</summary>
                        <ul className="p-2 shadow-2xl menu dropdown-content z-[1] gap-5 rounded-box w-52">
                            <li>
                                <button
                                    className="btn"
                                    onClick={() => setAsc(!asc)}
                                >
                                    {asc ? 'Price: Low To High' : 'Price: High to Low'}
                                </button>
                            </li>
                            <li>
                                <button
                                    className="btn"
                                    onClick={() => setSortByDate(!sortByDate)}
                                >
                                    {sortByDate ? 'Date: Newest First' : 'Date: Oldest First'}
                                </button>
                            </li>
                        </ul>
                    </details>
                </div>
                <div className='flex flex-col items-center lg:flex-row lg:gap-20 gap-5'>
                <input
                    type="number"
                    onChange={e => handlePriceChange(e, setMinPrice)}
                    value={minPrice}
                    placeholder="Min Price"
                    className='border p-4 rounded-lg lg:w-full w-60 mt-0 lg:mt-0 md:mt-5'
                />
                <input
                    type="number"
                    onChange={e => handlePriceChange(e, setMaxPrice)}
                    value={maxPrice}
                    placeholder="Max Price"
                    className='border p-4 rounded-lg lg:w-full w-60 lg:mb-0 mb-5'
                />
            </div>
                <div>
                    <select
                        onChange={e => {
                            setFilter(e.target.value);
                            setCurrentPage(1);
                        }}
                        name='category'
                        id='category'
                        value={filter}
                        className='border p-4 rounded-lg lg:w-96'
                    >
                        <option value=''>Filter By Category</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Home Appliances'>Home Appliances</option>
                        <option value='Fashion'>Fashion</option>
                        <option value='Fitness'>Fitness</option>
                        <option value='Groceries'>Groceries</option>
                    </select>
                </div>
            </div>

            

            <div className='grid grid-cols-1 md:grid-cols-2 md:mx-14 lg:grid-cols-3 lg:mx-40 mx-5 gap-5 lg:gap-14'>
                {products.map(product => (
                    <div key={product._id} className="rounded-md shadow-md hover:shadow-2xl hover:shadow-green-400 dark:bg-gray-50 dark:text-gray-800">
                        <div>
                            <img src={product.Product_Image} alt="" className="object-cover object-center w-full rounded-t-md md:h-96 dark:bg-gray-500" />
                        </div>
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">{product.Product_Name}</h2>
                                <p className="dark:text-gray-800">{product.Description}</p>
                                <div className='md:flex justify-between pt-6'>
                                    <p className="dark:text-gray-800 text-2xl font-semibold"><span className='font-normal'>Price:</span> ${product.Price}</p>
                                    <div className='flex gap-5 md:pt-0 pt-5 lg:gap-10'>
                                        <p className="dark:text-gray-800 flex items-center gap-1"><FaCalendar />{product.date}</p>
                                        <p className="dark:text-gray-800 flex items-center gap-1"><MdOutlineAccessTime />{product.time}</p>
                                    </div>
                                </div>
                                <p className="dark:text-gray-800 text-xl font-bold pt-3"><span className='font-normal'>Category:</span> {product.Category}</p>
                                <div className='flex justify-end'>
                                    <p className="dark:text-gray-800 text-xl flex items-center"><FaStar />{product.Ratings}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-12 mb-20'>
                {/* Previous Button */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePaginationButton(currentPage - 1)}
                    className='md:px-4  px-2 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500 hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='md:w-6 w-2 md:h-6 mx-1 rtl:-scale-x-100' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
                        </svg>
                        <span className='md:mx-1'>previous</span>
                    </div>
                </button>
                {/* Numbers */}
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePaginationButton(btnNum)}
                        className={`md:py-2 px-2 md:px-4 mx-1 rounded-md border border-gray-300 capitalize text-gray-700 ${currentPage === btnNum ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}
                        key={btnNum}
                    >
                        {btnNum}
                    </button>
                ))}
                {/* Next Button */}
                <button
                    disabled={currentPage === numberOfPages}
                    onClick={() => handlePaginationButton(currentPage + 1)}
                    className='md:px-4 px-2 md:py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500 hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='md:mx-1'>Next</span>
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-2 md:w-6 md:h-6 mx-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Products;
