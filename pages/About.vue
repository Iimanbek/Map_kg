<template>
  <NuxtLayout>
    <div>
      <h1 class="flex justify-center text-[30px] text-center pt-[80px] ">Как купить билеты и проездные на Bus Pass.</h1>
      <div class="mt-">

        <p class="p-[10px] flex justify-center text-[19px] text-center mt-[5%]">
          Вы можете пополнить онлайн через банковские приложения или онлайн кошельки,
          а также через ближайшие терминалы.
        </p>
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
    <div>


      <div class="bg-gray-100 w-[100%] h-[500px] flex justify-center mt-[100px] fixed top-0 left-0 z-40 overflow-hidden"
        v-if="isExpanded">
        <button class="mr-4 flex justify-end text-[28px] p-[8px] font-roboto " @click="togglePanel">
          X
        </button>

        <div class="">
          <h1 class="mt-[50px] text-[25px] p-[5px]">
            Как получить?
          </h1>
          <p class="text-[17px] mt-[20px] p-[5px] leading-8">Транспортная карта Bus Pass предназначена для проезда жителей
            и гостей Республики Кыргызстан
            на общественном транспортe
            ​
            Приобрести транспортную карту можно в центре обслуживания пользователей по адресу:

            720031, г.Бишкек,

            Тел: +996 505 123 345

            Также, приобрести транспортную карту можно у водителей автобусов.</p>
        </div>

      </div>

      <div class="flex items-center justify-center h-20 bg-white shadow">
        <button class="mr-4" @click="togglePanel">
          Как получить Bus Pass?
        </button>

      </div>


    </div>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    togglePanel() {
      this.isExpanded = !this.isExpanded;
    }
  }
}
</script>

