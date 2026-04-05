// HEADER SAFE LOAD
let headerDiv = document.getElementById("header");
if (headerDiv) {
    headerDiv.innerHTML = `
    <header>
        <h1>Stranger</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="skills.html">Skills</a>
            <a href="projects.html">Projects</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>
    `;
}

// ABOUT
let aboutDiv = document.getElementById("about");
if (aboutDiv) {
    aboutDiv.innerHTML = `
    <section>
        <h2>About Me</h2>
        <p>I am a passionate web developer skilled in HTML, CSS, JavaScript, PHP and Python.</p>
    </section>
    `;
}


// SKILLS
let skillsDiv = document.getElementById("skills");
if (skillsDiv) {
    skillsDiv.innerHTML = `
    <section>
        <h2>Skills</h2>

        ${["HTML","CSS","JavaScript","PHP","Python"].map((skill,i)=>`
        <div class="skill">
            <p>${skill}</p>
            <div class="bar">
                <div class="progress" style="width:${90-i*5}%"></div>
            </div>
        </div>
        `).join("")}

    </section>
    `;
}

// PROJECTS
let projectDiv = document.getElementById("projects");
if (projectDiv) {
    projectDiv.innerHTML = `
    <section>
        <h2>Projects</h2>

        ${[
            "Health Care Management",
            "GoalSphere",
            "Cyber Crime Awareness",
            "Gym Management"
        ].map(p=>`
        <div class="project-card">
            <h3>${p}</h3>
        </div>
        `).join("")}

    </section>
    `;
}

// CONTACT
let contactDiv = document.getElementById("contact");
if (contactDiv) {
    contactDiv.innerHTML = `
    <section>
        <h2>Contact</h2>

        <p>📞 9172201238</p>
        <p>📧 adverlyze@gmail.com</p>

        <form onsubmit="return sendEmail()">
            <input type="text" id="name" placeholder="Your Name">
            <input type="email" id="email" placeholder="Your Email">
            <textarea id="message" placeholder="Message"></textarea>
            <button class="btn" type="submit">Send</button>
        </form>
    </section>
    `;
}

// EMAIL SEND FUNCTION 🔥
function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Fill all fields!");
        return false;
    }

    emailjs.send(
        "service_ke1t2qp",
        "template_lhgut87",
        {
            name: name,
            email: email,
            message: message
        },
        "QkD30p5ldFhuC72n6"   // 🔥 yaha bhi daalo
    )
    .then(() => alert("Message Sent ✅"))
    .catch((err) => {
        console.log("ERROR:", err);
        alert("Failed ❌");
    });

    return false;
}

// HERO SAFE LOAD
let heroDiv = document.getElementById("hero");
if (heroDiv) {
    heroDiv.innerHTML = `
    <section class="hero">
        <h2 id="typing"></h2>
        <p id="role"></p>
    </section>
    `;

    // typing
    let text = "Hello, I'm Stranger ";
    let i = 0;

    function typing() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }
    typing();

    // roles
    let roles = ["Web Developer 🚀", "JavaScript Developer 💻", "Frontend Designer 🎨"];
    let index = 0;

    setInterval(() => {
        document.getElementById("role").innerText = roles[index];
        index = (index + 1) % roles.length;
    }, 2000);
}