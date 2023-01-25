<template>
    <div class="invoices__card-container">
        <div
            v-for="(i, key) in invoices.slice((x - 1) * 10, x * 10)"
            class="invoices__card"
        >
            <div class="invoice__left">
                <h4 style="font-size: large !important">
                    {{ i.jobTitle }},
                    <span class="small-text">{{ i.location }} </span>
                </h4>
                <span class="small-text">Order number: </span>
                <strong>{{ i.invoiceId }}</strong> <br />
                <span class="small-text">Price: </span>
                <strong>{{ i.price }}</strong> <br />
                <b-button variant="primary text-white" class="view-btn"
                    >View Details</b-button
                >
            </div>
            <div class="invoice__right">
                <a
                    class="small-text"
                    style="text-decoration: underline"
                    href="#"
                    >Download pdf</a
                >
                <br />
                <span class="small-text">Order date: </span> <br />
                <strong>{{ i.date }}</strong>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "InvoicesPanel",
    props: ["x", "invoices"],
    components: {},
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
@import '../../../assets/styles/custom-variables.sass'
</style>
