
import { Builder } from '@builder.io/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
}

export const HeroSection = ({
  title = 'المنتجات الجمالية وحلول العناية بالبشرة',
  description = 'اكتشفي سر الجمال الطبيعي مع منتجاتنا المميزة للعناية بالبشرة',
  buttonText = 'اشترك الآن',
  namePlaceholder = 'الاسم الكامل',
  emailPlaceholder = 'البريد الإلكتروني'
}: HeroSectionProps) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 text-right">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {description}
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <Input
          type="text"
          placeholder={namePlaceholder}
          className="w-full text-right"
        />
        <Input
          type="email"
          placeholder={emailPlaceholder}
          className="w-full text-right"
        />
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

Builder.registerComponent(HeroSection, {
  name: 'Hero Section',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'المنتجات الجمالية وحلول العناية بالبشرة'
    },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'اكتشفي سر الجمال الطبيعي مع منتجاتنا المميزة للعناية بالبشرة'
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'اشترك الآن'
    },
    {
      name: 'namePlaceholder',
      type: 'string',
      defaultValue: 'الاسم الكامل'
    },
    {
      name: 'emailPlaceholder',
      type: 'string',
      defaultValue: 'البريد الإلكتروني'
    }
  ],
});
