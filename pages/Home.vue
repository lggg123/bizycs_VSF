<template>
  <div id="home">
    <SfHero class="hero">
      <!--hello -->
      <SfHeroItem
        v-for="(hero, i) in heroes"
        :key="i"
        :title="hero.title"
        :subtitle="hero.subtitle"
        :button-text="hero.buttonText"
        :background="hero.background"
        :image="hero.image"
        :class="hero.className"
        :link="hero.link"
      />
    </SfHero>
    <section class="section-box" data-section-name="homeRelatedProducts">
      <RelatedProducts
        v-if="sectionList.homeRelatedProducts"
        :products="products"
        :loading="productsLoading"
        title=""
      />
    </section>
    <section class="video-w-text">
      <div class="text-on-vid">
        <h2>Why An Electric Bike?</h2>
        <p>What makes and takes half an hour can be accomplished in a matter of 10 minutes. Imagine everything you want to do more efficiently with your bike at not only a faster pace, but more efficient.</p>
        <div class="text-button-container">
          <SfButton style="margin: 10px; border-radius: 20px;" class="sf-button-trend">Explore</SfButton>
          <SfButton style="margin: 10px; border-radius: 20px;" class="color-secondary sf-button">Buy Now!</SfButton>
        </div>
      </div>
      <div style="display: flex; width: 60%; padding: 10px;">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/azwDrXeFNUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>
<script type="module">
import {
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfImage,
  SfBannerGrid,
  SfHeading,
  SfArrow,
  SfButton
} from '@storefront-ui/vue';
import { useUiNotification } from '~/composables';
import 
  SfHero
 from "~/components/SfHero/SfHero.vue";
import {
  useProduct,
  productGetters,
  useCart
} from '@vue-storefront/shopify';
import {
  ref,
  onMounted,
  onUnmounted,
  nextTick,
  computed
} from "@nuxtjs/composition-api";
export default {
  name: 'Home',
  components: {
    SfHero,
    RelatedProducts: () => import("~/components/RelatedProducts.vue"),
    MobileStoreBanner: () => import("~/components/MobileStoreBanner.vue"),
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfImage,
    SfBannerGrid,
    SfHeading,
    SfArrow,
    SfButton,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const { addItem: addItemToCart, isInCart } = useCart();
    const { send: sendNotification } = useUiNotification();
    const {
      products: relatedProducts,
      search: productsSearch,
      loading: productsLoading
    } = useProduct('relatedProducts');
    let shownRelatedProducts = ref(false);
    const sectionList = ref({
      homeBannerGrid: false,
      homeRelatedProducts: false,
      homeNewsletters: false,
      homeMobileStoreBanner: false,
    });
    let observer;
    onMounted(() => {
      nextTick(() => {
        const visibleSection = (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
              if (entry.target.getAttribute("data-section-name")=== 'homeRelatedProducts' && !shownRelatedProducts.value){
                productsSearch({ limit: 8 });
                shownRelatedProducts.value= true;
              }
              sectionList.value[
                entry.target.getAttribute("data-section-name")
              ] = true;
            }
          });
        };
        const options = {
          rootMargin: "-50px 0px 0px 0px",
          threshold: 0,
        };
        observer = new IntersectionObserver(visibleSection, options);
        const sections = document.querySelectorAll(".section-box");
        sections &&
          sections.forEach((section) => {
            observer.observe(section);
          });
      });
    });
    onUnmounted(() => {
      observer.disconnect();
    });
    return {
      products: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      productsLoading,
      productGetters,
      sectionList,
      sendNotification,
      addItemToCart,
      isInCart
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      heroes: [
        {
          title: '',
          subtitle: '',
          buttonText: 'Buy now',
          background: '#eceff1',
          image: {
            mobile:
              'https://cdn.shopify.com/s/files/1/0618/2318/9238/files/banner02-S18_328x224.jpg?v=1641256365',
            desktop:
              'https://cdn.shopify.com/s/files/1/0618/2318/9238/files/banner02-S18.jpg?v=1641256365'
          },
          link: '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc1MDYyNDUwNTg4MDY=/aositirmotor-s18'
        },
        {
          title: '',
          subtitle: '',
          buttonText: 'Learn more',
          background: '#fce4ec',
          image: {
            mobile:
              'https://cdn.shopify.com/s/files/1/0618/2318/9238/files/S07-B_2_328x224.jpg?v=1641256365',
            desktop:
              'https://cdn.shopify.com/s/files/1/0618/2318/9238/files/S07-B_2.jpg?v=1641256365'
          },
          link: '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc1MDYyMzk2MTkzMTg=/aositirmotor-s07'
        },
        {
          title: '',
          subtitle: '',
          buttonText: 'Shop now',
          background: '#efebe9',
          image: {
            mobile:
              'https://cdn.shopify.com/s/files/1/0618/2318/9238/files/10.jpg?v=1640313974',
            desktop:
              'https://cdn.shopify.com/s/files/1/0618/2318/9238/files/10.jpg?v=1640313974'
          },
          link: '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc1MDYyMTk1NjUzMDI=/aositirmotor-a-20',
          className:
            'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
        }
      ]
      // banners: [
      //   {
      //     slot: 'banner-A',
      //     subtitle: 'Dresses',
      //     title: 'Cocktail & Party',
      //     description:
      //       'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
      //     buttonText: 'Shop now',
      //     image: {
      //       mobile:
      //         'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x343.jpg',
      //       desktop:
      //         'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerF_332x840.jpg'
      //     },
      //     class: 'sf-banner--slim desktop-only',
      //     link: '/c/women/women-clothing-skirts'
      //   },
      //   {
      //     slot: 'banner-B',
      //     subtitle: 'Dresses',
      //     title: 'Linen Dresses',
      //     description:
      //       'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
      //     buttonText: 'Shop now',
      //     image: {
      //       mobile:
      //         'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_328x343.jpg',
      //       desktop:
      //         'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_496x840.jpg'
      //     },
      //     class: 'sf-banner--slim banner-central desktop-only',
      //     link: '/c/women/women-clothing-dresses'
      //   },
      //   {
      //     slot: 'banner-C',
      //     subtitle: 'T-Shirts',
      //     title: 'The Office Life',
      //     image: {
      //       mobile:
      //         'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_328x343.jpg',
      //       desktop:
      //         'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_332x400.jpg'
      //     },
      //     class: 'sf-banner--slim banner__tshirt',
      //     link: '/c/women/women-clothing-shirts'
      //   },
      //   {
      //     slot: 'banner-D',
      //     subtitle: 'Summer Sandals',
      //     title: 'Eco Sandals',
      //     image: {
      //       mobile:
      //         'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_328x343.jpg',
      //       desktop:
      //         'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_332x400.jpg'
      //     },
      //     class: 'sf-banner--slim',
      //     link: '/c/women/women-shoes-sandals'
      //   }
      // ]
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toggleWishlist(index) {
      this.products[index].isInWishlist = !this.products[index].isInWishlist;
    }
  }
};
</script>

