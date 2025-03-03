"use client"

import React, { useState } from 'react';

export default function Code() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Call your API route
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    email: formData.email,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Success: Show the confirmation message
                setIsSubmitted(true);
                // Clear the form
                setFormData({
                    firstName: '',
                    email: '',
                });
            } else {
                // Handle error from API
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            // Handle network or other errors
            console.error('Error submitting form:', err);
            setError('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="container mx-auto px-6 py-16">
                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-100 rounded-full opacity-50 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-3xl" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative">
                        {/* Left Column - Text Content */}
                        <div className="max-w-xl">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-orange-600 bg-orange-50 border border-orange-100 mb-6">
                                Exclusive Code Access
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                AI Goldmine: Steal My Source Code!
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Don't just watch, start creating! I'm offering you the chance to steal all of the source code from the AI projects on my YouTube channel.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Sign up today and let's accelerate your AI journey - for free!
                            </p>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative z-10">
                            {!isSubmitted ? (
                                <>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Get My Code!</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your first name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                                placeholder="Enter your first name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your email address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium py-3 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition duration-300 shadow-md"
                                        >
                                            Get My Code!
                                        </button>
                                    </form>
                                    <p className="text-sm text-gray-500 mt-4 text-center">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
                                    <p className="text-gray-600 mb-6">
                                        Your code access is on its way to your inbox. Please check your email in the next few minutes.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-orange-600 underline hover:text-orange-700"
                                    >
                                        Go back to form
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Why I'm Sharing My Code With You
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Accelerate Your Learning
                                </h3>
                                <p className="text-gray-600">
                                    Skip the tutorial hell and start building real projects that you can understand and modify.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Practical Examples
                                </h3>
                                <p className="text-gray-600">
                                    Get access to working code that solves real problems, not just academic exercises.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Join Our Community
                                </h3>
                                <p className="text-gray-600">
                                    Connect with like-minded developers who are on the same AI journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            What Others Are Saying
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <div className="flex gap-4 mb-4">
                                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl font-bold text-orange-600">S</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">Sarah K.</h4>
                                        <p className="text-gray-500">Full Stack Developer</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    "Having access to this code repository was a game-changer for me. I was able to understand complex AI concepts by seeing them implemented in real projects."
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <div className="flex gap-4 mb-4">
                                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl font-bold text-orange-600">M</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">Michael T.</h4>
                                        <p className="text-gray-500">AI Enthusiast</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    "I went from watching tutorials to building my own AI projects in just a few weeks. The code examples were invaluable and well-documented."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8 md:p-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-6">
                                Ready to Level Up Your AI Skills?
                            </h2>
                            <p className="text-xl opacity-90 mb-8">
                                Get instant access to my complete code repository and start building amazing AI projects today.
                            </p>
                            <a
                                href="#top"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="inline-block px-8 py-4 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
                            >
                                Get Your Code Access Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}