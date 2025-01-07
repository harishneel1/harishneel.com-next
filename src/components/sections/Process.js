import React from 'react';

const ProcessPhase = ({ phase, title, description, items }) => (
    <div className="relative md:pl-8 md:pl-0 md:grid md:grid-cols-3 md:gap-8 items-center">
        <div className="md:col-span-1">
            <div className="bg-indigo-600 text-white p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">Phase {phase}</h3>
                <p className="text-indigo-100">{title}</p>
            </div>
        </div>
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="flex gap-3">
                        <svg className="w-6 h-6 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const ProcessSection = () => {
    const phases = [
        {
            phase: "1",
            title: "Strategic Discovery",
            items: [
                "Deep dive into your operations to identify your top 5 biggest problems holding your business back",
                "ROI analysis: Whether it's lead generation, customer service, or operational efficiency",
                "Prioritize quick wins that can show immediate value"
            ]
        },
        {
            phase: "2",
            title: "Proof of Concept",
            items: [
                "Rapid deployment of a focused AI solution for your most pressing challenge",
                "Clear success metrics established and tracked from day one",
                "Real-time ROI dashboard so you can see the impact immediately"
            ]
        },
        {
            phase: "3",
            title: "Scale & Transform",
            items: [
                "Expand successful solutions across your organization",
                "Identify and implement additional AI opportunities",
                "Future-proof your operations with cutting-edge AI capabilities"
            ]
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Your Path to AI Transformation
                        </h2>
                        <p className="text-xl text-gray-600">
                            We don't believe in one-size-fits-all solutions. Our process starts with understanding your
                            unique challenges and ends with measurable impact.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="space-y-12">
                        {phases.map((phase, index) => (
                            <ProcessPhase
                                key={index}
                                phase={phase.phase}
                                title={phase.title}
                                items={phase.items}
                            />
                        ))}
                    </div>

                    {/* Bottom Message */}
                    <div className="mt-16 text-center max-w-3xl mx-auto">
                        <p className="text-lg text-gray-600 mb-8">
                            While your competitors are still figuring out AI, you could be months ahead in transforming your
                            business. Every week of delay is a missed opportunity in the AI revolution.
                        </p>
                        <a
                            href="#audit"
                            className="inline-block px-8 py-4 text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                        >
                            Get Your Free AI Assessment
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;