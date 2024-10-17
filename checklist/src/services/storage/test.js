const dbRequest = indexedDB.open('PDFFormDatabase', 1);

dbRequest.onupgradeneeded = function(event) {
  // This runs if the database does not exist or if the version is increased
  const db = event.target.result;
  
  // Create an object store for the schema with a key path or auto-incremented key
  if (!db.objectStoreNames.contains('pdfSchemas')) {
    const schemaStore = db.createObjectStore('pdfSchemas', { keyPath: 'id', autoIncrement: true });
    console.log("Database and object store created.");
  }
};

dbRequest.onerror = function(event) {
  console.error("Error creating or opening the database:", event.target.error);
};

dbRequest.onsuccess = function(event) {
  const db = event.target.result;
  console.log("Database opened successfully.");
  // Continue working with the database using the `db` object
};


const pdfSchema = {
    title: "Sample Checklist PDF",
    fields: [
      { id: "name", label: "Name", type: "text", position: { x: 50, y: 100 } },
      { id: "date", label: "Date", type: "date", position: { x: 50, y: 150 } },
      { id: "checkbox1", label: "Lights Off", type: "checkbox", "photos": [], "notes": [], position: { x: 50, y: 200 } },
      { id: "signature1", label: "Signature", type: "signature", position: { x: 50, y: 250 } }
    ]
  };

alert("This is a test alert to check if console.log() is restricted.");


function addNoteToCheckboxField(id, noteText) {
    // Find the checkbox field with the matching id
    const checkboxField = pdfSchema.find(field => field.id === id);
  
    // If the checkbox field is found, add the note
    if (checkboxField) {
      checkboxField.notes.push({
        text: noteText,
      });
      console.log(`Note added to ${id}:`, checkboxField.notes);
    } else {
      console.error(`Checkbox field with id ${id} not found.`);
    }
  }
  
