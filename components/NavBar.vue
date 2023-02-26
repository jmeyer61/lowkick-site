<template>
  <div
    class="absolute flex flex-row justify-between items-center z-10 bg-accent h-fit py-2 mt-5 px-8 w-full text-white font-bold drop-shadow-lg"
  >
    <button class="hover:cursor-pointer">
        <font-awesome-icon icon="fa-solid fa-bars" class="text-secondary" />
    </button>
    <NuxtLink
        to="/"
    >
        <nuxt-img 
            :src="url"  
            width="50"
            height="50"
            class="fill-white"
        />
    </NuxtLink>
    <button class="hover:cursor-pointer">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-secondary" />
    </button>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const strapiBaseUri = config.strapiBaseUri;

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
const url = ref(strapiBaseUri + data.value?.fullQualityLogo.data.attributes.Logo.data.attributes.url)
</script>
