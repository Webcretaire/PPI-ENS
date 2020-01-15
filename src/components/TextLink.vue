<template>
    <a :href="link" target="_blank">{{ text }}</a>
</template>

<script>
    export default {
        name: "TextLink",
        props: {
            link: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    a {
        color: white;
        text-decoration: none;
        border-bottom: 1px solid white;
    }

    a:hover {
        color: #D2D2D2;
        border-bottom: 1px solid #D2D2D2;
    }
</style>