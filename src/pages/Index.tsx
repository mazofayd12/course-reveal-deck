import { useState } from 'react';
import { CourseCard } from '@/components/CourseCard';
import { courses } from '@/data/courses';

const Index = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const handleToggle = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Master New Skills
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed animate-fade-in">
              Explore our comprehensive courses and start your journey to becoming a skilled developer and designer
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Courses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully crafted courses designed to take you from beginner to expert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard
                course={course}
                isExpanded={expandedCourse === course.id}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </div>

        {/* Expanded Course Display */}
        {expandedCourse && (
          <div className="mt-8 animate-scale-in">
            <div className="max-w-5xl mx-auto">
              {/* Full-width expanded content is handled within CourseCard component */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
