import React, { useState, useMemo } from "react";
import unSelectedStepSVG from "../../assets/svgs/steps/step.svg";
import selectedStepSVG from "../../assets/svgs/steps/selected-step.svg";
import './step.css';

interface StepsProps {
  stepsLength: number;
  onChange: (step: number) => void;
}

const Steps: React.FC<StepsProps> = ({ stepsLength, onChange }) => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const steps = useMemo(
    () => Array.from({ length: stepsLength }, (_, index) => index + 1),
    [stepsLength]
  );

  return (
    <div className="steps-container">
      {steps.map((step) => (
        <img
          key={step}
          src={step === selectedStep ? selectedStepSVG : unSelectedStepSVG}
          alt={step === selectedStep ? "selected svg" : "unselected svg"}
          className={`step ${step === selectedStep ? "selected-step" : ""}`}
          onClick={() => {
            setSelectedStep(step);
            onChange(step);
          }}
        />
      ))}
    </div>
  );
};

export default Steps;
