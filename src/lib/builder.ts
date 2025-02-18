
import { Builder } from '@builder.io/react';

// Initialize Builder with your public API key
export const initBuilder = () => {
  Builder.init("d25a9452e462444786e628ee501e2543");
};

// The model name should match what you set up in Builder.io
export const BUILDER_MODEL = "page";
