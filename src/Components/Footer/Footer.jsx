import React from 'react';

const Footer = () => {
    return (
        <div className="">
        <div className=" pb-[50px] w-full">
            
            <div className='border lg:w-[85%] w-[95%] mx-auto mb-5'></div>
        <section className="lg:w-[80%] w-[95%] mx-auto lg:flex flex lg:flex-row flex-col lg:justify-evenly items-center lg:gap-y-0 gap-y-16">
            
            <article className="flex flex-col gap-y-3 lg:text-start text-center lg:w-[30%] w-ful">
                <h3 className="text-[18px] text-center font-bold">Services</h3>
                <div className="text-center">
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                    
                </div>
            </article>
            <article className="flex flex-col gap-y-3 lg:text-start text-center lg:w-[30%] w-ful">
                <h3 className="text-[18px] text-center font-bold">Quick Links</h3>
                <div className="text-center">
                    <p>About</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
            </article>
            <article className="flex flex-col gap-y-3 lg:text-start text-center lg:w-[30%] w-ful">
                <h3 className="text-[18px] text-center font-bold">Legal</h3>
                <div className="text-center">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </article>
        </section>
        
    </div>
    </div>
    );
};

export default Footer;