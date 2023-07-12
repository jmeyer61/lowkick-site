<template>
  <div class="h-full w-screen min-h-screen overflow-hidden bg-primary">
    <!-- <div
      v-for="(article, index) in data?.articles?.data"
      :key="index"
      class="flex flex-row w-5/6 mx-auto space-between space-x-8"
    >
      <div class="flex flex-col items-start space-y-4 grow">
        <h1 class="text-xl font-semibold">
          {{ article.attributes.Title }}
        </h1>
        <p class="text-base whitespace-pre-line">
          {{ article.attributes.Content }}
        </p>
      </div>
      <div class="grow">
        <nuxt-img :src="config.strapiBaseUri+article.attributes.Image.data.attributes.url" class="object-cover" />
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const strapiBaseUri = config.strapiBaseUri;


</script>

<style scoped>

</style>
