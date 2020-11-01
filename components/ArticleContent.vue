<template>
  <div class="my-10">
   <div v-html="content" class="space-y-10 text-xl" id="content"></div>
  </div>
</template>

<script>

export default {
	props: ['content']
}
</script>

<style scoped>

#content >>> h2 {
	font-size: 1.75rem;
	
}

#content >>> a {
	color: #434190;
}

#content >>> a:hover {
	text-decoration: underline;
}

#content >>> ol {
	list-style-type: decimal;
	list-style-position: outside;
	line-height: 2;
	color: #2d3748;
}

#content >>> ul {
	list-style-type: disc;
	list-style-position: outside;
	line-height: 2;
	color: #2d3748;
}

#content >>> p {
	color: #2d3748;
	line-height: 2;
}

#content >>> blockquote {
	font-style: italic;
	color: #2d3748;
	border-left-width: 5px;
	padding-left: 1.2rem;
}

#content >>> code {
	overflow: hidden;
}


</style>






