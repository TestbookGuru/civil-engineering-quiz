export interface Question {
  id?: number;
  q: string;
  o: string[];
  a: number; // index of correct answer in o
  category: string;
  explanation?: string;
}

export interface QuizOption {
  text: string;
  originalIndex: number;
  correct: boolean;
}

export interface ActiveQuestion {
  q: string;
  category: string;
  options: QuizOption[];
  explanation?: string;
}

export interface AnswerRecord {
  question: string;
  category: string;
  options: QuizOption[];
  selectedIndex: number; // index in options array
  correctIndex: number; // index in options array where correct == true
  isCorrect: boolean;
  explanation?: string;
}

export type GameView = 'start' | 'quiz' | 'complete' | 'results';

export type GameMode = 'quickfire' | 'marathon' | 'practice';

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
  targetExam?: string;
}

export interface SessionScoreRecord {
  id: string;
  sessionNumber: number;
  label: string;
  date: string;
  score: number;
  total: number;
  percentage: number;
  category?: string;
}
