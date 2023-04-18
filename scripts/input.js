let earningsElement = document.getElementById("earnings")
let frequencyElement = document.getElementById("frequency")

earningsElement.addEventListener("change",inputFunction);
frequencyElement.addEventListener("change",inputFunction)


function inputFunction() {
  // get value of the input fields
  let earnings = earningsElement.value;
  let frequency = frequencyElement.value
  console.log(earnings);
  console.log(frequency);
  // assign variables to the local storage
  localStorage.setItem("earnings",earnings)
  localStorage.setItem("frequency",frequency)
}
