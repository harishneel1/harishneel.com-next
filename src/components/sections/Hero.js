export default function Hero() {
    return (
        <section className="hero-bg pt-32">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                    <div className="max-w-2xl">
                        <span className="featured-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-indigo-600 mb-8">
                            Featured in TechCrunch
                        </span>

                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                            style={{ animation: "fadeInUp 0.8s ease-out 0.2s forwards", opacity: 0 }}>
                            "I'll Double Your AI ROI in 90 Days — Or You Don't Pay"
                        </h1>

                        <p className="text-xl text-gray-600 mb-8"
                            style={{ animation: "fadeInUp 0.8s ease-out 0.4s forwards", opacity: 0 }}>
                            Join the 50+ companies who've achieved 3-5x ROI with my proven AI implementation system. Average client results: 43% cost reduction & 2.8x productivity boost within 90 days.
                        </p>

                        <div className="guarantee-box rounded-xl p-4 mb-8 flex items-center space-x-4"
                            style={{ animation: "fadeInUp 0.8s ease-out 0.6s forwards", opacity: 0 }}>
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-800 font-medium">
                                100% Performance Guarantee: Hit Your KPIs or Get Your Money Back
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12"
                            style={{ animation: "fadeInUp 0.8s ease-out 0.8s forwards", opacity: 0 }}>
                            <a href="#audit" className="primary-button px-8 py-4 text-lg font-medium rounded-lg text-center text-white">
                                Get Your Free AI Audit ($2,500 Value)
                            </a>
                            <a href="#results" className="px-8 py-4 text-lg font-medium rounded-lg text-center text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                                See Client Results
                            </a>
                        </div>

                        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            <StatCard number="10+" text="Years Experience" />
                            <StatCard number="50+" text="Projects Completed" />
                            <StatCard number="15+" text="Industries Served" />
                            <StatCard number="98%" text="Client Satisfaction" />
                        </div> */}
                    </div>

                    <div className="relative hidden lg:block" style={{ animation: "scaleIn 1s ease-out 1s forwards", opacity: 0 }}>
                        <div className="absolute inset-0 bg-indigo-100 rounded-3xl opacity-20 transform rotate-3"></div>
                        <img src="/api/placeholder/600/400" alt="Harish Neel" className="relative rounded-2xl shadow-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function StatCard({ number, text }) {
    return (
        <div className="stats-card bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg border border-orange-100 transform hover:scale-105 transition-transform duration-300">
            <div className="stats-number text-4xl font-bold text-orange-600 mb-2">{number}</div>
            <p className="text-gray-600 font-medium">{text}</p>
        </div>
    )
} 