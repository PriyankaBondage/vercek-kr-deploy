import React from 'react'
import Link from 'next/link'
import styles from "../Styles/navbar.module.css"
import Image from 'next/image'

function FootComp() {
    return (
        <div className='mt-16'>


            <footer className='bg-black w-full h-full'>

                <div className='container  w-full px-5 text-white justify-between  gap-5 grid md:grid-cols-4'>
                    <div className='brand mt-5'>

                        <div>
                            <Link href="/">
                                <Image
                                    className={styles.logo}
                                    src="https://kingsresearch.b-cdn.net/assets/img/logo/KingsResearch_logo_white.webp"
                                    alt="BrandLogo"
                                    layout="responsive"
                                    width={100}
                                    height={40} 
                                />
                            </Link>




                        </div>


                    </div>





                    <div className='mt-2 mb-7'>

                        <h3 className='pt-8 text-2xl font-bold'>Industry</h3>
                        <ul className='text-sm font-medium'>
                            <li className='mt-1 leading-5'>
                                Agritech
                            </li>
                            <li className='mt-1'>
                                Automotive
                            </li>
                            <li className='mt-1'>
                                Chemicals and Advanced Materials
                            </li>
                            <li className='mt-1'>
                                Food & Beverages
                            </li>
                            <li className='mt-1'>
                                Healthcare, Medical Devices & Biotechnology
                            </li>
                            <li className='mt-1'>
                                ICT & IoT
                            </li>
                            <li className='mt-1'>
                                Semiconductors & Electronics
                            </li>
                            <li className='mt-1'>
                                Energy & Power
                            </li>
                            <li className='mt-1'>
                                Retail
                            </li>
                            <li className='mt-1'>
                                Smart Utilities
                            </li>
                            <li className='mt-1'>
                                Machinery Equipment
                            </li>
                            <li className='mt-1'>
                                Aerospace & Equipment
                            </li>

                        </ul>
                    </div>


                    <div className='mt-2'>

                        <h3 className='pt-8 text-2xl font-bold'>Quick Links</h3>
                        <ul className='text-sm font-medium'>
                            <li className='mt-2'>
                                About Us
                            </li>
                            <li className='mt-2'>
                                Contact Us
                            </li>
                            <li className='mt-2'>
                                FAQ
                            </li>
                            <li className='mt-2'>
                                Privacy Policy
                            </li>
                            <li className='mt-2'>
                                Disclaimer
                            </li>
                            <li className='mt-2'>
                                Refund Policy
                            </li>

                            <li className='mt-9'>
                                <img src='https://extrapolate.b-cdn.net/Asset/payment-gateway.png' alt='cards' />
                            </li>
                        </ul>
                    </div>


                    <div className='mt-2'>
                        <h3 className='pt-8 text-2xl font-bold'>Sign up for newsletter and updates</h3>
                        <input className='p-2 rounded mt-3' type='text' placeholder='Email' />

                        <div className='mt-5 flex gap-3'><span ><input type='checkbox' /> </span><p >By checking this box, you agree to receive newsletters and communications.</p>
                        </div>

                        <button className='bg-red-600 text-white mt-2 py-2 px-4 rounded-lg text-sm'>Subscribe</button>

                        <div className='mt-7'>
                            <img src='https://static.wixstatic.com/media/5a9d7e_ab1a72add3474e2b968a87b6ec267e6d~mv2.png/v1/fill/w_199,h_49,al_c,usm_0.66_1.00_0.01,enc_auto/Kings%20Research%20Logo_edited.png' alt='kr' />
                        </div>
                    </div>


                </div>

            </footer>


            <footer className='bg-red-600 w-full h-full text-white'>
                <div className='container p-5'>



                    <p> © 2024 Kingsresearch. All Rights Reserved.</p>

                </div>

            </footer>


        </div>
    )
}

export default FootComp