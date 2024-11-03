import { useState } from 'react';
import axios from 'axios';
import FormStep1 from '../components/FormStep1';
import FormStep2 from '../components/FormStep2';
import FormStep3 from '../components/FormStep3';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (data) => {
    try {
      await axios.post('/api/formData', { ...formData, ...data });
      alert('Registration successful!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Multi-Step Form</h1>
      {currentStep === 1 && (
        <FormStep1 onNext={handleNext} />
      )}
      {currentStep === 2 && (
        <FormStep2 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 3 && (
        <FormStep3 onSubmit={handleSubmit} onPrevious={handlePrevious} />
      )}
    </div>
  );
}
