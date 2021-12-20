<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <Navigation/>
    <div class="container mx-auto">
      <Nuxt/>
    </div>
</div>
</template>

<script>
import Navigation from "~/components/Navigation";

export default {
 components: {
 Navigation,
 },
};
</script>
