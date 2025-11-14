import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const router = express.Router();

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mock data for educational resources
const educationalResources = {
  '1': { // AI Trust in Healthcare Diagnostics
    'session-plan': {
      id: 'session-plan-1',
      title: 'AI Trust in Healthcare - Session Plan',
      description: 'Complete lesson plan with timing, objectives, and activities',
      filename: 'ai-trust-healthcare-session-plan.pdf',
      size: '2.3 MB',
      type: 'application/pdf',
      downloadCount: 145,
      rating: 4.8
    },
    'rubric': {
      id: 'rubric-1',
      title: 'AI Trust Assessment Rubric',
      description: 'Comprehensive rubric for evaluating student performance',
      filename: 'ai-trust-healthcare-rubric.pdf',
      size: '1.1 MB',
      type: 'application/pdf',
      downloadCount: 132,
      rating: 4.9
    },
    'worksheet': {
      id: 'worksheet-1',
      title: 'Student Worksheet - AI Trust',
      description: 'Interactive worksheet with questions and exercises',
      filename: 'ai-trust-healthcare-worksheet.pdf',
      size: '856 KB',
      type: 'application/pdf',
      downloadCount: 167,
      rating: 4.7
    },
    'presentation': {
      id: 'presentation-1',
      title: 'AI Trust in Healthcare - Slides',
      description: 'Ready-to-use PowerPoint presentation with visuals',
      filename: 'ai-trust-healthcare-presentation.pptx',
      size: '4.2 MB',
      type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      downloadCount: 189,
      rating: 4.6
    }
  },
  '2': { // Decentralized Identity in Education
    'session-plan': {
      id: 'session-plan-2',
      title: 'Decentralized Identity - Session Plan',
      description: 'Complete lesson plan for blockchain and DID education',
      filename: 'decentralized-identity-session-plan.pdf',
      size: '2.8 MB',
      type: 'application/pdf',
      downloadCount: 98,
      rating: 4.7
    },
    'rubric': {
      id: 'rubric-2',
      title: 'Blockchain Technology Assessment Rubric',
      description: 'Assessment criteria for blockchain understanding',
      filename: 'blockchain-rubric.pdf',
      size: '1.2 MB',
      type: 'application/pdf',
      downloadCount: 87,
      rating: 4.8
    },
    'presentation': {
      id: 'presentation-2',
      title: 'Decentralized Identity - Presentation',
      description: 'Visual presentation on blockchain and DID concepts',
      filename: 'decentralized-identity-presentation.pptx',
      size: '5.1 MB',
      type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      downloadCount: 134,
      rating: 4.5
    }
  },
  '3': { // Bias Detection in AI Systems
    'session-plan': {
      id: 'session-plan-3',
      title: 'Bias Detection - Workshop Plan',
      description: 'Hands-on workshop plan for bias detection',
      filename: 'bias-detection-session-plan.pdf',
      size: '3.1 MB',
      type: 'application/pdf',
      downloadCount: 156,
      rating: 4.9
    },
    'worksheet': {
      id: 'worksheet-3',
      title: 'Bias Detection Activities',
      description: 'Interactive exercises for identifying AI bias',
      filename: 'bias-detection-worksheet.pdf',
      size: '1.8 MB',
      type: 'application/pdf',
      downloadCount: 203,
      rating: 4.8
    },
    'presentation': {
      id: 'presentation-3',
      title: 'AI Bias Detection - Slides',
      description: 'Presentation on algorithmic bias and fairness',
      filename: 'bias-detection-presentation.pptx',
      size: '6.3 MB',
      type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      downloadCount: 178,
      rating: 4.7
    }
  }
};

// Get all resources for a specific case study
router.get('/case-study/:caseStudyId', async (req, res) => {
  try {
    const { caseStudyId } = req.params;
    const resources = educationalResources[caseStudyId];
    
    if (!resources) {
      return res.status(404).json({
        success: false,
        message: 'Case study not found'
      });
    }

    res.json({
      success: true,
      data: resources,
      message: 'Educational resources retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching educational resources:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get a specific resource
router.get('/case-study/:caseStudyId/resource/:resourceType', async (req, res) => {
  try {
    const { caseStudyId, resourceType } = req.params;
    const resource = educationalResources[caseStudyId]?.[resourceType];
    
    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    res.json({
      success: true,
      data: resource,
      message: 'Resource retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching resource:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Download a specific resource
router.get('/download/:caseStudyId/:resourceType', async (req, res) => {
  try {
    const { caseStudyId, resourceType } = req.params;
    const resource = educationalResources[caseStudyId]?.[resourceType];
    
    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    // In a real implementation, you would serve the actual file
    // For now, we'll create a mock download response
    const mockContent = `
      This is a mock ${resourceType} for case study ${caseStudyId}.
      
      Case Study: ${resource.title}
      Description: ${resource.description}
      
      In a production environment, this would contain the actual ${resourceType} content
      for the educational resource.
      
      Generated on: ${new Date().toISOString()}
    `;

    // Set appropriate headers for file download
    res.setHeader('Content-Disposition', `attachment; filename="${resource.filename}"`);
    res.setHeader('Content-Type', resource.type);
    res.setHeader('Content-Length', Buffer.byteLength(mockContent));

    // Send the mock content
    res.send(mockContent);

    // Increment download count (in production, this would be tracked in a database)
    resource.downloadCount++;
    
  } catch (error) {
    console.error('Error downloading resource:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get all available case studies with their resource summaries
router.get('/case-studies', async (req, res) => {
  try {
    const caseStudies = Object.keys(educationalResources).map(caseStudyId => {
      const resources = educationalResources[caseStudyId];
      const resourceTypes = Object.keys(resources);
      const totalDownloads = Object.values(resources).reduce((sum, resource: any) => sum + resource.downloadCount, 0);
      const averageRating = Object.values(resources).reduce((sum, resource: any) => sum + resource.rating, 0) / resourceTypes.length;

      return {
        id: caseStudyId,
        resourceTypes,
        totalDownloads,
        averageRating: Math.round(averageRating * 10) / 10,
        resourceCount: resourceTypes.length
      };
    });

    res.json({
      success: true,
      data: caseStudies,
      message: 'Case studies retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Submit feedback for a resource
router.post('/feedback/:caseStudyId/:resourceType', async (req, res) => {
  try {
    const { caseStudyId, resourceType } = req.params;
    const { rating, comment } = req.body;
    
    const resource = educationalResources[caseStudyId]?.[resourceType];
    
    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    // In production, this would be stored in a database
    // For now, we'll just acknowledge the feedback
    res.json({
      success: true,
      message: 'Feedback submitted successfully',
      data: {
        rating,
        comment,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export default router;