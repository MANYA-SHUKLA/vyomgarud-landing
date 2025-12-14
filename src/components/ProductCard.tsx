"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  // Accept either the name of an icon (serializable string) or a LucideIcon component
  icon?: string | LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export default function ProductCard({ 
  icon, 
  title, 
  description, 
  features, 
  delay = 0 
}: ProductCardProps) {
  // Resolve icon: if a string was passed, pick the matching icon from lucide-react
  const iconRegistry = Icons as unknown as Record<string, LucideIcon>;
  const ResolvedIcon = typeof icon === "string" ? iconRegistry[icon] ?? iconRegistry.Shield : icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        {ResolvedIcon ? <ResolvedIcon className="w-7 h-7 text-white" /> : null}
      </div>
      <h3 className="text-2xl font-bold mb-3 font-heading">{title}</h3>
      <p className="text-gray-300 mb-5">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}