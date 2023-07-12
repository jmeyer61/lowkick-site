<template>
  <div
    class="absolute flex flex-row justify-between items-center z-10 bg-accent h-fit py-4 px-8 w-full text-white font-bold drop-shadow-lg"
  >
    <NuxtLink to="/">
        <nuxt-img :src="logoUrl" width="50" height="50" class="fill-white" />
    </NuxtLink>
    <button class="hover:cursor-pointer" @click="menuOpen = !menuOpen">
      <!-- <font-awesome-icon icon="fa-solid fa-bars" class="text-secondary text-lg" /> -->
    </button>
  </div>

  <!-- <div
    class="fixed w-3/4 h-screen z-20 bg-accent transition-all duration-[350ms] ease-in-out rounded-tr-xl"
    :class="{
      '-translate-x-full': !menuOpen,
    }"
  >
    <button 
        class="absolute top-0 right-0 px-4 py-2.5 text-white text-xl hover:text-gray-400 focus:text-gray-400 active:text-gray-400 focus:scale-75 active:scale-75 transition-all duration-250 ease-in-out"
        @click="menuOpen = false"
    >
        <font-awesome-icon icon="fa-solid fa-caret-left" class="" />
    </button>
    <ul class="flex flex-col items-start w-full h-full py-10 rounded-tr-xl overflow-hidden">
      <li 
        v-for="(item, index) in links"
        :key="index"
        class="w-full flex odd:brightness-110"
      >
        <NuxtLink 
            class="w-full grow text-center px-6 py-6 bg-accent/75 hover:bg-primary focus:bg-primary focus:brightness-125 hover:brightness-125 hover:cursor-pointer transition-all duration-250 ease-in-out"
            :to="item.link"
        >
            {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div> -->
</template>

<script setup lang="ts">
import { Strapi4RequestParams } from '@nuxtjs/strapi/dist/runtime/types';
import type { Logo } from '~/types'
const config = useRuntimeConfig();
const menuOpen = ref(false);
const strapiBaseUri = config.strapiBaseUri;

const { findOne } = useStrapi()
const params : Strapi4RequestParams = {
  populate: 'Image'
}

const logo = 
  await findOne<Logo>('logo', params)
    .catch((error) => {
      console.log(error)
    })

const logoUrl = ref(strapiBaseUri + logo?.data.attributes?.Image?.data.attributes?.url)

const links = ref([
    {
        name: 'Upcoming Events',
        link: '/upcoming-events'
    },
    {
        name: 'Contact Us',
        link: '/partner'
    },
    {
        name: 'Stream',
        link: '/stream'
    },
    {
        name: 'About Us',
        link: '/about-us'
    },
])
</script>
