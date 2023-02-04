<template>
    <div class="candidate-card">
        <div
            :id="'candidate-card-' + type + '-' + number"
            :class="'candidate-content' + (this.favorite ? ' favorite' : '')"
        >
            <div class="candidate-card-header">
                <div class="candidate-card-header--left">
                    <strong style="font-size: large">
                        {{ candidate.firstName }}
                        {{ candidate.lastName }}</strong
                    ><br />
                    {{ candidate.age }} years old<br />
                </div>
                <div class="candidate-card-header--right">
                    <b-button
                        variant="light"
                        class="btn-candidate"
                        @click="toggleFavorite"
                    >
                        <img
                            v-if="!favorite"
                            class="btn-star-icon"
                            src="@/assets/img/icons/star-b-icon.png" />
                        <img
                            v-if="favorite"
                            class="btn-star-icon"
                            src="@/assets/img/icons/star-o-icon.png"
                    /></b-button>
                    <b-button
                        variant="light"
                        class="btn-candidate"
                        @click="toggleBar"
                    >
                        <img
                            id="btn-arrow"
                            class="btn-arrow-icon"
                            src="@/assets/img/icons/down-arrow-filled-circular-button-b.png"
                    /></b-button>
                </div>
            </div>

            {{ candidate.introduction }}

            <!-- Qualification MODAL PANEL-->
            <b-modal
                :id="'modal-' + type + '-qualifications-' + number"
                title="Candidate's Qualifications"
                class="modal"
            >
                <h6>Educations :</h6>
                <p>{{ candidate.education }}</p>
                <h6>Qualifications :</h6>
                <p>{{ candidate.education }}</p>
            </b-modal>

            <!-- Resume MODAL PANEL-->
            <b-modal
                :id="'modal-' + type + '-resume-' + number"
                title="Candidate's Resume"
                class="modal"
                size="xl"
            >
                modal-{{ this.type }}-resume-{{ this.number }}
                <br />
            </b-modal>

            <!-- Cover Letter MODAL PANEL-->
            <b-modal
                :id="'modal-' + type + '-coverletter-' + number"
                title="Candidate's Cover Letter"
                class="modal"
                size="xl"
            >
                modal-{{ this.type }}-coverletter-{{ this.number }}
                <br />
            </b-modal>

            <!-- Contact MODAL PANEL-->
            <b-modal
                :id="'modal-' + type + '-contact-' + number"
                title="Candidate's Contact"
                class="modal"
            >
                <h6>Phone number :</h6>
                <p>{{ candidate.phoneNumber }}</p>
                <h6>Email address :</h6>
                <p>{{ candidate.user_email }}</p>
            </b-modal>
        </div>
        <transition name="slide">
            <div v-if="showBottomBar" class="candidate-pop-up__container">
                <b-button
                    v-b-modal="'modal-' + type + '-qualifications-' + number"
                    class="pop-up-btn text-white"
                    variant="primary"
                >
                    <span class="pop-up-text">Qualifications</span>
                    <img
                        src="@/assets/img/icons/qualification-w-icon.png"
                        alt="Qualifications-icon"
                        class="pop-up-icon"
                    />
                </b-button>
                <b-button
                    v-b-modal="'modal-' + type + '-resume-' + number"
                    class="pop-up-btn text-white"
                    variant="primary"
                >
                    <span class="pop-up-text">Resume</span>
                    <img
                        src="@/assets/img/icons/resume-w-icon.png"
                        alt="Resume-icon"
                        class="pop-up-icon"
                    />
                </b-button>
                <b-button
                    v-b-modal="'modal-' + type + '-coverletter-' + number"
                    class="pop-up-btn text-white"
                    variant="primary"
                >
                    <span class="pop-up-text">Cover Letter</span>
                    <img
                        src="@/assets/img/icons/letter-w-icon.png"
                        alt="Cover-letter-icon"
                        class="pop-up-icon"
                    />
                </b-button>
                <b-button
                    v-b-modal="'modal-' + type + '-contact-' + number"
                    class="pop-up-btn text-white"
                    variant="primary"
                >
                    <span class="pop-up-text">Contact</span>
                    <img
                        src="@/assets/img/icons/contact-w-icon.png"
                        alt="Contact-icon"
                        class="pop-up-icon"
                    />
                </b-button>
            </div>
        </transition>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "CandidateCard",
        components: {},
        props: ["number", "candidate", "type"],

        data() {
            return {
                showBottomBar: false,
                favorite: false,
            };
        },

        methods: {
            toggleBar() {
                this.showBottomBar = !this.showBottomBar;
                var arrowBtn = document.getElementById("btn-arrow");
                this.showBottomBar
                    ? arrowBtn.classList.add("rotated")
                    : arrowBtn.classList.remove("rotated");
            },

            toggleFavorite() {
                console.log(this.number);
                this.favorite = !this.favorite;

                this.makeFavorite()

                axios.put(`http://localhost:8081/candidate/${this.candidate.user_email}/setFavorite/${this.favorite}`)
            },

            makeFavorite() {
                var card = document.getElementById(
                    "candidate-card-" + this.type + "-" + this.number
                );

                this.favorite
                    ? card.classList.add("favorite")
                    : card.classList.remove("favorite");
                
            }
        },

        created() {
            if(parseInt(this.candidate.isFavorite))
                this.favorite = true
            else this.favorite = false

        },

        mounted() {
            
            this.makeFavorite()

        }
    };
