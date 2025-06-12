import React from 'react';
import Lottie from 'lottie-react';
import completedAnimation from '../../public/animations/completed.json';

const CompletedLottie: React.FC = () => (
  <div style={{ width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Lottie animationData={completedAnimation} loop={false} style={{ width: 200, height: 200 }} />
  </div>
);

export default CompletedLottie; 