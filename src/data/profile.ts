export interface Profile {
  name: string;
  university: string;
  degree: string;
  email: string;
  github: string;
  avatar: string | null;
  cv: string | null;
}

export const profile: Profile = {
  name: 'Your Name',
  university: 'Beijing University of Posts and Telecommunications',
  degree: 'Digital Media Technology',
  email: 'your.name@example.com',
  github: 'https://github.com/von-Neumann101',
  avatar: null,
  cv: null,
};

export const initials = profile.name.trim().split(/\s+/).map(word => word[0]).slice(0, 2).join('').toUpperCase();

export const interests = [
  { title: 'Mechanistic Interpretability', text: 'Which internal computations does a model need to produce a particular answer?' },
  { title: 'Algorithmic Reasoning', text: 'How do sequence models keep track of state while counting, adding, or reading a string?' },
  { title: 'Neural Representations', text: 'How is information organized across layers, and when do different models encode the same variable?' },
];
