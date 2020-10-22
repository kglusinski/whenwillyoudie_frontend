import Vue from 'vue';
import VueRouter from "vue-router";
import Login from "@/components/Login";
import Calculator from "@/components/Calculator";

Vue.use(VueRouter);

const routes = [
    { path: "/login", component: Login },
    { path: "/", component: Calculator }
];

export default new VueRouter({
    routes
})
