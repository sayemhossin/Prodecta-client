import React from 'react';

const About = () => {
    return (
        <div className='md:container mx-6 md:mx-auto mb-20'>
            <h1 className="text-center text-5xl md:text-7xl font-bold mt-10  ">About Us</h1>
            <div className="divider w-full md:w-[500px] mx-auto"></div>
            <h1 className='text-2xl font-bold'>Welcome to Prodecta</h1>
            <p>At Prodecta, we are passionate about providing an exceptional online shopping experience for our customers. Our mission is to make it easy for you to find the products you need, compare them, and make informed decisions. We aim to create a platform where you can effortlessly browse, search, and filter products to find exactly what you're looking for.</p>

            <h1 className='text-2xl font-bold mt-5'>Who We Are</h1>

            <p>Prodecta is a full-stack single-page application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Our dedicated team of developers and designers has worked tirelessly to ensure that our website is not only functional but also aesthetically pleasing and user-friendly. We believe in the power of technology to transform the shopping experience, making it more efficient and enjoyable.</p>

            <h1 className='text-2xl font-bold mt-5'>Our Features </h1>
            <h2 className='text-xl font-bold mt-3'>Comprehensive Product Listings:</h2>
            <ol className='list-disc'>
                <li className='ml-10'>We offer a wide range of products with detailed information, including product names, images, descriptions, prices, categories, ratings, and creation dates.</li>
            </ol>
            <h2 className='text-xl font-bold mt-3'>Advanced Filtering and Searching:</h2>
            <ol className='list-disc'>
                <li className='ml-10'>Our search functionality allows you to quickly find products by name.</li>
                <li className='ml-10'>Filter products by brand, category, and price range to narrow down your options.</li>
                <li className='ml-10'>Use multiple filters simultaneously to get the most relevant results.
                </li>
            </ol>
            <h2 className='text-xl font-bold mt-3'>Efficient Pagination: </h2>
            <ol className='list-disc'>
                <li className='ml-10'>Browse through our products with ease, thanks to our efficient pagination system. Navigate between pages using next and previous buttons for a smooth browsing experience.
                </li>
            </ol>
            <h2 className='text-xl font-bold mt-3'>Sorting Options:</h2>
            <ol className='list-disc'>
                <li className='ml-10'>Sort products by price (low to high or high to low) and by date added (newest first) to find the best deals and the latest products.
                </li>
            </ol>
            <h2 className='text-xl font-bold mt-3'>Secure Authentication:</h2>
            <ol className='list-disc'>
                <li className='ml-10'>We prioritize your security and convenience by offering both Google Authentication and Email & Password Authentication using Firebase.
                </li>
            </ol>
            <h1 className='text-2xl font-bold mt-5'>Our Mission</h1>
            <p>Our mission at Prodecta is to create a seamless and enjoyable online shopping experience. We strive to provide a platform that not only meets but exceeds your expectations. Whether you're searching for the latest gadgets, fashion, home essentials, or anything in between, Prodecta is here to help you find what you need, quickly and efficiently.</p>

            <h1 className='text-2xl font-bold mt-5'>Contact Us</h1>
            <p>We value your feedback and are always here to help with any questions or concerns you may have. Feel free to reach out to us through our contact page or follow us on social media for the latest updates and promotions.</p>




        </div>
    );
};

export default About;