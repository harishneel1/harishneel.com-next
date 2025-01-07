import React from 'react';

const FeatureItem = ({ title, description }) => (
    <li className="flex items-start gap-3">
        <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
            <span className="font-semibold text-gray-900">{title}</span>
            <p className="text-gray-600">{description}</p>
        </div>
    </li>
);

const AuditSection = () => {
    const whatYouGet = [
        {
            title: "AI Opportunity Map",
            description: "Detailed analysis of your top 5 highest-ROI AI implementation opportunities"
        },
        {
            title: "ROI Projection",
            description: "Detailed cost-benefit analysis and expected return on investment"
        },
        {
            title: "Implementation Blueprint",
            description: "Step-by-step roadmap for your AI transformation journey"
        },
        {
            title: "Competitive Analysis",
            description: "See how your AI readiness compares to industry leaders"
        }
    ];

    const perfectFor = [
        {
            title: "Business Leaders",
            description: "Who want to stay ahead of the AI revolution"
        },
        {
            title: "Operations Managers",
            description: "Looking to eliminate inefficiencies and reduce costs"
        },
        {
            title: "Innovation Teams",
            description: "Seeking to transform their organization with AI"
        },
        {
            title: "Department Heads",
            description: "Ready to boost team productivity with AI"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 mb-4">
                            Limited Time Offer
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Get Your Free AI Readiness Audit{' '}
                            <span className="text-indigo-600">($2,500 Value)</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            A comprehensive 60-minute strategy session to uncover your highest-impact AI opportunities
                        </p>
                    </div>

                    {/* Offer Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* What You Get */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-indigo-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">What You'll Get:</h3>
                            <ul className="space-y-4">
                                {whatYouGet.map((item, index) => (
                                    <FeatureItem key={index} {...item} />
                                ))}
                            </ul>
                        </div>

                        {/* Perfect For */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-indigo-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Perfect For:</h3>
                            <ul className="space-y-4">
                                {perfectFor.map((item, index) => (
                                    <FeatureItem key={index} {...item} />
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Guarantee Box */}
                    <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-100 mb-12">
                        <div className="flex gap-4 items-center">
                            <svg className="w-12 h-12 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Promise to You</h3>
                                <p className="text-gray-600">
                                    After our session, you'll have a clear vision of how AI can transform your business - or we'll extend the consultation at no cost until you do.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href="#book-audit"
                            className="inline-block px-8 py-4 text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                        >
                            Book Your Free AI Audit Now
                        </a>
                        <p className="text-gray-500 mt-4">Limited to 5 companies per month</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditSection;