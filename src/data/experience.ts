/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains work history displayed in the Experience section.
 *
 * TO CUSTOMIZE:
 * 1. Replace the example entries with your actual work history
 * 2. List positions in reverse chronological order (newest first)
 * 3. Use action verbs for achievements (Led, Built, Increased, Reduced, etc.)
 * 4. Include metrics when possible (numbers, percentages, dollar amounts)
 * 5. List relevant technologies used at each position
 *
 * TO ADD A NEW EXPERIENCE:
 * Copy an existing entry and modify all fields. Example:
 * {
 *   id: 'exp-4',  // Unique identifier
 *   title: 'Your Job Title',
 *   company: 'Company Name',
 *   location: 'City, State/Country',
 *   type: 'full-time',  // Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
 *   startDate: '2023-01',  // Format: YYYY-MM
 *   endDate: '2024-01',    // Format: YYYY-MM or omit for current position
 *   current: false,        // Set to true if this is your current job
 *   description: 'Brief description of your role...',
 *   achievements: ['Achievement 1', 'Achievement 2'],
 *   technologies: ['Tech 1', 'Tech 2'],
 * }
 *
 * TO REMOVE AN EXPERIENCE:
 * Delete the entire object from the array including its curly braces and comma.
 * =============================================================================
 */

/**
 * Experience entry type definition
 */
export interface Experience {
  /** Unique identifier (e.g., 'exp-1', 'exp-2') */
  id: string;

  /** Job title (e.g., "Senior Software Engineer", "Product Manager") */
  title: string;

  /** Company name */
  company: string;

  /**
   * Company logo path (optional)
   * - Use '/logos/company.png' for local image in public/logos/
   * - Use full URL for external image
   * - Omit or use undefined for no logo
   */
  companyLogo?: string;

  /**
   * Location
   * Format: "City, State/Country" or "Remote"
   */
  location: string;

  /**
   * Employment type
   * Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
   */
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';

  /**
   * Start date in YYYY-MM format
   * Example: '2023-01' for January 2023
   */
  startDate: string;

  /**
   * End date in YYYY-MM format (optional)
   * - Omit for current position
   * - Example: '2024-06' for June 2024
   */
  endDate?: string;

  /**
   * Is this your current position?
   * Set to true if still working here
   */
  current: boolean;

  /**
   * Brief description of the role
   * 1-2 sentences about what you did
   */
  description: string;

  /**
   * Key achievements/accomplishments in this role
   * - Use action verbs (Led, Built, Increased, Reduced, etc.)
   * - Include metrics when possible
   * - 3-5 bullet points recommended
   */
  achievements: string[];

  /**
   * Technologies/tools used in this role
   * List programming languages, frameworks, tools, etc.
   */
  technologies: string[];
}

/**
 * =============================================================================
 * YOUR WORK EXPERIENCE - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual work history.
 * Keep positions in reverse chronological order (newest first).
 */
