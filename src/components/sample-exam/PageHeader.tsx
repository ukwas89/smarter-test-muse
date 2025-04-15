
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
        Gearing up for your RBT certification? We've got your back! Our sample exam is like your personal training ground, designed to give you a sneak peek into the real certification test. Think of it as your friendly guide through the world of Registered Behavior Technician certification.

        What makes our practice exam special? It's not just a random set of questions – it's a carefully crafted experience that walks you through the key areas you'll encounter in the actual BACB exam. We break down complex Applied Behavior Analysis (ABA) concepts into digestible, practice-ready scenarios that'll help you feel confident and prepared.

        Imagine having a study buddy that helps you:
        - Understand how to assess functional behaviors
        - Learn the ins and outs of reinforcement techniques
        - Master data collection methods that matter
        - Get comfortable with ethical decision-making in real-world situations

        Our exam covers everything from behavior intervention plans to professional conduct guidelines, all aligned with the current RBT Task List. It's like a comprehensive workout for your ABA knowledge – challenging, informative, and designed to help you succeed.

        Whether you're looking to solidify your understanding of discrete trial training or wanting to sharpen your problem-solving skills, our sample exam is your go-to resource for RBT certification preparation.
      </p>
    </div>
  );
};

export default PageHeader;
