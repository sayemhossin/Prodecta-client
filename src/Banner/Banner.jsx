
const Banner = () => {
    return (
        <div className="hero min-h-[60vh] md:min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Jrk9NnB/concept-coronavirus-social-distancing-pandemic-man-medical-mask-searching-something-looking-left-thr.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content lg:mr-[600px] md:ml-5 lg:ml-0">
                <div className=" text-center md:text-start">
                    <h1 className="mb-5  lg:w-auto lg:ml-9  text-2xl md:text-5xl lg:text-6xl font-bold">Innovate and Elevate: Discover, Share, and Explore Tech Products with Us!</h1>
                    <p className=" lg:w-auto text-xs lg:ml-9 md:text-[17px]">Embark on a journey of innovation with our platform, where you can discover a diverse array of cutting-edge tech tools meticulously curated to elevate your digital experience. From productivity-boosting software to groundbreaking gadgets, explore and empower yourself with the latest advancements to stay ahead in the digital realm.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;