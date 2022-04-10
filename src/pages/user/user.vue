<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { onMounted } from 'vue';
import { storeToRefs } from "pinia";


const userStore = useUserStore()
const {users} = storeToRefs(userStore)
onMounted(() => {
    userStore.getAllUsers();
})
</script>

<template>
    <div class="container mt-4">
        <h1>User List</h1>

        <table class="table table-striped table-bordered">
            <thead>
                <th>ID</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                      <button class="btn btn-secondary me-2">Edit</button>
                      <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>