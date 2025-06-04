<?php get_header(); ?>

<main class="main-content">
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container text-center">
            <h1 class="hero-title">Ứng dụng sáng tạo, lan toả toàn cầu</h1>
            <div class="hero-buttons">
                <a href="#products" class="btn btn-primary">Khám phá ngay</a>
                <a href="#download" class="btn btn-outline-light">Tải ứng dụng</a>
            </div>
        </div>
    </section>

    <!-- Feature Section -->
    <section class="features py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-center">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/feature1.png" alt="Feature 1" class="mb-3">
                    <h3>Ứng dụng chất lượng</h3>
                    <p>Chúng tôi cung cấp các app tiện ích được tối ưu tốt cho người dùng toàn cầu.</p>
                </div>
                <div class="col-md-4 text-center">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/feature2.png" alt="Feature 2" class="mb-3">
                    <h3>Phủ sóng toàn cầu</h3>
                    <p>Sản phẩm được quảng bá và phân phối trên các thị trường quốc tế.</p>
                </div>
                <div class="col-md-4 text-center">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/feature3.png" alt="Feature 3" class="mb-3">
                    <h3>Hỗ trợ tận tâm</h3>
                    <p>Chúng tôi luôn lắng nghe người dùng và liên tục cập nhật sản phẩm.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta text-center py-5 bg-dark text-white" id="download">
        <div class="container">
            <h2>Tải ứng dụng của chúng tôi ngay hôm nay</h2>
            <a href="#" class="btn btn-light mt-3">Tải trên Google Play</a>
        </div>
    </section>
</main>

<?php get_footer(); ?>
