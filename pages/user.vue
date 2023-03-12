<template>
    <NuxtLayout>
        <div class="pt-[25px]">
            <div>
                <div class="flex-1 bg-white shadow-xl mt-8 mr-5 w-full relative overflow-hidden">
                    <div class="bg-blue-700 h-64 rounded-t-lg absolute w-full"></div>
                    <div class="flex flex-col overflow-y-auto h-full space-y-3 py-3">
                        <div class="flex flex-col ml-4 z-10">
                            <div class="">
                                <!-- <svg class="text-white w-10 h-10 -ml-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg> -->
                                <img class="w-8 h-8 mr-2" src="../public/sharik.svg" />
                            </div>
                            <div class="text-white text-2xl font-extrabold my-1">Bektursun</div>
                            <div class="text-gray-300 w-60 text-sm">
                                <p>E-mail: bektursun@mail.com</p>
                                <p>Bass Pass остаток: 320 сом</p>
                            </div>
                        </div>

                        <div
                            class="bg-white border-0 border-t-4 border-purple-600 rounded-b-md flex flex-col z-10 shadow-md ml-3">
                            <div class="text-sm text-black ml-3 mt-3 font-bold">Часто спрашиваемые:</div>
                            <div class="flex px-2 py-2 border-b">
                                <div class="bg-gray-300 rounded-full flex w-10 h-10 items-center justify-center">
                                    <svg class="text-white h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                </div>

                                <div class="flex flex-col">
                                    <div class="text-gray-500 text-sm ml-3 mt-0">Ак-Ордо 233Б </div>
                                    <div class="text-gray-500 text-sm ml-3 mt-0">Ала-Тоо, 12...</div>
                                </div>
                                <div class="mt-2 ml-3">
                                    <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            <div class="flex px-2 py-2">
                                <div class="bg-gray-300 rounded-full flex w-10 h-10 justify-center items-center">
                                    <svg class="text-white h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                </div>
                                <div class="flex flex-col">
                                    <div class="text-gray-500 text-sm ml-3 mt-0">Филармония...</div>
                                    <div class="text-gray-500 text-sm ml-3 mt-0">Дордой, Биримдик...</div>
                                </div>
                                <div class="mt-2 ml-3">
                                    <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div
                            class="bg-white border border-t-4 border-blue-500 rounded-md flex flex-col z-10 shadow-md ml-3 py-2">
                            <div class="text-sm text-black ml-3 mt-3 font-bold">Добавить новый маршрут</div>
                            <div class="flex flex-row p-2">
                                <input type="text" name=""
                                    class="p-2 rounded-l h-8 flex-1 bg-gray-200 shadow-inner focus:gray-200 outline-none"
                                    placeholder="From... to Somewhere..." id="" />
                                <button class="bg-blue-600 w-10 rounded-r flex items-center justify-center">
                                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div
                            class="bg-white border-0 border-t-4 border-purple-600 rounded-b-md flex flex-col items-start z-10 shadow-md ml-3 py-4">
                            <div class="text-sm text-black ml-3 mt-3 font-bold">Самые лучшие транспорты месяца</div>
                            <div class="flex px-2 py-2 gap-3">
                                <div class="flex -space-x-6">
                                    <div
                                        class="bg-gray-300 rounded-full border-2 border-black flex w-10 h-10 items-center justify-center">
                                    </div>
                                    <div
                                        class="bg-gray-300 rounded-full border-2 border-black flex w-10 h-10 items-center justify-center">
                                    </div>
                                    <div
                                        class="bg-gray-300 rounded-full border-2 border-black flex w-10 h-10 items-center justify-center">
                                    </div>

                                </div>

                                <div class="flex flex-col">
                                    <div class="text-gray-500 text-sm ml-3 mt-0">Время между транспортами</div>
                                    <div class="text-black text-sm ml-3 mt-0 font-bold">⏱ 5 minutes</div>
                                </div>
                            </div>
                            <button type="button"
                                class="flex bg-blue-700 text-sm text-white font-semibold items-center justify-center ml-3 px-4 py-2 rounded-full gap-2">
                                <!-- <svg class="text-white w-5 h-5 -ml-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg> -->
                                <img class="w-5 h-5 -ml-2" src="../public/sharik.svg" />
                                Проголосовать за любимый транспорт
                            </button>
                        </div>

                        <div
                            class="bg-white border border-t-4 border-blue-500 rounded-md flex flex-col z-10 shadow-md ml-3 py-2">
                            <div class="text-sm text-black ml-1 mt-3 font-bold">Жалобы</div>
                            <div class="bg-gray-300 h-32 mx-1 my-3">
                            </div>
                            <p class="text-sm text-gray-500 ml-1 text-justify">
                                1) Сама жалоба
                                2) Причина
                                3) Решение проблемы*
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </NuxtLayout>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>