<template>
  <div class="">
		<h1 class="text-xl mb-4">Latest</h1>
		<div class="grid grid-cols-3 gap-10">
			<div class="col-span-3 lg:col-span-2">
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 lg:gap-10">
					<div v-for="article in allArticles" :key="article.id">
						<nuxt-link :to="`/articles/${article.slug}`">
							<div class="flex flex-col overflow-hidden text-black hover:text-gray-600 bg-white shadow-sm">
								<div class="overflow-hidden">
									<img v-if="article.feature_image" :src="article.feature_image" class="w-full object-cover hover:opacity-75"/>
								</div>
								<div class="flex flex-col justify-between h-32 p-8">
									<h2 class="text-3xl font-bold hover:underline">{{ article.title }}</h2>
									<p class="text-sm text-gray-700">{{ convertTime(article.published_at, 'MMM D, YYYY') }}</p>
								</div>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
			<div class="col-span-1 hidden lg:block">
				yaa
			</div>
		</div>
		
  </div>
</template>

<script>
import { getPosts } from '../api/posts';

export default {
	data() {
		return {
			allArticles: [],
		}
	},
	async asyncData() {
		const posts = await getPosts();
		return { allArticles: posts }
	},
	methods: {
		convertTime(time, format) {
			return this.$moment().utc(time).local().format(format)
		}
	},
	
	
	
}
</script>

