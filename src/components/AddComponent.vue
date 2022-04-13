<template>
<NavbarComponent />
<h1>This is Add Page</h1>
<div class="add">
    <input type="text" placeholder="Enter name" v-model="restaurant.name">
    <input type="text" placeholder="Enter contact" v-model="restaurant.contact">
    <input type="text" placeholder="Enter address" v-model="restaurant.address">
    <button type="button" v-on:click="addrestaurant()">Add Restaurant</button>
</div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue"
import axios from "axios"

export default {
    name: "AddComponent",
    components: {
        NavbarComponent,
    },
    data() {
        return {
            restaurant: {
                name: "",
                contact: "",
                address: ""
            }
        }
    },
    methods: {
        async addrestaurant() {
            let result = await axios.post("http://localhost:3000/restaurant", {
                "name": this.restaurant.name,
                "contact": this.restaurant.contact,
                "address": this.restaurant.address
            });
            if (result.status == 201) {
                this.$router.push({
                    name: "HomeComponent"
                })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info")
        if (!user) {
            this.$router.push({
                name: "LoginComponent"
            })
        }

    }
}
</script>

<style>

</style>
