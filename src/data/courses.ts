import flutterImage from '@/assets/flutter-course.jpg';
import laravelImage from '@/assets/laravel-course.jpg';
import arduinoImage from '@/assets/arduino-course.jpg';
import figmaImage from '@/assets/figma-course.jpg';

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  firstEpisode: {
    title: string;
    description: string;
  };
  color: string;
}

export const courses: Course[] = [
  {
    id: 'flutter',
    title: 'Flutter Course',
    description: 'Master cross-platform mobile development with Flutter. Build beautiful native apps for iOS and Android using a single codebase.',
    image: flutterImage,
    firstEpisode: {
      title: 'Introduction to Flutter Development',
      description: 'Get started with Flutter by setting up your development environment, understanding the framework architecture, and creating your first mobile application with stunning UI components.'
    },
    color: 'bg-course-flutter'
  },
  {
    id: 'laravel',
    title: 'Laravel Course',
    description: 'Learn modern PHP web development with Laravel. Build robust, scalable web applications using the most popular PHP framework.',
    image: laravelImage,
    firstEpisode: {
      title: 'Laravel Fundamentals & Setup',
      description: 'Dive into Laravel by understanding MVC architecture, setting up your first Laravel project, and exploring Eloquent ORM for seamless database interactions.'
    },
    color: 'bg-course-laravel'
  },
  {
    id: 'arduino',
    title: 'Arduino Course',
    description: 'Explore the world of electronics and IoT with Arduino. Create interactive projects and learn embedded programming from scratch.',
    image: arduinoImage,
    firstEpisode: {
      title: 'Arduino Basics & First Circuit',
      description: 'Start your electronics journey by learning Arduino fundamentals, understanding digital and analog pins, and building your first LED circuit with basic programming.'
    },
    color: 'bg-course-arduino'
  },
  {
    id: 'figma',
    title: 'Figma Course',
    description: 'Design beautiful user interfaces with Figma. Learn professional UI/UX design principles and create stunning digital experiences.',
    image: figmaImage,
    firstEpisode: {
      title: 'Figma Interface & Design Principles',
      description: 'Master Figma tools and interface while learning fundamental design principles, typography, color theory, and creating your first professional UI design.'
    },
    color: 'bg-course-figma'
  }
];