import React from 'react'
import Head from 'next/head';
import TransitionEffect from '@/components/TransitionEffect';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Contacts = () => {
    return (
        <>
            <Head>
                <title>Renu | Contact Page</title>
                <meta name='description' content='Feel free to contact me.' />
            </Head>
            <TransitionEffect />

            <section className="min-h-screen bg-white text-gray-800 py-12 px-4" id="contact">
                <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                        <FaPhoneAlt className="text-3xl text-blue-600 mx-auto mb-2" />
                        <h3 className="font-bold text-lg">Phone</h3>
                        <p className="text-sm mt-2">+91 8305201543</p>
                    </div>

                    <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                        <FaEnvelope className="text-3xl text-blue-600 mx-auto mb-2" />
                        <h3 className="font-bold text-lg">Email Address</h3>
                        <p className="text-sm mt-2">deshmukhrenu4@gmail.com</p>
                    </div>

                    <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                        <FaMapMarkerAlt className="text-3xl text-blue-600 mx-auto mb-2" />
                        <h3 className="font-bold text-lg">Address</h3>
                        <p className="text-sm mt-2">Bhopal (Madhya Pradesh)</p>
                    </div>
                </div>

                <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-3 rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none border border-gray-300"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-3 rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none border border-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="p-3 rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none md:col-span-2 border border-gray-300"
                    />
                    <textarea
                        placeholder="Type here..."
                        rows="5"
                        className="p-3 rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none md:col-span-2 border border-gray-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md md:col-span-2 w-fit"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </>
    )
}

export default Contacts;
