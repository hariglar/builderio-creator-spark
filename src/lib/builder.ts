
import { builder, Builder } from '@builder.io/react';
import { HeroSection } from '@/components/builder/HeroSection';
import { ProductShowcase } from '@/components/builder/ProductShowcase';
import { TestimonialSection } from '@/components/builder/TestimonialSection';

// Initialize Builder with your public API key
export const initBuilder = () => {
  builder.init("d25a9452e462444786e628ee501e2543");

  // Register custom components
  Builder.registerComponent(HeroSection, {
    name: 'Hero Section',
    inputs: [],
  });

  Builder.registerComponent(ProductShowcase, {
    name: 'Product Showcase',
    inputs: [],
  });

  Builder.registerComponent(TestimonialSection, {
    name: 'Testimonial Section',
    inputs: [],
  });

  // Register that we want to use the preview UI
  if (process.env.NODE_ENV !== 'production') {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('builder.preview')) {
      builder.allowCustomFonts = true;
      Builder.isEditing = true;
      Builder.isPreviewing = true;
    }
  }
};

// The model name should match what you set up in Builder.io
export const BUILDER_MODEL = "page";

