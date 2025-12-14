"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {

  icon?: string | LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: FeatureCardProps) {
  const iconRegistry = Icons as unknown as Record<string, LucideIcon>;
  const ResolvedIcon = typeof icon === "string" ? iconRegistry[icon] ?? iconRegistry.Wifi : icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-4">
        {ResolvedIcon ? <ResolvedIcon className="w-6 h-6 text-orange-500" /> : null}
      </div>
      <h3 className="text-xl font-semibold mb-2 font-heading">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}