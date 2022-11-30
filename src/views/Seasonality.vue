<template>
    <div class="seasonality-container">
        <!-- TITLE SECTION -->
        <div class="hero-section-top seasonality-header">
            <b-container class="text-center seasonality-head-section">
                <h1 class="page-header p-3 orange"> Seasonality Table</h1>
            </b-container>
        </div>
        <p class="seasonality-caption">Strawberry harvest Caloundra, Queensland</p>
        <!-- SEASONALITY SEARCH -->
        <b-container id="seasonality-search-area">
            <!-- SEASONALITY SEARCH FORM ERRORS -->
            <h1 class="text-primary text-center mt-5 mb-4">Please enter Seasonality Search Preferences </h1>
            <b-alert variant="danger" class="m-4 text-center" v-show="!noSeasonalityError" show>{{ seasonalityError }}</b-alert>
            <!-- SEASONALITY SEARCH FORM -->
            <b-form>
                <b-row>
                    <b-col md="1" cols="0"/>
                    <b-col md="6" cols="auto">
                        <b-form-group label-for="industrySelection" label="Industries: ">
                            <b-form-select id="industrySelection" v-model="searchIndustries" :options="industryOptions" multiple :select-size="8"/>
                            <b class="text-secondary">Hold Control/Command and click to select or deselect multiple items.</b>
                        </b-form-group>
                        
                    </b-col>
                    <b-col md="4" cols="auto">
                        <b-form-group label-for="stateSelection" label="State: ">
                            <b-form-select id="stateSelection" v-model="searchState" :options="stateOptions"/>
                        </b-form-group>
                        <b-form-group label-for="citySelection" label="Town/City: " :state="validCity" invalid-feedback="Only valid characters, alphabetic or in [-, ', -, /, \, .]">
                            <b-form-input  id="citySelection" v-model="searchCity" trim :state="validCity" placeholder="Enter the name of a town/suburb/city"/>
                        </b-form-group>
                        <b-form-group label-for="postcodeSelection" label="PostCode: " :state="validPostCode" invalid-feedback="Only valid Australian Postcodes (4 digits)">
                            <b-form-input id="postcodeSelection" v-model="searchPostCode" trim :state="validPostCode" placeholder="Enter the desired PostCode"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="1" cols="0"/>
                </b-row>
                <b-row><b-button size="lg" variant="success" class="mx-auto mt-3 mb-3" @click="searchSeasonality" :disabled="invalidSearchTerms">SEARCH</b-button></b-row>
            </b-form>
        </b-container>
        <!-- SEASONALITY SEARCH RESULTS -->
        <b-container v-show="showResults">
            <hr>
            <br>
            <h2 class="text-primary text-center">Seasonality Results</h2>
            <!-- LEGEND -->
            <b-row>
                <div class="mx-auto">
                    <b-img blank width="50" height="50" :blank-color="peakColour"/>
                    <b class="text-black ml-2 mr-4 my-auto">Peak seasonality time for work</b>
                    <b-img blank width="50" height="50" :blank-color="someColour"/>
                    <b class="text-black ml-2 mr-4 my-auto">Some seasonality work</b>
                </div>
            </b-row>
            <br>
            <!-- SEASONALITY TABLE -->
            <b-row>
                <b-table id="seasonalityTable" :fields="seasonalityFields" :items="seasonalityItems" :per-page="seasonalityItemsPerPage" :current-page="currentSeasonalityPage" class="mx-auto" head-row-variant="primary" striped>
                    <template #cell(industry)="data">
                        {{ data.item.industry }}
                    </template>
                    <template #cell(town)="data">
                        {{ data.item.town }}
                    </template>
                    <template #cell(state)="data">
                        {{ data.item.state }}
                    </template>
                    <template #cell(postcode)="data">
                        {{ data.item.postcode }}
                    </template>
                    <!-- DEFAULT FOR ALL MONTH CELLS -->
                    <template #cell()="data">
                        <div v-if="data.value==2">
                            <b-img blank width="35" height="35" :blank-color="peakColour"/>
                        </div>
                        <div v-if="data.value==1">
                            <b-img blank width="35" height="35" :blank-color="someColour"/>
                        </div>
                    </template>
                </b-table>
            </b-row>
            <!-- SEASONALITY TABLE PAGE NAV -->
            <b-row>
                <b-pagination 
                    v-model="currentSeasonalityPage" 
                    class="mx-auto" 
                    :total-rows="seasonalityRows" 
                    :per-page="seasonalityItemsPerPage" 
                    first-text="First"
                    prev-text="Prev"
                    next-text="Next"
                    last-text="Last"
                    aria-controls="seasonalityTable"/>
            </b-row>
            <br>
        </b-container>
    </div>

