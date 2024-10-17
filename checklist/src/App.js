import React, { useState, useEffect } from 'react';
import { generateMockPDF } from './services/pdf/mockPdf.js';

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    // Generate the PDF URL and set it to state
    const url = generateMockPDF();
    setPdfUrl(url);

    // Clean up the Blob URL when the component unmounts
    return () => URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="App">
      <h1>PDF Viewer</h1>
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          title="PDF Viewer"
        ></iframe>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}

export default App;
