<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-fluid">
    <a class="navbar-brand" href="#">GPP System</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to=/>Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile"> Profile </router-link>
          </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/todo"> Todo </router-link>
           </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/user"> User </router-link>
           </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login"> Login </router-link>
           </li>
          </ul>
    </div>
  </div>
</nav>
 <router-view/>
</template>

