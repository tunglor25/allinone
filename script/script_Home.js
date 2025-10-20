        // Add interactive functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Feature cards hover effect
            const featureCards = document.querySelectorAll('.feature-card-custom');
            featureCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });

                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // Button click handlers
            const exploreBtn = document.querySelector('.btn-primary-custom');
            const contactBtn = document.querySelector('.btn-outline-custom');

            exploreBtn.addEventListener('click', function() {
                // Scroll to features section
                document.querySelector('.features-section').scrollIntoView({
                    behavior: 'smooth'
                });
            });

            contactBtn.addEventListener('click', function() {
                // Add contact functionality
                alert('Liên hệ với chúng tôi: support@thrustnet.com');
            });
        });