<?php
    $nuxt_index_path = get_template_directory() . '/public/index.html';
    if (file_exists($nuxt_index_path)) {
        $nuxt_content = file_get_contents($nuxt_index_path);
        echo $nuxt_content;
        // echo apply_filters('the_content', $nuxt_content);
    } else {
        echo '<p>Error: Nuxt app index.html file not found.</p>';
    }
