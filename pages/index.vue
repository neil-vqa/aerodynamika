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
								<div class="flex flex-col justify-between p-8 space-y-3">
									<h2 class="text-3xl font-bold hover:underline">{{ article.title }}</h2>
									<p class="text-base text-gray-700">{{ article.excerpt }}</p>
									<div class="border-t-2 pt-2 text-gray-700 flex items-center space-x-1">
										<img :src="article.primary_author.profile_image" class="h-5 rounded-full" />
										<p class="text-sm">{{ article.primary_author.name }}</p>
									</div>
									<div class="flex items-center text-gray-700 space-x-1">
										<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										  <rect x="4" y="5" width="16" height="16" rx="2" />
										  <line x1="16" y1="3" x2="16" y2="7" />
										  <line x1="8" y1="3" x2="8" y2="7" />
										  <line x1="4" y1="11" x2="20" y2="11" />
										  <rect x="8" y="15" width="2" height="2" />
										</svg>
										<p class="text-sm">{{ convertTime(article.published_at, 'MMM D, YYYY') }}</p>
									</div>
								</div>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
			<div class="col-span-1 hidden lg:block">
				<div class="grid grid-cols-1 gap-10">
					<div class="bg-gray-800 px-6 py-10 shadow-sm text-white space-y-4">
						<h2 class="text-3xl">AeroNews</h2>
						<p>Join the newsletter to receive the latest updates in your inbox.</p>
						<input type="text" placeholder="Your email address"  class="px-4 py-3 text-black w-full" />
						<button type="submit" disabled class="px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full">Subscribe</button>
					</div>
					<div class="flex justify-center items-center bg-white p-5 shadow-sm space-x-3 text-gray-600">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook cursor-pointer hover:text-gray-900" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter cursor-pointer hover:text-gray-900" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube cursor-pointer hover:text-gray-900" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<rect x="3" y="5" width="18" height="14" rx="4" />
							<path d="M10 9l5 3l-5 3z" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram cursor-pointer hover:text-gray-900" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<rect x="4" y="4" width="16" height="16" rx="4" />
							<circle cx="12" cy="12" r="3" />
							<line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
						</svg>
					</div>
					<div class="bg-gray-800 px-6 py-10 shadow-sm text-white space-y-4">
						<h2 class="text-xl mb-5">We have brand new items in our <strong>Merchandise</strong> section</h2>
						<nuxt-link to="/merchandise" class="px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full">Visit merchandise</nuxt-link>
					</div>
				</div>
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

