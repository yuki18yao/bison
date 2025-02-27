
import React from 'react';
import { motion } from '@/components/ui/motion';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-subtle hover:shadow-medium transition-all duration-300 border border-trustone-100"
    >
      <div className="w-12 h-12 bg-trustaccent-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-trustaccent-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-trustone-900">{title}</h3>
      <p className="text-trustone-600">{description}</p>
    </motion.div>
  );
};

export default InfoCard;
