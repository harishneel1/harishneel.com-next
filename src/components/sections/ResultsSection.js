import React from 'react';

const ResultCard = ({ icon, title, subtitle, metrics }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
                <p className="text-gray-500">{subtitle}</p>
            </div>
        </div>
        <div className="space-y-4">
            {metrics.map((metric, index) => (
                <div key={index} className={`flex justify-between items-baseline ${index !== metrics.length - 1 ? 'border-b border-gray-100 pb-2' : ''
                    }`}>
                    <span className="text-gray-600">{metric.label}</span>
                    <span className="text-green-600 font-medium">{metric.value}</span>
                </div>
            ))}
        </div>
    </div>
);

const ResultsSection = () => {
    const results = [
        {
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "FinTech Leader",
            subtitle: "AI-Powered Risk Assessment",
            metrics: [
                { label: "Processing Time", value: "-85%" },
                { label: "Accuracy Rate", value: "+42%" },
                { label: "Annual Savings", value: "$1.2M" }
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Healthcare Provider",
            subtitle: "Patient Care Optimization",
            metrics: [
                { label: "Patient Satisfaction", value: "+64%" },
                { label: "Wait Times", value: "-73%" },
                { label: "ROI", value: "285%" }
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "E-commerce Giant",
            subtitle: "Inventory Optimization",
            metrics: [
                { label: "Stock Accuracy", value: "+91%" },
                { label: "Waste Reduction", value: "-45%" },
                { label: "Cost Savings", value: "$2.4M" }
            ]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Real Results, Real ROI
                        <span className="text-indigo-600"> Recent Success Stories</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See how we've helped companies just like yours transform their operations with AI.
                        Every project delivered on time, on budget, with guaranteed ROI.
                    </p>
                </div>

                {/* Featured Case Study */}
                <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 mb-16 shadow-lg border border-indigo-100">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
                                Featured Success Story
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                How We Helped Align Chiropractic Double Patient Visits While Cutting Admin Time by 67%
                            </h3>
                            <div className="space-y-4 mb-8">
                                <p className="text-gray-600">
                                    A complete transformation of practice workflow, enabling chiropractors to focus on
                                    healing instead of paperwork. Within 48 hours of AI implementation, practitioners were
                                    spending 2+ more hours daily with patients - all while completing their documentation on time.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="text-2xl font-bold text-indigo-600 mb-1">423%</div>
                                        <div className="text-sm text-gray-600">ROI Achieved</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="text-2xl font-bold text-indigo-600 mb-1">72%</div>
                                        <div className="text-sm text-gray-600">Time Saved on Documentation</div>
                                    </div>
                                </div>
                            </div>
                            <a href="/case-study-chiro.html" className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center gap-2">
                                Read Full Case Study
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-100 rounded-xl opacity-20 transform rotate-3"></div>
                            <img src="/api/placeholder/600/400" alt="Case Study" className="relative rounded-xl shadow-lg" />
                        </div>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {results.map((result, index) => (
                        <ResultCard key={index} {...result} />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="#audit"
                        className="inline-block px-8 py-4 text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Get Your Free AI Audit & Strategy Session
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;