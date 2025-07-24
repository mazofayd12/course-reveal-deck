import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Course {
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

interface CourseCardProps {
  course: Course;
  isExpanded: boolean;
  onToggle: (courseId: string) => void;
}

export const CourseCard = ({ course, isExpanded, onToggle }: CourseCardProps) => {
  return (
    <div className="w-full">
      <Card 
        className={cn(
          "group cursor-pointer transition-all duration-300 bg-gradient-card border-border/50 hover:shadow-hover hover:scale-[1.02]",
          isExpanded && "shadow-elegant scale-[1.02]"
        )}
        onClick={() => onToggle(course.id)}
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div 
              className={cn(
                "absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300",
                course.color
              )}
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {course.description}
            </p>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Course
              </span>
              <ArrowRight 
                className={cn(
                  "w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-primary",
                  isExpanded && "rotate-90"
                )} 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expanded Content */}
      <div className={cn(
        "overflow-hidden transition-all duration-500 ease-out",
        isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
      )}>
        <Card className="bg-gradient-hover border-border/30 shadow-card">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className={cn(
                "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
                course.color
              )}>
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {course.firstEpisode.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {course.firstEpisode.description}
                </p>
                
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-all duration-300 hover:shadow-hover hover:scale-105"
                >
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Start Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};