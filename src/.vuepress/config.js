const { description } = require("../../package");
const { config } = require("vuepress-theme-hope");

module.exports = config({
    base: "/robotics/",
    title: "Osvita-Code | Робототехніка з mBot",
    description: description,

    dest: "./dist",

    head: [
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "/images/icons/apple-icon-57x57.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "60x60",
                href: "/images/icons/apple-icon-60x60.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "/images/icons/apple-icon-72x72.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "/images/icons/apple-icon-76x76.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "/images/icons/apple-icon-114x114.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/images/icons/apple-icon-120x120.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "/images/icons/apple-icon-144x144.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/images/icons/apple-icon-152x152.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/images/icons/apple-icon-180x180.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "/images/icons/android-icon-192x192.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/images/icons/favicon-32x32.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                href: "/images/icons/favicon-96x96.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/images/icons/favicon-16x16.png",
            },
        ],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
        [
            "meta",
            {
                name: "msapplication-TileImage",
                content: "/images/icons/ms-icon-144x144.png",
            },
        ],
        ["meta", { name: "theme-color", content: "#000000" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
        [
            "link",
            {
                rel: "shortcut icon",
                href: "/favicon.ico",
                type: "image/x-icon",
            },
        ],
    ],

    themeConfig: {
        contributor: false,
        pageInfo: false,
        darkmode: "switch",
        search: false,
        pwa: false,
        hostname: "https://test-osvita-code-v2.github.io/robotics/",
        logo: "/assets/images/icons/favicon-96x96.png",
        author: "Serhii73, RenatTOP, Anat0liy12",

        nav: [
            {
                text: "Головна",
                link: "https://test-osvita-code-v2.github.io",
                target: "_self",
            },
            {
                text: "Web",
                link: "https://test-osvita-code-v2.github.io/web",
                target: "_self",
            },
            {
                text: "Scratch",
                link: "https://test-osvita-code-v2.github.io/scratch",
                target: "_self",
            },
        ],

        sidebar: {
            "/lessons/": [
                {
                    title: "Scratch",
                    collapsable: false,
                    children: [
                        "/lessons/",
                        {
                            title: "mBot Ranger",
                            children: [
                                "/lessons/mbot_ranger/0.md",
                                "/lessons/mbot_ranger/1.md",
                                "/lessons/mbot_ranger/2.md",
                                "/lessons/mbot_ranger/3.md",
                                "/lessons/mbot_ranger/4.md",
                                "/lessons/mbot_ranger/5.md",
                                "/lessons/mbot_ranger/6.md",
                                "/lessons/mbot_ranger/7.md",
                                "/lessons/mbot_ranger/8.md",
                                "/lessons/mbot_ranger/9.md",
                                "/lessons/mbot_ranger/10.md",
                                "/lessons/mbot_ranger/11.md",
                            ],
                        }
                    ],
                },
            ],
        },

        copyright: true,
    },
});
