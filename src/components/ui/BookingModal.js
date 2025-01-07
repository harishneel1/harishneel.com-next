import React, { useState } from 'react';

const OptionButton = ({ text, selected, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full px-4 py-3 text-left border rounded-lg transition-all duration-200 ${selected
            ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
            : 'border-gray-200 hover:border-indigo-300'
            }`}
    >
        {text}
    </button>
);

const BookingModal = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        objective: [],
        aiArea: [],
        currentUsage: '',
        timeline: '',
        budget: '',
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    });

    const totalSteps = 6;

    const objectives = [
        "Develop a Chatbot",
        "AI Strategy Consulting",
        "Train Team in AI",
        "AI Audit",
        "Build AI Driven Software",
        "AI Receptionist"
    ];

    const aiAreas = [
        "Processes Automation",
        "Data Analysis",
        "User Interface",
        "Customer Support",
        "Lead Generation",
        "Voice Assistants",
        "Other"
    ];

    const currentUsageOptions = ["None", "Immediate", "Extensive"];
    const timelineOptions = [
        "Immediate",
        "Within 3 months",
        "Within 6 months",
        "More than 6 months"
    ];
    const budgetOptions = [
        "Less than $5,000",
        "$5,000 - $10,000",
        "$10,000 - $20,000",
        "$20,000 - $40,000",
        "$40,000+"
    ];

    const handleOptionSelect = (field, value, isMulti = false) => {
        if (isMulti) {
            setFormData(prev => ({
                ...prev,
                [field]: prev[field].includes(value)
                    ? prev[field].filter(item => item !== value)
                    : [...prev[field], value]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handleContactChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            contact: {
                ...prev.contact,
                [field]: value
            }
        }));
    };

    const validateStep = () => {
        switch (currentStep) {
            case 1:
                return formData.objective.length > 0;
            case 2:
                return formData.aiArea.length > 0;
            case 3:
                return formData.currentUsage !== '';
            case 4:
                return formData.timeline !== '';
            case 5:
                return formData.budget !== '';
            case 6:
                return (
                    formData.contact.name &&
                    formData.contact.email &&
                    formData.contact.phone
                );
            default:
                return true;
        }
    };

    const handleNext = () => {
        if (validateStep()) {
            if (currentStep === totalSteps) {
                handleSubmit();
            } else {
                setCurrentStep(prev => prev + 1);
            }
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = () => {
        // Here you would typically send the formData to your backend
        console.log('Form submitted:', formData);
        // Show success message
        showSuccessScreen();
    };

    const showSuccessScreen = () => {
        // Implementation for success screen
        onClose();
        // Reset form after closing
        setCurrentStep(1);
        setFormData({
            objective: [],
            aiArea: [],
            currentUsage: '',
            timeline: '',
            budget: '',
            contact: {
                name: '',
                email: '',
                phone: ''
            }
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Progress Bar */}
                <div className="h-2 bg-gray-100 rounded-full mb-8">
                    <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>

                {/* Step Content */}
                <div className="mb-8">
                    {currentStep === 1 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">What are you looking to accomplish?</h2>
                            <div className="space-y-3">
                                {objectives.map(objective => (
                                    <OptionButton
                                        key={objective}
                                        text={objective}
                                        selected={formData.objective.includes(objective)}
                                        onClick={() => handleOptionSelect('objective', objective, true)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">
                                What area of AI and automation do you need support with?
                            </h2>
                            <div className="space-y-3">
                                {aiAreas.map(area => (
                                    <OptionButton
                                        key={area}
                                        text={area}
                                        selected={formData.aiArea.includes(area)}
                                        onClick={() => handleOptionSelect('aiArea', area, true)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">
                                What is your current AI usage in your business?
                            </h2>
                            <div className="space-y-3">
                                {currentUsageOptions.map(option => (
                                    <OptionButton
                                        key={option}
                                        text={option}
                                        selected={formData.currentUsage === option}
                                        onClick={() => handleOptionSelect('currentUsage', option)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">What is your timeline for this project?</h2>
                            <div className="space-y-3">
                                {timelineOptions.map(option => (
                                    <OptionButton
                                        key={option}
                                        text={option}
                                        selected={formData.timeline === option}
                                        onClick={() => handleOptionSelect('timeline', option)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">
                                What is your preferred budget for this project?
                            </h2>
                            <div className="space-y-3">
                                {budgetOptions.map(option => (
                                    <OptionButton
                                        key={option}
                                        text={option}
                                        selected={formData.budget === option}
                                        onClick={() => handleOptionSelect('budget', option)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Share Your Details</h2>
                            <p className="text-gray-600 mb-6">
                                We'll get in touch to discuss how we can help with your project.
                            </p>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                                    value={formData.contact.name}
                                    onChange={(e) => handleContactChange('name', e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                                    value={formData.contact.email}
                                    onChange={(e) => handleContactChange('email', e.target.value)}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                                    value={formData.contact.phone}
                                    onChange={(e) => handleContactChange('phone', e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={handleBack}
                        className={`px-6 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 ${currentStep === 1 ? 'invisible' : ''
                            }`}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                        {currentStep === totalSteps ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;