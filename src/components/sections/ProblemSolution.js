import React from 'react';

const ProblemCard = ({ icon, title, problem, solution }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="flex gap-6">
            <div className="flex-shrink-0">
                <div className="bg-red-100 p-3 rounded-lg">
                    {icon}
                </div>
            </div>
            <div className="flex-grow">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-medium rounded-full mb-2">
                    Industry Challenge
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{problem}</p>
                <div className="flex items-center gap-2 pt-4 border-t">
                    <div className="bg-green-100 p-2 rounded-full">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p className="text-green-700 font-medium">{solution}</p>
                </div>
            </div>
        </div>
    </div>
);

const SolutionFeature = ({ icon, title, description }) => (
    <div className="flex gap-4">
        <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg h-fit">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const ProblemSolution = () => {
    const problems = [
        {
            icon: (
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            title: "Failed AI Implementations",
            problem: "85% of AI projects fail to deliver ROI, leading to wasted resources",
            solution: "Our success rate: 98% of projects deliver positive ROI"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Slow Time-to-Value",
            problem: "Most companies spend 12-18 months before seeing any AI impact",
            solution: "Our timeline: First results within a week, full ROI in 90 days"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "High Implementation Costs",
            problem: "Average AI project costs balloon to 3x initial budget",
            solution: "Fixed-price implementation with ROI guarantee"
        }
    ];

    const solutions = [
        {
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Full Technical Implementation",
            description: "Our expert developers handle all coding, integration, and testing"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            title: "Seamless Process Management",
            description: "We coordinate everything - you just attend brief weekly updates"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Rapid 90-Day Results",
            description: "We deliver ROI in 90 days or you don't pay - guaranteed"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 6l12 12M9 18L21 6M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
            ),
            title: "AI Strategy Roadmap ($10,000 Value)",
            description: "Get a comprehensive 5-year AI transformation blueprint in your free audit - yours to keep even if you don't work with us"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50 opacity-60" />
            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        The AI Implementation Crisis{' '}
                        <span className="text-indigo-600">And How We Solve It</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Most companies struggle with AI implementation because they lack specialized expertise.
                        We transform these common challenges into guaranteed successes.
                    </p>
                    <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-green-50 rounded-full border border-green-100">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-800">100% Done-For-You Implementation Guarantee</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Problems Column */}
                    <div className="grid grid-cols-1 gap-6">
                        {problems.map((problem, index) => (
                            <ProblemCard key={index} {...problem} />
                        ))}
                    </div>

                    {/* Solutions Column */}
                    <div className="bg-white rounded-xl p-8 shadow-xl border border-indigo-100">
                        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Effort Required From You</h3>
                            <p className="text-gray-600">
                                My expert team handles everything while you focus on your core business.
                                We manage the entire process:
                            </p>
                        </div>

                        <div className="space-y-8">
                            {solutions.map((solution, index) => (
                                <SolutionFeature key={index} {...solution} />
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <a href="#audit" className="inline-block w-full px-8 py-4 text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                                Get Your Free AI Audit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;