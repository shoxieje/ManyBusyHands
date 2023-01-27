<template>
    <div class="invoices-top text-primary">
        <h1 class="title">Your invoices</h1>
        <div class="invoices__container mw-60">
            <div class="invoices__btn-container mw-60">
                <div class="page-btn-container">
                    <b-button
                        v-if="!(page <= 1)"
                        class="page-btn"
                        variant="primary text-white"
                        @click="firstPage"
                    >
                        <img
                            src="@/assets/img/icons/fast-backward-w-icon.png"
                            class="arrow-icon"
                        />
                    </b-button>
                    <b-button
                        v-if="!(page <= 1)"
                        class="page-btn"
                        variant="primary text-white"
                        @click="previousPage"
                    >
                        <img
                            src="@/assets/img/icons/backward-w-icon.png"
                            class="arrow-icon"
                        />
                    </b-button>
                </div>
                <span
                    v-for="x in pageLength"
                    v-if="page === x"
                    class="invoice-span"
                >
                    {{ x }} from {{ pageLength }}</span
                >
                <div class="page-btn-container">
                    <b-button
                        v-if="!(page >= pageLength)"
                        class="page-btn"
                        variant="primary text-white"
                        @click="nextPage"
                    >
                        <img
                            src="@/assets/img/icons/forward-w-icon.png"
                            class="arrow-icon"
                        />
                    </b-button>
                    <b-button
                        v-if="!(page >= pageLength)"
                        variant="primary text-white"
                        @click="lastPage"
                        class="page-btn"
                    >
                        <img
                            src="@/assets/img/icons/fast-forward-w-icon.png"
                            class="arrow-icon"
                        />
                    </b-button>
                </div>
            </div>
            <div v-for="x in pageLength">
                <div v-if="page === x">
                    <InvoicesPanel :x="x" :invoices="invoices" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { config } from "../../utils/constant";
import InvoicesPanel from "./components/InvoicesPanel.vue";
const invoices = config.mockData.invoiceList;
const pageLength = Math.ceil(invoices.length / 10);
export default {
    name: "Invoices",
    props: ["", ""],
    components: { InvoicesPanel },
    computed: {},
    data() {
        return {
            page: 1,
        };
    },
    methods: {
        passMockData() {
            this.invoices = invoices;
            this.pageLength = pageLength;
        },
        nextPage() {
            this.page = this.page + 1;
        },
        previousPage() {
            this.page = this.page - 1;
        },
        firstPage() {
            this.page = 1;
        },
        lastPage() {
            this.page = Math.ceil(invoices.length / 10);
        },
    },
    created() {
        const notUserLoggingIn = async () => {
            console.log();
            this.$store.dispatch("authUserLoggingIn", false);
        };

        notUserLoggingIn();
        this.passMockData();
    },
};
</script>
<style lang="sass">
@import '../../assets/styles/custom-variables.sass'
.invoices-top
    padding: 1rem
    text-align: center
// .invoices__container
// .invoices__card-container
.invoices__card
    padding: 1rem
    background: $mbh-white
    border-color: #b7b9be
    border-style: solid
    border-width: 1px
    border-radius: 10px
    display: flex
    justify-content: space-between
    margin: 0.5rem 0
.small-text
    font-size: small !important
    font-weight: 300 !important
.invoice__left
    text-align: left
.invoice__right
    text-align: right
    min-width: 90px
.invoices__btn-container
    display: flex
    justify-content: space-between
.arrow-icon
    width: 15px
    height: 15px
// .page-btn-container
.page-btn
    min-width: 30px
    margin-inline: 2.5px
.invoice-span
    margin: auto 0
.view-btn
    margin-top: 0.5rem

@media only screen and (max-width: $mobile-max)
    .title
        font-size: x-large
    .page-btn
        padding: 0.15rem
    .invoice-span
        font-size: small
.view-btn
        font-size: small
</style>
