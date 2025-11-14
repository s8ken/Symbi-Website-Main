import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Download, 
  FileText, 
  Users, 
  Clock, 
  Star, 
  ArrowLeft,
  CheckCircle,
  BookOpen,
  Presentation,
  FileSpreadsheet,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card-simple';
import { Button } from '../components/ui/button-simple';
import { Badge } from '../components/ui/badge-simple';
import TeacherResources from '../components/TeacherResources';
import PDFViewer from '../components/PDFViewer';

interface SessionPlan {
  id: string;
  title: string;
  duration: string;
  objectives: string[];
  materials: string[];
  activities: {
    name: string;
    duration: string;
    description: string;
    type: 'Introduction' | 'Activity' | 'Discussion' | 'Assessment' | 'Conclusion';
  }[];
}

interface Rubric {
  criteria: {
    name: string;
    excellent: string;
    good: string;
    satisfactory: string;
    needsImprovement: string;
    weight: number;
  }[];
  totalPoints: number;
}

interface Worksheet {
  sections: {
    title: string;
    questions: {
      question: string;
      type: 'multiple-choice' | 'short-answer' | 'essay' | 'calculation';
      points?: number;
      options?: string[];
    }[];
  }[];
}

const caseStudyDetails = {
  '1': {
    title: 'AI Trust in Healthcare Diagnostics',
    description: 'Explore how AI systems make medical decisions and learn to evaluate their trustworthiness using SYMBI\'s six-pillar trust model.',
    subject: 'Computer Science',
    gradeLevel: 'High School',
    duration: '90 minutes',
    difficulty: 'Intermediate',
    topics: ['AI Ethics', 'Healthcare Technology', 'Trust Scoring', 'Bias Detection'],
    learningObjectives: [
      'Understand the six pillars of AI trust (Technical, Ethical, Operational, Transparency, Security, Compliance)',
      'Analyze real-world AI healthcare diagnostic systems',
      'Identify potential bias sources in medical AI',
      'Evaluate trust scores for different AI systems',
      'Propose improvements for AI system trustworthiness'
    ],
    prerequisites: [
      'Basic understanding of artificial intelligence concepts',
      'Familiarity with healthcare terminology',
      'Ability to analyze data and draw conclusions'
    ],
    sessionPlan: {
      id: '1',
      title: 'AI Trust in Healthcare Diagnostics - Session Plan',
      duration: '90 minutes',
      objectives: [
        'Introduce SYMBI\'s six-pillar trust model',
        'Analyze healthcare AI case studies',
        'Practice trust scoring exercises',
        'Discuss ethical implications'
      ],
      materials: [
        'Computer with internet access',
        'SYMBI Trust Platform access',
        'Healthcare AI case study materials',
        'Trust scoring worksheets',
        'Whiteboard or presentation screen'
      ],
      activities: [
        {
          name: 'Introduction to AI Trust',
          duration: '15 minutes',
          description: 'Overview of AI trust concepts and introduction to SYMBI\'s six-pillar model',
          type: 'Introduction'
        },
        {
          name: 'Healthcare AI Case Study Review',
          duration: '20 minutes',
          description: 'Examine real healthcare AI systems and their trust challenges',
          type: 'Activity'
        },
        {
          name: 'Trust Scoring Exercise',
          duration: '25 minutes',
          description: 'Students use SYMBI platform to score different AI systems',
          type: 'Activity'
        },
        {
          name: 'Group Discussion',
          duration: '15 minutes',
          description: 'Discuss findings and ethical implications of AI in healthcare',
          type: 'Discussion'
        },
        {
          name: 'Assessment Quiz',
          duration: '10 minutes',
          description: 'Quick quiz on trust concepts and healthcare AI',
          type: 'Assessment'
        },
        {
          name: 'Wrap-up and Homework',
          duration: '5 minutes',
          description: 'Summary of key points and assignment of follow-up tasks',
          type: 'Conclusion'
        }
      ]
    },
    rubric: {
      criteria: [
        {
          name: 'Understanding of Trust Pillars',
          excellent: 'Demonstrates comprehensive understanding of all six trust pillars with specific examples',
          good: 'Shows good understanding of most trust pillars with some examples',
          satisfactory: 'Shows basic understanding of trust pillars with limited examples',
          needsImprovement: 'Limited understanding of trust pillars with few or no examples',
          weight: 25
        },
        {
          name: 'Healthcare AI Analysis',
          excellent: 'Provides insightful analysis of healthcare AI systems with multiple perspectives',
          good: 'Provides good analysis with some consideration of different perspectives',
          satisfactory: 'Provides basic analysis with limited consideration of perspectives',
          needsImprovement: 'Analysis is superficial or missing key elements',
          weight: 30
        },
        {
          name: 'Trust Scoring Application',
          excellent: 'Accurately applies trust scoring methodology with clear justification',
          good: 'Generally accurate application with some justification',
          satisfactory: 'Basic application with limited justification',
          needsImprovement: 'Inaccurate application or missing justification',
          weight: 25
        },
        {
          name: 'Ethical Considerations',
          excellent: 'Thoughtfully considers ethical implications with well-reasoned arguments',
          good: 'Considers ethical implications with some reasoning',
          satisfactory: 'Basic consideration of ethical implications',
          needsImprovement: 'Limited or no consideration of ethical implications',
          weight: 20
        }
      ],
      totalPoints: 100
    },
    worksheet: {
      sections: [
        {
          title: 'Trust Pillar Identification',
          questions: [
            {
              question: 'Which trust pillar would be most important for a medical AI that diagnoses diseases?',
              type: 'multiple-choice',
              points: 5,
              options: [
                'Technical Reliability',
                'Ethical Considerations',
                'Transparency Level',
                'All of the above'
              ]
            },
            {
              question: 'Explain why transparency is crucial for AI systems in healthcare.',
              type: 'short-answer',
              points: 10
            }
          ]
        },
        {
          title: 'Case Study Analysis',
          questions: [
            {
              question: 'Analyze the following scenario: An AI system for detecting skin cancer has a 95% accuracy rate but cannot explain its decisions. What are the trust implications?',
              type: 'essay',
              points: 25
            }
          ]
        }
      ]
    }
  }
};

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'session-plan' | 'rubric' | 'worksheet' | 'materials'>('overview');
  const [pdfViewerOpen, setPdfViewerOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState<{ url: string; name: string; size?: string } | null>(null);
  
  const caseStudy = caseStudyDetails[id as keyof typeof caseStudyDetails];
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Case Study Not Found</h1>
          <Link to="/educators" className="text-violet-600 hover:text-violet-700">
            ← Back to Educators Hub
          </Link>
        </div>
      </div>
    );
  }

  const downloadMaterial = (type: string, format: string) => {
    // Create download link for API endpoint
    const link = document.createElement('a');
    link.href = `/api/educators/download/${id}/${type}`;
    link.download = `${caseStudy.title.replace(/\s+/g, '-').toLowerCase()}-${type}.${format}`;
    link.click();
  };

  const openPdfViewer = (type: string, title: string, size?: string) => {
    setCurrentPdf({
      url: `/api/educators/download/${id}/${type}`,
      name: title,
      size
    });
    setPdfViewerOpen(true);
  };

  const closePdfViewer = () => {
    setPdfViewerOpen(false);
    setCurrentPdf(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {pdfViewerOpen && currentPdf && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-6xl w-full max-h-full overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {currentPdf.name}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={closePdfViewer}
              >
                Close
              </Button>
            </div>
            <div className="h-96 overflow-auto">
              <PDFViewer
                fileUrl={currentPdf.url}
                fileName={currentPdf.name}
                fileSize={currentPdf.size}
              />
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link to="/educators" className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Educators Hub
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{caseStudy.title}</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">{caseStudy.description}</p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="outline" className={getDifficultyColor(caseStudy.difficulty)}>
                  {caseStudy.difficulty}
                </Badge>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4 mr-1" />
                  {caseStudy.subject} • {caseStudy.gradeLevel}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  {caseStudy.duration}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                All Materials
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'session-plan', label: 'Session Plan', icon: FileText },
              { id: 'rubric', label: 'Rubric', icon: Star },
              { id: 'worksheet', label: 'Worksheet', icon: FileSpreadsheet },
              { id: 'materials', label: 'Materials', icon: Download }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex items-center py-2 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-violet-500 text-violet-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Objectives</CardTitle>
                  <CardDescription>What students will learn</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {caseStudy.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                  <CardDescription>Required knowledge and skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {caseStudy.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-2 w-2 bg-violet-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Topics Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'session-plan' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{caseStudy.sessionPlan.title}</CardTitle>
                  <CardDescription>Duration: {caseStudy.sessionPlan.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Session Objectives:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {caseStudy.sessionPlan.objectives.map((objective, index) => (
                          <li key={index} className="text-sm text-gray-700 dark:text-gray-300">{objective}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Required Materials:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {caseStudy.sessionPlan.materials.map((material, index) => (
                          <li key={index} className="text-sm text-gray-700 dark:text-gray-300">{material}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {caseStudy.sessionPlan.activities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center">
                            <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{activity.name}</h4>
                            <Badge variant="outline">{activity.duration}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{activity.description}</p>
                          <Badge variant="secondary" className="text-xs">
                            {activity.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'rubric' && (
            <Card>
              <CardHeader>
                <CardTitle>Assessment Rubric</CardTitle>
                <CardDescription>Total Points: {caseStudy.rubric.totalPoints}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold">Criteria</th>
                        <th className="text-left py-3 px-4 font-semibold">Excellent ({caseStudy.rubric.criteria[0]?.weight}%)</th>
                        <th className="text-left py-3 px-4 font-semibold">Good</th>
                        <th className="text-left py-3 px-4 font-semibold">Satisfactory</th>
                        <th className="text-left py-3 px-4 font-semibold">Needs Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {caseStudy.rubric.criteria.map((criterion, index) => (
                        <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-3 px-4 font-medium">{criterion.name}</td>
                          <td className="py-3 px-4 text-sm">{criterion.excellent}</td>
                          <td className="py-3 px-4 text-sm">{criterion.good}</td>
                          <td className="py-3 px-4 text-sm">{criterion.satisfactory}</td>
                          <td className="py-3 px-4 text-sm">{criterion.needsImprovement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'worksheet' && (
            <Card>
              <CardHeader>
                <CardTitle>Student Worksheet</CardTitle>
                <CardDescription>Questions and exercises for students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {caseStudy.worksheet.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-4">{section.title}</h4>
                      <div className="space-y-4">
                        {section.questions.map((question, questionIndex) => (
                          <div key={questionIndex} className="border-l-4 border-violet-200 pl-4">
                            <div className="flex items-start justify-between mb-2">
                              <p className="font-medium">{questionIndex + 1}. {question.question}</p>
                              {question.points && (
                                <Badge variant="outline" className="ml-2">
                                  {question.points} pts
                                </Badge>
                              )}
                            </div>
                            
                            {question.type === 'multiple-choice' && question.options && (
                              <div className="space-y-2 ml-4">
                                {question.options.map((option, optionIndex) => (
                                  <label key={optionIndex} className="flex items-center space-x-2">
                                    <input type="radio" name={`q-${sectionIndex}-${questionIndex}`} className="form-radio" />
                                    <span className="text-sm">{String.fromCharCode(65 + optionIndex)}. {option}</span>
                                  </label>
                                ))}
                              </div>
                            )}
                            
                            {(question.type === 'short-answer' || question.type === 'essay') && (
                              <textarea
                                className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                rows={question.type === 'essay' ? 6 : 3}
                                placeholder={question.type === 'essay' ? 'Write your detailed response here...' : 'Write your answer here...'}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'materials' && (
            <TeacherResources caseStudyId={id} caseStudyTitle={caseStudy.title} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;