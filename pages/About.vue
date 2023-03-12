<template>
  
    <div>
      <h1 class="flex justify-center text-[30px] text-center pt-[80px] ">Как купить билеты и проездные на Bus Pass.</h1>
      <div class="mt-">

        <p class="p-[10px] flex justify-center text-[19px] text-center mt-[5%]">
          Auf SBB.ch erhalten Sie das grösste Fahrausweissortiment für den Öffentlichen Verkehr online. Ob Billette, Abos,
          Platzreservierungen für die Schweiz, ob Abos für regionale Tarifverbünde oder Fahrausweise für Reisen nach
          Europa:
          Wir bieten Ihnen Online-Kauf oder Online-Bestellung.</p>
      </div>
    </div>
    <div class="mt-[5%] flex justify-center ">
      <div>
        <input class="text-center border-[3px] w-[240px] h-[35px]" type="text" placeholder="Введите промокод">

      </div>

    </div>
    <div class="flex justify-center mt-[20px]">
      <button
        class="text-center w-[40%] bg-blue-600 rounded-[5px] h-[40px] text-[20px] font-bold text-white  pl-[10px]">Купить</button>
    </div>


    <button @click="isOpen = !isOpen"
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-150 ease-in-out">
      <span class="sr-only">Открыть меню</span>
      <svg class="block h-6 w-6" :class="{ 'hidden': isOpen }" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg class="block h-6 w-6" :class="{ 'hidden': !isOpen }" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.onClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClickOutside)
  },
  methods: {
    onClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    },
  },
}
</script>
<style></style>