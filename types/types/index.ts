export interface Skill {
  name: string;
  level?: number; // 1–5
  tag?: "core" | "learning" | "advanced";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status?: "completed" | "in-progress" | "planned";
}