
import { useEffect } from 'react';
import BuilderContent from '@/components/BuilderContent';
import { initBuilder } from '@/lib/builder';

const Index = () => {
  useEffect(() => {
    initBuilder();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BuilderContent />
      </div>
    </div>
  );
};

export default Index;
