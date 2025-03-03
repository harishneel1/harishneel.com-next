"use client"

import { useState } from 'react';
import BookingModal from '../../components/ui/BookingModal';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="fixed w-full bg-white z-50 shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center space-x-16">
                            <a href="/" className="text-2xl font-bold text-indigo-600">Harish Neel</a>
                            <div className="hidden md:flex space-x-8">
                                <a href="#services" className="nav-link text-gray-600 hover:text-indigo-600">Services</a>
                                <a href="#process" className="nav-link text-gray-600 hover:text-indigo-600">Process</a>
                                {/* <a href="#case-studies" className="nav-link text-gray-600 hover:text-indigo-600">Case Studies</a> */}
                                <a href="#about" className="nav-link text-gray-600 hover:text-indigo-600">About</a>
                                <a href="#code" className="nav-link text-gray-600 hover:text-indigo-600">Code</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#contact" className="nav-link text-indigo-600 font-semibold">Contact</a>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="primary-button px-6 py-3 text-white font-medium rounded-lg"
                            >
                                Book a Call
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}