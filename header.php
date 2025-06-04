<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- HEADER & NAV -->
<nav class="navbar">
	<div class="nav-container">
		<div class="nav-logo">
			<a href="<?php echo home_url(); ?>">
				<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt="Logo">
			</a>
			<h2>SuperNova</h2>
		</div>
		<ul class="nav-menu">
			<li><a href="<?php echo home_url(); ?>" data-i18n="nav.home"></a></li>
			<li><a href="<?php echo home_url('/about'); ?>" data-i18n="nav.about"></a></li>
			<li><a href="<?php echo home_url('/products'); ?>" data-i18n="nav.products"></a></li>
			<li><a href="<?php echo home_url('/blog'); ?>" data-i18n="footer.blog"></a></li>
			<li><a href="<?php echo home_url('/careers'); ?>" data-i18n="footer.careers"></a></li>
			<li><a href="<?php echo home_url('/contact'); ?>" data-i18n="footer.contact"></a></li>
		</ul>
		<div class="language-switch">
			<button class="lang-btn active" data-lang="vi">VI</button>
			<button class="lang-btn" data-lang="en">EN</button>
		</div>
		<div class="nav-toggle">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</nav>