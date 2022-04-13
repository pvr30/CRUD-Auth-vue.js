<template>
    <div class="navbar">
        <a href="/">Home</a>
        <a href="/add">Add Restaurant</a>
        <a href="" v-on:click="logout()">Logout</a>
    </div>
</template>

<script>
export default {
    name: "NavbarComponent",
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push({'name': 'LoginComponent'})
        }
    }
}
</script>

<style>

.navbar a{
    padding: 20px;
    font-size: 20px;
    text-decoration: none;
}
.navbar a:hover{
    color: blue;
    background-color: aqua;
}
</style>