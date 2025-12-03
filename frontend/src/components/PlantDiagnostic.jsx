import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Leaf, Phone, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { plantProblems, soilMoistureOptions, locationOptions } from '../mockData';

const PlantDiagnostic = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    problem: '',
    plantType: '',
    soilMoisture: '',
    location: ''
  });

  const handleAnswer = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetDiagnostic = () => {
    setStep(1);
    setAnswers({
      problem: '',
      plantType: '',
      soilMoisture: '',
      location: ''
    });
  };

  const handleClose = () => {
    resetDiagnostic();
    onClose();
  };

  const getDiagnosis = () => {
    const { problem, soilMoisture, location } = answers;
    
    // Simple diagnostic logic
    if (problem === 'repotting') {
      return {
        diagnosis: 'Professional Repotting Needed',
        tips: [
          'Your plant likely needs fresh soil and possibly a larger pot',
          'Look for roots growing out of drainage holes',
          'Check if the plant is top-heavy or water drains too quickly'
        ],
        recommendation: 'We recommend our professional repotting service to ensure your plant thrives in its new home.'
      };
    }
    
    if (problem === 'drooping') {
      if (soilMoisture === 'very-dry' || soilMoisture === 'dry') {
        return {
          diagnosis: 'Underwatering',
          tips: [
            'Water your plant thoroughly until water drains from the bottom',
            'Check soil moisture regularly by sticking your finger 1-2 inches deep',
            'Consider setting a watering schedule'
          ],
          recommendation: 'Try watering and monitoring for 1-2 weeks. If issues persist, book a free consultation with us.'
        };
      } else if (soilMoisture === 'very-wet' || soilMoisture === 'moist') {
        return {
          diagnosis: 'Possible Overwatering',
          tips: [
            'Allow soil to dry out before watering again',
            'Check for root rot by inspecting roots (should be white/cream, not brown/mushy)',
            'Ensure pot has proper drainage holes'
          ],
          recommendation: 'If the plant doesn\'t improve in a week, contact us for a health consultation.'
        };
      }
    }
    
    if (problem === 'brown-tips') {
      return {
        diagnosis: 'Brown Leaf Tips',
        tips: [
          'Usually caused by low humidity, inconsistent watering, or salt buildup',
          'Try misting leaves or using a humidifier',
          'Flush soil with water to remove salt buildup',
          'Trim brown tips with clean scissors at an angle'
        ],
        recommendation: 'These are common issues. If widespread, consider our plant health consultation service.'
      };
    }
    
    if (problem === 'curling') {
      if (location === 'direct-sun') {
        return {
          diagnosis: 'Too Much Direct Light',
          tips: [
            'Move plant to bright indirect light',
            'Most houseplants prefer filtered light',
            'Leaves curl to protect themselves from sun damage'
          ],
          recommendation: 'Relocate your plant and monitor. Contact us if you need help finding the perfect spot.'
        };
      } else {
        return {
          diagnosis: 'Stress Response',
          tips: [
            'Curling can indicate watering issues, pests, or temperature stress',
            'Check soil moisture and adjust watering',
            'Inspect leaves for pests (especially undersides)',
            'Ensure plant isn\'t near cold drafts or heat sources'
          ],
          recommendation: 'Try these adjustments. If curling continues, we offer free consultations to diagnose the issue.'
        };
      }
    }
    
    if (problem === 'not-growing') {
      if (location === 'low-light' || location === 'dark') {
        return {
          diagnosis: 'Insufficient Light',
          tips: [
            'Move plant closer to a window',
            'Most plants need at least medium indirect light to grow',
            'Consider a grow light if natural light is limited'
          ],
          recommendation: 'Light is crucial for growth. We can help you design the perfect plant placement for your space.'
        };
      } else {
        return {
          diagnosis: 'Multiple Possible Factors',
          tips: [
            'Plants may need fertilizer during growing season (spring/summer)',
            'Root-bound plants stop growing—may need repotting',
            'Check for pests that drain plant energy',
            'Some plants have natural dormancy periods'
          ],
          recommendation: 'Growth issues can be complex. Book a free consultation so we can properly assess your plant.'
        };
      }
    }
    
    if (problem === 'pests') {
      return {
        diagnosis: 'Pest Infestation',
        tips: [
          'Isolate the plant from other plants immediately',
          'Identify the pest type (spider mites, aphids, mealybugs, etc.)',
          'Wipe leaves with mild soapy water',
          'Consider neem oil or insecticidal soap'
        ],
        recommendation: 'Pest control can be tricky. We recommend a professional consultation to properly treat and prevent spread.'
      };
    }
    
    // Default for 'unsure' or any other case
    return {
      diagnosis: 'Comprehensive Assessment Needed',
      tips: [
        'Plant health depends on many factors working together',
        'Light, water, humidity, and soil all play crucial roles',
        'Professional assessment can identify multiple issues',
        'Prevention is easier than treatment'
      ],
      recommendation: 'We offer free consultations to properly diagnose and create a care plan for your plant.'
    };
  };

  const diagnosis = step === 5 ? getDiagnosis() : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Leaf size={24} color="#ff5757" />
              Plant Diagnostic Tool - Step {step} of 4
            </div>
          </DialogTitle>
        </DialogHeader>

        <div style={{ padding: '1rem 0' }}>
          {/* Step 1: Problem Selection */}
          {step === 1 && (
            <div>
              <h3 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>What issue are you facing?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {plantProblems.map((problem) => (
                  <button
                    key={problem.id}
                    onClick={() => {
                      handleAnswer('problem', problem.value);
                      nextStep();
                    }}
                    style={{
                      padding: '1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      backgroundColor: answers.problem === problem.value ? '#fff5f5' : 'white',
                      borderColor: answers.problem === problem.value ? '#ff5757' : '#e2e8f0',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#ff5757';
                      e.target.style.backgroundColor = '#fff5f5';
                    }}
                    onMouseLeave={(e) => {
                      if (answers.problem !== problem.value) {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.backgroundColor = 'white';
                      }
                    }}
                  >
                    {problem.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Plant Type */}
          {step === 2 && (
            <div>
              <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>What type of plant is it?</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '14px' }}>
                Don't worry if you're not sure of the exact name—a general description helps!
              </p>
              <input
                type="text"
                value={answers.plantType}
                onChange={(e) => handleAnswer('plantType', e.target.value)}
                placeholder="e.g., Monstera, Snake Plant, Succulent, or 'large leafy plant'"
                className="input-field"
                style={{ marginBottom: '1.5rem' }}
              />
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={prevStep} className="btn-secondary">
                  <ArrowLeft size={18} />
                  Back
                </button>
                <button 
                  onClick={nextStep} 
                  className="btn-primary" 
                  disabled={!answers.plantType}
                  style={{ flex: 1, opacity: answers.plantType ? 1 : 0.5 }}
                >
                  Next
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Soil Moisture */}
          {step === 3 && (
            <div>
              <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>How moist is the soil?</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '14px' }}>
                Stick your finger about 1-2 inches into the soil to check
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {soilMoistureOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer('soilMoisture', option.value)}
                    style={{
                      padding: '1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      backgroundColor: answers.soilMoisture === option.value ? '#fff5f5' : 'white',
                      borderColor: answers.soilMoisture === option.value ? '#ff5757' : '#e2e8f0',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontSize: '15px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#ff5757';
                      e.target.style.backgroundColor = '#fff5f5';
                    }}
                    onMouseLeave={(e) => {
                      if (answers.soilMoisture !== option.value) {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.backgroundColor = 'white';
                      }
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={prevStep} className="btn-secondary">
                  <ArrowLeft size={18} />
                  Back
                </button>
                <button 
                  onClick={nextStep} 
                  className="btn-primary" 
                  disabled={!answers.soilMoisture}
                  style={{ flex: 1, opacity: answers.soilMoisture ? 1 : 0.5 }}
                >
                  Next
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Light Location */}
          {step === 4 && (
            <div>
              <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Where is the plant located?</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '14px' }}>
                Light conditions are crucial for plant health
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {locationOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer('location', option.value)}
                    style={{
                      padding: '1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      backgroundColor: answers.location === option.value ? '#fff5f5' : 'white',
                      borderColor: answers.location === option.value ? '#ff5757' : '#e2e8f0',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontSize: '15px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#ff5757';
                      e.target.style.backgroundColor = '#fff5f5';
                    }}
                    onMouseLeave={(e) => {
                      if (answers.location !== option.value) {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.backgroundColor = 'white';
                      }
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={prevStep} className="btn-secondary">
                  <ArrowLeft size={18} />
                  Back
                </button>
                <button 
                  onClick={nextStep} 
                  className="btn-primary" 
                  disabled={!answers.location}
                  style={{ flex: 1, opacity: answers.location ? 1 : 0.5 }}
                >
                  Get Diagnosis
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Results */}
          {step === 5 && diagnosis && (
            <div>
              <div style={{
                backgroundColor: '#fff5f5',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '2rem',
                border: '2px solid #ff5757'
              }}>
                <h3 style={{ color: '#ff5757', marginBottom: '1rem' }}>
                  {diagnosis.diagnosis}
                </h3>
                <div>
                  <h4 style={{ marginBottom: '0.75rem', fontSize: '16px' }}>DIY Care Tips:</h4>
                  <ul style={{ paddingLeft: '1.5rem', color: '#64748b', lineHeight: '1.8' }}>
                    {diagnosis.tips.map((tip, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '2rem'
              }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Our Recommendation:</h4>
                <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {diagnosis.recommendation}
                </p>
              </div>

              <div style={{
                backgroundColor: '#22c55e',
                padding: '1.5rem',
                borderRadius: '12px',
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Get a Free Consultation</h4>
                <p style={{ marginBottom: '1rem', opacity: 0.95 }}>
                  Speak with our plant experts via text, chat, or phone call—completely free!
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => window.location.href = 'tel:+1234567890'}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: 'white',
                      color: '#22c55e',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '14px'
                    }}
                  >
                    <Phone size={16} />
                    Call Now
                  </button>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: 'white',
                      color: '#22c55e',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '14px'
                    }}
                  >
                    <MessageCircle size={16} />
                    Contact Us
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={resetDiagnostic} className="btn-secondary">
                  Start Over
                </button>
                <button onClick={handleClose} className="btn-primary" style={{ flex: 1 }}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlantDiagnostic;