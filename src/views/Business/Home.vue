<template>


</template>

<script>

    export default {

        name: 'BusinessHome',
        data() {

            return {
                
            }

        },
        created() {
            const notUserLoggingIn = async () =>  {
                this.$store.dispatch("authUserLoggingIn", false)
            }

            notUserLoggingIn();
        },

    }

</script>