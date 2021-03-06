<template>
  <div>
    <!-- <TopBar class="desktop-only" /> -->
    <AppHeader
      :cartTotalItems="getCartTotalItems"
      :isUserAuthenticated="getUserStatus"
    />
    <div id="layout">
      <nuxt :key="$route.fullPath" />
      <AppFooter />
      <client-only>
        <BottomNavigation />
      </client-only>
      <client-only>
        <CartSidebar />
      </client-only>
      <client-only>
        <WishlistSidebar />
      </client-only>
      <client-only>
        <LoginModal />
      </client-only>
      <client-only>
        <Notification />
      </client-only>
    </div>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import TopBar from "~/components/TopBar.vue";
import { useUser, userGetters } from "@vue-storefront/shopify";
import { computed, onBeforeMount} from "@nuxtjs/composition-api";

export default {
  name: "DefaultLayout",
  components: {
    TopBar,
    AppHeader,
    BottomNavigation: () => import("~/components/BottomNavigation.vue"),
    AppFooter: () => import("~/components/AppFooter.vue"),
    CartSidebar: () => import("~/components/CartSidebar.vue"),
    WishlistSidebar: () => import("~/components/WishlistSidebar.vue"),
    LoginModal: () => import("~/components/LoginModal.vue"),
    Notification: () => import("~/components/Notification"),
  },
  setup(props, {root}){
    const { user: userInfo, load: loadUser } = useUser();
    const firstName = computed(() => userGetters.getFirstName(userInfo.value));
    const getUserStatus = computed(() => (firstName.value ? true : false));
    const getCartTotalItems = computed(
         () => root.$store.state.cartTotal
    );
    onBeforeMount(async () => {
      await loadUser();
    });
    return{
      getUserStatus,
      getCartTotalItems
    }
  }
};
</script>

<style lang="scss">
@import "~@storefront-ui/vue/styles";

#layout {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }

  --c-primary: #000000;
  --c-primary-lighten: #292c30;
  --c-primary-variant: #708090;
  --c-secondary: #292c30;
  --c-text: #000000;
  --c-success-variant: #72757E;
  --c-link: #72757E;
  --c-primary-hover: #72757E;
  --c-hover: #72757E;
}

.sf-menu-item{
  &:hover{
    --menu-item-label-color: #72757E;
  }
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

// Reset CSS
html {
  width: auto;
  @include for-mobile {
    overflow-x: hidden;
  }
}
body {
  overflow-x: hidden;
  color: var(--c-text);
  font-size: var(--font-size--base);
  font-family: var(--font-family--primary);
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: var(--c-link);
  &:hover {
    color: var(--c-link-hover);
  }
}
h1 {
  font-family: var(--font-family--secondary);
  font-size: var(--h1-font-size);
  line-height: 1.6;
  margin: 0;
}
h2 {
  font-family: var(--font-family--secondary);
  font-size: var(--h2-font-size);
  line-height: 1.6;
  margin: 0;
}
h3 {
  font-family: var(--font-family--secondary);
  font-size: var(--h3-font-size);
  line-height: 1.6;
  margin: 0;
}
h4 {
  font-family: var(--font-family--secondary);
  font-size: var(--h4-font-size);
  line-height: 1.6;
  margin: 0;
}
</style>


