const Footer = () => {
    return (


        <footer className="w-full bg-gray-700 p-8 mt-7">
            <div className="text-white font-bold text-2xl">
                <strong>IS</strong>


            </div>
            <div className="mt-5 text-white">
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-end gap-y-6 gap-x-12 bg-gray-700 text-center text-white ">
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        Company
                        <ul>
                            <li>Email</li>
                            <li>Services</li>
                            <li>Community</li>
                        </ul>

                    </li>
                    <li>
                        Features
                        <ul>
                            <li>Analytics</li>
                            <li>Inventory</li>
                            <li>Accounting</li>
                        </ul>

                    </li>
                    <li>
                        Resources
                        <ul>
                            <li>News blog</li>
                            <li>Social media</li>
                            <li>Brochure</li>
                        </ul>

                    </li>

                </ul>
            </div>
            <hr className="my-8 border-black" />
            <div className="text-center text-white">
                © 2024 InventorySync
            </div>
        </footer>
    );
}

export default Footer;






