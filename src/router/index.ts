import LoginComponentVue from "@/components/LoginComponent.vue";
import AuthComponentVue from "@/components/AuthComponent.vue";
import GuestComponentVue from "@/components/GuestComponent.vue";

export const routes = [
  { path: "/login", component: LoginComponentVue },
  {
    path: "/register",
    component: () => import("@/components/RegisterComponent.vue"),
  },
  {
    path: "/auth-only",
    component: AuthComponentVue,
    meta: { requiresAuth: true },
  },
  {
    path: "/guest-only",
    component: GuestComponentVue,
    meta: { requiresGuest: true },
  },
];
