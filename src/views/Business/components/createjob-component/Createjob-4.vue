<template>
    <b-container class="container-job">
        <b-form id="create-job-form" class="text-primary">
            <div class="create-job-box">
                <br />
                <h3 class="subtitle">Screening questions</h3>
                <p>
                    <strong>
                        Include screening questions in your job ad. Screening
                        questions will assist you in filtering candidates who
                        match your preferred answers.
                    </strong>
                </p>
                <div v-for="(radio, key) in radioQuestions">
                    <b-row class="my-1">
                        <b-col sm="12">
                            <div class="label-question">
                                {{ radio.question }}
                                <!-- -- vmodel {{ "radioQuestion" + key }} -->
                            </div>
                            <div v-for="answer in radio.answers">
                                <input
                                    type="radio"
                                    :id="answer.value"
                                    :value="answer.value"
                                    :v-model="'radioQuestion' + key"
                                />
                                <label
                                    class="label-answer"
                                    :for="answer.value"
                                    >{{ answer.answer }}</label
                                >
                            </div>
                        </b-col>
                    </b-row>
                </div>

                <div v-for="(checkbox, key) in checkBoxQuestions">
                    <b-row class="my-1">
                        <b-col sm="12">
                            <div class="label-question">
                                {{ checkbox.question }}
                                <!-- -- vmodel {{ "checkBoxQuestion" + key }} -->
                            </div>
                            <div v-for="answer in checkbox.answers">
                                <input
                                    type="checkbox"
                                    :id="answer.value"
                                    :value="answer.value"
                                    :v-model="'checkBoxQuestion' + key"
                                />
                                <label
                                    class="label-answer"
                                    :for="answer.value"
                                    >{{ answer.answer }}</label
                                >
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-form>
    </b-container>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import Multiselect from "vue-multiselect";
const bcrypt = require("bcryptjs");
import { config } from "../../../../utils/constant";

const radioQuestions = config.mockData.radioQuestions;
const checkBoxQuestions = config.mockData.checkBoxQuestions;

export default {
    components: {
        VueGoogleAutocomplete,
        Multiselect,
    },
    data() {
        return {
            radioQuestion0: "",
            radioQuestion1: "",
            radioQuestion2: "",
            radioQuestion3: "",
            radioQuestion4: "",
            radioQuestion5: "",
            radioQuestion6: "",
            radioQuestion7: "",
            radioQuestion8: "",
            radioQuestion9: "",
            checkBoxQuestion0: "",
            checkBoxQuestion1: "",
            checkBoxQuestion2: "",
            checkBoxQuestion3: "",
            checkBoxQuestion4: "",
            checkBoxQuestion6: "",
            checkBoxQuestion6: "",
            checkBoxQuestion7: "",
            checkBoxQuestion8: "",
            checkBoxQuestion9: "",
        };
    },
    methods: {
        getLocationData(addressData, placeResultData, id) {
            this.location = locationData;
        },
        emitCategory() {},
        restrictDecimal() {
            this.contract = this.contract.match(/^\d+\.?\d{0,2}/);
        },
        passMockData() {
            this.checkBoxQuestions = checkBoxQuestions;
            this.radioQuestions = radioQuestions;
        },
    },
    created() {
        this.passMockData();
    },
};
</script>
<style lang="sass">
.label-question
    font-weight: bold
.label-answer
    margin-left: 1rem
    font-weight: 300
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
