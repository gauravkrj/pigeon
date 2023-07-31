import Lottie from 'lottie-react';
const About = () => {
 
  
  return (
    <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="rounded-lg p-8 md:p-12">
          <a href="/" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
            <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
              <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
            </svg>
            Tutorial
          </a>
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-4">How to quickly deploy a static website</h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
          <a href="/" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>

        {/* Right Side */}
        <div className="rounded-lg p-8 md:p-12 flex items-center">
                  <div className=" pr-6">
                <h1>Lottie</h1>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
