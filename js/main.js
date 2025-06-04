const CONFIG = {
    slideInterval: 5000,
    animationDelay: 100,
    scrollThreshold: 300,
    swipeThreshold: 50,
    debounceDelay: 10,
    resizeDelay: 250,
    formDelay: 2000,
    messageDelay: 5000,
    counterDuration: 2000,
    counterStepTime: 20
};

const SELECTORS = {
    langBtn: '.lang-btn',
    navToggle: '.nav-toggle',
    navMenu: '.nav-menu',
    slide: '.slide',
    indicator: '.indicator',
    hero: '.hero',
    header: '#header',
    navbar: '.navbar',
    backToTop: '#back-to-top',
    contactForm: '#contactForm',
    filterBtn: '.filter-btn',
    blogCard: '.blog-card',
    searchInput: '.search-box input',
    searchBtn: '.search-box button',
    newsletterForm: '.newsletter-form',
    statBox: '.stat-box',
    animatedEls: '.fade-in, .slide-in-left, .slide-in-right, .zoom-in',
    scrollRevealEls: '.info-card, .stat-card, .app-card, .partner-card, .testimonial-card, .partners-logo',
    lazyImages: 'img[data-src]',
    focusableEls: 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    parallaxEls: '.parallax',
    slideBg: '.slide-bg'
};

const state = {
    currentSlide: 0,
    currentLang: localStorage.getItem('language') || 'vi'
};

const utils = {
    debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    },
    
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        error.style.cssText = 'color:red;font-size:0.85rem;margin-top:5px';
        
        input.parentElement.appendChild(error);
        input.style.borderColor = 'red';
        
        input.addEventListener('input', () => {
            error.remove();
            input.style.borderColor = '';
        }, { once: true });
    },
    
    showMessage(message, type) {
        const existing = document.querySelector('.form-message');
        if (existing) existing.remove();
        
        const el = document.createElement('div');
        el.className = `form-message ${type}`;
        el.textContent = message;
        el.style.cssText = `
            padding:15px;border-radius:10px;margin-top:20px;font-weight:500;animation:fadeInUp 0.5s ease;
            ${type === 'success' 
                ? 'background:#d4edda;color:#155724;border:1px solid #c3e6cb' 
                : 'background:#f8d7da;color:#721c24;border:1px solid #f5c6cb'
            }
        `;
        
        const form = document.querySelector(SELECTORS.contactForm);
        if (form) {
            form.appendChild(el);
            setTimeout(() => el.remove(), CONFIG.messageDelay);
        }
    },
    
    animateCounter(element) {
        const target = parseInt(element.textContent);
        let current = 0;
        const steps = CONFIG.counterDuration / CONFIG.counterStepTime;
        const increment = target / steps;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, CONFIG.counterStepTime);
    }
};

