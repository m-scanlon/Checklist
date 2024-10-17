import jsPDF from 'jspdf';

export function generateMockPDF() {
  const doc = new jsPDF();

  // Set title font and add title
  doc.setFontSize(22);
  doc.text('Project Checklist', 20, 30);

  // Add subtitle
  doc.setFontSize(16);
  doc.text('Cover Page', 20, 40);

  // Add date and other information
  doc.setFontSize(12);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);

  // Add a checklist
  const checklistItems = [
    'Inspect site',
    'Review safety protocols',
    'Complete material inventory',
    'Verify equipment functionality',
    'Brief team on tasks'
  ];

  doc.setFontSize(14);
  doc.text('Checklist:', 20, 70);

  let yPosition = 80;
  checklistItems.forEach((item, index) => {
    doc.rect(20, yPosition, 5, 5);  // Draw checkbox
    doc.text(`${index + 1}. ${item}`, 30, yPosition + 5);
    yPosition += 10;
  });

  // Generate a Blob URL for the PDF
  const pdfBlob = doc.output('blob');
  const pdfBlobUrl = URL.createObjectURL(pdfBlob);
  
  return pdfBlobUrl;
}
