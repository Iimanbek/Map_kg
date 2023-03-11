<template>
    <div>
		<NuxtLayout>
			<div class = "grid pt-[80px]">
				<div class = "flex flex-col gap-4 justify-self-center [&_*]:border-2 [&_*]:border-red-500 [&_*]:p-2">
					<input placeholder = "Введите Ваше местоположение"/>
					<input placeholder = "Введите куда Вы направляетесь"/>
				</div>
				<button @click = "showMap()" class = "flex justify-self-center bg-orange-500 rounded-sm text-white m-4 p-2">Найти маршрут</button>
			</div>
			<div>
				<img :src = "map" />
			</div>
		</NuxtLayout>
    </div>
</template>
<script setup lang="ts">

let h: string = "Hello World!";
let clickFlip: boolean;
let map: Ref<string> = ref(''); 
console.log(typeof map)
let test: number = 4;
test = 'hghg';
console.log(test);

function showMap() {

	map.value = 'easy.gif';
	console.log(map);

}

</script>
