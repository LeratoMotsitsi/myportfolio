
        // Theme Toggle Functionality
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = document.querySelector('.theme-icon');
        const body = document.body;

        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', currentTheme);
        themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });

        // Project Filter Functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.6s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Mobile Menu Toggle (placeholder for future implementation)
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        mobileMenuBtn.addEventListener('click', () => {
            // Mobile menu functionality can be added here
            console.log('Mobile menu clicked');
        });

        // Download CV functionality
        document.querySelector('a[download]').addEventListener('click', function(e) {
            // In a real implementation, this would trigger the actual download
            // For now, we'll show an alert
            alert('CV download would start here. In production, this would link to the actual PDF file.');
            e.preventDefault();
        });

        // Project link functionality
        document.querySelectorAll('.project-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const linkText = this.textContent;
                alert(`${linkText} would open here. In production, these would link to actual project resources.`);
            });
        });

        // Contact form handling
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                // For demo purposes, we'll show a success message
                // In production with Netlify, this would be handled automatically
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                if (name && email && message) {
                    // Simulate form submission
                    e.preventDefault();
                    alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
                    this.reset();
                }
                // If Netlify forms are configured, remove the e.preventDefault() above
            });
        }

        // Keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });

        // Certificate Filter Functionality
        const certFilterButtons = document.querySelectorAll('.cert-filter-btn');
        const certCards = document.querySelectorAll('.cert-card');

        certFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                certFilterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                certCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.6s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Certificate Modal Functionality
        const certModal = document.getElementById('cert-modal');
        const certModalClose = document.querySelector('.cert-modal-close');
        const certModalOverlay = document.querySelector('.cert-modal-overlay');
        const certModalImage = document.getElementById('cert-modal-image');
        const certPlaceholderLarge = document.getElementById('cert-placeholder-large');

        // Certificate data (in production, this would come from a JSON file or database)
        const certificateData = {
            'alx-data-science': {
                title: 'ALX Data Science Certificate',
                issuer: 'ALX Africa',
                date: '2025–2026',
                status: 'In Progress',
                skills: ['Python', 'Machine Learning', 'Statistics', 'Data Analysis'],
                image: '/assets/certificates/alx-data-science.jpg',
                downloadUrl: '/assets/certificates/alx-data-science.pdf',
                verifyUrl: 'https://alxafrica.com/verify'
            },
            'professional-foundations': {
                title: 'Professional Foundations',
                issuer: 'ALX Africa',
                date: 'January 2025',
                status: 'Completed',
                skills: ['Communication', 'Leadership', 'Problem Solving', 'Professional Skills'],
                image: '/assets/certificates/professional-foundations.jpg',
                downloadUrl: '/assets/certificates/professional-foundations.pdf',
                verifyUrl: 'https://alxafrica.com/verify'
            },
            'data-analytics': {
                title: 'Data Analytics Fundamentals',
                issuer: 'ALX Africa',
                date: 'January 2025',
                status: 'Completed',
                skills: ['SQL', 'Excel', 'Data Visualization', 'Analytics'],
                image: '/assets/certificates/data-analytics.jpg',
                downloadUrl: '/assets/certificates/data-analytics.pdf',
                verifyUrl: 'https://alxafrica.com/verify'
            },
            'python-programming': {
                title: 'Python Programming',
                issuer: 'ALX Africa',
                date: '2025 • 75% Complete',
                status: 'In Progress',
                skills: ['Python', 'pandas', 'numpy', 'Programming'],
                image: '/assets/certificates/python-programming.jpg',
                downloadUrl: null,
                verifyUrl: null
            },
            'machine-learning': {
                title: 'Machine Learning Specialization',
                issuer: 'ALX Africa',
                date: '2026',
                status: 'Planned',
                skills: ['scikit-learn', 'TensorFlow', 'Deep Learning', 'AI'],
                image: null,
                downloadUrl: null,
                verifyUrl: null
            },
            'power-bi': {
                title: 'Microsoft Power BI Data Analyst',
                issuer: 'Microsoft',
                date: '2025',
                status: 'Planned',
                skills: ['Power BI', 'DAX', 'Business Intelligence', 'Data Modeling'],
                image: null,
                downloadUrl: null,
                verifyUrl: null
            }
        };

        // Open certificate modal
        function openCertificateModal(certId) {
            const cert = certificateData[certId];
            if (!cert) return;

            // Update modal content
            document.getElementById('cert-detail-title').textContent = cert.title;
            document.getElementById('cert-detail-issuer').textContent = cert.issuer;
            document.getElementById('cert-detail-date').textContent = cert.date;
            document.getElementById('cert-detail-status').textContent = cert.status;

            // Update skills
            const skillsContainer = document.getElementById('cert-detail-skills');
            skillsContainer.innerHTML = '';
            cert.skills.forEach(skill => {
                const skillBadge = document.createElement('span');
                skillBadge.className = 'skill-badge';
                skillBadge.textContent = skill;
                skillsContainer.appendChild(skillBadge);
            });

            // Handle image display
            if (cert.image) {
                certModalImage.src = cert.image;
                certModalImage.style.display = 'block';
                certPlaceholderLarge.style.display = 'none';
                
                // Handle image load error
                certModalImage.onerror = function() {
                    this.style.display = 'none';
                    certPlaceholderLarge.style.display = 'block';
                };
            } else {
                certModalImage.style.display = 'none';
                certPlaceholderLarge.style.display = 'block';
            }

            // Store current certificate data for actions
            certModal.setAttribute('data-current-cert', certId);

            // Show modal
            certModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close certificate modal
        function closeCertificateModal() {
            certModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Certificate card click handlers
        certCards.forEach(card => {
            if (card.classList.contains('clickable')) {
                card.addEventListener('click', () => {
                    const certId = card.getAttribute('data-cert');
                    openCertificateModal(certId);
                });
            }
        });

        // Modal close handlers
        certModalClose.addEventListener('click', closeCertificateModal);
        certModalOverlay.addEventListener('click', closeCertificateModal);

        // Keyboard navigation for modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && certModal.classList.contains('active')) {
                closeCertificateModal();
            }
        });

        // Certificate action functions
        window.downloadCertificate = function() {
            const certId = certModal.getAttribute('data-current-cert');
            const cert = certificateData[certId];
            
            if (cert && cert.downloadUrl) {
                // In production, this would trigger actual download
                window.open(cert.downloadUrl, '_blank');
            } else {
                alert('Certificate download not available yet. This will be enabled once the certificate is completed and uploaded.');
            }
        };

        window.verifyCertificate = function() {
            const certId = certModal.getAttribute('data-current-cert');
            const cert = certificateData[certId];
            
            if (cert && cert.verifyUrl) {
                // In production, this would open the verification page
                window.open(cert.verifyUrl, '_blank');
            } else {
                alert('Certificate verification not available yet. This will be enabled once the certificate is completed.');
            }
        };

        // Performance optimization: Lazy load project thumbnails
        const projectThumbnails = document.querySelectorAll('.project-thumbnail');
        const thumbnailObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    thumbnailObserver.unobserve(entry.target);
                }
            });
        });

        projectThumbnails.forEach(thumbnail => {
            thumbnail.style.opacity = '0.8';
            thumbnailObserver.observe(thumbnail);
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9797661173b0f48a',t:'MTc1NjkyNTA2OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();