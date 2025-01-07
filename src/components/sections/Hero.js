export default function Hero() {
    return (
        <section className="hero-bg min-h-screen flex items-center">
            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="lg:max-w-xl pt-8">
                        <span className="featured-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-indigo-600 mb-10">
                            Featured in TechCrunch
                        </span>

                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8"
                            style={{ animation: "fadeInUp 0.8s ease-out 0.2s forwards", opacity: 0 }}>
                            "I'll Double Your AI ROI in 90 Days — Or You Don't Pay"
                        </h1>

                        <p className="text-xl text-gray-600 mb-10"
                            style={{ animation: "fadeInUp 0.8s ease-out 0.4s forwards", opacity: 0 }}>
                            Join the 50+ companies who've achieved 3-5x ROI with my proven AI implementation system. Average client results: 43% cost reduction & 2.8x productivity boost within 90 days.
                        </p>

                        <div className="guarantee-box rounded-xl p-5 mb-8 flex items-center space-x-4 bg-indigo-50/70"
                            style={{ animation: "fadeInUp 0.8s ease-out 0.6s forwards", opacity: 0 }}>
                            <svg className="w-6 h-6 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700 text-sm">
                                100% Performance Guarantee: Hit Your KPIs or Get Your Money Back
                            </span>
                        </div>

                        <a
                            href="#audit"
                            className="primary-button w-full px-8 py-6 text-xl font-medium rounded-xl text-center text-white inline-block hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30"
                            style={{ animation: "fadeInUp 0.8s ease-out 0.8s forwards", opacity: 0 }}
                        >
                            Get Your Free AI Audit ($2,500 Value)
                        </a>
                    </div>

                    <div className="relative hidden lg:block" style={{ animation: "scaleIn 1s ease-out 1s forwards", opacity: 0 }}>
                        <div className="relative w-[460px] ml-auto">
                            {/* Background decorative element */}
                            <div className="absolute inset-0 bg-indigo-100 rounded-2xl opacity-20 transform rotate-3 scale-105"></div>

                            {/* Main image with gradient overlay */}
                            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                                <img
                                    src="/images/harish-neel.jpeg"
                                    alt="Harish Neel"
                                    className="w-full rounded-2xl"
                                />
                            </div>

                            {/* Social links - now more subtle and integrated */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 z-20">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                                >
                                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>

                                <div className="w-px h-4 bg-gray-200"></div>

                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                                >
                                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>

                                <div className="w-px h-4 bg-gray-200"></div>

                                <a
                                    href="https://openslate.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                                >
                                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}