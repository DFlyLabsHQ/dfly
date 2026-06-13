import { IconType } from "react-icons";
import { FaCode, FaDragon, FaLightbulb, FaRocket } from "react-icons/fa6";

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface ServiceOffering {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  whatItMeans: string;   // plain-language explanation for non-technical clients
  icon: string;          // SVG component name key
  features: string[];
  useCases: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  desc: string;
}

export interface WhyUsItem {
  icon: IconType;
  title: string;
  desc: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconKey: string;
}
