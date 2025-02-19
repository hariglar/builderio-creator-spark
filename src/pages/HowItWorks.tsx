
import { useEffect } from 'react';
import { initBuilder } from '@/lib/builder';
import BuilderContent from '@/components/BuilderContent';

const HowItWorks = () => {
  useEffect(() => {
    initBuilder();
  }, []);

  return (
    <div className="container mx-auto">
      <BuilderContent />
    </div>
  );
};

export default HowItWorks;
