document.getElementById("downloadButton").addEventListener("click", function() {
    // Create an anchor element
    var downloadLink = document.createElement("a");
    // Set the file URL
    downloadLink.href = "C:\Users\suvra\OneDrive\Desktop\gym\basic_chart.pdf"; // Replace "path/to/your/file.ext" with the actual file path
    // Set the file name
    downloadLink.download = "basic_chart.pdf"; // Replace "filename.ext" with the desired file name
    // Append the anchor element to the body
    document.body.appendChild(downloadLink);
    // Click the anchor element programmatically
    downloadLink.click();
    // Clean up
    document.body.removeChild(downloadLink);
});
  