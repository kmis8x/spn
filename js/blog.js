const blogTranslations = {
    vi: {
        'blog.hero.title': 'Blog & Tin tức',
        'blog.hero.subtitle': 'Cập nhật xu hướng công nghệ và những câu chuyện từ SuperNova',
        'blog.category.all': 'Tất cả',
        'blog.category.technology': 'Công nghệ',
        'blog.category.product': 'Sản phẩm',
        'blog.category.tutorial': 'Hướng dẫn',
        'blog.category.company': 'Công ty',
        'blog.category.insights': 'Insights',
        'blog.author.tech': 'Team Tech',
        'blog.readtime': '5 phút đọc',
        'blog.readmore': 'Đọc tiếp',
        'blog.featured.title': 'AI đang thay đổi cách chúng ta phát triển ứng dụng di động như thế nào?',
        'blog.featured.excerpt': 'Khám phá cách trí tuệ nhân tạo đang cách mạng hóa quy trình phát triển ứng dụng di động, từ thiết kế UI/UX đến tối ưu hóa hiệu suất và cá nhân hóa trải nghiệm người dùng...',
        'blog.post1.title': 'Ra mắt phiên bản mới của Find Phone By Clap',
        'blog.post1.excerpt': 'Chúng tôi vừa phát hành bản cập nhật lớn với nhiều tính năng mới giúp bảo vệ điện thoại của bạn tốt hơn...',
        'blog.post2.title': '10 mẹo bảo mật cho điện thoại thông minh',
        'blog.post2.excerpt': 'Hướng dẫn chi tiết cách bảo vệ dữ liệu cá nhân và tăng cường bảo mật cho thiết bị di động của bạn...',
        'blog.post3.title': 'SuperNova Summer Retreat 2025',
        'blog.post3.excerpt': 'Những khoảnh khắc đáng nhớ từ chuyến du lịch hè của đội ngũ SuperNova tại Phú Quốc...',
        'blog.post4.title': 'Flutter vs React Native: Lựa chọn nào cho 2025?',
        'blog.post4.excerpt': 'So sánh chi tiết hai framework phát triển ứng dụng đa nền tảng phổ biến nhất hiện nay...',
        'blog.post5.title': 'Xu hướng monetization ứng dụng di động 2025',
        'blog.post5.excerpt': 'Phân tích các mô hình kinh doanh và chiến lược tạo doanh thu hiệu quả cho ứng dụng mobile...',
        'blog.post6.title': 'Hướng dẫn tối ưu ASO cho Google Play Store',
        'blog.post6.excerpt': 'Chiến lược App Store Optimization chi tiết giúp ứng dụng của bạn đạt thứ hạng cao hơn...',
        'blog.sidebar.search': 'Tìm kiếm',
        'blog.sidebar.searchPlaceholder': 'Tìm kiếm bài viết...',
        'blog.sidebar.categories': 'Danh mục',
        'blog.sidebar.popular': 'Bài viết phổ biến',
        'blog.sidebar.tags': 'Tags',
        'blog.sidebar.newsletter': 'Đăng ký nhận tin',
        'blog.sidebar.newsletterDesc': 'Nhận thông tin mới nhất về công nghệ và sản phẩm',
        'blog.sidebar.emailPlaceholder': 'Email của bạn',
        'blog.sidebar.subscribe': 'Đăng ký',
        'blog.popular.post1': '10 mẹo bảo mật cho điện thoại thông minh',
        'blog.popular.post2': 'AI đang thay đổi cách phát triển ứng dụng',
        'blog.popular.post3': 'Xu hướng monetization ứng dụng 2025',
        'blog.noResults.title': 'Không tìm thấy bài viết',
        'blog.noResults.desc': 'Hãy thử tìm kiếm với từ khóa khác'
    },
    en: {
        'blog.hero.title': 'Blog & News',
        'blog.hero.subtitle': 'Technology trends and stories from SuperNova',
        'blog.category.all': 'All',
        'blog.category.technology': 'Technology',
        'blog.category.product': 'Product',
        'blog.category.tutorial': 'Tutorial',
        'blog.category.company': 'Company',
        'blog.category.insights': 'Insights',
        'blog.author.tech': 'Tech Team',
        'blog.readtime': '5 min read',
        'blog.readmore': 'Read more',
        'blog.featured.title': 'How AI is Changing Mobile App Development?',
        'blog.featured.excerpt': 'Discover how artificial intelligence is revolutionizing mobile app development, from UI/UX design to performance optimization and user experience personalization...',
        'blog.post1.title': 'New Version of Find Phone By Clap Released',
        'blog.post1.excerpt': 'We just released a major update with new features to better protect your phone...',
        'blog.post2.title': '10 Security Tips for Smartphones',
        'blog.post2.excerpt': 'Detailed guide on protecting personal data and enhancing security for your mobile device...',
        'blog.post3.title': 'SuperNova Summer Retreat 2025',
        'blog.post3.excerpt': 'Memorable moments from SuperNova team\'s summer trip to Phu Quoc...',
        'blog.post4.title': 'Flutter vs React Native: Which for 2025?',
        'blog.post4.excerpt': 'Detailed comparison of the two most popular cross-platform development frameworks...',
        'blog.post5.title': 'Mobile App Monetization Trends 2025',
        'blog.post5.excerpt': 'Analysis of business models and revenue strategies for mobile apps...',
        'blog.post6.title': 'ASO Optimization Guide for Google Play Store',
        'blog.post6.excerpt': 'Detailed App Store Optimization strategies to help your app rank higher...',
        'blog.sidebar.search': 'Search',
        'blog.sidebar.searchPlaceholder': 'Search articles...',
        'blog.sidebar.categories': 'Categories',
        'blog.sidebar.popular': 'Popular Posts',
        'blog.sidebar.tags': 'Tags',
        'blog.sidebar.newsletter': 'Newsletter',
        'blog.sidebar.newsletterDesc': 'Get the latest tech and product updates',
        'blog.sidebar.emailPlaceholder': 'Your email',
        'blog.sidebar.subscribe': 'Subscribe',
        'blog.popular.post1': '10 Security Tips for Smartphones',
        'blog.popular.post2': 'AI is Changing App Development',
        'blog.popular.post3': 'App Monetization Trends 2025',
        'blog.noResults.title': 'No articles found',
        'blog.noResults.desc': 'Try searching with different keywords'
    }
};

