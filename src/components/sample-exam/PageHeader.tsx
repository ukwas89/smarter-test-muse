
import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = () => {
  return (
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-blue-50 rounded-full">
        Free Practice Test
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
        Sample RBT Exam
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Prepare for your RBT certification with our comprehensive sample exam designed to mirror the actual test format and content areas. Our practice assessment helps Registered Behavior Technician candidates build confidence through exposure to applied behavior analysis concepts, discrete trial training scenarios, and ethical problem-solving required by the Behavior Analyst Certification Board (BACB). Master functional behavior assessments, reinforcement procedures, and data collection methods with questions aligned to the current RBT Task List competencies. This simulation provides valuable experience with multiple-choice questions covering behavior intervention plans, antecedent-based strategies, and professional conduct guidelines that appear on the official examination.
      </p>
    </div>
  );
};

export default PageHeader;
