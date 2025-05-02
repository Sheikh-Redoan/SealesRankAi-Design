import React from 'react'

const Ready = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thanks for subscribing!');
      };
  return (
    <div className='mb-[144px]'>
      <div className="w-full max-w-[1440px] mx-auto py-8">
      <div className="w-full py-20 bg-gradient-to-r from-sky-900 to-blue-700 rounded-3xl flex flex-col items-center gap-12 px-4">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-3 max-w-2xl text-center">
          <h2 className="text-white text-4xl font-semibold font-manrope leading-[1.3]">
            Ready to Hire Smarter?
          </h2>
          <p className="text-stone-300 text-base font-normal font-manrope leading-relaxed">
            Unlock Exclusive Insights Subscribe to Our Newsletter
          </p>
        </div>

        {/* Form Section */}
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-[674px] flex flex-col items-center gap-4"
        >
          {/* Email Input (hidden in this design but can be added) */}
          {/* <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-6 py-4 rounded-full bg-white/10 text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
            required
          /> */}
          
          {/* CTA Button */}
          <button
            type="submit"
            className="px-9 py-4 bg-amber-200 hover:bg-amber-300 rounded-[50px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
          >
            <span className="text-blue-950 text-base font-medium font-manrope leading-relaxed">
              Join Now
            </span>
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Ready
