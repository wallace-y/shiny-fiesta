// Add an event listener to the 'mouseup' event on the document
document.addEventListener('mouseup', function(event) {
  const selectedText = window.getSelection().toString().trim(); // Get the selected text and trim any leading/trailing whitespace
  const selection = window.getSelection();
  if (selection.rangeCount > 0 && selectedText !== '') { // Check if there is a selected range and the selected text is not empty
    const range = selection.getRangeAt(0); // Get the range of the selected text
    const containingElement = range.commonAncestorContainer; // Get the element that contains the selected text

    // Check if the selected text is a valid number
    if (!isNaN(selectedText)) {
      // Perform an action with the selected number
      alert('Selected number: ' + selectedText); // Show an alert with the selected number
      // Replace the line above with your desired action, such as showing a modal, updating a variable, or making an API request
    }
  }
});



