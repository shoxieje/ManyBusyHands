<template>
    <div class="c-u-top">
        <!-- HEADER SECTION -->
        <div class="bottom-border">
            <div class="c-u-header">
                <div class="c-u-header__container mw-80">
                    <div class="text-white c-u-header__left">
                        <h2 class="cu-header-title">Have an enquiry?</h2>
                        <strong class="cu-header-text">
                            <p>
                                Send us a message using the form below and we’ll
                                get back to you as soon as possible.
                            </p>
                        </strong>
                    </div>
                    <div class="c-u-header__right">
                        <div class="float-ver">
                            <a href="mailto: admin@manybusyhands.com"
                                ><b-button class="c-u-btn" variant="light"
                                    >Email us</b-button
                                ></a
                            >
                            <a href="tel: +61 1300 109 292"
                                ><b-button
                                    class="c-u-btn text-white"
                                    variant="warning"
                                    >Call us</b-button
                                ></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- BODY -->
        <div class="c-u__container mw-80">
            <!-- <h1 class="c-u-title">Contact Us</h1> -->
            <div class="c-u__container--top">
                <div class="c-u__container--left">
                    <h2 class="c-u-subtitle">We would love to hear from you</h2>
                    <p class="c-u-text">
                        We are here to help you. Whether you are a business
                        seeking workers or a job seeker looking for work,
                        there’s lots in our searchable database to assist you to
                        find either good work or good workers.
                    </p>

                    <!-- NAME -->
                    <label for="name" class="required-field">Name </label>
                    <b-form-input
                        id="name"
                        type="text"
                        @blur="nameOnBlur"
                        aria-describedby="input-wrong-name"
                        v-model="name"
                        :state="checkedName"
                        placeholder="Please enter your name"
                    ></b-form-input>

                    <b-form-invalid-feedback id="input-wrong-name">
                        {{ errName }}
                    </b-form-invalid-feedback>
                    <br />

                    <!-- Email -->
                    <label for="email" class="required-field">Email</label>

                    <b-form-input
                        id="email"
                        type="text"
                        @blur="emailOnBlur"
                        aria-describedby="input-wrong-email"
                        :state="checkedEmail"
                        v-model="email"
                    ></b-form-input>

                    <b-form-invalid-feedback id="input-wrong-email">
                        {{ errEmail }}
                    </b-form-invalid-feedback>
                    <br />

                    <!-- SUBJECT -->
                    <label for="subject" class="required-field">Subject </label>
                    <b-form-input
                        id="subject"
                        type="text"
                        @blur="subjectOnBlur"
                        aria-describedby="input-wrong-subject"
                        v-model="subject"
                        :state="checkedSubject"
                        placeholder="Please enter your message subject"
                    ></b-form-input>

                    <b-form-invalid-feedback id="input-wrong-subject">
                        {{ errSubject }}
                    </b-form-invalid-feedback>
                    <br />

                    <!-- MESSAGE -->
                    <label for="message" class="required-field">Message </label>
                    <b-form-textarea
                        id="message"
                        type="text"
                        rows="6"
                        max-rows="6"
                        @blur="messageOnBlur"
                        aria-describedby="input-wrong-message"
                        v-model="message"
                        :state="checkedMessage"
                        style="resize: none"
                        placeholder="Write your message"
                    ></b-form-textarea>
                    <b-form-invalid-feedback id="input-wrong-message">
                        {{ errMessage }}
                    </b-form-invalid-feedback>
                    <br />

                    <v-btn class="send-btn text-white" @click="sendMessage"
                        >Send message</v-btn
                    >
                </div>
                <div class="c-u__container--right">
                    <img
                        class="ManyBusyHands-logo"
                        src="@/assets/img/logo2.png"
                        alt="ManyBusyHands Logo"
                    />

                    <h2 class="c-u-subtitle">Contact</h2>
                    <div class="bottom-border-1 mg-btm"></div>
                    <p class="c-u-text left-indentation">
                        <strong>
                            <a href="tel: +61 1300 109 292"
                                >1300 109 292</a
                            ></strong
                        >
                    </p>
                    <br />

                    <h2 class="c-u-subtitle">Email Address</h2>
                    <div class="bottom-border-1 mg-btm"></div>
                    <p class="c-u-text left-indentation">
                        <strong>
                            <a href="mailto: admin@manybusyhands.com"
                                >admin@manybusyhands.com</a
                            ></strong
                        >
                    </p>
                    <br />

                    <h2 class="c-u-subtitle">Address</h2>
                    <div class="bottom-border-1 mg-btm"></div>
                    <p class="c-u-text left-indentation" style="color: #2f3c7e">
                        <strong>
                            24 Fitzroy Street <br />
                            Tamworth NSW 2340<br />
                            Australia</strong
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs",
    props: ["", ""],
    components: {},
    computed: {
        // Computed boolean variable returning whether the 'loginEmail' input is a valid email address by testing a regular expression
        validEmail() {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                this.email
            );
        },
    },
    data() {
        return {
            name: "",
            subject: "",
            message: "",
            email: "",

            errName: "",
            errSubject: "",
            errMessage: "",
            errEmail: "",

            checkedName: null,
            checkedSubject: null,
            checkedMessage: null,
            checkedEmail: null,
        };
    },
    methods: {
        // ----- name validation -----------
        nameOnBlur() {
            if (this.name.length === 0) {
                this.checkedName = false;
                this.errName = "First Name is required";
            } else {
                this.checkedName = true;
            }
        },
        // ----- subject validation -----------
        subjectOnBlur() {
            if (this.subject.length === 0) {
                this.checkedSubject = false;
                this.errSubject = "Subject is required";
            } else {
                this.checkedSubject = true;
            }
        },
        // ----- message validation -----------
        messageOnBlur() {
            if (this.message.length === 0) {
                this.checkedMessage = false;
                this.errMessage = "Subject is required";
            } else {
                this.checkedMessage = true;
            }
        },
        // ----- email validation -----------
        emailOnBlur() {
            if (this.email.length === 0) {
                this.checkedEmail = false;
                this.errEmail = "Required field";
            } else if (!this.validEmail) {
                this.checkedEmail = false;
                this.errEmail = "Invalid email address";
            } else {
                this.checkedEmail = null;
            }
        },
        // ----- Send Message -----
        sendMessage() {
            this.nameOnBlur();
            this.subjectOnBlur();
            this.messageOnBlur();
            this.emailOnBlur();

            if (
                this.checkedName &&
                this.checkedSubject &&
                this.checkedMessage &&
                this.checkedEmail
            )
                console.log("Send message");
        },
    },
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
@import '../../assets/styles/custom-variables.sass'

