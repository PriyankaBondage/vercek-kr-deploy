"use client"
import React, { useState, useEffect } from 'react'
import blogs from "../Styles/blog.module.css"
import axios from "axios"
import Link from 'next/link';


function ServiceComp() {

    const [service, setService] = useState([]);

    const fetchService = async () => {
        try {
            const { data } = await axios.get(
                'https://app-node.talkfintech.com:3016/api/post/homelatestnews'
            );

            setService(data);
        } catch (error) {
            console.error('Error fetching service:', error);
        }
    };

    useEffect(() => {
        fetchService();
    }, []);
    return (
        <div className="mt-8" style={{
            backgroundImage: `url('https://www.extrapolate.com/sliderimg/syndicate-research.webp')`
        }}>

            <div className='container grid grid-cols-1 md:grid-cols-2 w-full  bg-cover bg-center bg-no-repeat text-white'>
                <div className='p-8 hover:bg-red-600'>
                    <h2 className='mt-3 mb-3 font-bold text-center text-4xl'>Blogs</h2>
                    <p className='text-white text-start p-6 text-lg'>One of the best way to sabotage content is to not tie it to you goals.
                        So now you know why you are cresting content.
                    </p>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-items-center'>


                        {service?.slice(0, 2)?.map((blogData, i) => (
                            <div className={blogs.blog_title} key={i}>

                                <div className={blogs.blogcard}>

                                    <h3 className='text-lg text-red-600 font-semibold mt-3'>{blogData?.post_author}</h3>
                                    <Link href={`/report/${blogData?.post_content}`}>
                                        <p className='text-center text-black p-2'>{blogData?.post_content
                                        }</p>
                                    </Link>

                                    <div className='mt-9'>
                                        <button className='border-2 border-red-600 p-2 text-black rounded-2xl bottom-2'>Read Services</button>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                    <div className='mt-9 text-end'>
                        <button className=' bg-slate-100 m-1 px-10 font-bold py-1 text-red-500 rounded-xl bottom-3'>See All Blogs</button>
                    </div>

                </div>

                <div className='p-8 hover:bg-red-600'>
                    <h2 className='mt-3 mb-3 font-bold text-center text-4xl'>Press Release</h2>
                    <p className='text-white text-start p-6 text-lg'>Be less delighted about content and everything for sabotage content.
                        now you know why you are cresting content

                    </p>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-items-center'>

                        {service?.slice(2)?.map((blogData, i) => (
                            <div className={blogs.blogcard} key={i}>
                                
                                <h3 className='text-lg text-red-600 font-semibold mt-3'>{blogData?.post_author}</h3>
                                <Link href={`/report/${blogData?.post_content}`}>
                                        <p className='text-center text-black p-2'>{blogData?.post_content
                                        }</p>
                                    </Link>
                          
                                <div className='mt-9'>
                                    <button className='border-2 border-red-600 p-2 text-black rounded-2xl bottom-2'>Read Services</button>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='mt-9 text-end'>
                
                        <button className=' bg-slate-100 m-1 px-10 font-bold py-1 text-red-500 rounded-xl '>See All Release</button>
                    
                    </div>


                </div>

                {/* <div className='p-8 hover:bg-red-600'>
                    <h2 className='mt-3 mb-3 font-bold text-start text-4xl'>Press Release</h2>
                    <p style={{ textAlign: "justify" }} className='mt-3 mb-3'>Are in depth analysis of particular segment
                        which captures the company trends, shifts, supplier side, innovation,
                        disruption and other aspect which will play a major role in defining early
                        paradigm shifts. Include analysis of overall Industry in a specific
                        geography. These reports possess utmost accuracy and the data and
                        information provided are sourced from authentic government and industrial
                        bodies.</p>
                    <div className='mt-9'>
                        <button className='border-2 border-white p-2'>Explore Services</button>
                    </div>

                </div> */}

            </div>


        </div>
    )
}

export default ServiceComp




