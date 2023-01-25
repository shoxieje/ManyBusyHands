<template></template>
<script>
export default {
    name: "Template",
    props: ["", ""],
    components: {  },
    computed: {},
    data() {
        return {};
    },
    methods: {},
    created() {
        const notUserLoggingIn = async () => {
            console.log();
            this.$store.dispatch("authUserLoggingIn", false);
        };

        notUserLoggingIn();
    },
};
</script>
<style lang="sass">
@import '../../assets/styles/custom-variables.sass'/style>