<style lang="postcss" scoped>
.section-box {
  min-height: 30vh;
}
.article-meta h4 a {
  color: #111111;
  font-weight: 600;
  font-size: 20px;
}
.article-meta {
  margin-top: 10px;
}
.article-item__meta-item:not(:last-child)::after {
  display: inline-block;
  content: "";
  width: 5px;
  height: 5px;
  margin: -1px 10px 0 10px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.4);
  vertical-align: middle;
}
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    max-width: 1240px;
    padding: 0;
    margin: 0 auto;
  }
}

.sf-button-trend {
  color: black;
  background: white;
  border: 1px solid black;
}

.hero {
  margin: var(--spacer-xl) auto var(--spacer-lg);
  --hero-item-background-position: center;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-xl) auto var(--spacer-2xl);
  }
  .sf-hero-item {
    &:nth-child(even) {
      --hero-item-background-position: left;
      @include for-mobile {
        --hero-item-background-position: 30%;
        --hero-item-wrapper-text-align: right;
        --hero-item-subtitle-width: 100%;
        --hero-item-title-width: 100%;
        --hero-item-wrapper-padding: var(--spacer-sm) var(--spacer-sm)
          var(--spacer-sm) var(--spacer-2xl);
      }
    }
  }
}

::v-deep .sf-hero__controls {
  --hero-controls-display: none;
}

.banner-grid {
  --banner-container-width: 50%;
  margin: var(--spacer-xl) 0;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
    ::v-deep .sf-link {
      --button-width: auto;
    }
  }
}

.banner {
  &__tshirt {
    background-position: left;
  }
  &-central {
    @include for-desktop {
      --banner-container-flex: 0 0 70%;
    }
  }
}

.similar-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--spacer-2xs);
  --heading-padding: 0;
  border-bottom: 1px var(--c-light) solid;
  @include for-desktop {
    border-bottom: 0;
    justify-content: center;
    padding-bottom: 0;
  }
}

.call-to-action {
  background-position: right;
  margin: var(--spacer-xs) 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
}

.video-w-text{
  display: flex; 
}

.text-on-vid {
    width: 40%;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .video-w-text {
    flex-direction: column;
  }

  .text-on-vid {
    width: 100%;
  }
}

.text-button-container{
  display: flex;
}

.carousel {
  margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.375rem 0 2.5rem 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
    }
    &__product {
      --product-card-add-button-transform: translate3d(0, 30%, 0);
    }
  }
}
</style>
