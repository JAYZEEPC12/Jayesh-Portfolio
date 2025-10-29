
export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  keywords?: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}
