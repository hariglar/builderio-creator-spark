
import { Builder } from '@builder.io/react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  image: string;
}

interface TestimonialSectionProps {
  sectionTitle?: string;
  testimonials?: Testimonial[];
}

export const TestimonialSection = ({
  sectionTitle = 'تجارب العملاء',
  testimonials = [
    {
      name: 'سارة أحمد',
      review: 'تجربة رائعة مع المنتجات',
      rating: 5,
      image: 'https://placehold.co/100x100'
    },
    {
      name: 'نورة محمد',
      review: 'نتائج مذهلة للبشرة',
      rating: 5,
      image: 'https://placehold.co/100x100'
    },
    {
      name: 'ريم خالد',
      review: 'جودة عالية وخدمة ممتازة',
      rating: 5,
      image: 'https://placehold.co/100x100'
    },
    {
      name: 'منى عبدالله',
      review: 'منتجات ممتازة وفعالة',
      rating: 5,
      image: 'https://placehold.co/100x100'
    }
  ]
}: TestimonialSectionProps) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-right text-gray-900 mb-8">
        {sectionTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-2">{testimonial.review}</p>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Builder.registerComponent(TestimonialSection, {
  name: 'Testimonial Section',
  inputs: [
    {
      name: 'sectionTitle',
      type: 'string',
      defaultValue: 'تجارب العملاء'
    },
    {
      name: 'testimonials',
      type: 'list',
      subFields: [
        {
          name: 'name',
          type: 'string'
        },
        {
          name: 'review',
          type: 'string'
        },
        {
          name: 'rating',
          type: 'number',
          defaultValue: 5,
          min: 1,
          max: 5
        },
        {
          name: 'image',
          type: 'string',
          defaultValue: 'https://placehold.co/100x100'
        }
      ]
    }
  ],
});
