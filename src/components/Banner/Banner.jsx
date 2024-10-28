import reactLogo from '../../assets/Rectangle 1.png'

const Banner = () => {
    return (
        <main
            
        >
         <div className="bg-no-repeat  text-[#FFFFFF] bg-bottom mt-5 rounded-3xl w-[95%] h-[550px] mx-auto md:w-[1270px] md:h-[550px] md:container mb-8"
            style={{ backgroundImage: `url(${reactLogo})` }}>
                   <div className=' text-center  p-16'>
                <h2 className=' text-center text-5xl gap-2 '>
                    Discover an exceptional cooking <br />class tailored for you!
                    <p className='text-2xl mt-3'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                
                </h2>
            </div>
            <div className=' flex space-x-4 justify-center'>
                    <button className="btn bg-transparent border-white rounded-full px-6 py-2 text-white">
                        Our Feedback
                    </button>

                    <button className="btn bg-[#0BE58A] rounded-full px-6 py-2 text-black">
                        Explore Now
                    </button>
            </div>

         </div>

         <div className='text-center mt-10'>
        <h1 className='text-5xl font-bold'>Our Recipes</h1>
        <p className='mt-8 mb-10'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>

        

        
        </main>
    

     

    );
};

export default Banner;