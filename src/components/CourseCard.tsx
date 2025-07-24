import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
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
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 bg-gradient-card border-border/50 hover:shadow-hover hover:scale-[1.02]"
      onClick={handleClick}
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
            <ArrowRight className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};