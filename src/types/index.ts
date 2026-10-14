export type SectorSlug = 'residential' | 'commercial' | 'hospitality' | 'infrastructure';

export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  scope: string[];
  executionDetails: string[];
  qualityAssurance: string[];
  suitableSectors: SectorSlug[];
  image: string;
  imageAlt: string;
}

export interface SectorItem {
  slug: SectorSlug;
  title: string;
  tagline: string;
  description: string;
  executionRequirements: string[];
  keyChallengesAddressed: string[];
  portfolioProjects: string[];
  image: string;
  imageAlt: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  sector: SectorSlug;
  sectorLabel: string;
  client?: string;
  location?: string;
  featured: boolean;
  hasVerifiedCaseStudy: boolean;
  scope: string[];
  executionSummary: string;
  image: string;
  imageAlt: string;
  gallery?: { src: string; caption: string }[];
  verifiedSource: string;
}

export interface ClientItem {
  id: string;
  name: string;
  fullName: string;
  logo: string;
  category: 'Infrastructure' | 'Real Estate' | 'Turnkey Construction';
  width: number;
  height: number;
}

export interface DeliveryStage {
  step: string;
  title: string;
  portfolioName: string;
  description: string;
  keyActions: string[];
}

export interface AssetRecord {
  filename: string;
  sourcePage: number;
  sourceXref: number;
  mappedSubject: string;
  intendedUsage: string;
  aspectRatio: string;
  notes: string;
}