export const experience: Experience[] = [
  // ---------------------------------------------------------------------------
  // CURRENT POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-1',
    title: 'Principal AI Solutions Architect',
    company: 'Freelance / Self-Employed',
    location: 'Nova Scotia, Canada',
    type: 'freelance',
    startDate: '2025-01',
    current: true,
    description:
      'Architecting and deploying production-grade Agentic AI ecosystems, with a focus on LLM fine-tuning, autonomous coding workflows, and secure local-first infrastructure for high-compliance sectors.',
    achievements: [
      'Engineered a custom agentic coding team using Claude APIs and proprietary CLI tools, automating unit testing, documentation, and boilerplate generation',
      'Fine-tuned domain-specific LLMs for retail and customer service using Unsloth, achieving high-accuracy intent recognition and reduced production latency',
      'Deployed local-first LLM environments (vLLM, Ollama, LM Studio) for accounting and tax agencies with 100% data residency and prompt injection mitigation',
      'Developed real-time AI fraud detection engines analyzing transaction patterns to mitigate risk for SMB e-commerce owners',
      'Integrated agentic AI into accounting workflows to automate document classification and data extraction from complex tax filings',
      'Designed and built secure, system-level GUI interfaces for SMEs to interact with local LLMs, abstracting technical complexity for non-technical staff',
    ],
    technologies: [
      'Python',
      'Claude API',
      'Unsloth',
      'vLLM',
      'Ollama',
      'LM Studio',
      'PyTorch',
      'Docker',
      'Linux',
    ],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-2',
    title: 'Senior Web Developer',
    company: 'Wreckage City LLC',
    location: 'Remote',
    type: 'full-time',
    startDate: '2024-01',
    endDate: '2025-01',
    current: false,
    description:
      'Architected and deployed a high-performance full-stack web application with real-time data streaming, international infrastructure, and full SDLC ownership.',
    achievements: [
      'Architected a high-performance full-stack MVC application using PHP 8.4, ensuring a scalable and maintainable codebase',
      'Engineered real-time data streaming via WebSockets and REST APIs for live stock and cryptocurrency tracking with sub-second updates',
      'Optimized performance through strategic Redis caching layers and New Relic tracing, reducing latency and identifying bottlenecks in real-time',
      'Developed a custom i18n internationalization layer and managed full Docker containerization for seamless Linux deployments',
      'Managed the full SDLC from server administration and environment setup through CI/CD maintenance',
    ],
    technologies: ['PHP 8.4', 'WebSockets', 'REST APIs', 'Redis', 'Docker', 'New Relic', 'Linux', 'CI/CD'],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-3',
    title: 'Senior Web Developer',
    company: 'David Interactive LLC',
    location: 'Remote',
    type: 'contract',
    startDate: '2023-05',
    endDate: '2023-12',
    current: false,
    description:
      'Spearheaded a critical legacy migration and security hardening initiative, converting a monolithic PHP 5.6 application to a modern, high-security PHP 8.4 environment.',
    achievements: [
      'Migrated a monolithic PHP 5.6 application to a modern, high-security PHP 8.4 environment',
      'Audited and hardened all main data flows, mitigating vulnerabilities and implementing secured PHP data pipelines',
      'Developed a bespoke rendering ecosystem integrating Handlebars with a custom-built hook injection system for modular and dynamic UI components',
      'Engineered a data-driven i18n engine via the hook system, enabling rapid expansion into international markets without architectural overhauls',
      'Containerized the entire application suite with Docker, eliminating environment inconsistencies and improving deployment speed',
    ],
    technologies: ['PHP 8.4', 'Handlebars', 'Docker', 'i18n', 'Linux', 'Security Hardening'],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-4',
    title: 'Chief Technology Officer (CTO)',
    company: 'Go Pro Property Management',
    location: 'Sydney, NS',
    type: 'full-time',
    startDate: '2019-09',
    endDate: '2023-04',
    current: false,
    description:
      'Conceptualized and executed a full digital transformation, building a proprietary CRM platform to manage hundreds of properties and tenant records while leading a cross-functional IT team.',
    achievements: [
      'Conceptualized and developed a specialized CRM platform to manage hundreds of properties and tenant records simultaneously',
      'Directed a full digital transformation, migrating legacy pen-and-paper workflows into a proprietary digital infrastructure',
      'Led and mentored a cross-functional team of IT professionals, aligning technical projects with broader business goals',
      'Standardized data integrity using industry-standard tooling and custom migration scripts to ensure 100% accuracy during physical-to-digital transition',
    ],
    technologies: ['PHP', 'Vue.js', 'MySQL', 'CRM Development', 'Linux', 'Docker'],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-5',
    title: 'Systems & Compliance Engineer',
    company: 'TMS Family Cultivation',
    location: 'Nova Scotia, Canada',
    type: 'full-time',
    startDate: '2018-01',
    endDate: '2019-08',
    current: false,
    description:
      'Engineered automated compliance frameworks and IoT monitoring infrastructure for Health Canada regulated cannabis cultivation facilities, operating with full government security clearance.',
    achievements: [
      'Obtained and maintained Health Canada security clearance for operations in strictly regulated, secured cultivation facilities',
      'Engineered automated compliance frameworks for the Cannabis Tracking and Licensing System (CTLS), streamlining full-cycle seed-to-sale reporting with 100% regulatory adherence',
      'Architected an IoT environmental monitoring suite utilizing a sensor network to track controlled warehouse conditions in real-time',
      'Developed a custom disaster mitigation dashboard with live data visualization, automated reporting, and emergency notifications to prevent crop loss and equipment failure',
      'Built internal tools interfacing directly with government tracking systems, minimizing human error in high-stakes data entry',
    ],
    technologies: ['IoT', 'Python', 'Node.js', 'MySQL', 'Linux', 'Data Visualization', 'Government APIs'],
  },

  // ---------------------------------------------------------------------------
  // EARLIEST POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-6',
    title: 'Lead Developer',
    company: 'Small Island Productions',
    location: 'Halifax, NS',
    type: 'full-time',
    startDate: '2012-04',
    endDate: '2018-01',
    current: false,
    description:
      'Developed tailored internal SaaS solutions to centralize management of employees, customer relations, and business-critical analytics for the company.',
    achievements: [
      'Developed tailored internal SaaS solutions centralizing employee management, customer relations, and business-critical analytics',
      'Optimized customer retention strategies by building custom data visualization tools for real-time user behavior analytics',
      'Streamlined cross-departmental operations by automating manual reporting tasks, significantly reducing weekly overhead',
      'Maintained and iterated on customer-facing technology stack to ensure a seamless end-to-end user experience',
    ],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'SaaS', 'Analytics', 'CRM'],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get total years of professional experience
 */
export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0
          )
        )
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  return years;
}

/**
 * Get current position (if any)
 */
export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

/**
 * Get all unique technologies across all experience
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Format date string (YYYY-MM) to readable format
 */
export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Get experience duration as string
 */
export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + '-01');

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
