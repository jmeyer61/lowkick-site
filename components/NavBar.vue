<template>
  <div
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
  </div>
  <div
    class="absolute flex flex-row justify-between items-center z-10 bg-accent h-fit py-2 mt-5 px-8 w-full text-white font-bold drop-shadow-lg"
  >
    <button class="hover:cursor-pointer" @click="menuOpen = !menuOpen">
      <font-awesome-icon icon="fa-solid fa-bars" class="text-secondary" />
    </button>
    <NuxtLink to="/">
      <nuxt-img :src="url" width="50" height="50" class="fill-white" />
    </NuxtLink>
    <button class="hover:cursor-pointer">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="text-secondary"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const strapiBaseUri = config.strapiBaseUri;
const menuOpen = ref(false);

type Logo = {
  fullQualityLogo: {
    data: {
      attributes: {
        Logo: {
          data: {
            attributes: {
              url: String;
            };
          };
        };
      };
    };
  };
};

const query = gql`
  query {
    fullQualityLogo {
      data {
        attributes {
          Logo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const { data, error, refresh } = await useAsyncQuery<Logo>(query);
const url = ref(
  strapiBaseUri +
    data.value?.fullQualityLogo.data.attributes.Logo.data.attributes.url
);

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
