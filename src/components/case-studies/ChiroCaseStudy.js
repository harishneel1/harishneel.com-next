"use client"

import React from 'react';

const StatCard = ({ value, label }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="text-4xl font-bold text-indigo-600 mb-2">{value}</div>
        <p className="text-gray-600">{label}</p>
    </div>
);

const TimelineItem = ({ icon, title, items }) => (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-3 md:gap-8 items-start">
        <div className="timeline-dot absolute -left-12 bg-indigo-600 rounded-full p-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {icon}
            </svg>
        </div>
        <div className="md:col-span-1">
            <div className="bg-indigo-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
        </div>
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const ChiroCaseStudy = () => {
    const timeline = [
        {
            title: "First 48 Hours",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
            items: [
                "Deployed AI voice documentation system in all treatment rooms",
                "Set up automated SOAP note generation",
                "Staff reported leaving on time on day one"
            ]
        },
        {
            title: "Week 1",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
            items: [
                "Analyzed 8,000 patient visits across 3 practitioners",
                "Implemented real-time treatment documentation",
                "Notes completed before patient leaves room"
            ]
        }
    ];

    const outcomes = [
        { value: "3hrs → 45min", label: "Daily documentation time" },
        { value: "120 → 240", label: "Weekly patient visits" },
        { value: "98%", label: "Insurance claim acceptance" },
        { value: "$248K", label: "Annual revenue increase" }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 mb-6">
                            Featured Healthcare Case Study
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            How We Helped Align Chiropractic Double Patient Visits While Cutting Admin Time by 67%
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            A complete transformation of chiropractic workflow, resulting in more patients, better care, and
                            improved work-life balance
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <StatCard value="385%" label="ROI Achieved" />
                            <StatCard value="67%" label="Reduction in Documentation Time" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl p-8 mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Align Chiropractic's practitioners were trapped in a cycle of endless documentation, spending
                                over 3 hours daily on SOAP notes and insurance paperwork. This administrative burden was
                                severely limiting their capacity for patient care and practice growth. Through our AI
                                implementation, we transformed their workflow, doubled their patient capacity, and gave
                                practitioners back their time to focus on what matters most - helping patients heal.
                            </p>
                        </div>

                        {/* Implementation Timeline */}
                        <div className="relative space-y-12">
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
                            {timeline.map((phase, index) => (
                                <TimelineItem key={index} {...phase} />
                            ))}
                        </div>

                        {/* Key Outcomes */}
                        <div className="mt-20">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Outcomes</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {outcomes.map((outcome, index) => (
                                    <StatCard key={index} {...outcome} />
                                ))}
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="mt-20">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact Stories</h2>
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                <svg className="w-10 h-10 text-indigo-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-gray-600 text-lg mb-6">
                                    "Insurance paperwork used to consume my entire day. Now the AI handles the documentation,
                                    and I can focus on patient care and growing the practice. Our patient volume has doubled,
                                    but my stress has halved."
                                </p>
                                <div>
                                    <div className="font-semibold text-gray-900">Sarah Thompson</div>
                                    <div className="text-gray-500">Office Manager</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-20 text-center">
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Practice?</h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    Get a free AI implementation assessment and see how much time we can save your practitioners.
                                </p>
                                <a
                                    href="#book-call"
                                    className="inline-block px-8 py-4 text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                                >
                                    Book Your Free Strategy Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChiroCaseStudy;