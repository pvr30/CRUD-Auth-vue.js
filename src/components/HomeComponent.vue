<template>
<NavbarComponent />
<h1>Hello {{name}} Welcome to Home Page</h1>
<table>
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Action</td>

    </tr>
    <tr v-for="item in restaurants" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.contact}}</td>
        <td>{{item.address}}</td>
        <td>
            <router-link :to="'/update/' + item.id">Update</router-link>
            <button v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>

    </tr>
</table>
</template>

<script>
import axios from 'axios'
import NavbarComponent from "./NavbarComponent.vue"
export default {
    name: "HomeComponent",
    components: {
        NavbarComponent
    },
    data() {
        return {
            name: "",
            restaurants: []
        }
    },
    methods: {
        async deleteRestaurant(id){
            let result = await axios.delete("http://localhost:3000/restaurant/" + id)
            if (result.status == 200){
                    let response = await axios.get("http://localhost:3000/restaurant")
                    this.restaurants = response.data
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info")
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({
                name: "SignUpComponent"
            })
        }
        let response = await axios.get("http://localhost:3000/restaurant")
        this.restaurants = response.data
    }
}
</script>

<style>
table {
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
}

td {
    border: 1px solid black;
    width: 200px;
    height: 30px;
}
</style>
