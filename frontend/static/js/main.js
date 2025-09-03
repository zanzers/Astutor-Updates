$(document).ready(function() {
    // Theme Toggle Functionality
    const themeToggle = $('#themeToggle');
    const themeIcon = $('#themeIcon');
    const html = $('html');
    
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.attr('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Theme toggle click handler
    themeToggle.on('click', function() {
        const currentTheme = html.attr('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.attr('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.removeClass('fa-moon').addClass('fa-sun');
        } else {
            themeIcon.removeClass('fa-sun').addClass('fa-moon');
        }
    }
    
    // Flash Message Close Functionality
    $('.flash-close').on('click', function() {
        $(this).closest('.flash-message').fadeOut(300);
    });
    
    // Auto-hide flash messages after 5 seconds
    setTimeout(function() {
        $('.flash-message').fadeOut(300);
    }, 5000);
    
    // Auth Form Toggle (Login/Signup)
    const loginForm = $('#loginForm');
    const signupForm = $('#signupForm');
    const authTitle = $('#authTitle');
    const authSubtitle = $('#authSubtitle');
    const switchText = $('#switchText');
    const switchLink = $('#switchLink');
    
    let isLoginMode = true;
    
    switchLink.on('click', function(e) {
        e.preventDefault();
        
        if (isLoginMode) {
            // Switch to signup mode
            loginForm.hide();
            signupForm.show();
            authTitle.text('Join Astutor');
            authSubtitle.text('Create your account to get started.');
            switchText.html('Already have an account? <a href="#" id="switchLink">Sign in here</a>');
            isLoginMode = false;
        } else {
            // Switch to login mode
            signupForm.hide();
            loginForm.show();
            authTitle.text('Login to Astutor');
            authSubtitle.text('Welcome back! Please sign in to your account.');
            switchText.html('Don\'t have an account? <a href="#" id="switchLink">Sign up here</a>');
            isLoginMode = true;
        }
        
        // Re-bind click event to new switch link
        $('#switchLink').on('click', arguments.callee);
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // Form validation
    $('form').on('submit', function(e) {
        const form = $(this);
        let isValid = true;
        
        // Check required fields
        form.find('input[required]').each(function() {
            const input = $(this);
            if (!input.val().trim()) {
                input.addClass('error');
                isValid = false;
            } else {
                input.removeClass('error');
            }
        });
        
        // Email validation
        const emailInputs = form.find('input[type="email"]');
        emailInputs.each(function() {
            const email = $(this);
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.val() && !emailRegex.test(email.val())) {
                email.addClass('error');
                isValid = false;
            }
        });
        
        // Password validation (minimum 6 characters)
        const passwordInputs = form.find('input[type="password"]');
        passwordInputs.each(function() {
            const password = $(this);
            if (password.val() && password.val().length < 6) {
                password.addClass('error');
                isValid = false;
                showFlashMessage('Password must be at least 6 characters long', 'error');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            showFlashMessage('Please fill in all required fields correctly', 'error');
        }
    });
    
    // Remove error class on input focus
    $('input').on('focus', function() {
        $(this).removeClass('error');
    });
    
    // Dashboard action buttons
    $('.action-btn').on('click', function() {
        const action = $(this).find('span').text();
        showFlashMessage(`${action} feature coming soon!`, 'info');
    });
    
    // Utility function to show flash messages
    function showFlashMessage(message, type) {
        const flashContainer = $('.flash-messages');
        if (flashContainer.length === 0) {
            $('body').append('<div class="flash-messages"></div>');
        }
        
        const flashMessage = $(`
            <div class="flash-message flash-${type}">
                <span>${message}</span>
                <button class="flash-close">&times;</button>
            </div>
        `);
        
        $('.flash-messages').append(flashMessage);
        
        // Bind close event
        flashMessage.find('.flash-close').on('click', function() {
            flashMessage.fadeOut(300);
        });
        
        // Auto-hide after 5 seconds
        setTimeout(function() {
            flashMessage.fadeOut(300);
        }, 5000);
    }
    
    // Add loading states to buttons
    $('button[type="submit"], .btn').on('click', function() {
        const button = $(this);
        const originalText = button.text();
        
        if (button.attr('type') === 'submit') {
            button.prop('disabled', true);
            button.text('Loading...');
            
            // Re-enable after 3 seconds (in case of errors)
            setTimeout(function() {
                button.prop('disabled', false);
                button.text(originalText);
            }, 3000);
        }
    });
    
    // Add hover effects to cards
    $('.dashboard-card, .about-item, .feature-card').hover(
        function() {
            $(this).css('transform', 'translateY(-2px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );
    
    // Initialize tooltips (if needed)
    $('[data-tooltip]').each(function() {
        const element = $(this);
        const tooltip = element.attr('data-tooltip');
        
        element.hover(
            function() {
                $('body').append(`<div class="tooltip">${tooltip}</div>`);
                const tooltipEl = $('.tooltip');
                const offset = element.offset();
                tooltipEl.css({
                    top: offset.top - tooltipEl.outerHeight() - 10,
                    left: offset.left + (element.outerWidth() / 2) - (tooltipEl.outerWidth() / 2)
                });
            },
            function() {
                $('.tooltip').remove();
            }
        );
    });
});

// Add CSS for error states and tooltips
const additionalCSS = `
    .error {
        border-color: var(--error-color) !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .tooltip {
        position: absolute;
        background-color: var(--text-primary);
        color: var(--bg-color);
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
        z-index: 1000;
        pointer-events: none;
    }
    
    .loading {
        opacity: 0.7;
        pointer-events: none;
    }
`;

// Inject additional CSS
$('<style>').text(additionalCSS).appendTo('head');