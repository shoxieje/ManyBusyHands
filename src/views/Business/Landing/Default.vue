
<template>
    <component :is="view"></component>
</template>

<script>

    import AuthLanding from './Auth.vue'
    import UnauthorizeLanding from './UnAuth.vue'

    export default {
        
        components: {
            AuthLanding,
            UnauthorizeLanding
        },

        name: 'DefaultLanding',

        computed: {
            view() {
                return this.$store.state.isUserLoggingIn ? 'AuthLanding' : 'UnauthorizeLanding'
            }  

        }
    }

</script>