</template>
<script>
export default {
    name: 'Seasonality',

    data() {
        return {
            // Seasonality search input variables
            searchIndustries: [],
            searchState: null,
            searchCity: "",
            searchPostCode: "",

            // Seasonality display variables
            seasonalityError: null,
            seasonalityItems: null,
            seasonalityRows: null,
            currentSeasonalityPage: null,
            seasonalityItemsPerPage: 2,
            seasonalityFields: [
                {key: 'industry', label: 'Industry', sortable: true},
                {key: 'town', label: 'Town', sortable: true},
                {key: 'state', label: 'State', sortable: true},
                {key: 'postcode', label: 'Postcode', sortable: true},
                {key: 'jan', label: 'JAN'},
                {key: 'feb', label: 'FEB'},
                {key: 'mar', label: 'MAR'},
                {key: 'apr', label: 'APR'},
                {key: 'may', label: 'MAY'},
                {key: 'jun', label: 'JUN'},
                {key: 'jul', label: 'JUL'},
                {key: 'aug', label: 'AUG'},
                {key: 'sep', label: 'SEP'},
                {key: 'oct', label: 'OCT'},
                {key: 'nov', label: 'NOV'},
                {key: 'dec', label: 'DEC'},
            ],
            peakColour: "#ff7a25",
            someColour: "#ffbe92",

            // Variable for if the seasonality table is showing
            showResults: false,

            // Various array describing search input options
            stateOptions: [
                { value: 'null', text: 'Please select a state' },
                { value: 'NSW', text: 'NSW' },
                { value: 'QLD', text: 'QLD' },
                { value: 'VIC', text: 'VIC' },
                { value: 'NT', text: 'NT' },
                { value: 'ACT', text: 'ACT' },
                { value: 'WA', text: 'WA' },
                { value: 'SA', text: 'SA' },
                { value: 'TAS', text: 'TAS' },
            ],

            industryOptions: [
                { value: '130', text: 'Almonds' },
                { value: '108', text: 'Apples' },
                { value: '110', text: 'Asparagus' },
                { value: '111', text: 'Avocados' },
                { value: '112', text: 'Bananas' },
                { value: '113', text: 'Berries' },
                { value: '114', text: 'Cherries' },
                { value: '115', text: 'Citrus' },
                { value: '131', text: 'Coffee' },
                { value: '116', text: 'Cotton' },
                { value: '117', text: 'Custard apples' },
                { value: '132', text: 'Dragon fruit' },
                { value: '134', text: 'Flowers' },
                { value: '133', text: 'Flowers / Nursery' },
                { value: '135', text: 'Ginger' },
                { value: '118', text: 'Grain' },
                { value: '119', text: 'Grapes' },
                { value: '120', text: 'Hops' },
                { value: '136', text: 'Longans' },
                { value: '137', text: 'Lychees' },
                { value: '121', text: 'Mangoes' },
                { value: '122', text: 'Melons' },
                { value: '138', text: 'Nuts' },
                { value: '139', text: 'Olives' },
                { value: '140', text: 'Paw Paws' },
                { value: '129', text: 'Pears' },
                { value: '141', text: 'Pineapples' },
                { value: '142', text: 'Pistachios' },
                { value: '143', text: 'Potatoes' },
                { value: '144', text: 'Pumpkins' },
                { value: '123', text: 'Stonefruit' },
                { value: '124', text: 'Strawberries' },
                { value: '125', text: 'Sugar cane' },
                { value: '126', text: 'Tomatoes' },
                { value: '145', text: 'Tree planting/Weeding' },
                { value: '146', text: 'Turf' },
                { value: '127', text: 'Vegetables' }, 
                { value: '147', text: 'Vine pruning' },
                { value: '148', text: 'Vine pruning/training' },
                { value: '149', text: 'Vine shoot thinning' }, 
                { value: '128', text: 'Wool' }
            ],
        }
    },

    computed: {
        // This computed value returns a value on whether or not the 'searchCity' field consists of punctuation, numbers
        // and alphabetic chars between 5 and 50 chars
        validCity() {
            return this.searchCity == "" || (/^([a-zA-Z\s\,\/\\\-\.]{5,50})+$/.test(this.searchCity))
        },

        // Computed boolean value returned based on whether 'searchPostcode' is an 4-digit number
        validPostCode() {
            return this.searchPostCode == "" || (/^([0-9]{4})$/.test(this.searchPostCode))
        },

        // Computed boolean variable returning if there are no invalid search inputs present
        invalidSearchTerms() {
            return !(this.validCity && this.validPostCode)
        },

        // Computed boolean variable returning if there is no seasonality search error
        noSeasonalityError() {
            return this.seasonalityError == null
        }
        
    },

    methods: {
        // This method sends a request to the server, requesting database information based on query
        // parameters submitted by the user. If successful, the seasonality will appear and populate with the
        // server requested data
        searchSeasonality() {
            let that = this
            this.seasonalityError = null
            let url = this.$BaseURI  + '/api/search/seasonality'
            let getQueryTerms = {}
            if(!this.invalidSearchTerms) {
                // Create getQueryTerms array from search inputs
                if(this.searchIndustries.length > 0) {
                    getQueryTerms["industry"] = this.searchIndustries.join()
                }

                if(this.searchState != null) {
                    getQueryTerms["state"] = this.searchState
                }

                if(this.searchCity != "") {
                    getQueryTerms["city"] = this.searchCity
                }

                if(this.searchPostCode != "") {
                    getQueryTerms["postcode"] = this.searchPostCode
                }

                // AXIOS
                // this.axios.get(url, { params: getQueryTerms})
                //     .then(function (response) {
                //         that.showresults = true
                //         that.seasonalityItems = response.data.seasonalityItems
                //         that.currentSeasonalityPage = 1
                //         that.seasonalityRows = that.seasonalityItems.length
                //     }).catch(function (error) {
                //         that.seasonalityError = "An error occured, please try again"
                //     })

                // Mock AXIOS success with some dummy data
                this.showResults = true
                this.seasonalityItems = [
                    { industry: "Apples", town: "Mornington Peninsula", state: "VIC", postcode: "3931", jan: 0, feb: 0, mar: 1, apr: 1, may: 1, jun: 1, jul: 1, aug: 1, sep: 1, oct: 1, nov:1, dec: 0},
                    { industry: "Apples", town: "Myrtleford", state: "VIC", postcode: "3737", jan: 1, feb: 1, mar: 1, apr: 1, may: 0, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov:0, dec: 0},
                    { industry: "Berries", town: "Lismore", state: "NSW", postcode: "2480", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, jul: 1, aug: 1, sep: 2, oct: 2, nov:2, dec: 1},
                    { industry: "Grain", town: "Spring Ridge", state: "NSW", postcode: "2343", jan: 2, feb: 2, mar: 1, apr: 1, may: 0, jun: 0, jul: 0, aug: 0, sep: 0, oct: 2, nov:2, dec: 2},
                    { industry: "Mangoes", town: "Yeppoon", state: "QLD", postcode: "4703", jan: 2, feb: 2, mar: 0, apr: 0, may: 0, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov:0, dec: 0},
                    { industry: "Vine pruning", town: "Yarra Valley", state: "VIC", postcode: "3777", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 1, jul: 1, aug: 1, sep: 0, oct: 0, nov:0, dec: 0}
                ]
                this.currentSeasonalityPage = 1
                this.seasonalityRows = 6
            }
            else {
                this.seasonalityError = "An error occured, please try again"
            }
        }
    },
};
</script>