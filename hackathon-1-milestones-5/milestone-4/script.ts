// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Handle forms submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value

    //Generate the resume content dynamically
    const resumeHtml = `
    <h2><strong>Editable Resume</strong></h2>
    <h3>Personel Information</h3>
    <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
    <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
    <p><strong>Phone:</strong><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    
    <h3>Work Experience</h3>
    <p contenteditable="true">${experience}</p>
    `;

    // Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml
    }else {
        console.error("The resume display element is missing.")
    }
});