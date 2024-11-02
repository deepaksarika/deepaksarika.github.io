function showProjectDetails(project) {
    alert("More details on project: " + project);
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});
