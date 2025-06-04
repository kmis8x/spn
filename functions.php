<?php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('supernova-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('supernova-child-style', get_stylesheet_directory_uri() . '/style.css', ['supernova-style']);
    wp_enqueue_script('custom-main-js', get_stylesheet_directory_uri() . '/js/main.js', [], null, true);
});
