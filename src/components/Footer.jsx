import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '/src/components/Footer.css'

const Footer = () => {
    return (


        <footer className="w-full bg-indigo-500 p-8 mt-48">
            <div className='flex'>
                <div className='w-1/2'>
            <div className="fhdg mb-3">
                <strong>IS</strong>


            </div>
            <div className="ftxt">
                <p>Efficiency in Every Transaction, Precision in Every Count.</p>
            </div>
            <div className='mt-5'>
            <FontAwesomeIcon icon={faFacebook} /> 
            <FontAwesomeIcon icon={faInstagram} className='ml-2'/>
            <FontAwesomeIcon icon={faTelegram} className='ml-2'/> 
            <FontAwesomeIcon icon={faLinkedin} className='ml-2'/> 
            <FontAwesomeIcon icon={faYoutube} className='ml-2 '/> 
            </div>
            </div>
            <div className="flex w-1/2 justify-end gap-y-6 gap-x-12 bg-indigo-500 text-center text-white ">
                <ul className="flex items-center gap-y-2 gap-x-8">
                    <li>
                        <div className='foot'>Company</div> {/*text-2xl mb-2  */}
                        <ul className='cont'>
                            <li>Community</li>
                            <li>Services</li>
                            <li>Email</li>  
                        </ul>

                    </li>
                    <li>
                    <div className='foot'>Features</div>
                        <ul className='cont'>
                            <li>Accounting</li>
                            <li>Analytics</li>
                            <li>Inventory</li>   
                        </ul>

                    </li>
                    <li>
                    <div className='foot'>Resources</div>
                        <ul className='cont'>
                            <li>Social media</li>
                            <li>News blog</li>
                            <li>Brochure</li>
                        </ul>

                    </li>

                </ul>
            </div>
            </div>
            <hr className="my-8 border-black" />
            <div className="text-center text-white">
                © 2024 InventorySync
            </div>
        </footer>
    );
}

export default Footer;






