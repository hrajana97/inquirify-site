// Scroll to Sign-Up Section
function scrollToSignup() {
    document.getElementById('signup-widget').scrollIntoView({ behavior: 'smooth' });
}

// Pricing Slider Interaction
document.getElementById('pricing-slider').addEventListener('input', function() {
    const value = this.value;
    const details = document.getElementById('pricing-details');
    if (value == 1) {
        details.innerText = "Individual Plan: $20-$40/month - Access to personalized simulations, real-time feedback, and strategy one-pagers.";
    } else if (value == 2) {
        details.innerText = "SME Plan: $150-$300/month - Team collaboration tools, role-play customizations, and feedback analytics.";
    } else if (value == 3) {
        details.innerText = "Enterprise Plan: Custom Pricing - Unlimited access, dedicated success manager, and advanced team metrics.";
    }
});

// Contact Form Submission Simulation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent actual form submission
    alert("Form submitted successfully! Thank you for reaching out to us.");
});
