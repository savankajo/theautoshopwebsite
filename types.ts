import type { ReactNode } from 'react';

export interface Service {
  // FIX: Replaced ReactNode with a serializable string identifier to allow for localStorage persistence.
  iconName: string;
  title: string;
  description: string;
}

export interface WorkItem {
  before: string;
  after: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  vehicle: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}