// Takes password from #displayBox div, converts it into a temporary text input element, selects it, copies it to clipboard and then deletes the input element
function copyDisplayBox() {
  var copyText = document.querySelector("#displayBox").innerText;
  var dummyInput = document.createElement("input");
  dummyInput.type = "text";
  dummyInput.value = copyText;
  document.body.appendChild(dummyInput);
  dummyInput.select();
  document.execCommand("copy");
  document.body.removeChild(dummyInput);
}

// Add event for user clicking "Copy to Clipboard" button
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyDisplayBox);