</script>

<style lang="sass">
    @import '../../../../assets/styles/custom-variables.sass'
    .candidate-card
        margin: 0.5rem 0

    .candidate-content
        background-color: $mbh-white
        padding: 1rem
        border-radius: 0.5rem
        border-style: solid
        border-width: 1px
        border-color: $mbh-gray-0
        display: block

    .candidate-content.favorite
        background-color: $mbh-orange-1

    .candidate-card-header
        display: flex
        justify-content: space-between

    .candidate-card-header--left
        margin: auto 0

    .candidate-card-header--right
        display: flex

    .candidate-pop-up__container
        display: flex
        padding: 0 0.5rem

    .btn-candidate
        padding: 7.5px
        width: 40px
        height: 40px
        display: flex
        justify-content: center
        background-color: transparent
        border-radius: 20px
        margin: auto 0
        border-style: none

    .btn-arrow-icon
        width: 25px
        height: 25px

    .btn-arrow-icon.rotated
        transform: rotate(180deg)

    .btn-star-icon
        width: 25px
        height: 25px

    .pop-up-icon
        margin: 0 5px 5px 5px
        width: 20px
        height: 20px

    /* MODAL */
    .modal
        padding-right: 0 !important

    .modal-open
        padding-right: 0 !important

    .modal-footer
        .btn
            min-width: 80px
            color: $mbh-white !important
        .btn-secondary
            color: $mbh-navy !important
            background-color: $mbh-white-2 !important


    @media only screen and (max-width: $tablet-max)
        .btn-candidate
            margin: unset
        .pop-up-btn
            font-size: small
    @media only screen and (max-width: 650px)
        .pop-up-text
            display: none
    @media only screen and (max-width: 350px)
        .candidate-card-header--right
            flex-direction: column
        .pop-up-btn
            padding: 0

    /* SLIDE ANIMATION*/
    .slide-enter-active
        -moz-transition-duration: 0.3s
        -webkit-transition-duration: 0.3s
        -o-transition-duration: 0.3s
        transition-duration: 0.3s
        -moz-transition-timing-function: ease-in
        -webkit-transition-timing-function: ease-in
        -o-transition-timing-function: ease-in
        transition-timing-function: ease-in

    .slide-leave-active
        -moz-transition-duration: 0.3s
        -webkit-transition-duration: 0.3s
        -o-transition-duration: 0.3s
        transition-duration: 0.3s
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1)

    .slide-enter-to, .slide-leave
        max-height: 100px
        overflow: hidden

    .slide-enter, .slide-leave-to
        overflow: hidden
        max-height: 0
</style>
