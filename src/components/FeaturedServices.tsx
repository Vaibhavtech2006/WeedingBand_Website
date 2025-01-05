import React from 'react';
import { Music2, PartyPopper, Camera, Sparkles, Users, Mic2 } from 'lucide-react';

const services = [
  {
    icon: Music2,
    title: 'Wedding Music',
    description: 'Professional live music performance for your special day'
  },
  {
    icon: PartyPopper,
    title: 'Event Management',
    description: 'Complete wedding entertainment solutions'
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Digital video and photography services'
  },
  {
    icon: Sparkles,
    title: 'Special Effects',
    description: 'Rose petals blast and fireworks services'
  },
  {
    icon: Users,
    title: 'Folk Dance',
    description: 'Traditional folk dance performances'
  },
  {
    icon: Mic2,
    title: 'Shehnai Services',
    description: 'Traditional shehnai and tasha performances'
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Featured Services</h2>
          <p className="text-xl text-gray-600">Discover our premium wedding entertainment services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-gold mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}