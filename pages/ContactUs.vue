<template>
<div>
  <h1>Contact Us</h1>
  <form class="vue-form" @submit.prevent="submit">

    <div class="error-message">
      <p v-show="!email.valid">Oh, please enter a valid email address.</p>
    </div>

    <fieldset>
      <legend>Vue Contact Form</legend>
      <div>
        <label class="label" for="name">Name</label>
        <input type="text" name="name" id="name" required="" v-model="name">
      </div>
      <div>
        <label class="label" for="email">Email</label>
        <input type="email" name="name" id="email" required="" :class="{ email, error: !email.valid }" v-model="email.value">
      </div>
      <div>
        <label class="label" for="textarea">Message with Counter</label>
        <textarea class="message" name="textarea" id="textarea" required="" v-model="message.text" :maxlength="message.maxlength"></textarea>
        <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
      </div>
      <div>
        <input type="submit" value="Send Form">
      </div>
    </fieldset>
  </form>

  <div class="debug">
    <pre><code>{{ $data }}</code></pre>
  </div>
</div>
</template>

<style lang="scss" scoped>
.debug {
  display: none;
}
</style>

<script>
import { useContent } from '@vue-storefront/shopify';
import { onSSR } from '@vue-storefront/core';

export default {
  name: 'ContactUs',
  transition: 'fade',
  setup() {
    const {
      loading: contextsLoading,
      content,
      search
    } = useContent('pageContents');
    var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    onSSR(async () => {
      await search({ slug: 'ContactUs', ContentType: 'page' });
    });
    return {
      content,
      contextsLoading,
      emailRegExp
    };
  },
  data() {
    return {
      name: "",
      email: {
        value: "",
        valid: true
      },
      message: {
        text: `Dear Mr.President,\n...`,
        maxlength: 255
      },
      submitted: false
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      this.submitted = true;
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value)
      }
    },
    // Check for valid email address
    isEmail: function(value) {
      return emailRegExp.test(value);
    }
  },
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value)
    }
  }
};
</script>
