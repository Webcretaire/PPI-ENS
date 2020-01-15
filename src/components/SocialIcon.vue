<template>
    <a :href="link" :content="description" v-tippy>
        <font-awesome-icon :icon="icon"/>
    </a>
</template>

<script>
    export default {
        name: "SocialIcon",
        props: {
            link: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            icon: {
                required: true
            }
        }
    }
</script>

<style scoped>
    a {
        font-size: 2.5rem;
        margin: 0 0.5rem;
        text-decoration: none;
        color: white;
    }

    a:hover {
        color: #D2D2D2;
    }
</style>