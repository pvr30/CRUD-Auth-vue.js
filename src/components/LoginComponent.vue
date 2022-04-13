<template>
<h1>Login</h1>
<div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button type="button" v-on:click="login()">Login</button>
    <br>
    <router-link to="/signup">SignUp</router-link>
</div>    
</template>

<script>
import axios from "axios"
export default {
    name: "LoginComponent",
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods:{
        async login(){
            let result = await axios.get(
                `http://localhost:3000/users/?email=${this.email}&password=${this.password}`
            )
             if(result.status == 200 && result.data.length > 0){
                 localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                     console.log("logged in")
                 this.$router.push({name: "HomeComponent"})
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
}
</script>


<style>

</style>