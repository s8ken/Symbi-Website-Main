import React from 'react';
import { Download, FileText, Star, Presentation, FileSpreadsheet, BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card-simple';
import { Button } from '../ui/button-simple';
import { Badge } from '../ui/badge-simple';

interface TeacherResource {
  id: string;
  title: string;
  description: string;
  type: 'session-plan' | 'rubric' | 'worksheet' | 'presentation' | 'reading' | 'video';
  format: 'pdf' | 'docx' | 'pptx' | 'mp4' | 'url';
  size?: string;
  downloadCount?: number;
  rating?: number;
  tags: string[];
}

interface TeacherResourcesProps {
  caseStudyId: string;
  caseStudyTitle: string;
}

const TeacherResources: React.FC<TeacherResourcesProps> = ({ caseStudyId, caseStudyTitle }) => {
  const resources: TeacherResource[] = [
    {
      id: '1',
      title: 'Complete Session Plan',
      description: 'Detailed lesson plan with timing, objectives, and activities',
      type: 'session-plan',
      format: 'pdf',
      size: '2.3 MB',
      downloadCount: 145,
      rating: 4.8,
      tags: ['Lesson Plan', 'Teaching Guide', '90 min']
    },
    {
      id: '2',
      title: 'Assessment Rubric',
      description: 'Comprehensive rubric for evaluating student performance',
      type: 'rubric',
      format: 'pdf',
      size: '1.1 MB',
      downloadCount: 132,
      rating: 4.9,
      tags: ['Assessment', 'Grading', 'Criteria']
    },
    {
      id: '3',
      title: 'Student Worksheet',
      description: 'Interactive worksheet with questions and exercises',
      type: 'worksheet',
      format: 'pdf',
      size: '856 KB',
      downloadCount: 167,
      rating: 4.7,
      tags: ['Student Activity', 'Practice', 'Questions']
    },
    {
      id: '4',
      title: 'Presentation Slides',
      description: 'Ready-to-use PowerPoint presentation with visuals',
      type: 'presentation',
      format: 'pptx',
      size: '4.2 MB',
      downloadCount: 189,
      rating: 4.6,
      tags: ['Slides', 'Visuals', 'Presentation']
    },
    {
      id: '5',
      title: 'Background Reading',
      description: 'Supplementary reading materials for deeper understanding',
      type: 'reading',
      format: 'pdf',
      size: '1.5 MB',
      downloadCount: 98,
      rating: 4.5,
      tags: ['Reading', 'Background', 'Research']
    },
    {
      id: '6',
      title: 'Instructional Video',
      description: '15-minute video explaining key concepts',
      type: 'video',
      format: 'mp4',
      size: '125 MB',
      downloadCount: 76,
      rating: 4.8,
      tags: ['Video', 'Instruction', 'Multimedia']
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'session-plan':
        return <FileText className="h-5 w-5" />;
      case 'rubric':
        return <Star className="h-5 w-5" />;
      case 'worksheet':
        return <FileSpreadsheet className="h-5 w-5" />;
      case 'presentation':
        return <Presentation className="h-5 w-5" />;
      case 'reading':
        return <BookOpen className="h-5 w-5" />;
      case 'video':
        return <ExternalLink className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'pdf':
        return 'text-red-600 bg-red-100';
      case 'docx':
        return 'text-blue-600 bg-blue-100';
      case 'pptx':
        return 'text-orange-600 bg-orange-100';
      case 'mp4':
        return 'text-purple-600 bg-purple-100';
      case 'url':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const downloadResource = (resource: TeacherResource) => {
    // Simulate download functionality
    const link = document.createElement('a');
    link.href = `#${resource.id}`;
    link.download = `${caseStudyTitle.replace(/\s+/g, '-').toLowerCase()}-${resource.title.replace(/\s+/g, '-').toLowerCase()}.${resource.format}`;
    link.click();
    
    // Show success message
    alert(`Downloading ${resource.title}...`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className={`p-2 rounded-lg ${getFormatColor(resource.format)}`}>
                  {getIcon(resource.type)}
                </div>
                <Badge variant="outline" className="text-xs">
                  {resource.format.toUpperCase()}
                </Badge>
              </div>
              <CardTitle className="text-lg">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Size: {resource.size}</span>
                  <span>Downloads: {resource.downloadCount}</span>
                </div>
                
                {resource.rating && (
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(resource.rating!) ? 'fill-current' : 'fill-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      {resource.rating.toFixed(1)}
                    </span>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-1">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  className="w-full" 
                  variant="default"
                  onClick={() => downloadResource(resource)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Teaching Tips</CardTitle>
          <CardDescription>Best practices for using these materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Preparation</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Review all materials before class. Test the SYMBI platform access and ensure students can log in.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Engagement</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                Use the presentation slides to guide discussion. Encourage students to share their own experiences with AI systems.
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
              <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Assessment</h4>
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Use the rubric consistently. Consider peer review for worksheet activities to promote collaborative learning.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherResources;