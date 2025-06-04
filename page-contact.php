<?php
/* Template Name: Contact */
get_header();
?>
<main class="main-content">
    <div class="container">
        <h1>Contact Us</h1>
        <form method="post" action="#">
            <div><input type="text" name="name" placeholder="Your Name"></div>
            <div><input type="email" name="email" placeholder="Your Email"></div>
            <div><textarea name="message" placeholder="Message"></textarea></div>
            <div><button type="submit">Send</button></div>
        </form>
    </div>
</main>
<?php get_footer(); ?>
