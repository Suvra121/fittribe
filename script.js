document.getElementById("downloadButton").addEventListener("click", function() {
    // Create an anchor element
    var downloadLink = document.createElement("a");
    // Set the file URL
    downloadLink.href = "basic_chart.pdf"; // Replace "path/to/your/file.ext" with the actual file path
    // Set the file name
    downloadLink.download = "basic_chart.pdf"; // Replace "filename.ext" with the desired file name
    // Append the anchor element to the body
    document.body.appendChild(downloadLink);
    // Click the anchor element programmatically
    downloadLink.click();
    // Clean up
    document.body.removeChild(downloadLink);
});
//navbar
let menulist= document.getElementById('menulist')
menulist.style.maxHeight="0px";

function togglemenu(){
  if(menulist.style.maxHeight=="0px")
  {
    menulist.style.maxHeight="148px";
    
  }
  else
  {
    menulist.style.maxHeight="0px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const formData = new FormData(form);

    // Create an object from form data
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Send form data to the server
    fetch("send_email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert("Message sent successfully!");
        form.reset(); // Reset form fields after successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  });
});
  