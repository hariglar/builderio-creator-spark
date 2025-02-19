
import { Builder } from '@builder.io/react';
import { ShoppingBag, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProductShowcase = () => {
  const products = [
    {
      title: 'منتج العناية الأول',
      description: 'وصف تفصيلي للمنتج وفوائده للبشرة',
      price: '199 ر.س',
      badge: 'جديد'
    },
    {
      title: 'منتج العناية الثاني',
      description: 'وصف تفصيلي للمنتج وفوائده للبشرة',
      price: '159 ر.س',
      badge: 'خصم 20%'
    },
    {
      title: 'منتج العناية الثالث',
      description: 'وصف تفصيلي للمنتج وفوائده للبشرة',
      price: '179 ر.س',
      badge: null
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-right text-gray-900 mb-8">
        منتجاتنا المميزة
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={`https://placehold.co/300x200`}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.badge && (
                <span className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-md text-sm">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="p-4 text-right">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <Button variant="outline" className="text-purple-600 border-purple-600">
                  أضف للسلة
                </Button>
                <span className="font-bold text-gray-900">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Builder.registerComponent(ProductShowcase, {
  name: 'Product Showcase',
  inputs: [],
});

