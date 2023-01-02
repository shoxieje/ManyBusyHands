<template>
    <section class="business-post-top">
        <div class="stepper-container mw-60">
            <h1 class="title">Post a job ad</h1>
            
            <v-stepper v-model="e1">
                
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                        Role
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                        Ad
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 3" step="3">
                        Write 
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 4" step="4">
                        Message
                    </v-stepper-step>
                </v-stepper-header>
                
                <v-stepper-items class="mw-60">
                    <v-stepper-content step="1">
                        <v-card class="mb-12" color="grey lighten-1"
                            >
                        <BusinessPost1 />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-secondary">
                                Save Draft
                            </v-btn>
                            <v-btn class="stepper-btn-primary" @click="e1 = 2">
                                Continue
                            </v-btn>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>

                <v-stepper-items class="mw-60">
                    <v-stepper-content step="2">
                        <v-card class="mb-12" color="grey lighten-1"
                            >
                        <BusinessPost2 />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-secondary">
                                Save Draft
                            </v-btn>
                            <v-btn class="stepper-btn-primary" @click="e1 = 3">
                                Continue
                            </v-btn>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>

        </div>
    </section>
</template>

<script>
import BusinessPost1 from "./components/postjob-component/Post-1.vue";
import BusinessPost2 from "./components/postjob-component/Post-2.vue";
export default {
    components: {
        BusinessPost1,
        BusinessPost2,
    },
    name: "BusinessJobPost",
    data() {
        return {
            e1: 1,
        };
    },
    created() {
            const notUserLoggingIn = async () =>  {
                this.$store.dispatch("authUserLoggingIn", false)
            }

            notUserLoggingIn();
    },
};
</script>
<style lang="sass">
@import '../../assets/styles/custom-variables.sass'


.business-post-top
	text-align: center
	background-color: pink
    
/* Stepper */
.stepper-container
	padding: 3rem
	margin-inline: auto

.stepper-btn-container 
	text-align: right

.stepper-btn-primary 
	background-color: $mbh-blue-2 !important
	color: white !important

.stepper-btn-secondary 
	color: $mbh-navy !important

/*Post*/

    
/*Sign up*/
.container-post 
	text-align: left

.business-post-box
	background-color: #f1f1f1
	border-radius: 10px
	padding: 3rem
	margin: 1rem 0
    
.title
	color: $mbh-navy
	padding-bottom: 1rem
	text-align: left

.subtitle 
	color: $mbh-blue-2
	font-size: 1.5rem
	padding-bottom: 1rem

// .business-signup-btn {
//     color: white;
//     font-weight: bold;
//     font-size: 20px !important;
// }
// .required-field::after {
//     content: "*";
//     color: red;
//     margin-left: 2px;
// }

</style>