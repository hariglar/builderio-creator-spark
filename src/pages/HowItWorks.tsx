
import { Suspense, lazy, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { initBuilder } from '@/lib/builder';

// Lazy load the BuilderContent component
const BuilderContent = lazy(() => import('@/components/BuilderContent'));

const HowItWorks = () => {
  useEffect(() => {
    // Initialize Builder.io
    initBuilder();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense 
          fallback={
            <div className="w-full space-y-4 animate-pulse">
              <Skeleton className="h-[40vh] w-full rounded-lg" />
              <Skeleton className="h-4 w-2/3 rounded-lg" />
              <Skeleton className="h-4 w-1/2 rounded-lg" />
            </div>
          }
        >
          <BuilderContent />
        </Suspense>
      </div>
    </div>
  );
};

export default HowItWorks;