//BODY
.c-u-title
    font-size: xx-large
    margin-bottom: 2rem
.c-u-subtitle
    font-size: x-large
.c-u-text
    font-size: large
.c-u-top
    text-align: center
    background-color: $mbh-white-2
.c-u__container
    margin: 0 auto
    padding: 2rem
    text-align: left
.c-u__container--top
    display: flex
    justify-content: space-between
.c-u__container--left
    padding: 2rem
    background-color: $mbh-white
    width: 55%
.c-u__container--right
    padding: 2rem
    width: 40%
//LEFT
.send-btn
    background-color: $blue-mbh-0 !important
//RIGHT
.ManyBusyHands-logo
    width: 90%
    margin-bottom: 2rem
.left-indentation
    margin-left: 1rem
.mg-btm
    margin-bottom: 0.5rem
//HEADER
.cu-header-title
    text-align: left
    font-size: x-large
.cu-header-text
    font-size: medium
.c-u-header
    background-color: $blue-mbh-0
.c-u-header__container
    display: flex
    justify-content: space-between
    padding: 0 4rem
.c-u-header__left
    text-align: left
    padding-top: 1rem
    max-width: 60%
.c-u-header__right
    display: flex
    flex-direction: column
    justify-content: space-around
.float-ver
    display: flex
    justify-content: right
    flex-wrap: wrap
.c-u-btn
    margin: 0.25rem 0.5rem
    min-width: 80px
@media only screen and (max-width: $screen-max)
    .c-u-header__container
        padding: 0 2rem
    .c-u-header__right
        color: red !important
    .c-u-header__left
        padding-left: 1rem
@media only screen and (max-width: $tablet-max)
    h2
        font-size: 1.5rem
    .cu-header-text
        font-size: small
    .c-u-btn
        font-size: small !important
    .v-btn:not(.v-btn--round).v-size--default
        width: 100%
    .c-u__container--top
        flex-wrap: wrap
    .c-u__container--left
        width: 95%
    .c-u__container--right
        width: 95%
@media only screen and (max-width: 600px)
    .c-u-header__container
        display: block
    .c-u-header__left
        max-width: 100%
        padding-left: 0
    .c-u-btn
        min-width: 100px
    .float-ver
        margin-bottom: 1rem
    .c-u-text
        font-size: medium
    .c-u-subtitle
        font-size: large
@media only screen and (max-width: $mobile-max)
    .c-u-title
        font-size: x-large
    .c-u-text
        font-size: small
    .float-ver
        justify-content: center
        margin-bottom: 1rem
    .c-u__container
        padding: 2rem 1rem
    .c-u__container--left
        padding: 1rem
    .c-u__container--right
        padding: 1rem
</style>
