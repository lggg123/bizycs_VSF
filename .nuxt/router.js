import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27a8b504 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _29f2d1c6 = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _4e0f3512 = () => interopDefault(import('../pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _2682f1c6 = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _98dcb8b2 = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _c5c12164 = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _a05b1ae4 = () => interopDefault(import('../pages/ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _1306cee6 = () => interopDefault(import('../pages/CustomerReviews.vue' /* webpackChunkName: "pages/CustomerReviews" */))
const _31718e27 = () => interopDefault(import('../pages/CustomerService.vue' /* webpackChunkName: "pages/CustomerService" */))
const _dee08e42 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _4f81ad11 = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _2a2a88e6 = () => interopDefault(import('../pages/MyAccount/AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _7a8ec155 = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _766c28d8 = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _9a126fda = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _e0c9fc82 = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _51c4399e = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _e3882d18 = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _f1b65dd4 = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _11a686ba = () => interopDefault(import('../pages/ResetPassword.vue' /* webpackChunkName: "" */))
const _3170f8b6 = () => interopDefault(import('../pages/PurchaseTerms.vue' /* webpackChunkName: "" */))
const _89f823a4 = () => interopDefault(import('../pages/Shipping.vue' /* webpackChunkName: "" */))
const _48bf99dd = () => interopDefault(import('../pages/WhatWeDo.vue' /* webpackChunkName: "" */))
const _64e55708 = () => interopDefault(import('../pages/WhoWeAre.vue' /* webpackChunkName: "" */))
const _d5e563c2 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _27a8b504,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _29f2d1c6,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _4e0f3512,
      name: "billing___en"
    }, {
      path: "payment",
      component: _2682f1c6,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _98dcb8b2,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _c5c12164,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _29f2d1c6,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _4e0f3512,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _2682f1c6,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _98dcb8b2,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _c5c12164,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _a05b1ae4,
    name: "ContactUs___en"
  }, {
    path: "/CustomerReviews",
    component: _1306cee6,
    name: "CustomerReviews___en"
  }, {
    path: "/CustomerService",
    component: _31718e27,
    name: "CustomerService___en"
  }, {
    path: "/de",
    component: _dee08e42,
    name: "home___de"
  }, {
    path: "/Home",
    component: _dee08e42,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _4f81ad11,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _2a2a88e6,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _7a8ec155,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _766c28d8,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _9a126fda,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _e0c9fc82,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _51c4399e,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _e3882d18,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _f1b65dd4,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/reset-password",
    component: _11a686ba,
    name: "reset-password___en"
  }, {
    path: "/de/Category",
    component: _27a8b504,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _29f2d1c6,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _4e0f3512,
      name: "billing___de"
    }, {
      path: "payment",
      component: _2682f1c6,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _98dcb8b2,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _c5c12164,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _29f2d1c6,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _4e0f3512,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _2682f1c6,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _98dcb8b2,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _c5c12164,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _a05b1ae4,
    name: "ContactUs___de"
  }, {
    path: "/de/CustomerReviews",
    component: _1306cee6,
    name: "CustomerReviews___de"
  }, {
    path: "/de/CustomerService",
    component: _31718e27,
    name: "CustomerService___de"
  }, {
    path: "/de/Home",
    component: _dee08e42,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _4f81ad11,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _2a2a88e6,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _7a8ec155,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _766c28d8,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _9a126fda,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _e0c9fc82,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _51c4399e,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _e3882d18,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _f1b65dd4,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/reset-password",
    component: _11a686ba,
    name: "reset-password___de"
  }, {
    path: "/pages/contact-us",
    component: _a05b1ae4,
    name: "ContactUs___en"
  }, {
    path: "/pages/customer-reviews",
    component: _1306cee6,
    name: "CustomerReviews___en"
  }, {
    path: "/pages/customer-service",
    component: _31718e27,
    name: "CustomerService___en"
  }, {
    path: "/pages/purchase-terms",
    component: _3170f8b6,
    name: "PurchaseTerms___en"
  }, {
    path: "/pages/shipping",
    component: _89f823a4,
    name: "Shipping___en"
  }, {
    path: "/pages/what-we-do",
    component: _48bf99dd,
    name: "WhatWeDo___en"
  }, {
    path: "/pages/who-we-are",
    component: _64e55708,
    name: "WhoWeAre___en"
  }, {
    path: "/de/pages/contact-us",
    component: _a05b1ae4,
    name: "ContactUs___de"
  }, {
    path: "/de/pages/customer-reviews",
    component: _1306cee6,
    name: "CustomerReviews___de"
  }, {
    path: "/de/pages/customer-service",
    component: _31718e27,
    name: "CustomerService___de"
  }, {
    path: "/de/pages/purchase-terms",
    component: _3170f8b6,
    name: "PurchaseTerms___de"
  }, {
    path: "/de/pages/shipping",
    component: _89f823a4,
    name: "Shipping___de"
  }, {
    path: "/de/pages/what-we-do",
    component: _48bf99dd,
    name: "WhatWeDo___de"
  }, {
    path: "/de/pages/who-we-are",
    component: _64e55708,
    name: "WhoWeAre___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _4f81ad11,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _d5e563c2,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _27a8b504,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _4f81ad11,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _d5e563c2,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _27a8b504,
    name: "category___en"
  }, {
    path: "/",
    component: _dee08e42,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
