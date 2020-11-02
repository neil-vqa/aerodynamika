<template>
  <div class="">
		<div class="grid grid-cols-3 gap-10">
			<div class="col-span-3 lg:col-span-2 bg-white">
				<div class="mt-10 animate-pulse grid grid-cols-1 md:grid-cols-2 gap-5 px-10" v-show="itemsLoading">
					<div class="space-y-5 ">
						<div class="h-40 w-5/6 mx-auto bg-gray-300"></div>
						<div class="h-5 w-1/2 mx-auto bg-gray-300"></div>
						<div class="h-10 w-3/4 mx-auto bg-gray-300"></div>
					</div>
					<div class="space-y-5 ">
						<div class="h-40 w-5/6 mx-auto bg-gray-300"></div>
						<div class="h-5 w-1/2 mx-auto bg-gray-300"></div>
						<div class="h-10 w-3/4 mx-auto bg-gray-300"></div>
					</div>
				</div>
				<div id='collection-component-1604286772047' class="my-10"></div>
			</div>
			<div class="col-span-1 hidden lg:block">
				<div class="grid grid-cols-1 gap-10 mt-10">
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
				</div>
			</div>
		</div>
		
  </div>
</template>

<script>

export default {
	layout: 'MerchLayout',
	data() {
		return {
			itemsLoading: true,
		}
	},
	methods: {
		loadItems() {
			/*<![CDATA[*/
			(function () {
				var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
				if (window.ShopifyBuy) {
					if (window.ShopifyBuy.UI) {
						ShopifyBuyInit();
					} else {
						loadScript();
					}
				} else {
					loadScript();
				}
				function loadScript() {
					var script = document.createElement('script');
					script.async = true;
					script.src = scriptURL;
					(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
					script.onload = ShopifyBuyInit;
				}
				function ShopifyBuyInit() {
					var client = ShopifyBuy.buildClient({
						domain: 'store-neil-van.myshopify.com',
						storefrontAccessToken: '808886a054056aa4305a641d79162766',
					});
					ShopifyBuy.UI.onReady(client).then(function (ui) {
						ui.createComponent('collection', {
						  id: '230635077781',
						  node: document.getElementById('collection-component-1604286772047'),
						  moneyFormat: '%E2%82%B1%7B%7Bamount%7D%7D',
						  options: {
				"product": {
					"styles": {
						"product": {
						  "@media (min-width: 601px)": {
						    "max-width": "calc(25% - 20px)",
						    "margin-left": "20px",
						    "margin-bottom": "50px",
						    "width": "calc(25% - 20px)"
						  },
						  "img": {
						    "height": "calc(100% - 15px)",
						    "position": "absolute",
						    "left": "0",
						    "right": "0",
						    "top": "0"
						  },
						  "imgWrapper": {
						    "padding-top": "calc(75% + 15px)",
						    "position": "relative",
						    "height": "0"
						  }
						},
						"title": {
						  "font-family": "Lato, sans-serif"
						},
						"button": {
						  "font-family": "Montserrat, sans-serif",
						  ":hover": {
						    "background-color": "#284a75"
						  },
						  "background-color": "#2c5282",
						  ":focus": {
						    "background-color": "#284a75"
						  }
						},
						"price": {
						  "font-family": "Lato, sans-serif"
						},
						"compareAt": {
						  "font-family": "Lato, sans-serif"
						},
						"unitPrice": {
						  "font-family": "Lato, sans-serif"
						}
					},
					"buttonDestination": "modal",
					"contents": {
						"options": false
					},
					"text": {
						"button": "View product"
					},
					"googleFonts": [
						"Lato",
						"Montserrat"
					]
				},
				"productSet": {
					"styles": {
						"products": {
						  "@media (min-width: 601px)": {
						    "margin-left": "-20px"
						  }
						}
					}
				},
				"modalProduct": {
					"contents": {
						"img": false,
						"imgWithCarousel": true,
						"button": false,
						"buttonWithQuantity": true
					},
					"styles": {
						"product": {
						  "@media (min-width: 601px)": {
						    "max-width": "100%",
						    "margin-left": "0px",
						    "margin-bottom": "0px"
						  }
						},
						"button": {
						  "font-family": "Montserrat, sans-serif",
						  ":hover": {
						    "background-color": "#284a75"
						  },
						  "background-color": "#2c5282",
						  ":focus": {
						    "background-color": "#284a75"
						  }
						},
						"title": {
						  "font-family": "Lato, sans-serif"
						},
						"price": {
						  "font-family": "Lato, sans-serif"
						},
						"compareAt": {
						  "font-family": "Lato, sans-serif"
						},
						"unitPrice": {
						  "font-family": "Lato, sans-serif"
						},
						"description": {
						  "font-family": "Lato, sans-serif"
						}
					},
					"googleFonts": [
						"Lato",
						"Montserrat"
					],
					"text": {
						"button": "Add to cart"
					}
				},
				"cart": {
					"styles": {
						"button": {
						  "font-family": "Montserrat, sans-serif",
						  ":hover": {
						    "background-color": "#284a75"
						  },
						  "background-color": "#2c5282",
						  ":focus": {
						    "background-color": "#284a75"
						  }
						}
					},
					"text": {
						"total": "Subtotal",
						"button": "Checkout"
					},
					"googleFonts": [
						"Montserrat"
					]
				},
				"toggle": {
					"styles": {
						"toggle": {
						  "font-family": "Montserrat, sans-serif",
						  "background-color": "#2c5282",
						  ":hover": {
						    "background-color": "#284a75"
						  },
						  ":focus": {
						    "background-color": "#284a75"
						  }
						}
					},
					"googleFonts": [
						"Montserrat"
					]
				}
			},
						});
					});
				}
			})();
			/*]]>*/
			
			this.itemsLoading = false;
		
		},
	},
	mounted: function() {
		this.loadItems();
	},
	
	
	
}
</script>

