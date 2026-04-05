// ================================
//  ACTIVE NAV LINK HIGHLIGHT
// ================================
(function () {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
})();

// ================================
//  HEADER
// ================================
const headerDiv = document.getElementById('header');
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
    </header>`;

    // Re-run active link highlight after header is injected
    const page = location.pathname.split('/').pop() || 'index.html';
    headerDiv.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === page) link.classList.add('active');
    });
}

// ================================
//  ABOUT
// ================================
const aboutDiv = document.getElementById('about');
if (aboutDiv) {
    aboutDiv.innerHTML = `
    <section>
        <span class="section-label">Who I Am</span>
        <h2>About Me</h2>
        <div class="divider"></div>
        <div class="about-grid">
            <div class="about-text">
                <p>I am a passionate <strong>web developer</strong> skilled in HTML, CSS, JavaScript, PHP and Python. I love transforming ideas into elegant, functional web experiences.</p>
                <p>I have worked on multiple projects like <strong>Health Care Management</strong>, <strong>GoalSphere</strong>, <strong>Cyber Crime Awareness</strong>, and <strong>Gym Management</strong>, where I applied my knowledge to solve real-world problems.</p>
                <p>I am always eager to learn new technologies and improve my skills. My goal is to become a professional <strong>full-stack developer</strong> and work on innovative projects that make a real impact.</p>
            </div>
            <div class="about-stats">
                <div class="stat-card">
                    <div class="stat-number">4+</div>
                    <div class="stat-label">Projects Built</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">5</div>
                    <div class="stat-label">Languages</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">∞</div>
                    <div class="stat-label">Curiosity</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">1</div>
                    <div class="stat-label">Goal: Full‑Stack</div>
                </div>
            </div>
        </div>
    </section>`;
}

// ================================
//  SKILLS
// ================================
const skillsDiv = document.getElementById('skills');
if (skillsDiv) {
    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Python', level: 70 },
    ];

    skillsDiv.innerHTML = `
    <section>
        <span class="section-label">What I Know</span>
        <h2>Skills</h2>
        <div class="divider"></div>
        <div class="skills-grid">
            ${skills.map(s => `
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">${s.name}</span>
                    <span class="skill-percent">${s.level}%</span>
                </div>
                <div class="bar">
                    <div class="progress" style="width:${s.level}%"></div>
                </div>
            </div>`).join('')}
        </div>
    </section>`;
}

// ================================
//  PROJECTS
// ================================
const projectDiv = document.getElementById('projects');
if (projectDiv) {
    const projects = [
        {
            name: 'Health Care Management',
            icon: '🏥',
            desc: 'A system to manage patient records, appointments, and healthcare workflows efficiently.',
            tag: 'Web App'
        },
        {
            name: 'GoalSphere',
            icon: '🎯',
            desc: 'A goal-tracking platform that helps users set, monitor and achieve personal milestones.',
            tag: 'Productivity'
        },
        {
            name: 'Cyber Crime Awareness',
            icon: '🛡️',
            desc: 'An educational portal to spread awareness about cyber threats and online safety practices.',
            tag: 'Education'
        },
        {
            name: 'Gym Management',
            icon: '💪',
            desc: 'A management system for gym memberships, schedules, and trainer assignments.',
            tag: 'Management'
        },
    ];

    projectDiv.innerHTML = `
    <section>
        <span class="section-label">What I've Built</span>
        <h2>Projects</h2>
        <div class="divider"></div>
        <div class="projects-grid">
            ${projects.map(p => `
            <div class="project-card">
                <span class="project-icon">${p.icon}</span>
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <span class="project-tag">${p.tag}</span>
            </div>`).join('')}
        </div>
    </section>`;
}

// ================================
//  CONTACT
// ================================
const contactDiv = document.getElementById('contact');
if (contactDiv) {
    contactDiv.innerHTML = `
    <section>
        <span class="section-label">Get In Touch</span>
        <h2>Contact</h2>
        <div class="divider"></div>
        <div class="contact-wrapper">
            <div class="contact-info">
                <h3>Let's work together.</h3>
                <p>Have a project in mind or just want to say hello? I'm always open to new opportunities and conversations.</p>
                <div class="contact-links">
                    <a class="contact-link" href="tel:9172201238">
                        <span class="contact-link-icon">📞</span>
                        9172201238
                    </a>
                    <a class="contact-link" href="mailto:adverlyze@gmail.com">
                        <span class="contact-link-icon">✉️</span>
                        adverlyze@gmail.com
                    </a>
                    <a class="contact-link" href="https://wa.me/919172201238" target="_blank">
                        <span class="contact-link-icon">💬</span>
                        WhatsApp
                    </a>
                </div>
            </div>
            <form class="contact-form" onsubmit="return sendEmail()">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" placeholder="e.g. Vishwas Saroj">
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder="you@example.com">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" placeholder="Tell me about your project…"></textarea>
                </div>
                <button class="btn btn-primary" type="submit">Send Message →</button>
            </form>
        </div>
    </section>`;
}

// ================================
//  EMAIL SEND
// ================================
function sendEmail() {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }

    emailjs.send(
        'service_ke1t2qp',
        'template_lhgut87',
        { name, email, message },
        'QkD30p5ldFhuC72n6'
    )
    .then(() => alert('Message sent ✅'))
    .catch(err => {
        console.error('EmailJS error:', err);
        alert('Failed to send ❌ Please try again.');
    });

    return false;
}

// ================================
//  HERO
// ================================
const heroDiv = document.getElementById('hero');
if (heroDiv) {
    heroDiv.innerHTML = `
    <section class="hero">
        <div class="hero-label">Portfolio</div>
        <h2 id="typing"></h2>
        <p id="role"></p>
        <div class="hero-cta">
            <a href="projects.html" class="btn btn-primary">View Projects</a>
            <a href="contact.html" class="btn btn-outline">Get In Touch</a>
        </div>
    </section>`;

    // Typing animation
    const fullText = "Hello, I'm Vishwas Saroj";
    let i = 0;
    const typingEl = document.getElementById('typing');

    function typeChar() {
        if (i < fullText.length) {
            typingEl.textContent += fullText.charAt(i);
            i++;
            setTimeout(typeChar, 55);
        }
    }
    typeChar();

    // Role rotator
    const roles = ['Web Developer 🚀', 'JavaScript Developer 💻', 'Frontend Designer 🎨'];
    let roleIdx = 0;
    const roleEl = document.getElementById('role');

    function updateRole() {
        roleEl.style.opacity = '0';
        setTimeout(() => {
            roleEl.textContent = roles[roleIdx];
            roleEl.style.opacity = '1';
            roleEl.style.transition = 'opacity 0.5s ease';
            roleIdx = (roleIdx + 1) % roles.length;
        }, 300);
    }

    updateRole();
    setInterval(updateRole, 2500);
}
