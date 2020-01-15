<template>
    <div class="wrapper">
        <h1 :style="{'font-size': '3.5rem'}">
            <span :style="{'font-weight': 100}">Julien</span> <span :style="{'font-weight': 700}">EMMANUEL</span>
        </h1>
        <p>
            PhD student (CIFRE) &mdash;
            Team
            <text-link link="http://www.ens-lyon.fr/LIP/CASH" text="CASH"/> at
            <text-link link="http://www.ens-lyon.fr/LIP" text="LIP"/>
            (<text-link link="https://www.inria.fr/en" text="INRIA"/>) & Team
            <text-link link="https://atos.net/produits/calcul-haute-performance-hpc/bxi-bull-exascale-interconnect"
                       text="BXI SW-LL"/> at
            <text-link link="https://atos.net/produits/calcul-haute-performance-hpc" text="Bull"/>
            (<text-link link="https://atos.net" text="Atos"/>)
        </p>
        <hr/>
        <p class="icons">
            <social-icon v-for="(icon, index) in socialIcons" :key="'icon_'+index" v-bind="icon"/>
        </p>
    </div>
</template>

<script>
    const SocialIcon = () => import('./components/SocialIcon');
    const TextLink   = () => import('./components/TextLink');

    export default {
        name: 'app',
        components: {SocialIcon, TextLink},
        data: () => ({
            socialIcons: [
                {
                    link: 'https://julien-emmanuel.com',
                    description: 'Personal website',
                    icon: 'link'
                },
                {
                    link: 'https://gitlab.com/Webcretaire',
                    description: 'Gitlab (@Webcretaire)',
                    icon: ['fab', 'gitlab']
                },
                {
                    link: 'https://github.com/Webcretaire',
                    description: 'Github (@Webcretaire)',
                    icon: ['fab', 'github']
                },
                {
                    link: 'https://framagit.org/Webcretaire',
                    description: 'Framagit (@Webcretaire)',
                    icon: ['fab', 'git-alt']
                },
                {
                    link: 'https://www.linkedin.com/in/julien-emmanuel-276968a9',
                    description: 'LinkedIn',
                    icon: ['fab', 'linkedin']
                },
                {
                    link: 'https://500px.com/Webcretaire',
                    description: '500px (@Webcretaire)',
                    icon: ['fab', '500px']
                }
            ]
        })
    }
</script>

<style>
    /* Resets margins, otherwise we have unwanted scrollbars */
    body, html {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    /* Fonts */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: local('Roboto Thin'), local('Roboto-Thin'), url(assets/RobotoThin.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto'), local('Roboto-Regular'), url(assets/RobotoRegular.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Roboto Bold'), local('Roboto-Bold'), url(assets/RobotoBold.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* Actual styling */
    body {
        margin: 0;
        min-height: 100vh;
        /* Linear gradient darkens the image */
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/background.jpg") no-repeat center;
        background-attachment: fixed;
        background-size: cover;
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wrapper {
        position: absolute;
        top: 40%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        width: 100%;
        text-align: center;
        color: white;
        padding: 2rem;
        min-height: 33vh;
        font-weight: 400;
    }

    hr {
        width: 50%;
        margin: 3rem auto;
        border: none;
        border-top: 1px solid #cccccc;
    }
</style>
