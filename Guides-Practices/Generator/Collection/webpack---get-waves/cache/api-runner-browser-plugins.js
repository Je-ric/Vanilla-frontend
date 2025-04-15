module.exports = [{
    plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
    options: {
        "plugins": []
    },
}, {
    plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
    options: {
        "plugins": [],
        "name": "get-waves",
        "short_name": "Waves",
        "start_url": "/",
        "background_color": "#FFFFFF",
        "theme_color": "#0099FF",
        "display": "minimal-ui",
        "icon": "src/images/getwaves-logo.png",
        "legacy": true,
        "theme_color_in_head": true,
        "cache_busting_mode": "query",
        "crossOrigin": "anonymous",
        "include_favicon": true,
        "cacheDigest": "f13a1a2e88a9720e746d5561039d3f5f"
    },
}, {
    plugin: require('../gatsby-browser.js'),
    options: {
        "plugins": []
    },
}]