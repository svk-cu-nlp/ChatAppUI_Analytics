import { format } from 'date-fns';

export interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  usersByGender: {
    male: number;
    female: number;
    other: number;
  };
  usersByAge: {
    '18-24': number;
    '25-34': number;
    '35-44': number;
    '45-54': number;
    '55+': number;
  };
  usersByLocation: {
    [key: string]: number;
  };
  userActivityByTime: {
    [key: string]: number;
  };
}

export const generateDummyData = (date: Date): AnalyticsData => {
  const monthYear = format(date, 'MMM yyyy');
  
  return {
    totalUsers: 15000 + Math.floor(Math.random() * 5000),
    activeUsers: 8000 + Math.floor(Math.random() * 2000),
    newUsers: 500 + Math.floor(Math.random() * 300),
    usersByGender: {
      male: 7500 + Math.floor(Math.random() * 1000),
      female: 6800 + Math.floor(Math.random() * 1000),
      other: 700 + Math.floor(Math.random() * 200),
    },
    usersByAge: {
      '18-24': 3000 + Math.floor(Math.random() * 500),
      '25-34': 5000 + Math.floor(Math.random() * 500),
      '35-44': 3500 + Math.floor(Math.random() * 500),
      '45-54': 2500 + Math.floor(Math.random() * 500),
      '55+': 1000 + Math.floor(Math.random() * 500),
    },
    usersByLocation: {
      'United States': 5000 + Math.floor(Math.random() * 1000),
      'United Kingdom': 2500 + Math.floor(Math.random() * 500),
      'Germany': 2000 + Math.floor(Math.random() * 400),
      'France': 1500 + Math.floor(Math.random() * 300),
      'India': 2000 + Math.floor(Math.random() * 400),
      'Other': 2000 + Math.floor(Math.random() * 400),
    },
    userActivityByTime: {
      '00:00': 200 + Math.floor(Math.random() * 100),
      '04:00': 150 + Math.floor(Math.random() * 100),
      '08:00': 800 + Math.floor(Math.random() * 200),
      '12:00': 1200 + Math.floor(Math.random() * 300),
      '16:00': 1500 + Math.floor(Math.random() * 300),
      '20:00': 1000 + Math.floor(Math.random() * 200),
    },
  };
};