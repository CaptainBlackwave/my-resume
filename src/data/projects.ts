/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * TO ADD A NEW PROJECT:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'proj-6', 'proj-7')
 * - Create a URL-friendly slug (lowercase, hyphens, no spaces)
 * - Add at least a thumbnail image
 *
 * PROJECT CATEGORIES:
 * Choose from existing categories or add new ones to projectCategories array.
 *
 * IMAGES:
 * - Store images in /public/projects/
 * - Use paths like '/projects/project-name.jpg'
 * - Recommended size: 1200x630 for thumbnails
 * =============================================================================
 */

/**
 * Project entry type definition
 */
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'AI / Agentic Systems',
  'Web Application',
  'IoT & Compliance',
  'SaaS',
  'Developer Tools',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'live-resume-template',
    title: 'Live Resume & Portfolio Site',
    description:
      'This site — a production-ready Next.js resume and portfolio template, fully customizable via data files and open-sourced as a reusable template for developers.',
    longDescription: `Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion, this is the very site you are viewing. It features a responsive design with dark mode, smooth scroll animations, a filterable portfolio page, print-to-PDF export, a contact form with API route, and a desktop side navigation. All content is driven by TypeScript data files making it trivially customizable. Open-sourced on GitHub as a free template for any developer to fork and use.`,
    thumbnail: '/projects/resume-site-thumb.jpg',
    images: [],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Bun'],
    category: 'Developer Tools',
    role: 'Creator',
    duration: 'Ongoing',
    githubUrl: 'https://github.com/CaptainBlackwave/my-resume',
    featured: true,
    highlights: [
      'Fully data-driven — customize entire resume by editing 5 TypeScript files',
      'Dark mode, print/PDF export, and animated timeline built-in',
      'Open-sourced on GitHub as a free template for developers',
      'Built with Next.js 16, React 19, and Tailwind CSS 4',
    ],
  },
  {
    id: 'proj-2',
    slug: 'agentic-coding-team',
    title: 'Agentic Coding Team Orchestration',
    description:
      'Custom agentic coding ecosystem using Claude APIs and proprietary CLI tooling to automate unit testing, documentation, and boilerplate generation.',
    longDescription: `Engineered a fully autonomous coding team using the Claude API and custom CLI tools. The system orchestrates agents that handle unit test generation, documentation writing, and boilerplate scaffolding — dramatically reducing manual development overhead and accelerating the SDLC.`,
    thumbnail: '/projects/agentic-coding-thumb.jpg',
    images: [],
    technologies: ['Python', 'Claude API', 'CLI Tooling', 'Docker', 'Linux'],
    category: 'AI / Agentic Systems',
    role: 'Architect & Lead Developer',
    duration: 'Ongoing',
    featured: true,
    highlights: [
      'Automates unit testing, docs, and boilerplate generation',
      'Increases development velocity significantly',
      'Built on Claude API with custom orchestration layer',
      'Proprietary CLI tools for workflow control',
    ],
  },
  {
    id: 'proj-3',
    slug: 'local-llm-infrastructure',
    title: 'Secure Local-First LLM Infrastructure',
    description:
      'Private, on-premise LLM deployment for accounting and tax agencies using vLLM, Ollama, and LM Studio with rigorous prompt injection mitigation.',
    longDescription: `Deployed fully local LLM environments for high-compliance professional services clients. The architecture uses vLLM, Ollama, and LM Studio to ensure 100% data residency. Implemented prompt security hardening and injection mitigation to meet strict privacy requirements for accounting, legal, and tax workflows.`,
    thumbnail: '/projects/local-llm-thumb.jpg',
    images: [],
    technologies: ['vLLM', 'Ollama', 'LM Studio', 'Python', 'Docker', 'Linux', 'Prompt Engineering'],
    category: 'AI / Agentic Systems',
    role: 'AI Infrastructure Architect',
    duration: '6 months',
    featured: true,
    highlights: [
      '100% data residency — zero cloud exposure',
      'Prompt injection mitigation for compliance',
      'Deployed for accounting and tax agencies',
      'Custom GUI for non-technical staff interaction',
    ],
  },
  {
    id: 'proj-4',
    slug: 'real-time-trading-platform',
    title: 'Real-Time Stock & Crypto Tracking Platform',
    description:
      'High-performance full-stack application with WebSocket-driven live market data, Redis caching, and Docker-containerized global infrastructure.',
    longDescription: `Architected and deployed a high-performance MVC web application for real-time stock and cryptocurrency tracking. Integrated WebSockets and REST APIs for sub-second data updates, implemented Redis caching layers and New Relic tracing for performance optimization, and built a custom i18n internationalization layer with full Docker containerization for global deployment.`,
    thumbnail: '/projects/trading-thumb.jpg',
    images: [],
    technologies: ['PHP 8.4', 'WebSockets', 'REST APIs', 'Redis', 'Docker', 'New Relic', 'i18n'],
    category: 'Web Application',
    role: 'Senior Developer',
    duration: '12 months',
    featured: true,
    highlights: [
      'Sub-second live market data updates via WebSockets',
      'Redis caching for reduced latency',
      'Custom i18n layer for global markets',
      'Full Docker containerization on Linux',
    ],
  },
  {
    id: 'proj-5',
    slug: 'iot-disaster-mitigation-dashboard',
    title: 'IoT Disaster Mitigation Dashboard',
    description:
      'Real-time environmental monitoring and disaster mitigation system for Health Canada regulated cultivation facilities with automated emergency notifications.',
    longDescription: `Architected an IoT sensor network and custom dashboard for regulated cannabis cultivation facilities. The system monitored controlled warehouse conditions in real-time, generated automated compliance reports for Health Canada's CTLS system, and provided instant emergency notifications to prevent crop loss and equipment failure.`,
    thumbnail: '/projects/iot-dashboard-thumb.jpg',
    images: [],
    technologies: ['Python', 'IoT Sensors', 'Node.js', 'MySQL', 'Linux', 'Data Visualization', 'Government APIs'],
    category: 'IoT & Compliance',
    role: 'Systems & Compliance Engineer',
    duration: '18 months',
    featured: false,
    highlights: [
      'Health Canada CTLS compliance — 100% regulatory adherence',
      'Real-time IoT sensor network for environmental monitoring',
      'Automated seed-to-sale reporting',
      'Instant disaster alerts preventing crop & equipment loss',
    ],
  },
  {
    id: 'proj-6',
    slug: 'property-management-crm',
    title: 'Property Management CRM Platform',
    description:
      'Proprietary CRM system built from scratch to manage hundreds of properties and tenant records, replacing legacy pen-and-paper workflows.',
    longDescription: `As CTO of Go Pro Property Management, conceptualized and led development of a specialized CRM platform to centralize management of hundreds of properties and tenant records. Directed a full digital transformation, replacing manual workflows with a secure digital infrastructure. Used custom migration scripts to ensure 100% data accuracy during the physical-to-digital transition.`,
    thumbnail: '/projects/crm-thumb.jpg',
    images: [],
    technologies: ['PHP', 'Vue.js', 'MySQL', 'Docker', 'Linux'],
    category: 'SaaS',
    role: 'CTO & Lead Architect',
    duration: '3+ years',
    featured: false,
    highlights: [
      'Manages hundreds of properties and tenant records',
      'Full digital transformation from pen-and-paper workflows',
      '100% data accuracy via custom migration scripts',
      'Led cross-functional IT team through full SDLC',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