if (typeof translations !== 'undefined') {
    Object.keys(blogTranslations).forEach(lang => {
        Object.assign(translations[lang], blogTranslations[lang]);
    });
}

const blogModule = {
    elements: {
        searchInput: null,
        searchBtn: null,
        categoryLinks: null,
        blogCards: null,
        featuredPost: null,
        postsGrid: null,
        newsletterForm: null
    },

    init() {
        this.cacheElements();
        this.bindEvents();
        this.initAnimations();
    },

    cacheElements() {
        this.elements.searchInput = document.querySelector('.search-box input');
        this.elements.searchBtn = document.querySelector('.search-box button');
        this.elements.categoryLinks = document.querySelectorAll('.category-link');
        this.elements.blogCards = document.querySelectorAll('.blog-card');
        this.elements.featuredPost = document.querySelector('.featured-post');
        this.elements.postsGrid = document.querySelector('.posts-grid');
        this.elements.newsletterForm = document.querySelector('.newsletter-form');
    },

    bindEvents() {
        if (this.elements.searchBtn) {
            this.elements.searchBtn.addEventListener('click', () => this.performSearch());
        }

        if (this.elements.searchInput) {
            this.elements.searchInput.addEventListener('keyup', e => {
                if (e.key === 'Enter') this.performSearch();
            });
        }

        this.elements.categoryLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                this.handleCategoryFilter(link);
            });
        });

        if (this.elements.newsletterForm) {
            this.elements.newsletterForm.addEventListener('submit', e => this.handleNewsletter(e));
        }

        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handlePagination(btn));
        });
    },

    performSearch() {
        const searchTerm = this.elements.searchInput.value.toLowerCase().trim();
        let hasResults = false;

        this.elements.blogCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const excerpt = card.querySelector('p').textContent.toLowerCase();
            const category = card.querySelector('.post-category').textContent.toLowerCase();

            const isMatch = !searchTerm || 
                           title.includes(searchTerm) || 
                           excerpt.includes(searchTerm) || 
                           category.includes(searchTerm);

            card.style.display = isMatch ? 'block' : 'none';
            if (isMatch) hasResults = true;
        });

        this.toggleNoResults(!hasResults);
    },

    handleCategoryFilter(activeLink) {
        this.elements.categoryLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');

        const category = activeLink.dataset.filter;
        let hasResults = false;

        if (category === 'all') {
            this.elements.featuredPost.style.display = 'grid';
        } else {
            const featuredCategory = this.elements.featuredPost.querySelector('.post-category').textContent.toLowerCase();
            const categoryText = activeLink.querySelector('span').textContent.toLowerCase();
            this.elements.featuredPost.style.display = featuredCategory.includes(categoryText) ? 'grid' : 'none';
        }

        this.elements.blogCards.forEach(card => {
            const isMatch = category === 'all' || card.dataset.category === category;
            card.style.display = isMatch ? 'block' : 'none';
            if (isMatch) hasResults = true;
        });

        this.toggleNoResults(!hasResults && this.elements.featuredPost.style.display === 'none');
        this.elements.searchInput.value = '';
    },

    toggleNoResults(show) {
        let noResults = document.querySelector('.no-posts');
        
        if (show && !noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-posts';
            noResults.innerHTML = `
                <i class="fas fa-newspaper"></i>
                <h3 data-i18n="blog.noResults.title">Không tìm thấy bài viết</h3>
                <p data-i18n="blog.noResults.desc">Hãy thử tìm kiếm với từ khóa khác</p>
            `;
            this.elements.postsGrid.appendChild(noResults);
        } else if (!show && noResults) {
            noResults.remove();
        }
    },

    handleNewsletter(e) {
        e.preventDefault();
        const emailInput = e.target.querySelector('input[type="email"]');
        const submitBtn = e.target.querySelector('button');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = '...';

        setTimeout(() => {
            emailInput.value = '';
            submitBtn.textContent = '✓';
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 2000);
        }, 1000);
    },

    handlePagination(btn) {
        if (btn.disabled) return;
        
        document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
        if (!btn.classList.contains('prev') && !btn.classList.contains('next')) {
            btn.classList.add('active');
        }

        window.scrollTo({
            top: document.querySelector('.blog-main').offsetTop - 100,
            behavior: 'smooth'
        });
    },

    initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.elements.blogCards.forEach(card => observer.observe(card));
    }
};

document.addEventListener('DOMContentLoaded', () => {
    blogModule.init();
});