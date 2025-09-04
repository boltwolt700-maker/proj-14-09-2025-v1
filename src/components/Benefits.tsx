import React from 'react';
import { Shield, Lightbulb, RefreshCw, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Benefits = () => {
  const [ref, isInView] = useInView();

  const benefits = [
    {
      icon: Shield,
      title: "Beat The ATS Systems That Reject 75% of Resumes",
      description: "Our AI analyzes your resume against 1,000+ ATS patterns, then rewrites it to pass the robots AND impress humans. No more qualified applications disappearing into the void.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      features: [
        "ATS compatibility analysis",
        "Keyword optimization",
        "Format standardization",
        "Human readability check"
      ]
    },
    {
      icon: Lightbulb,
      title: "Build LinkedIn Authority Without the Content Creation Burnout",
      description: "Generate authentic posts in minutes, not hours. Our AI learns your voice and expertise, then helps you create content that builds real authority while you focus on your actual work.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
      features: [
        "AI content generation",
        "Voice matching technology",
        "Engagement optimization",
        "Consistent posting schedule"
      ]
    },
    {
      icon: RefreshCw,
      title: "Transform Careers",
      description: "Join thousands of professionals who've accelerated their careers by treating job search and personal branding as one integrated system. The results speak for themselves.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-100",
      features: [
        "Career acceleration",
        "Personal brand building",
        "Integrated approach",
        "Proven results"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            How We <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Transform Careers</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group card-metallic bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Top colored section */}
                <div className={`bg-gradient-to-r ${benefit.gradient} p-6 relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-white" />
                    <div className="text-white/80 text-xs font-medium">BENEFIT</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {benefit.title}
                  </h3>
                </div>
                
                {/* Bottom white section */}
                <div className="p-6 bg-white">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;