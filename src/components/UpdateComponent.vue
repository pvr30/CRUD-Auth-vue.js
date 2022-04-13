<template>
<NavbarComponent />
<h1>This is Update Page</h1>
<div class="add">
    <input type="text" placeholder="edit name" v-model="restaurant.name">
    <input type="text" placeholder="edit contact" v-model="restaurant.contact">
    <input type="text" placeholder="edit address" v-model="restaurant.address">
    <button type="button" v-on:click="updateRestaurant()">Update Restaurant</button>
</div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue"
import axios from "axios"

export default {
    name: "UpdateComponent",
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
        async updateRestaurant() {
            let result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id, {
                "name": this.restaurant.name,
                "contact": this.restaurant.contact,
                "address": this.restaurant.address
            });
            if (result.status == 200) {
                this.$router.push({
                    name: "HomeComponent"
                })
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info")
        if (!user) {
            this.$router.push({
                name: "LoginComponent"
            })
        }

        let result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id)
        this.restaurant = result.data

    }
}
</script>

<style>

</style>
