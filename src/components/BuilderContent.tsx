
import { useEffect, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { Skeleton } from '@/components/ui/skeleton';
import { BUILDER_MODEL } from '@/lib/builder';

const BuilderContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    // Initialize content fetching
    const fetchContent = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const isPreviewing = searchParams.get('builder.preview');

        const content = await builder
          .get(BUILDER_MODEL, {
            url: window.location.pathname,
            preview: isPreviewing === 'true'
          })
          .promise();

        setContent(content);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Builder.io content:', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="w-full space-y-4 animate-pulse">
        <Skeleton className="h-[40vh] w-full rounded-lg" />
        <Skeleton className="h-4 w-2/3 rounded-lg" />
        <Skeleton className="h-4 w-1/2 rounded-lg" />
      </div>
    );
  }

  // Show no content message if there's no content and we're not in preview mode
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

  // Render the Builder.io content
  return (
    <div className="builder-content">
      <BuilderComponent model={BUILDER_MODEL} content={content} />
    </div>
  );
};

export default BuilderContent;
