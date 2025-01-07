"use client"

import React, { useState } from 'react';

const TabButton = ({ id, title, icon, isActive, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={`flex-1 relative px-4 py-3 group transition-all duration-300 ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
            }`}
    >
        <div className="flex items-center gap-2 justify-start sm:justify-center">
            <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-indigo-50' : 'bg-gray-50 group-hover:bg-indigo-50'
                }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icon}
                </svg>
            </div>
            <span className="font-medium">{title}</span>
        </div>
        {isActive && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600" />
        )}
    </button>
);
const FeatureCard = ({ icon, title, description }) => (
    <div className="flex gap-3 bg-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all group">
        <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600 group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all">
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {icon}
            </svg>
        </div>
        <div>
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{title}</h4>
            <p className="text-xs sm:text-sm text-gray-600">{description}</p>
        </div>
    </div>
);

const Services = () => {
    const [currentTab, setCurrentTab] = useState('enterprise');

    const tabs = [
        {
            id: 'enterprise',
            title: 'Enterprise AI',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
            metric: "85% Faster",
            description: "Enterprise-grade AI solutions engineered for your specific business challenges, with seamless integration into your existing infrastructure.",
            features: [
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />,
                    title: "Custom ML Models",
                    description: "Tailored AI solutions built specifically for your business needs"
                },
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
                    title: "Seamless Integration",
                    description: "Works perfectly with your existing technology stack"
                },
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                    title: "Performance Monitoring",
                    description: "Real-time tracking and continuous optimization"
                }
            ]
        },
        {
            id: 'support',
            title: 'AI Support',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />,
            metric: "73% Less Wait Time",
            description: "Smart AI assistants that handle both customer inquiries and employee IT requests - cutting response times and solving problems faster.",
            features: [
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    title: "Customer Support",
                    description: "Answer customer questions instantly, handle returns, and resolve issues 24/7"
                },
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />,
                    title: "IT Help Desk",
                    description: "Reset passwords, solve common IT issues, and route complex problems to the right team"
                },
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                    title: "Knowledge Base",
                    description: "Build a smart library of solutions that grows with your business"
                }
            ]
        },
        {
            id: 'analytics',
            title: 'AI Analytics',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
            metric: "91% More Accurate",
            description: "Transform your data into actionable insights with AI-powered analytics that predict trends and identify opportunities.",
            features: [
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                    title: "Predictive Analytics",
                    description: "Forecast trends with machine learning"
                },
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                    title: "Anomaly Detection",
                    description: "Automatically identify unusual patterns"
                },
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />,
                    title: "Real-time Insights",
                    description: "Live dashboards and instant alerts"
                }
            ]
        },
        {
            id: 'automation',
            title: 'AI Automation',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
            metric: "42% Cost Reduction",
            description: "Automate repetitive tasks and streamline operations with AI-powered workflows that never sleep.",
            features: [
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
                    title: "Workflow Automation",
                    description: "End-to-end process automation"
                },
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                    title: "Quality Control",
                    description: "Error-free execution 24/7"
                },
                {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                    title: "Performance Tracking",
                    description: "Detailed analytics and reporting"
                }
            ]
        }
    ];

    const currentTabContent = tabs.find(tab => tab.id === currentTab);

    return (
        <section className="py-0 md:py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        AI Solutions That Actually Work
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From custom tools to automation, we deliver measurable results in weeks, not months
                    </p>
                </div>

                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200">
                    {/* Tab Navigation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-gray-200">
                        {tabs.map((tab) => (
                            <TabButton
                                key={tab.id}
                                {...tab}
                                isActive={currentTab === tab.id}
                                onClick={setCurrentTab}
                            />
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-4 sm:p-6"> {/* Smaller padding on mobile */}
                        <div className="text-center mb-6 sm:mb-8">
                            <div className="inline-flex items-center px-3 py-1 bg-indigo-50 rounded-full text-indigo-600 font-medium text-sm mb-2 sm:mb-3">
                                {currentTabContent.metric}
                            </div>
                            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                                {currentTabContent.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {currentTabContent.features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;