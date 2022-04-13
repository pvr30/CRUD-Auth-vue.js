<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.register, .login, .add{
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
}
.register input, .login input, .add input {
        border: 2px solid blue;
    padding: 20px;
    margin: 19px;
    font-size: 20px;
    text-align: center;
}
.register button, .login button, .add button{
   cursor: pointer;
    height: 40px;
    color: white;
    background-color: #343da7;
}
</style>
