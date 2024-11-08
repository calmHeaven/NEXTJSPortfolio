
export const projects = [
  {
    id: 0,
    image: '../components/Projects/image.png',
    title: ' Full Stack School Management System',
    description: "This is a Spring Boot project for managing school-related tasks such as student registration and management. The system allows users to register students, view student details, update student information, and delete student records. Additionally, the project includes features for teacher management.",
      tags: ['SpringBoot',', Java', ', JavaScript',', HTML', ', Bootstrap CSS'],
    source: 'https://github.com/calmHeaven/SpringBootSchoolManagementSystem',
    // visit: 'https://google.com',
  },
  {
    title: ' Automated SMS Motivator',
    description: "Spring Boot program using the Twilio API to send motivational SMS messages whenever I procrastinate.",
      image: '../components/Projects/spring-new.png',
      tags: ['Spring Boot', ', Twilio API',', Thymeleaf'],
    source: 'https://github.com/calmHeaven/-Automated-SMS-Motivator-',
    // visit: 'https://google.com',
    id: 1,
  },
];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const TimeLineData = [
  {month:months[7], year: 2022, text: 'Graduated High School\nStarted University'},
  {month:months[11-1], year: 2023, text: 'Developed deep understanding of DSA'},
  {month:months[1-1], year: 2024, text: 'Built My First Web app'},
  {month:months[4-1], year: 2024, text: 'Built My First Full Stack Application'},
  {month:months[5-1], year:2024, text:'Software Development Intern at PolySense Solutions'},
  {month:months[9-1], year: 2024, text: 'Began Evolving in my skills as a developer and a mentor.' },
  {month:months[10-1], year: 2024, text: 'Involved in the development of an open source PWA for a non-profit' }
];

export const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

export const Resume = [
  {
    file: "../../assets/Resume.pdf"
  }
]