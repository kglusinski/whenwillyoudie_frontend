import Vue from 'vue';
import VueRouter from "vue-router";
import Login from "@/components/Login";
import Calculator from "@/components/Calculator";
import Register from "@/components/Register";

Vue.use(VueRouter);

const routes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/", component: Calculator }
];

export default new VueRouter({
    routes
})