const modules = {
    language: {
        init() {
            const buttons = document.querySelectorAll(SELECTORS.langBtn);
            this.applyTranslations(state.currentLang);
            
            buttons.forEach(btn => {
                if (btn.dataset.lang === state.currentLang) {
                    btn.classList.add('active');
                }
                
                btn.addEventListener('click', () => {
                    const lang = btn.dataset.lang;
                    buttons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.applyTranslations(lang);
                    localStorage.setItem('language', lang);
                    state.currentLang = lang;
                });
            });
        },
        
        applyTranslations(lang) {
            if (typeof applyTranslations === 'function') {
                applyTranslations(lang);
            }
        }
    },
    
    animations: {
        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            document.querySelectorAll(SELECTORS.animatedEls).forEach(el => {
                observer.observe(el);
            });
            
            this.initCounters();
        },
        
        initCounters() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                        const counter = entry.target.querySelector('h3');
                        if (counter) {
                            utils.animateCounter(counter);
                            entry.target.classList.add('animated');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            document.querySelectorAll(SELECTORS.statBox).forEach(el => {
                observer.observe(el);
            });
        }
    },
    
    slider: {
        init() {
            const slides = document.querySelectorAll(SELECTORS.slide);
            const indicators = document.querySelectorAll(SELECTORS.indicator);
            
            if (!slides.length) return;
            
            setInterval(() => this.next(), CONFIG.slideInterval);
            
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goTo(index));
            });
            
            this.initTouch();
            this.initKeyboard();
        },
        
        initTouch() {
            const hero = document.querySelector(SELECTORS.hero);
            if (!hero) return;
            
            let startX = 0;
            
            hero.addEventListener('touchstart', e => {
                startX = e.touches[0].clientX;
            });
            
            hero.addEventListener('touchend', e => {
                const diff = startX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > CONFIG.swipeThreshold) {
                    diff > 0 ? this.next() : this.prev();
                }
            });
        },
        
        initKeyboard() {
            document.addEventListener('keydown', e => {
                if (e.key === 'ArrowLeft') this.prev();
                else if (e.key === 'ArrowRight') this.next();
            });
        },
        
        next() {
            const slides = document.querySelectorAll(SELECTORS.slide);
            state.currentSlide = (state.currentSlide + 1) % slides.length;
            this.update();
        },
        
        prev() {
            const slides = document.querySelectorAll(SELECTORS.slide);
            state.currentSlide = state.currentSlide === 0 ? slides.length - 1 : state.currentSlide - 1;
            this.update();
        },
        
        goTo(index) {
            state.currentSlide = index;
            this.update();
        },
        
        update() {
            document.querySelectorAll(SELECTORS.slide).forEach((slide, i) => {
                slide.classList.toggle('active', i === state.currentSlide);
            });
            
            document.querySelectorAll(SELECTORS.indicator).forEach((indicator, i) => {
                indicator.classList.toggle('active', i === state.currentSlide);
            });
        }
    },
    
    navigation: {
        init() {
            const toggle = document.querySelector(SELECTORS.navToggle);
            const menu = document.querySelector(SELECTORS.navMenu);
            
            if (!toggle || !menu) return;
            
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
                toggle.classList.toggle('active');
            });
            
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active');
                    toggle.classList.remove('active');
                });
            });
            
            document.addEventListener('click', e => {
                if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                    menu.classList.remove('active');
                    toggle.classList.remove('active');
                }
            });
        }
    },
    
    filters: {
        init() {
            const filterBtns = document.querySelectorAll(SELECTORS.filterBtn);
            const blogCards = document.querySelectorAll(SELECTORS.blogCard);
            const searchInput = document.querySelector(SELECTORS.searchInput);
            const searchBtn = document.querySelector(SELECTORS.searchBtn);
            
            if (filterBtns.length && blogCards.length) {
                filterBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        filterBtns.forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        
                        const filter = btn.dataset.filter;
                        blogCards.forEach(card => {
                            card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
                        });
                    });
                });
            }
            
            if (searchInput && searchBtn && blogCards.length) {
                const search = () => this.performSearch(searchInput, blogCards, filterBtns);
                searchBtn.addEventListener('click', search);
                searchInput.addEventListener('keyup', e => {
                    if (e.key === 'Enter') search();
                });
            }
        },
        
        performSearch(input, cards, filterBtns) {
            const term = input.value.toLowerCase().trim();
            
            cards.forEach(card => {
                if (term) {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const content = card.querySelector('p').textContent.toLowerCase();
                    card.style.display = (title.includes(term) || content.includes(term)) ? 'block' : 'none';
                } else {
                    card.style.display = 'block';
                }
            });
            
            if (term) {
                filterBtns.forEach(btn => btn.classList.remove('active'));
                const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
                if (allBtn) allBtn.classList.add('active');
            }
        }
    },
    
    forms: {
        init() {
            this.initContactForm();
            this.initNewsletterForm();
        },
        
        initContactForm() {
            const form = document.querySelector('.contact-form form') || document.querySelector(SELECTORS.contactForm);
            if (!form) return;
            
            form.addEventListener('submit', e => {
                e.preventDefault();
                
                const fields = {
                    name: form.querySelector('#name'),
                    email: form.querySelector('#email'),
                    message: form.querySelector('#message')
                };
                
                document.querySelectorAll('.error-message').forEach(el => el.remove());
                
                let isValid = true;
                
                if (fields.name && !fields.name.value.trim()) {
                    utils.showError(fields.name, 'Vui lòng nhập họ và tên');
                    isValid = false;
                }
                
                if (fields.email && (!fields.email.value.trim() || !utils.isValidEmail(fields.email.value))) {
                    utils.showError(fields.email, 'Vui lòng nhập email hợp lệ');
                    isValid = false;
                }
                
                if (fields.message && !fields.message.value.trim()) {
                    utils.showError(fields.message, 'Vui lòng nhập nội dung tin nhắn');
                    isValid = false;
                }
                
                if (isValid) {
                    const btn = form.querySelector('button[type="submit"]');
                    if (btn) {
                        const originalText = btn.textContent;
                        btn.disabled = true;
                        btn.textContent = 'Đang gửi...';
                        
                        setTimeout(() => {
                            btn.textContent = 'Đã gửi thành công!';
                            form.reset();
                            utils.showMessage('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.', 'success');
                            
                            setTimeout(() => {
                                btn.disabled = false;
                                btn.textContent = originalText;
                            }, CONFIG.formDelay);
                        }, 1500);
                    }
                }
            });
        },
        
        initNewsletterForm() {
            const form = document.querySelector(SELECTORS.newsletterForm);
            if (!form) return;
            
            form.addEventListener('submit', e => {
                e.preventDefault();
                
                const input = form.querySelector('input');
                const btn = form.querySelector('button');
                
                if (input.value.trim()) {
                    const originalText = btn.textContent;
                    btn.disabled = true;
                    btn.textContent = 'Đang xử lý...';
                    
                    setTimeout(() => {
                        input.value = '';
                        btn.textContent = 'Đã đăng ký!';
                        
                        setTimeout(() => {
                            btn.disabled = false;
                            btn.textContent = originalText;
                        }, CONFIG.formDelay);
                    }, 1500);
                }
            });
        }
    },
    
    scroll: {
        init() {
            this.initSmoothScrolling();
            this.initScrollAnimations();
            this.initParallax();
            
            const backToTop = document.querySelector(SELECTORS.backToTop);
            if (backToTop) {
                backToTop.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
            
            window.addEventListener('scroll', () => {
                this.handleHeader();
                this.handleBackToTop();
            });
        },
        
        handleHeader() {
            const header = document.querySelector(SELECTORS.header);
            const navbar = document.querySelector(SELECTORS.navbar);
            const scrolled = window.scrollY;
            
            if (header) {
                header.classList.toggle('scrolled', scrolled > 10);
            }
            
            if (navbar) {
                navbar.style.background = scrolled > 50 ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)';
            }
        },
        
        handleBackToTop() {
            const btn = document.querySelector(SELECTORS.backToTop);
            if (btn) {
                btn.classList.toggle('show', window.scrollY > CONFIG.scrollThreshold);
            }
        },
        
        initSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', e => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    
                    if (target) {
                        const navHeight = document.querySelector(SELECTORS.navbar)?.offsetHeight || 0;
                        const position = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                        
                        window.scrollTo({ top: position, behavior: 'smooth' });
                    }
                });
            });
        },
        
        initScrollAnimations() {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            
            document.querySelectorAll(SELECTORS.scrollRevealEls).forEach((el, i) => {
                el.classList.add('scroll-reveal');
                el.style.transitionDelay = `${i * CONFIG.animationDelay}ms`;
                observer.observe(el);
            });
        },
        
        initParallax() {
            document.querySelectorAll(SELECTORS.slideBg).forEach(bg => {
                bg.classList.add('parallax');
                bg.dataset.speed = '0.3';
            });
            
            const handler = utils.debounce(() => {
                const scrolled = window.pageYOffset;
                document.querySelectorAll(SELECTORS.parallaxEls).forEach(el => {
                    const speed = el.dataset.speed || 0.5;
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
            }, CONFIG.debounceDelay);
            
            window.addEventListener('scroll', handler);
        }
    },
    
    lazyLoad: {
        init() {
            const images = document.querySelectorAll(SELECTORS.lazyImages);
            if (!images.length) return;
            
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        obs.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => observer.observe(img));
        }
    },
    
    accessibility: {
        init() {
            this.manageFocus();
            this.checkReducedMotion();
        },
        
        manageFocus() {
            document.querySelectorAll(SELECTORS.focusableEls).forEach(el => {
                el.addEventListener('focus', () => {
                    el.style.outline = '2px solid #667eea';
                    el.style.outlineOffset = '2px';
                });
                
                el.addEventListener('blur', () => {
                    el.style.outline = '';
                    el.style.outlineOffset = '';
                });
            });
        },
        
        checkReducedMotion() {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.querySelectorAll('*').forEach(el => {
                    el.style.animation = 'none';
                    el.style.transition = 'none';
                });
            }
        }
    },
    
    swiper: {
        init() {
            if (typeof Swiper === 'undefined') return;
            
            const container = document.querySelector('.products-container');
            if (!container) return;
            
            new Swiper('.products-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: { el: '.swiper-pagination', clickable: true },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                autoplay: { delay: 3000, disableOnInteraction: false },
                breakpoints: {
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 }
                }
            });
        }
    }
};

const app = {
    init() {
        Object.values(modules).forEach(module => {
            if (module.init) module.init();
        });
        
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            this.registerServiceWorker();
        });
        
        window.addEventListener('resize', utils.debounce(() => {
            const btns = document.querySelectorAll('.slider-btn');
            btns.forEach(btn => {
                btn.style.display = window.innerWidth <= 768 ? 'none' : 'flex';
            });
        }, CONFIG.resizeDelay));
    },
    
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(() => {});
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());