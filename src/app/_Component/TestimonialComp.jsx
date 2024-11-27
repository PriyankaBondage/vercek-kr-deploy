"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';
import '../Styles/slide.module.css'


const author = [
    {
        "id": 99112,
        "post_author": "Sabrina Maniscalco",
        "post_date": "2024-11-25T06:30:00.000Z",
        "banner_img": "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/11/1732534886117-Sabrina Maniscalco.webp",
        "post_title": "Quantum Computing: Applications and Challenges for Enterprise Technology",
        "cat_slug": "guest-author",
        "post_name": "quantum-computing-applications-and-challenges-for-enterprise-technology"
    },
    {
        "id": 99095,
        "post_author": "Dr. Jose Albornoz",
        "post_date": "2024-11-20T06:30:00.000Z",
        "banner_img": "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/11/1732100843943-Realizing the value of enterprise-grade AI@4x.webp",
        "post_title": "Realizing the value of enterprise-grade AI: From proof-of-concept to real-world problem-solving",
        "cat_slug": "guest-author",
        "post_name": "realizing-the-value-of-enterprise-grade-ai-from-proof-of-concept-to-real-world-problem-solving"
    },
    {
        "id": 99077,
        "post_author": "Brian Hoekelman",
        "post_date": "2024-11-18T06:30:00.000Z",
        "banner_img": "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/11/1731934429275-Brian Hoekelman.webp",
        "post_title": "The Road to AI in Multicloud AI: From proof-of-concept to real-world ",
        "cat_slug": "guest-author",
        "post_name": "the-road-to-ai-in-multicloud"
    },
    {
        "id": 99115,
        "post_author": "Sabrina Maniscalco",
        "post_date": "2024-11-25T06:30:00.000Z",
        "banner_img": "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718624208433-Trevor%20Schulze.webp?width=500",
        "post_title": "Quantum Computing: Applications and Challenges for Enterprise Technology",
        "cat_slug": "guest-author",
        "post_name": "quantum-computing-applications-and-challenges-for-enterprise-technology"
    },
]

function TestimonialComp() {
    const [data, setData] = useState(author)

    return (
        <>
            <div className='text-center font-bold text-5xl mt-12'>Testimonials</div>
            <h3 className='text-lg text-center m-3'>A Satisfied customer is the best business strategy of all.</h3>


            <Swiper
                pagination={{
                    clickable: true,
                }}

                spaceBetween={20}
                slidesPerView={1}
                loop="true"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
                modules={[Pagination]}
  


            >
                {data?.map((authorData) => (
                    <SwiperSlide key={authorData.id}>
                        <div className="text-center p-4 flex justify-between gap-5">
                            <Image
                                className="rounded-full object-contain"
                                src={authorData?.banner_img}
                                width={100}
                                height={100}
                                alt={authorData.post_author}
                            />
                            <div className='border border-gray-300 shadow-lg'>
                                <h4 className="font-semibold text-xl mt-4">{authorData.post_author}</h4>
                                <p className="text-lg text-gray-600">{authorData.post_title}</p>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default TestimonialComp
