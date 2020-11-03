<template>
  <div class="">
		<div class="max-w-screen-md mx-auto mt-5 mb-20">
			<div>
				<div class="py-10">
					<h1 class="text-5xl font-bold">{{ article.title }}</h1>
					<div class="flex items-center space-x-2 mt-3">
						<div>
							<img :src="article.primary_author.profile_image" class="h-10 rounded-full" />
						</div>
						<div>
							<h2 class="text-sm text-gray-600">{{ article.primary_author.name }}</h2>
							<p class="text-sm text-gray-600">{{ convertTime(article.published_at, 'MMM D, YYYY') }}</p>
						</div>
					</div>
					
				</div>
				<h2 class="text-xl mb-10">{{ article.excerpt }}</h2>
				<img v-if="article.feature_image" :src="article.feature_image" class="object-cover mb-5"/>
				<ArticleContent :content="article.html" />
			</div>
		</div>
  </div>
</template>

<script>
import { getSinglePost } from '../../api/posts';

export default {
	head() {
		return {
			title: this.article.title,
			meta: [
				{ hid: 'description', name: 'description', content: this.article.excerpt },
				{ hid: 'og:title', name: 'og:title', content: this.article.title },
				{ hid: 'og:description', name: 'og:description', content: this.article.excerpt },
				{ hid: 'og:image', name: 'og:image', content: this.article.feature_image },
			]
		}
	},
	data() {
		return {
			article: '',
		}
	},
	async asyncData ({ params }) {
		const post = await getSinglePost(params.slug);
		return { article: post }
	},
	methods: {
		convertTime(time, format) {
			return this.$moment().utc(time).local().format(format)
		}
	},
	
	
	
}
</script>

