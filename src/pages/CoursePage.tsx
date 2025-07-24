import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { courses } from '@/data/courses';

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">الكورس غير موجود</h1>
          <Link to="/" className="text-primary hover:text-primary/80">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const lessons = [
    {
      id: 1,
      title: course.firstEpisode.title,
      description: course.firstEpisode.description,
      duration: '15 دقيقة',
      isCompleted: false,
      isFree: true
    },
    {
      id: 2,
      title: `${course.title} - المتغيرات والدوال الأساسية`,
      description: 'تعلم كيفية التعامل مع المتغيرات والدوال الأساسية في هذا الكورس',
      duration: '20 دقيقة',
      isCompleted: false,
      isFree: true
    },
    {
      id: 3,
      title: `${course.title} - بناء المشروع الأول`,
      description: 'ابدأ في بناء مشروعك الأول وتطبيق ما تعلمته من المفاهيم الأساسية',
      duration: '25 دقيقة',
      isCompleted: false,
      isFree: false
    },
    {
      id: 4,
      title: `${course.title} - التطبيقات المتقدمة`,
      description: 'تعمق في المفاهيم المتقدمة وتعلم كيفية حل المشاكل المعقدة',
      duration: '30 دقيقة',
      isCompleted: false,
      isFree: false
    },
    {
      id: 5,
      title: `${course.title} - المشروع النهائي`,
      description: 'اطبق كل ما تعلمته في مشروع شامل ومتكامل',
      duration: '45 دقيقة',
      isCompleted: false,
      isFree: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container mx-auto px-4 py-8">
          <Link 
            to="/"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            العودة للكورسات
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Badge className={`${course.color} text-white border-0`}>
                  كورس مميز
                </Badge>
                <div className="flex items-center gap-1 text-primary-foreground/80">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">4.8</span>
                </div>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {course.title}
              </h1>
              
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="flex items-center gap-6 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>2.5 ساعة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1,234 طالب</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-80 h-48 object-cover rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">محتويات الكورس</h2>
            <p className="text-muted-foreground">
              {lessons.length} درس • {lessons.filter(l => l.isFree).length} دروس مجانية
            </p>
          </div>

          <div className="space-y-4">
            {lessons.map((lesson, index) => (
              <Card 
                key={lesson.id}
                className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-lg ${course.color} flex items-center justify-center`}>
                        <Play className="w-5 h-5 text-white fill-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {lesson.title}
                        </h3>
                        {lesson.isFree && (
                          <Badge variant="secondary" className="text-xs">
                            مجاني
                          </Badge>
                        )}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {lesson.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{lesson.duration}</span>
                        </div>

                        <Button 
                          variant={index === 0 ? "default" : "outline"}
                          size="sm"
                          className={index === 0 ? "bg-primary hover:bg-primary/90 shadow-elegant" : ""}
                        >
                          {index === 0 ? (
                            <>
                              <Play className="w-4 h-4 mr-2 fill-current" />
                              ابدأ الآن
                            </>
                          ) : lesson.isFree ? (
                            'مشاهدة مجانية'
                          ) : (
                            'مطلوب اشتراك'
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enrollment Section */}
          <Card className="mt-12 bg-gradient-hover border-border/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                هل أنت مستعد لتعلم {course.title}؟
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                انضم إلى آلاف الطلاب الذين تعلموا بنجاح وطوروا مهاراتهم في هذا المجال
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-hover hover:scale-105 transition-all duration-300"
              >
                ابدأ الكورس الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;