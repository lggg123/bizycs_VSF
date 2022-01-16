<template>
  <SfSection :title-heading="title" class="section pdc-sec-title pdp-upsell-section">
    <SfLoader :class="{ loading }" :loading="loading">
      <SfCarousel
        ref="bscarousel"
        data-cy="related-products-carousel"
        :settings="pdpUpsellSettings"
        class="carousel"
      >
        <SfCarouselItem v-for="(product, i) in products" :key="i" class="carousel__item">
          <SfProductCard
            :title="productGetters.getName(product)"
            :image="productGetters.getPDPCoverImage(product, 'medium')"
            :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
            :wishlist-icon="false"
            :image-width="295"
            :image-height="295"
            class="pdp-product-card"
            showAddToCartButton
            :isAddedToCart="false"
            :addToCartDisabled="false"
            @click:add-to-cart="HandleAddTocart({ product, quantity:1 })"
          >
            <template #title>
              <!-- RYVIU APP :: COLLECTION-WIDGET-TOTAL -->
              <SfLink
                class="sf-product-card__link"
                :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
              >
                  <h3 class="sf-product-card__title">
                  {{ productGetters.getName(product) }}
                </h3>
              </SfLink>
            </template>
            <template #price>
              <SfPrice
                class="sf-product-card__price"
              >
                <template v-if="productGetters.getPrice(product).special" #special>
                  <ins class="sf-price__special">{{ $n(productGetters.getPrice(product).special, 'currency') }}</ins>
                </template>
                <template #old><span/></template>
                <template v-if="productGetters.getPrice(product).regular > 0" #regular>
                  <del class="sf-price__old">{{ $n(productGetters.getPrice(product).regular, 'currency') }}</del>
                </template>
              </SfPrice>
            </template>
          </SfProductCard>
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">

import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader,
  SfLink,
  SfGallery,
  SfPrice
} from '@storefront-ui/vue';
import { productGetters } from '@vue-storefront/shopify';

export default {
  name: 'RelatedProducts',
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader,
    SfLink,
    SfGallery,
    SfPrice
  },
  props: {
    title: String,
    products: Array,
    loading: Boolean
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    return { productGetters };
  },
   methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async addingToCart(Productdata) {
      await this.addItem(Productdata).then(() => {
        this.sendNotification({
          key: 'product_added',
          message: `${Productdata.product.name} has been successfully added to your cart.`,
          type: 'success',
          title: 'Product added!',
          icon: 'check'
        });
        this.qty = 1;
      });
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    updatedQuantity(value) {
      this.qty = value;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setGalleryWidth() {
      const gallary = document.getElementsByClassName('product__gallery');
      const gallerySlider =
        gallary.length > 0 && gallary[0].querySelectorAll('.glide__slides');
      const galleryAllSlides =
        gallerySlider.length > 0 &&
        gallerySlider[0].querySelectorAll('.glide__slide');
      // typeof galleryAllSlides !== 'boolean' &&
      //   galleryAllSlides.length > 0 &&
      //   galleryAllSlides.forEach((gallerySlide) => {
      //     gallerySlide.style.flexBasis = gallerySlide.style.width;
      //   });
    }
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      pdpUpsellSettings: {
        type: 'slider',
        perView: 4,
        peek: 0,
        autoplay: false,
        animationDuration: 600,
        gap: 20,
        breakpoints: {
          1023: {
            perView: 3,
            peek: {
              before: 0,
              after: 72
            }
          },
          767: {
            perView: 2,
            peek: {
              before: 0,
              after: 72
            }
          },
          510: {
            perView: 1,
            peek: {
              before: 0,
              after: 72
            }
          }
        }
      }
    };
  }
};
</script>

<style lang="scss">
.pdp-upsell-section {
  margin: 0;
  padding-bottom: 164px;
  @include for-mobile {
    padding-bottom: 40px;
  }
  .sf-section__content {
    margin: 0;
  }
  .sf-carousel {
    @include for-desktop {
      margin: 0 -10px;
    }
  }
  .sf-carousel__controls {
    display: none;
  }
  .sf-carousel__wrapper {
    max-width: 100%;
    margin: 0;
    @include for-desktop {
      padding: 10px;
    }
  }
  .glide__slide {
    height: auto;
  }
}
</style>
