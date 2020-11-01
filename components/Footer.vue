<template>
	<div class="w-full bg-white">
		<div class="max-w-screen-2xl mx-auto px-10 md:px-20 lg:px-40 py-20">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
				<div class="space-y-2">
					<h2 class="uppercase mb-6">Aerodynamika</h2>
					<p class="text-gray-600">Lorem ipsum dolor sit amet consectetur</p>
					<p class="text-gray-600">Duis aute irure</p>
				</div>
				<div>
					<h2 class="uppercase mb-6">Links</h2>
					<div class="flex flex-col text-gray-600 space-y-2">
						<NuxtLink to="/" class="hover:underline">About Aerodynamika</NuxtLink>
						<NuxtLink to="/" class="hover:underline">Aero Authors</NuxtLink>
						<NuxtLink to="/" class="hover:underline">Aero Partners</NuxtLink>
						<NuxtLink to="/" class="hover:underline">Aero Merchandise</NuxtLink>
					</div>
				</div>
				<div class="space-y-2">
					<h2 class="uppercase mb-6">Newsletters</h2>
					<p class="text-gray-600 ">Join the newsletter to receive the latest updates in your inbox.</p>
					<input type="text" placeholder="Your email address"  class="px-4 py-3 text-black w-full border border-gray-500" />
					<button type="submit" disabled class="px-4 py-3 bg-blue-700 text-white hover:bg-blue-800 w-full">Subscribe</button>
				</div>
			</div>
			<div class="border-t border-gray-200 my-5 pt-10 flex justify-center items-center">
				<p class="text-gray-600">© 2020 Aerodynamika - A community formed by SpaceXYZ</p>
			</div>
		</div>
	</div>
</template>

