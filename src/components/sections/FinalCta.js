import React from 'react';

const StatCard = ({ value, label }) => (
    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
        <div className="text-3xl font-bold mb-2">{value}</div>
        <p className="text-indigo-100">{label}</p>
    </div>
);

const TrustBadge = ({ icon, text }) => (
    <div className="flex items-center gap-2">
        {icon}
        <span>{text}</span>
    </div>
);

const FinalCta = () => {
    const stats = [
        { value: "48hrs", label: "To First Results" },
        { value: "385%", label: "Average ROI" },
        { value: "100%", label: "Satisfaction Guaranteed" }
    ];

    const trustBadges = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            text: "No Risk"
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            text: "60-Min Session"
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            ),
            text: "Actionable Plan"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        The AI Revolution Is Here.<br />
                        Will You Lead or Follow?
                    </h2>

                    {/* Subheader */}
                    <p className="text-xl text-indigo-100 mb-12">
                        Every day without AI is a day your competitors are pulling ahead.
                        Get your free AI audit now and see exactly how to transform your business.
                    </p>

                    {/* Value Props */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {stats.map((stat, index) => (
                            <StatCard key={index} {...stat} />
                        ))}
                    </div>

                    {/* Main CTA */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-8">
                        <h3 className="text-gray-900 text-2xl font-bold mb-4">
                            Book Your Free AI Strategy Session
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Valued at $2,500 - Yours Free for a Limited Time
                        </p>
                        <a
                            href="#book-audit"
                            className="inline-block px-8 py-4 text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 mb-4"
                        >
                            Get Your Free AI Audit Now
                        </a>
                        <p className="text-sm text-gray-500">Limited to 5 companies per month</p>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-6 text-indigo-100">
                        {trustBadges.map((badge, index) => (
                            <TrustBadge key={index} {...badge} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCta;