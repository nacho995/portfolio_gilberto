export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  current?: boolean
}

export interface Skill {
  name: string
  category: 'design' | 'development' | 'tools' | 'soft'
  level: number
}

export interface ContactInfo {
  email: string
  linkedin: string
  github?: string
  twitter?: string
}

export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: string
}

