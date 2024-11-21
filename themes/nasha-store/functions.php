<?php
function nuxt_adjust_asset_paths($content) {
    // Define the base URL for assets
    $base_url = get_template_directory_uri() . '/public';
    
    // Replace asset paths dynamically
    // $content = str_replace('="/_nuxt/builds/meta/', '="' . $base_url . '/_nuxt/builds/meta/', $content);
    // $content = str_replace('="/_nuxt/', '="' . $base_url . '/_nuxt/', $content);
    // $content = str_replace('="/images/', '="' . $base_url . '/images/', $content);
    $content = str_replace('="/_ipx/', '="' . $base_url . '/_ipx/', $content);
    // $content = str_replace('="/_payload.json', '="' . $base_url . '/_payload.json', $content);
    
    // Add other replacements as needed
    // $content = str_replace('="/static/', '="' . $base_url . '/static/', $content);
    
    return $content;
}
add_filter('the_content', 'nuxt_adjust_asset_paths');
