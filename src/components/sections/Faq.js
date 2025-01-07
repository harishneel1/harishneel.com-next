import React from 'react';

const FaqCard = ({ question, answer }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
            "{question}"
        </h3>
        <p className="text-gray-600">
            {answer}
        </p>
    </div>
);

const FaqSection = () => {
    const faqs = [
        {
            question: "Is my business ready for AI?",
            answer: "If you have processes that are repetitive, data-driven, or time-consuming, you're ready for AI. Our audit identifies your specific opportunities, regardless of your current tech setup. We've helped companies at all stages of digital maturity achieve significant ROI."
        },
        {
            question: "How long until we see results?",
            answer: "Most clients see their first wins within 48-72 hours of implementation. Our phased approach means you'll get immediate value while we build toward larger transformations. We're not interested in long, drawn-out projects - we focus on rapid results you can measure."
        },
        {
            question: "What if we don't have clean data?",
            answer: "Don't worry - messy data is normal. Our process includes data assessment and cleanup. We've worked with everything from paper records to legacy systems. We'll help you leverage what you have while building better data practices for the future."
        },
        {
            question: "How much disruption will this cause?",
            answer: "Zero disruption to your current operations. We build and test in parallel with your existing systems. Your team keeps working as usual while we prove the value. Only when everything is perfect do we transition - and it's always smooth."
        },
        {
            question: "What about training our team?",
            answer: "Our solutions are designed for real people. We include comprehensive training, documentation, and ongoing support. Most users are comfortable with the new systems within hours because we focus on intuitive, user-friendly implementations."
        },
        {
            question: "What makes you different from other consultants?",
            answer: "We're practitioners, not theorists. We've actually built and implemented AI solutions across industries. We don't just advise - we deliver working solutions. Plus, our guarantee is simple: you see measurable ROI, or you don't pay."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Common Questions About AI Implementation
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about transforming your business with AI
                        </p>
                    </div>

                    {/* Questions Grid */}
                    <div className="grid gap-6">
                        {faqs.map((faq, index) => (
                            <FaqCard key={index} {...faq} />
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-xl text-gray-600 mb-8">
                            Still have questions? Get them answered in your free AI strategy session.
                        </p>
                        <a
                            href="#book-audit"
                            className="inline-block px-8 py-4 text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                        >
                            Book Your Free AI Audit
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;