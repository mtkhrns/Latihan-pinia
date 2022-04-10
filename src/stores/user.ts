import { defineStore } from "pinia";

type User = {
    id: number;
    name: string;
    email: string;
}

type UserState = {
    users: User[];
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        users: [],
    }),
    actions: {
        getAllUsers() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    this.users = json
                });
        },
    },
});