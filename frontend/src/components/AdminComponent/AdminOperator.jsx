import React, { useState } from 'react';
import { Plus, Edit, Trash2, Video, BarChart2, Brain, Users, BarChart, Monitor } from 'lucide-react';
import { NavLink } from 'react-router';


function AdminOperator() {
  const [selectedOption, setSelectedOption] = useState(null);

  const adminOptions = [
    {
      id: 'create',
      title: 'Create Problem',
      description: 'Add a new coding problem to the platform',
      icon: Plus,
      route: '/admin/create'
    },
    {
      id: 'update',
      title: 'Update Problem',
      description: 'Edit existing problems and their details',
      icon: Edit,
      route: '/admin/update'
    },
    {
      id: 'delete',
      title: 'Delete Problem',
      description: 'Remove problems from the platform',
      icon: Trash2,
      route: '/admin/delete'
    },
    {
      id: 'video',
      title: 'Video Management',
      description: 'Upload And Delete Videos',
      icon: Video,
      route: '/admin/video'
    },
    {
      id: 'analytics',
      title: 'Course Management',
      description: 'Track performance, engagement and completion rates',
      icon: BarChart2,
      route: '/admin/analytics'
    },
    {
      id: 'insights',
      title: 'AI Analytics',
      description: 'Get AI-powered recommendations for course optimization',
      icon: Brain,
      route: '/admin/insights'
    }
  ];

  return (
    
    <div className="min-h-screen bg-[#0f111c]">

      <div className="container mx-auto px-4 py-15 mt-15">

        {/* Admin Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {adminOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.id}
                className="card bg-white/5 shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-white/10 rounded-xl backdrop-blur-lg hover:border-orange-500 hover:shadow-[0_0_20px_2px_rgba(251,146,60,0.4)]"
              >
                <div className="card-body items-center text-center p-8">
                  {/* Icon */}
                  <div className="bg-orange-500/20 backdrop-blur-lg p-4 rounded-full mb-4">
                    <IconComponent size={32} className="text-orange-500" />
                  </div>

                  {/* Title */}
                  <h2 className="card-title text-xl text-white mb-2">
                    {option.title}
                  </h2>

                  {/* Description */}
                  <p className="text-white/70 mb-6">
                    {option.description}
                  </p>

                  {/* Action Button */}
                  <div className="card-actions">
                    <NavLink 
                      to={option.route}
                      className="btn btn-wide bg-orange-500 text-white hover:bg-orange-600"
                    >
                      {option.title}
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminOperator;