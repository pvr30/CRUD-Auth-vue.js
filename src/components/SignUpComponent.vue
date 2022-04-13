<template>
<h1>Sign Up</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button type="button" v-on:click="signUp">Sign Up</button>
    <br>
    <router-link to="/login">Login</router-link>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: "SignUpComponent",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                "name": this.name,
                "email": this.email,
                "password": this.password
            });
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                // after signed in redirect to the home page
                this.$router.push({
                    name: "HomeComponent"
                })
                console.log("signed in")
            }

        }
    },
    mounted() {
        let user = localStorage.getItem("user-info")
        if (user) {
            this.$router.push({
                name: "HomeComponent"
            })
        }
    }
};
</script>

<style>

</style>
