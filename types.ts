import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: 'large' | 'default';
  className?: string;
}

export interface ServiceItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}