import React, { useState } from 'react';
import { Download, ExternalLink, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';
import { Button } from './ui/button-simple';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card-simple';

interface PDFViewerProps {
  fileUrl: string;
  fileName: string;
  fileSize?: string;
  onDownload?: () => void;
  onPrint?: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ 
  fileUrl, 
  fileName, 
  fileSize, 
  onDownload, 
  onPrint 
}) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleReset = () => {
    setScale(1);
    setRotation(0);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    } else {
      // Default download behavior
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      link.click();
    }
  };

  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      // Default print behavior
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-gray-900' : 'w-full'}`}>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between border-b">
          <div className="flex items-center space-x-4">
            <CardTitle className="text-lg">{fileName}</CardTitle>
            {fileSize && (
              <span className="text-sm text-gray-500 dark:text-gray-400">{fileSize}</span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomOut}
              disabled={scale <= 0.5}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            
            <span className="text-sm font-medium min-w-[60px] text-center">
              {Math.round(scale * 100)}%
            </span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomIn}
              disabled={scale >= 3}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleRotate}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
            >
              Reset
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleFullscreen}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            
            <Button
              variant="default"
              size="sm"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 h-full">
          <div className="relative h-full overflow-auto bg-gray-100 dark:bg-gray-800">
            <div 
              className="mx-auto transition-transform duration-200"
              style={{
                transform: `scale(${scale}) rotate(${rotation}deg)`,
                transformOrigin: 'center top'
              }}
            >
              {/* PDF Content Placeholder */}
              <div className="bg-white dark:bg-gray-900 min-h-screen p-8 shadow-lg">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {fileName}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      PDF content would be displayed here
                    </p>
                  </div>
                  
                  {/* Sample PDF content structure */}
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                      <p className="text-gray-500 dark:text-gray-400">
                        PDF Viewer Integration
                      </p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                        This is a placeholder for the actual PDF content.
                        In a real implementation, you would integrate with a PDF viewer library
                        like react-pdf, PDF.js, or similar.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Document Features
                        </h3>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Zoom controls (50% - 300%)</li>
                          <li>• Rotation support</li>
                          <li>• Fullscreen mode</li>
                          <li>• Print functionality</li>
                          <li>• Download capability</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Integration Options
                        </h3>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• PDF.js for client-side rendering</li>
                          <li>• react-pdf for React integration</li>
                          <li>• Google Docs Viewer</li>
                          <li>• Microsoft Office Online</li>
                          <li>• Custom PDF service</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PDFViewer;