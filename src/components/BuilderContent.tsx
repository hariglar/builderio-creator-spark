
import { Suspense, lazy, useEffect, useState } from 'react';
import { builder, useIsPreviewing } from '@builder.io/react';
import { Skeleton } from '@/components/ui/skeleton';
import { BUILDER_MODEL } from '@/lib/builder';

// Lazy load the BuilderComponent
const BuilderComponent = lazy(() => import('@builder.io/react').then(module => ({
  default: module.BuilderComponent
})));

const BuilderContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    let isMounted = true;

    const fetchContent = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const isPreviewing = searchParams.get('builder.preview');

        const content = await builder
          .get(BUILDER_MODEL, {
            url: window.location.pathname,
            preview: isPreviewing === 'true',
            cacheSeconds: process.env.NODE_ENV === 'production' ? 3600 : 0, // Cache for 1 hour in production
            staleCacheSeconds: 3600, // Allow stale content for 1 hour
            userAttributes: {
              device: 'desktop'
            }
          })
          .promise();

        if (isMounted) {
          setContent(content);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching Builder.io content:', error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, []);

  const LoadingSkeleton = () => (
    <div className="w-full space-y-4 animate-pulse">
      <Skeleton className="h-[40vh] w-full rounded-lg" />
      <Skeleton className="h-4 w-2/3 rounded-lg" />
      <Skeleton className="h-4 w-1/2 rounded-lg" />
    </div>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!content && !isPreviewing) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-medium text-gray-700">No Content Found</h2>
          <p className="text-gray-500">
            Please check your Builder.io settings or try a different page
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="builder-content">
      <Suspense fallback={<LoadingSkeleton />}>
        <BuilderComponent 
          model={BUILDER_MODEL} 
          content={content}
          options={{
            lazy: true,
            prerender: true
          }}
        />
      </Suspense>
    </div>
  );
};

export default BuilderContent;
