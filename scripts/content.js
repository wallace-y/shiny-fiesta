function daysAndHoursToEarn(earnings, timePeriod, price) {
    if (earnings <= 0) {
      return "Earnings must be greater than zero.";
    }
    if (price <= 0) {
      return "Price must be greater than zero.";
    }
    // Convert earnings to hourly rate based on timePeriod
    switch (timePeriod) {
      case "hourly":
        // no change needed
        break;
      case "weekly":
        earnings = Math.floor(earnings / 40); // assuming 40h work week;
        break;
      case "monthly":
        earnings = Math.floor((earnings * 12) / 52 / 40); // convert to annual, then weekly, then hourly;
        break;
      case "yearly":
        earnings = Math.floor(earnings / 52 / 40); // convert to weekly then hourly
        break;
      default:
        throw new Error(
          "Invalid timePeriod. Please use 'hourly', 'weekly', 'monthly', or 'yearly'."
        );
    }

    // Calculate the number of days and hours needed to earn the price
    const days = Math.floor(price / earnings / 8);
    const remainder = price / earnings / 8 - days;
    const hours = Math.floor(remainder * 8);

    return {days, hours }

}

// Add an event listener to the 'mouseup' event on the document
document.addEventListener("mouseup", function (event) {
  const selectedText = window.getSelection().toString().trim(); // Get the selected text and trim any leading/trailing whitespace
  const selection = window.getSelection();
  if (selection.rangeCount > 0 && selectedText !== "") {
    // Check if there is a selected range and the selected text is not empty
    const range = selection.getRangeAt(0); // Get the range of the selected text
    const containingElement = range.commonAncestorContainer; // Get the element that contains the selected text

    // Check if the selected text is a valid number
    if (!isNaN(selectedText)) {
      // Call the daysAndHoursToEarn() function and handle the resolved value with a Promise
      daysAndHoursToEarn(10, "hourly", Number(selectedText))
          // Display the result in an alert with the resolved value
          alert(
            "Selected number: " +
              selectedText +
              "\nDays: " +
              days +
              "\nHours: " +
              hours
          );
    }
  }
});
