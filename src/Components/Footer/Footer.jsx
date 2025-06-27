
import footerlogo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div>
            <div className='relative z-30 mt-16'>
                <div className="max-w-7xl mx-auto text-center bg-gradient-to-r from-indigo-200 via-white to-pink-200 py-8 rounded-2xl md:-mb-24">
                    <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
                    <p className="text-gray-500 py-3">Get the updates nad news right in your inbox!</p>
                    <input className='bg-gray-300 text-black rounded py-2 px-4 mr-2' type="text" placeholder='Enter your email' />
                    <button className='bg-amber-500 py-2 px-4 rounded font-semibold text-white'>Subscribe</button>

                </div>
            </div>
            <div className='bg-gray-800 z-10'>
                <div className='max-w-7xl mx-auto pt-8 md:pt-40'>
                    <div className='flex justify-center'>
                        <img className='md:w-48' src={footerlogo} alt="Footer-img" />
                    </div>
                    <div className='md:flex justify-between gap-5 px-2 text-white mb-5'>
                        <div className='md:w-1/3'>
                            <h3 className='text-lg font-bold mb-4'>About Us</h3>
                            <p className='text-gray-300 pr-4'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div className='md:w-1/3 md:ml-4'>
                            <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
                            <div className='text-gray-300 ml-3'>
                                <ul>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='md:w-1/3'>
                            <h3 className='text-lg font-bold mb-4'>Subscribe</h3>
                            <p className='text-gray-300'>Subscribe to our newsletter for the latest updates.</p>
                            <div className='flex mt-3 w-full px-1'>
                                <input className='bg-gray-100 text-black rounded-l py-1 px-2 w-[150px]' type="text" placeholder='Enter your email' />
                                <button className='bg-amber-500 py-1 px-2 rounded-r'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center py-5 text-gray-200 border-t-2 border-b-gray-300'>
                    <h3>@2025 Your Company All Right Reserved</h3>
                </div>
            </div>
        </div>

    );
};

export default Footer;