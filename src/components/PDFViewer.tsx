'use client';

import { useState, useEffect } from 'react';

interface PDFViewerProps {
  fileUrl: string;
  title: string;
  onDownload?: () => void;
}

export default function PDFViewer({ fileUrl, title, onDownload }: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [numPages, setNumPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Mock PDF pages for demo (in production, use PDF.js)
  const mockPages = [
    'https://readdy.ai/api/search-image?query=Mathematics%20textbook%20page%20showing%20quadratic%20equation%20formulas%2C%20solved%20examples%2C%20clean%20academic%20layout%20with%20mathematical%20notation%20and%20diagrams&width=800&height=1000&seq=pdf-page-1&orientation=portrait',
    'https://readdy.ai/api/search-image?query=Mathematics%20study%20material%20with%20quadratic%20formula%20derivation%2C%20step%20by%20step%20solutions%2C%20educational%20format%20with%20clear%20mathematical%20expressions&width=800&height=1000&seq=pdf-page-2&orientation=portrait',
    'https://readdy.ai/api/search-image?query=Mathematics%20textbook%20page%20with%20practice%20problems%2C%20quadratic%20equations%20exercises%2C%20clean%20academic%20layout%20with%20problem%20sets&width=800&height=1000&seq=pdf-page-3&orientation=portrait',
    'https://readdy.ai/api/search-image?query=Mathematics%20notes%20showing%20discriminant%20explanation%2C%20nature%20of%20roots%20table%2C%20educational%20content%20with%20formulas%20and%20examples&width=800&height=1000&seq=pdf-page-4&orientation=portrait'
  ];

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setNumPages(mockPages.length);
      setIsLoading(false);
    }, 1000);
  }, []);

  const nextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const zoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 25);
    }
  };

  const zoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 25);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
            <i className="ri-loader-4-line text-2xl text-blue-600 animate-spin"></i>
          </div>
          <p className="text-gray-600">Loading PDF...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={zoomOut}
              disabled={zoom <= 50}
              className="p-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 cursor-pointer"
            >
              <i className="ri-subtract-line"></i>
            </button>
            <span className="text-sm text-gray-600 min-w-[3rem] text-center">{zoom}%</span>
            <button
              onClick={zoomIn}
              disabled={zoom >= 200}
              className="p-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 cursor-pointer"
            >
              <i className="ri-add-line"></i>
            </button>
            {onDownload && (
              <button
                onClick={onDownload}
                className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-download-line mr-1"></i>
                Download
              </button>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage <= 1}
              className="p-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {numPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage >= numPages}
              className="p-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 cursor-pointer"
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              max={numPages}
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= numPages) {
                  setCurrentPage(page);
                }
              }}
              className="w-16 px-2 py-1 text-sm border border-gray-300 rounded text-center"
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-center">
          <div 
            className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
          >
            <img
              src={mockPages[currentPage - 1]}
              alt={`Page ${currentPage} of ${title}`}
              className="max-w-full h-auto"
              style={{ maxWidth: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}