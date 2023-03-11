<template>
    <div>
		<NuxtLayout>
			<!-- <div>
				Lorem ipsum lll dolor sit amet consectetur, adipisicing elit. Aperiam tempore quos blanditiis accusamus deserunt numquam nam aliquid, consequatur nisi quia eaque quo nostrum deleniti. Aliquid nobis quas modi quod facere amet et impedit fugiat voluptas laudantium quaerat aspernatur adipisci odio eaque quisquam, nihil consequatur autem id rem esse. Molestias dolorum animi dicta tempora vero repellendus totam. Eveniet hic obcaecati vitae dignissimos exercitationem dolorum et illo voluptate! Laboriosam quas nam ut eum eveniet qui, impedit, totam, vero incidunt provident tempore dicta eligendi? Quis possimus vero animi cum maxime exercitationem architecto dolorum perspiciatis, voluptates non soluta impedit officiis sint voluptatem in laboriosam!laksmxlamslx {{ h }}
			</div> -->
			<div class = "grid">
				<div class = "grid grid-flow-row mt-[70px]  gap-4 justify-self-center [&_*]:border-2 [&_*]:border-red-500 [&_*]:p-2">
					<input class="text-[10px]" placeholder = "Введите Ваше местоположение"/>
					<input class="text-[10px]" placeholder = "Введите куда Вы направляетесь"/>
				</div>
				<button @click="openMap = !openMap" class = "flex justify-self-center bg-orange-500 rounded-sm text-white m-4 p-2">Найти маршрут</button>
			</div>
			<div v-show="openMap">
				<img src = "RPReplay_Final1678527578 (1).gif " />
			</div>
		</NuxtLayout>
    </div>
</template>
<script setup lang="ts">
import { Input } from 'postcss';


let openMap= ref(false);
let h: string = "Hello World!";
let clickMap: boolean;


</script>
