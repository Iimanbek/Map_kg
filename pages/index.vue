<template>
    <div>
		<NuxtLayout>
			<div>
				Lorem ipsum lll dolor sit amet consectetur, adipisicing elit. Aperiam tempore quos blanditiis accusamus deserunt numquam nam aliquid, consequatur nisi quia eaque quo nostrum deleniti. Aliquid nobis quas modi quod facere amet et impedit fugiat voluptas laudantium quaerat aspernatur adipisci odio eaque quisquam, nihil consequatur autem id rem esse. Molestias dolorum animi dicta tempora vero repellendus totam. Eveniet hic obcaecati vitae dignissimos exercitationem dolorum et illo voluptate! Laboriosam quas nam ut eum eveniet qui, impedit, totam, vero incidunt provident tempore dicta eligendi? Quis possimus vero animi cum maxime exercitationem architecto dolorum perspiciatis, voluptates non soluta impedit officiis sint voluptatem in laboriosam!laksmxlamslx {{ h }}
			</div>
			<div class = "grid">
				<div class = "flex gap-4 justify-self-center [&_*]:border-2 [&_*]:border-red-500 [&_*]:p-2">
					<input placeholder = "Введите Ваше местоположение"/>
					<input placeholder = "Введите куда Вы направляетесь"/>
				</div>
				<button class = "flex justify-self-center bg-orange-500 rounded-sm text-white m-4 p-2">Найти маршрут</button>
			</div>
			<div>
				<img :src = "clickFlip" />
			</div>
		</NuxtLayout>
    </div>
</template>
<script setup lang="ts">

let h: string = "Hello World!";
let clickFlip: boolean;

</script>
