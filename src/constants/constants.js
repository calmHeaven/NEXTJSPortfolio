export const projects = [
  {
    title: ' Full Stack School Management System',
    description: "This is a Spring Boot project for managing school-related tasks such as student registration and management. The system allows users to register students, view student details, update student information, and delete student records. Additionally, the project includes features for teacher management.",
    image: 'https://i.imgur.com/Z1KLa13.png',
    tags: ['SpringBoot','JavaScript', 'Bootstrap CSS'],
    source: 'https://github.com/calmHeaven/SpringBootSchoolManagementSystem',
    visit: null,
    id: 0,
  },
  {
    title: ' Automated SMS Motivator',
    description: "Spring Boot program using the Twilio API to send motivational SMS messages whenever I procrastinate.",
    image: 'https://i.imgur.com/vuzPqhx.png',
    tags: ['Spring Boot', 'Twilio API','Thymeleaf'],
    source: 'https://github.com/calmHeaven/-Automated-SMS-Motivator-',
    visit: null,
    id: 1,
  },
  {
    title: 'StayOnTrack',
    description: "An app that enables people to track their habits in a way that they are able to make daily actionable progress.",
    image: 'https://imgur.com/B3GVSzY.png',
    tags: ['Spring Boot', 'Next.js','TypeScript', 'PostgreSQL'],
    visit: 'https://stay-on-track.vercel.app',
    source: null,
    id: 2,
  },
];

export const backend = ['Spring Boot', 'Node.js', 'Express.js', 'Java'];
export const frontend = ['Next.js','React.js', 'TypeScript', 'HTML/CSS/JS'];
export const database = ['MSAccess', 'PostgreSQL', 'Redis'];
export const tools = ['AWS', 'Azure', 'Git','Docker', 'Postman'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const TimeLineData = [
  {month:months[7], year: 2022, text: 'Graduated High School\nStarted University'},
  {month:months[11-1], year: 2023, text: 'Developed deep understanding of DSA'},
  {month:months[1-1], year: 2024, text: 'Built My First Web app'},
  {month:months[4-1], year: 2024, text: 'Built My First Full Stack Application'},
  {month:months[5-1], year:2024, text:'Software Development Intern at PolySense Solutions'},
  {month:months[9-1], year: 2024, text: 'Began Evolving in my skills as a developer and a mentor.' },
  {month:months[10-1], year: 2024, text: 'Involved in the development of an open source PWA for a non-profit.' },
  {month:months[4-1], year: 2025, text: 'Implemented a Secure API Gateway using Spring Boot, Redis, KeyCloak.' }
];
