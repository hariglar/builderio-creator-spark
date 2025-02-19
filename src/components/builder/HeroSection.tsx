
import { Builder } from '@builder.io/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 text-right">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        المنتجات الجمالية وحلول العناية بالبشرة
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        اكتشفي سر الجمال الطبيعي مع منتجاتنا المميزة للعناية بالبشرة
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <Input
          type="text"
          placeholder="الاسم الكامل"
          className="w-full text-right"
        />
        <Input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full text-right"
        />
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          اشترك الآن
        </Button>
      </form>
    </div>
  );
};

Builder.registerComponent(HeroSection, {
  name: 'Hero Section',
  inputs: [],
});

