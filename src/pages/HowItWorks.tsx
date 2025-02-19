
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Content",
      description: "Use our intuitive Builder.io interface to design and create your content visually.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Customize Your Design",
      description: "Personalize every aspect of your content with our powerful customization tools.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Publish Instantly",
      description: "Deploy your content with a single click and see changes instantly.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            How It Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Start building amazing content in three simple steps
          </motion.p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
