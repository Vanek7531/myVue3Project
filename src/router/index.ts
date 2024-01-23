import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import ArticleView from "../views/ArticleView.vue";
import DigestView from "../views/DigestView.vue";
import QuestionsView from "../views/QuestionsView.vue";
import QuestionView from "../views/QuestionView.vue";
import SpecialistsView from "../views/SpecialistsView.vue";
import SpecialistView from "../views/SpecialistView.vue";
import UserAccountView from "../views/UserAccountView.vue";
import LoginView from "../views/LoginView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import RecoveryView from "../views/RecoveryView.vue";
import FrequentQuestionsView from "../views/FrequentQuestionsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import SupportServiceView from "../views/SupportServiceView.vue";
import SearchView from "../views/SearchView.vue";
import CrmView from "../views/CrmView.vue";
import AboutUs from "../views/AboutUs.vue";
import TheOfferAgreement from "../views/TheOfferAgreement.vue";
import ReviewsService from "../views/ReviewsService.vue";
// import httpService from "@/api/server";
import axios from "axios";
import { logOut } from "@/use/useAuthorization";
import { openNewSocket } from "@/use/alerts";
import { refreshToken } from "@/use/helper";
import { socketIo } from "@/use/soketIo";
// 1
import UserAllBase from "@/components/userAccount/UserAllBase.vue";
import UserAllCity from "@/components/userAccount/UserAllCity.vue";
import UserAllForm from "@/components/userAccount/UserAllForm.vue";
import UserAllServices from "@/components/userAccount/UserAllServices.vue";
import UserAllExperience from "@/components/userAccount/UserAllExperience.vue";
import UserAllCloud from "@/components/userAccount/UserAllCloud.vue";
import UserAllSafety from "@/components/userAccount/UserAllSafety.vue";
import UserAllAlert from "@/components/userAccount/UserAllAlert.vue";
import UserAllPayment from "@/components/userAccount/UserAllPayment.vue";
import UserAllTariffs from "@/components/userAccount/UserAllTariffs.vue";
import UserAllLongTariffs from "@/components/userAccount/UserAllLongTariffs.vue";
// 2
const { openSoketIo } = socketIo();

const isUserAuth = (to: any, from: any, next: any) => {
  if (sessionStorage.getItem("isUserAuth") === "yes") {
    let auth = sessionStorage.getItem("tokenAccess");
    if (!auth) return;
    // else {
    auth = auth.slice(1, 5).includes("ey") ? auth?.slice(1, -1) : auth;
    // }
    axios
      .post(`${import.meta.env.VITE_APP_BACK_URL}/api/token/verify/`, {
        token: auth,
      })
      .then((response: any) => {
        if (!auth) return;
        openSoketIo();
        // Token is valid, so continue
        next();
      })
      .catch((error: any) => {
        // There was an error so redirect
        refreshToken().then((response: any) => {
          if (response && response.data.access) {
            sessionStorage.setItem("tokenAccess", response.data.access);
            next();
          } else {
            logOut();
            next({ name: "Login" });
          }
        });
        // logOut();
        // next({ name: "Login" });
        // window.location.href = "/login";
      });
    // next();
  } else {
    // logOut();
    next({ name: "Login" });
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
      // beforeEnter: isUserAuth,
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticlesView,
      // beforeEnter: isUserAuth,
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      // beforeEnter: isUserAuth,
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/article/:articleSlug",
      name: "article",
      component: ArticleView,
      // beforeEnter: isUserAuth,
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/digest/:articleSlug",
      name: "digest",
      component: DigestView,
      // beforeEnter: isUserAuth,
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/questions",
      name: "questions",
      component: QuestionsView,
      // beforeEnter: isUserAuth,
    },
    {
      path: "/frequent-questions",
      name: "frequent",
      component: FrequentQuestionsView,
      // beforeEnter: isUserAuth,
    },
    {
      path: "/question/:questionSlug",
      name: "question",
      component: QuestionView,
      // beforeEnter: isUserAuth,
    },
    {
      path: "/specialists",
      name: "specialists",
      component: SpecialistsView,
      // beforeEnter: isUserAuth,
    },
    {
      path: "/specialists/:id",
      name: "specialist",
      component: SpecialistView,
      // beforeEnter: isUserAuth,
    },
    {
      path: "/userAccount",
      name: "userAccount",
      component: UserAccountView,
      beforeEnter: isUserAuth,
      children: [
        {
          path: "UserAllBase",
          component: UserAllBase,
        },
        {
          path: "UserAllCity",
          component: UserAllCity,
        },
        {
          path: "UserAllForm",
          component: UserAllForm,
        },
        {
          path: "UserAllServices",
          component: UserAllServices,
        },
        {
          path: "UserAllExperience",
          component: UserAllExperience,
        },
        {
          path: "UserAllCloud",
          component: UserAllCloud,
        },
        {
          path: "UserAllSafety",
          component: UserAllSafety,
        },
        {
          path: "UserAllAlert",
          component: UserAllAlert,
        },
        {
          path: "UserAllPayment",
          component: UserAllPayment,
        },
        {
          path: "UserAllTariffs",
          component: UserAllTariffs,
        },
        {
          path: "UserAllLongTariffs",
          component: UserAllLongTariffs,
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationView,
    },
    {
      path: "/reset-password/",
      name: "recovery",
      component: RecoveryView,
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFoundPage",
      component: NotFoundView,
    },
    {
      path: "/support-service",
      name: "support service",
      component: SupportServiceView,
      beforeEnter: isUserAuth,
    },
    {
      path: "/user-crm",
      name: "user crm",
      component: CrmView,
      beforeEnter: isUserAuth,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
      beforeEnter: isUserAuth,
    },
    {
      path: "/offer-agreement",
      name: "offer-agreement",
      component: TheOfferAgreement,
      beforeEnter: isUserAuth,
    },
    {
      path: "/reviews-service",
      name: "reviews-service",
      component: ReviewsService,
      beforeEnter: isUserAuth,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "recovery",
    //   component: RecoveryView,
    // },
  ],
});

export default router;
