import { Project } from '../models/project.model';
const photo = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;
export const projects: Project[] = [
  { id: 1, title: 'ARAM III', category: 'Community', description: 'A community initiative shaped around listening, learning and showing up.', image: photo('1509099836639-18ba1795216d'), date: 'Demo listing', location: 'Coimbatore' },
  { id: 2, title: 'Community Care Drive', category: 'Community', description: 'A demo service story focused on practical care and shared responsibility.', image: photo('1559027615-cd4628902d4a'), date: 'Demo listing', location: 'Coimbatore' },
  { id: 3, title: 'Education Support Initiative', category: 'Education', description: 'A demo learning project designed to make support more accessible to students.', image: photo('1503676260728-1c00da094a0b'), date: 'Demo listing' },
  { id: 4, title: 'Student Empowerment Drive', category: 'Education', description: 'A demo youth-focused effort for confidence, curiosity and continued learning.', image: photo('1529390079861-591de354faf5'), date: 'Demo listing' },
  { id: 5, title: 'Green Community Initiative', category: 'Environment', description: 'A demo environmental project encouraging small, visible acts of stewardship.', image: photo('1497250681960-ef046c08a56e'), date: 'Demo listing' },
  { id: 6, title: 'Tree Plantation Drive', category: 'Environment', description: 'A demo outdoor activity connecting fellowship with care for shared spaces.', image: photo('1441974231531-c6227db76b6e'), date: 'Demo listing' },
  { id: 7, title: 'ROAR', category: 'Youth', description: 'A youth experience where confidence grows through collaboration and action.', image: photo('1529390079861-591de354faf5'), date: 'Demo listing' },
  { id: 8, title: 'Youth Leadership Program', category: 'Youth', description: 'A demo leadership series built around initiative, reflection and teamwork.', image: photo('1529156069898-49953e39b3ac'), date: 'Demo listing' },
  { id: 9, title: 'Community Awareness Initiative', category: 'Social', description: 'A demo campaign for clear conversations around everyday community needs.', image: photo('1511632765486-a01980e01a18'), date: 'Demo listing' },
  { id: 10, title: 'Community Outreach', category: 'Social', description: 'A demo outreach project creating space for connection and collective care.', image: photo('1531206715517-5c0ba140b2b8'), date: 'Demo listing' },
  { id: 11, title: 'Stars of Kovai', category: 'Events', description: 'A demo celebration of the people and ideas making our city brighter.', image: photo('1511632765486-a01980e01a18'), date: 'Demo listing' },
  { id: 12, title: 'Rotasia 2024', category: 'Events', description: 'A demo event story about gathering, exchange and shared Rotaract energy.', image: photo('1517457373958-b7bdd4587205'), date: 'Demo listing' },
];