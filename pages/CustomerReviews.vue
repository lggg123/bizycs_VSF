<template>
    <SFReview
        author="John Andrew"
        date="4 February 2020"
        message="I never thought I would replace my car with an electric bicycle but when everything occured and I didnt have to commute to work anymore. It was a solid choice"
        :rating="4"
        :maxRating="5"
        :charLimit="250"
        readMoreText=""
        hideFullText=""
    />
</template>
<script>
import { SfReview } from '@storefront-ui/vue';

export default {
    components: {
        SfReview
    }
};
</script>
