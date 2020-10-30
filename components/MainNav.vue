<template>
	<div class="bg-white border-b border-grey-200">
		<div class="max-w-screen-2xl mx-auto h-auto lg:h-20 py-5 lg:py-0 md:flex px-10 md:px-20 lg:px-40">
			<div class="lg:flex flex-end items-center w-full lg:space-x-5">
				<div class="lg:flex items-center text-center md:text-left">
					<NuxtLink to="/" class="text-2xl font-bold">Aerodynamika</NuxtLink>
				</div>
				<div class="lg:flex items-center space-x-3 text-center md:text-left">
					<NuxtLink to="/" class="nav-link hover:text-gray-900">About</NuxtLink>
					<NuxtLink to="/" class="nav-link hover:text-gray-900">Authors</NuxtLink>
					<NuxtLink to="/" class="nav-link hover:text-gray-900">Partners</NuxtLink>
					<NuxtLink to="/" class="nav-link hover:text-gray-900">Merchandise</NuxtLink>
				</div>
			</div>
			<div class="md:flex items-center space-x-5 text-gray-600 text-center">
				<NuxtLink to="/" class="nav-link hover:text-gray-900">Search</NuxtLink>
				<NuxtLink to="/" class="hidden md:block bg-blue-500 px-3 py-2 font-bold uppercase rounded-lg text-xs text-white hover:bg-blue-700">Subscribe</NuxtLink>
				<NuxtLink to="/" class="md:hidden nav-link hover:text-gray-900">Subscribe</NuxtLink>
			</div>
		</div>
	</div>
</template>

