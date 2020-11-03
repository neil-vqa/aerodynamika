<template>
  <div class="my-10">
   <div v-html="content" class="space-y-10 text-xl" id="content"></div>
  </div>
</template>

<script>

export default {
	props: ['content'],
	methods: {
		loadGallery() {
	        var images = document.querySelectorAll('.kg-gallery-image img');
		   images.forEach(function (image) {
			  var container = image.closest('.kg-gallery-image');
			  var width = image.attributes.width.value;
			  var height = image.attributes.height.value;
			  var ratio = width / height;
			  container.style.flex = ratio + ' 1 0%';
		   })
		   
		   console.log("yes");
		},
	},
	mounted: function() {
		this.loadGallery();
	},
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

#content >>> article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#content >>> article img {
  display: block;
  max-width: 100%;
}

#content >>> .kg-width-wide img {
  max-width: 85vw;
}

#content >>> .kg-width-full img {
  max-width: 100vw;
}

#content >>> article figure {
  margin: 0;
}

#content >>> article figcaption {
  text-align: center;
}

#content >>> .kg-bookmark-card {
    width: 100%;
    position: relative;
}

#content >>> .kg-bookmark-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    color: currentColor;
    font-family: inherit;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

#content >>> .kg-bookmark-container:hover {
    text-decoration: none;
}

#content >>> .kg-bookmark-content {
    flex-basis: 0;
    flex-grow: 999;
    padding: 20px;
    order: 1;
}

#content >>> .kg-bookmark-title {
    font-weight: 600;
}

#content >>> .kg-bookmark-metadata,
#content >>> .kg-bookmark-description {
    margin-top: .5em;
}

#content >>> .kg-bookmark-metadata {
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

#content >>> .kg-bookmark-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

#content >>> .kg-bookmark-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: text-bottom;
    margin-right: .5em;
    margin-bottom: .05em;
}

#content >>> .kg-bookmark-thumbnail {
    display: flex;
    flex-basis: 24rem;
    flex-grow: 1;
}

#content >>> .kg-bookmark-thumbnail img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    object-fit: cover;
}

#content >>> .kg-bookmark-author {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

#content >>> .kg-bookmark-publisher::before {
    content: "•";
    margin: 0 .5em;
}

#content >>> .fluid-width-video-wrapper {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
}

#content >>> .fluid-width-video-wrapper iframe,
#content >>> .fluid-width-video-wrapper object,
#content >>> .fluid-width-video-wrapper embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

#content >>> .kg-gallery-container {
    display: flex;
    flex-direction: column;
    margin: 1.5em auto;
    max-width: 1040px;
}

#content >>> .kg-gallery-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#content >>> .kg-gallery-image img {
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
}

#content >>> .kg-gallery-row:not(:first-of-type) {
    margin: 0.75em 0 0 0;
}

#content >>> .kg-gallery-image:not(:first-of-type) {
    margin: 0 0 0 0.75em;
}



</style>






