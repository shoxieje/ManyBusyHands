<template>
    <section class="signup-top">
        <b-container class="container-signup">
            <b-form id="business-signup-form" class="text-primary">
                <!-- <h2 class="title-signup">
                    Enter your business email and password
                </h2> -->
                <div class="business-signup-box">
                    <div>
                        <!-- EMAIL AND PASSWORD INPUTS -- v2 -->

                        <b-row class="my-1">
                            <label for="email" class="required-field"
                                >Email
                            </label>
                            <b-form-input
                                id="email"
                                type="email"
                                v-model="email"
                            ></b-form-input>
                        </b-row>

                        <b-row class="my-1">
                            <label for="password" class="required-field"
                                >Password</label
                            >
                            <b-form-input
                                id="password"
                                type="password"
                                v-model="password"
                            ></b-form-input>
                        </b-row>
                    </div>
                </div>
            </b-form>
        </b-container>
    </section>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
        };
    },
};
</script>

<style></style>
