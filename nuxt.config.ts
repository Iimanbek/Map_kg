// // https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from "nuxt/config"
// export default defineNuxtConfig({
//     // modules: ['@nuxtjs/tailwindcss']
//     build: {
//         postcss: {
//           postcssOptions: {
//             plugins: {
//               tailwindcss: {},
//               autoprefixer: {},
//             },
//           },
//         },
//       },
//       css: [
//         "@/assets/css/tailwind"
//        ]
// })
// import { defineNuxtConfig } from '#imports'

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
});
