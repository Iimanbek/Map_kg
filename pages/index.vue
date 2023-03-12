<template>
    <div>
        <NuxtLayout>
            <div class="grid pt-[80px]">
                <div class="flex flex-col gap-4 justify-self-center [&_*]:border-2 [&_*]:border-blue-800 [&_*]:p-2">
                    <input placeholder="Введите Ваше местоположение" />
                    <input placeholder="Введите куда Вы направляетесь" />
                </div>
                <button @click="showMap()"
                    class="flex justify-self-center bg-blue-800 rounded-[10px] text-white m-4 py-3 px-5">Найти
                    маршрут</button>
            </div>
            <div v-if="map">
                <img src="easy.gif" />
            </div>
            <div v-if="!map">
                <div style="position:relative;overflow:hidden;"><a
                        href="https://yandex.ru/maps/10309/bishkek/?utm_medium=mapframe&utm_source=maps"
                        style="color:#eee;font-size:12px;position:absolute;top:0px;">Бишкек</a><a
                        href="https://yandex.ru/maps/geo/771290125/?ll=74.586871%2C42.899532&rtext=55.909968%2C37.736743~55.743692%2C37.567571&rtn=2&rtt=mt&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA2MzU1OBI_0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JzRi9GC0LjRidC4IgoNbfIWQhXOo19C~ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858821&utm_medium=mapframe&utm_source=maps&z=11.58"
                        style="color:#eee;font-size:12px;position:absolute;top:14px;">Бишкек — Яндекс Карты</a><iframe
                        src="https://yandex.ru/map-widget/v1/?ll=74.586871%2C42.899532&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyOTAxMjUSItCa0YvRgNCz0YvQt9GB0YLQsNC9LCDQkdC40YjQutC10LoiCg0YNZVCFf6AK0I%2C&rtext=55.909968%2C37.736743~55.743692%2C37.567571&rtn=2&rtt=mt&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA2MzU1OBI_0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JzRi9GC0LjRidC4IgoNbfIWQhXOo19C~ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858821&z=11.58"
                        width="100%" height="400" frameborder="1" allowfullscreen="true"
                        style="position:relative;"></iframe>
                </div>
            </div>
            <div>
                <card />
            </div>
            <div>

            </div>
            <div>
                <Cotent />
            </div>

        </NuxtLayout>

    </div>
</template>
<script setup lang="ts">

let h: string = "Hello World!";
let clickFlip: boolean;
let map: Ref<boolean> = ref(false);
console.log(typeof map)

function showMap() {

    map.value = !map.value;
    console.log(map);

}

</script>
