const productTranslations = {
    vi: {
        'products.hero.title': 'Tất cả sản phẩm',
        'products.hero.subtitle': 'Khám phá bộ sưu tập ứng dụng di động chất lượng cao của chúng tôi',
        'products.search.placeholder': 'Tìm kiếm ứng dụng...',
        'products.filter.all': 'Tất cả',
        'products.filter.utility': 'Tiện ích',
        'products.filter.security': 'Bảo mật',
        'products.filter.productivity': 'Năng suất',
        'products.filter.tools': 'Công cụ',
        'products.noResults.title': 'Không tìm thấy kết quả',
        'products.noResults.subtitle': 'Hãy thử tìm kiếm với từ khóa khác'
    },
    en: {
        'products.hero.title': 'All Products',
        'products.hero.subtitle': 'Explore our collection of high-quality mobile applications',
        'products.search.placeholder': 'Search apps...',
        'products.filter.all': 'All',
        'products.filter.utility': 'Utility',
        'products.filter.security': 'Security',
        'products.filter.productivity': 'Productivity',
        'products.filter.tools': 'Tools',
        'products.noResults.title': 'No results found',
        'products.noResults.subtitle': 'Try searching with different keywords'
    }
};

if (typeof translations !== 'undefined') {
    Object.keys(productTranslations).forEach(lang => {
        Object.assign(translations[lang], productTranslations[lang]);
    });
}

const productsModule = {
    elements: {
        searchInput: null,
        searchBtn: null,
        filterBtns: null,
        productItems: null,
        noResults: null,
        productsGrid: null
    },

    init() {
        this.cacheElements();
        this.bindEvents();
        this.initAnimations();
    },

    cacheElements() {
        this.elements.searchInput = document.querySelector('.search-box input');
        this.elements.searchBtn = document.querySelector('.search-box button');
        this.elements.filterBtns = document.querySelectorAll('.filter-btn');
        this.elements.productItems = document.querySelectorAll('.product-item');
        this.elements.noResults = document.querySelector('.no-results');
        this.elements.productsGrid = document.getElementById('productsGrid');
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

        this.elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleFilter(btn));
        });
    },

    performSearch() {
        const searchTerm = this.elements.searchInput.value.toLowerCase().trim();
        let hasResults = false;

        this.elements.productItems.forEach(item => {
            const searchableContent = [
                item.querySelector('.product-title').textContent,
                item.querySelector('.product-description').textContent,
                item.querySelector('.product-category').textContent
            ].join(' ').toLowerCase();

            const isMatch = !searchTerm || searchableContent.includes(searchTerm);
            item.style.display = isMatch ? 'block' : 'none';
            if (isMatch) hasResults = true;
        });

        this.toggleNoResults(!hasResults);
    },

    handleFilter(activeBtn) {
        this.elements.filterBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');

        const category = activeBtn.dataset.filter;
        let hasResults = false;

        this.elements.productItems.forEach(item => {
            const isMatch = category === 'all' || item.dataset.category === category;
            item.style.display = isMatch ? 'block' : 'none';
            if (isMatch) hasResults = true;
        });

        this.toggleNoResults(!hasResults);
        this.elements.searchInput.value = '';
    },

    toggleNoResults(show) {
        if (this.elements.noResults) {
            this.elements.noResults.style.display = show ? 'block' : 'none';
        }
    },

    initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.elements.productItems.forEach(item => observer.observe(item));
    }
};

document.addEventListener('DOMContentLoaded', () => {
    productsModule.init();
});