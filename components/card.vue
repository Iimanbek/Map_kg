<template>
    <div @click="flip()" class="flex justify-center mt-[60px] w-[100%] ">
        <div :class="clickFlip ? 'notFront' : 'front'"
            class="w-[98%] bg-blue-800 rounded-[20px] h-[240px] justify-center flex-col ">
            <div class="justify-center flex flex-col h-full items-center mt-[20px]">
                <div class="justify-center flex"><img class="w-[60px]" src="../public/sharik.svg" /></div>
                <p class="justify-center flex text-white text-[60px]">Bus Pass</p>
            </div>

            <div>

            </div>
        </div>




        <div :class="clickFlip ? 'notBack' : 'back'" class="rounded-[20px] w-[98%] h-[240px] bg-blue-800">
            <div class="bg-black w-[100%] h-[60px] mt-[6%]"></div>
            <div class="flex justify-center">
                <h2 class="text-[30px] text-white my-[10px] ">Ваш баланс: 320сом</h2>
            </div>

            <div class=" flex justify-center items-center">
                <button class="px-4 rounded-[8px] h-[50px] text-blue-800 text-[20px] bg-white">
                    Пополнить баланс
                </button>
            </div>

        </div>
    </div>
</template>
<script setup lang = "ts">



let clickFlip = ref(false);



function flip() {

    console.log(clickFlip);
    clickFlip.value = !clickFlip.value;

}


</script>
