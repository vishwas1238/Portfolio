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
//  HERO — TYPING ANIMATION
// ================================
const typingEl = document.getElementById('typing');
if (typingEl) {
    const fullText = typingEl.textContent;
    typingEl.textContent = '';
    let i = 0;
    function typeChar() {
        if (i < fullText.length) {
            typingEl.textContent += fullText.charAt(i);
            i++;
            setTimeout(typeChar, 55);
        }
    }
    typeChar();
}

// ================================
//  HERO — ROLE ROTATOR
// ================================
const roleEl = document.getElementById('role');
if (roleEl) {
    const roles = ['Web Developer 🚀', 'JavaScript Developer 💻', 'Frontend Designer 🎨'];
    let roleIdx = 0;
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
