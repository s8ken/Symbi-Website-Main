import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, FileText, Users, Clock, Star, ChevronRight, Filter, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card-simple';
import { Button } from '../components/ui/button-simple';
import { Badge } from '../components/ui/badge-simple';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  subject: string;
  gradeLevel: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  materials: {
    sessionPlan: boolean;
    rubric: boolean;
    worksheet: boolean;
    presentation: boolean;
  };
  trustScore?: number;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'AI Trust in Healthcare Diagnostics',
    description: 'Explore how AI systems make medical decisions and learn to evaluate their trustworthiness using SYMBI\'s six-pillar trust model.',
    subject: 'Computer Science',
    gradeLevel: 'High School',
    duration: '90 minutes',
    difficulty: 'Intermediate',
    topics: ['AI Ethics', 'Healthcare Technology', 'Trust Scoring', 'Bias Detection'],
    materials: {
      sessionPlan: true,
      rubric: true,
      worksheet: true,
      presentation: true
    },
    trustScore: 0.85
  },
  {
    id: '2',
    title: 'Decentralized Identity in Education',
    description: 'Understanding how blockchain and decentralized identity can secure student records and academic credentials.',
    subject: 'Technology',
    gradeLevel: 'College',
    duration: '120 minutes',
    difficulty: 'Advanced',
    topics: ['Blockchain', 'DID', 'Verifiable Credentials', 'Data Privacy'],
    materials: {
      sessionPlan: true,
      rubric: true,
      worksheet: false,
      presentation: true
    },
    trustScore: 0.92
  },
  {
    id: '3',
    title: 'Bias Detection in AI Systems',
    description: 'Hands-on workshop using SYMBI\'s bias detection tools to identify and mitigate algorithmic bias in AI systems.',
    subject: 'Data Science',
    gradeLevel: 'High School',
    duration: '75 minutes',
    difficulty: 'Beginner',
    topics: ['Algorithmic Bias', 'Fairness Metrics', 'AI Ethics', 'Data Analysis'],
    materials: {
      sessionPlan: true,
      rubric: false,
      worksheet: true,
      presentation: true
    },
    trustScore: 0.78
  },
  {
    id: '4',
    title: 'Compliance Monitoring for AI',
    description: 'Learn how organizations ensure their AI systems comply with regulations and ethical standards.',
    subject: 'Business Studies',
    gradeLevel: 'College',
    duration: '105 minutes',
    difficulty: 'Advanced',
    topics: ['AI Governance', 'Regulatory Compliance', 'Risk Management', 'Ethics'],
    materials: {
      sessionPlan: true,
      rubric: true,
      worksheet: true,
      presentation: true
    },
    trustScore: 0.88
  },
  {
    id: '5',
    title: 'Real-time Trust Monitoring',
    description: 'Build a real-time dashboard to monitor AI system trust scores and understand trust degradation patterns.',
    subject: 'Computer Science',
    gradeLevel: 'High School',
    duration: '60 minutes',
    difficulty: 'Intermediate',
    topics: ['Real-time Systems', 'Dashboard Design', 'Trust Metrics', 'Monitoring'],
    materials: {
      sessionPlan: true,
      rubric: false,
      worksheet: true,
      presentation: false
    },
    trustScore: 0.82
  },
  {
    id: '6',
    title: 'Cryptographic Audit Trails',
    description: 'Understanding how cryptographic techniques ensure data integrity and create immutable audit trails.',
    subject: 'Cybersecurity',
    gradeLevel: 'College',
    duration: '135 minutes',
    difficulty: 'Advanced',
    topics: ['Cryptography', 'Hash Functions', 'Digital Signatures', 'Audit Systems'],
    materials: {
      sessionPlan: true,
      rubric: true,
      worksheet: false,
      presentation: true
    },
    trustScore: 0.95
  }
];

const EducatorsHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const subjects = ['All', 'Computer Science', 'Technology', 'Data Science', 'Business Studies', 'Cybersecurity'];
  const gradeLevels = ['All', 'High School', 'College'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSubject = selectedSubject === 'All' || study.subject === selectedSubject;
    const matchesGrade = selectedGrade === 'All' || study.gradeLevel === selectedGrade;
    const matchesDifficulty = selectedDifficulty === 'All' || study.difficulty === selectedDifficulty;

    return matchesSearch && matchesSubject && matchesGrade && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrustScoreColor = (score: number) => {
    if (score >= 0.9) return 'text-green-600';
    if (score >= 0.75) return 'text-blue-600';
    if (score >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-violet-100 dark:bg-violet-900 rounded-lg">
              <Users className="h-8 w-8 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Educators Hub</h1>
              <p className="text-gray-600 dark:text-gray-400">Comprehensive teaching resources for AI trust and ethics education</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Case Studies</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{caseStudies.length}</div>
              <p className="text-xs text-muted-foreground">Across multiple subjects</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Session Plans</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{caseStudies.filter(s => s.materials.sessionPlan).length}</div>
              <p className="text-xs text-muted-foreground">Complete lesson plans</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rubrics</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{caseStudies.filter(s => s.materials.rubric).length}</div>
              <p className="text-xs text-muted-foreground">Assessment rubrics</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Worksheets</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{caseStudies.filter(s => s.materials.worksheet).length}</div>
              <p className="text-xs text-muted-foreground">Student worksheets</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Case Studies</CardTitle>
            <CardDescription>Find the perfect case study for your classroom</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <select
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Grade Level</label>
                <select
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                >
                  {gradeLevels.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Difficulty</label>
                <select
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Results</label>
                <div className="pt-2 text-sm text-gray-600 dark:text-gray-400">
                  {filteredCaseStudies.length} case studies found
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((study) => (
            <Card key={study.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className={getDifficultyColor(study.difficulty)}>
                    {study.difficulty}
                  </Badge>
                  {study.trustScore && (
                    <div className={`text-sm font-semibold ${getTrustScoreColor(study.trustScore)}`}>
                      {Math.round(study.trustScore * 100)}% Trust
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg mb-2">{study.title}</CardTitle>
                <CardDescription>{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{study.subject} • {study.gradeLevel}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{study.duration}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {study.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-sm font-medium mb-2">Available Materials:</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className={`flex items-center text-xs ${study.materials.sessionPlan ? 'text-green-600' : 'text-gray-400'}`}>
                        <FileText className="h-3 w-3 mr-1" />
                        Session Plan
                      </div>
                      <div className={`flex items-center text-xs ${study.materials.rubric ? 'text-green-600' : 'text-gray-400'}`}>
                        <Star className="h-3 w-3 mr-1" />
                        Rubric
                      </div>
                      <div className={`flex items-center text-xs ${study.materials.worksheet ? 'text-green-600' : 'text-gray-400'}`}>
                        <FileText className="h-3 w-3 mr-1" />
                        Worksheet
                      </div>
                      <div className={`flex items-center text-xs ${study.materials.presentation ? 'text-green-600' : 'text-gray-400'}`}>
                        <Download className="h-3 w-3 mr-1" />
                        Presentation
                      </div>
                    </div>
                  </div>

                  <Link to={`/educators/case-study/${study.id}`} className="w-full">
                    <Button className="w-full" variant="default">
                      View Case Study
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">No case studies found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search criteria or filters.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EducatorsHub;