<template>
    <div>
      <header class="h-screen w-screen bg-blue flex flex-col items-center justify-between pb-10 overflow-hidden relative">
          <h1 class="h1 tracking-widest text-6xl mt-24 laptop:mt-40 laptop:text-[12rem] desktop:mt-52">Ciluzio</h1>
          <img src="../assets/images/nude_grande.png" class="absolute -bottom-32 scale-150 laptop:scale-50 laptop:-bottom-full desktop:-bottom-5/6 desktop:scale-75">
          <div class="z-10 laptop:self-end laptop:w-1/3 laptop:mr-20">
              <p class="text-white hidden laptop:block">Ciluzio, c'est une lampe adaptée à votre intérieur et à vos envies. 3 tailles et 9 colories pour s'adapter parfaitement à vous.</p>
              <p class="text-white text-base font-semibold hidden laptop:block">À partir de 490€</p>
              <Button :link="'/ciluzio'" :svg="true" :color="'red'">Personnaliser</Button>
          </div>
      </header>
      <main>
          <div class="quote h-screen w-screen bg-skin text-center flex flex-col items-center justify-evenly px-5 relative overflow-hidden">
              <img src="../assets/images/arc_beige.svg" alt="" class="absolute top-16 left-0 w-1/2 laptop:top-0 laptop:w-auto">
              <img src="../assets/images/arc_beige.svg" alt="" class="absolute top-72 right-0 w-1/2 scale-x-[-1] laptop:hidden">
              <h2 class="uppercase text-red text-quicksand text-xl font-medium z-10 laptop:text-5xl">Aama Design</h2>
              <p class="h1 text-red z-10 mx-32">Des lampes  faites à la main en france</p>
              <div class="z-10 macaron flex justify-center items-center">
                  <a href="" class="mb-0"><img src="../assets/images/macaron_icon.svg" alt=""></a>  
              </div>    
          </div>
          <div class="products flex flex-col my-12">
              <h2 class="h2 px-5 laptop:px-20">Nos totems préfabriqués</h2>
              <!-- Slider main container -->
              <swiper class="swiper_product px-5 flex flex-col justify-center items-center"
                :slides-per-view="5"
                :space-between="30"
                :loop="true"
                :centeredSlides="true"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
              >
                <swiper-slide v-for="(product, index) in variations.slice(0, 9)" :key="index" class="relative w-fit">
                  <ProductCard :name="product.name" :price="product.price" :images="product.images" :product="product"></ProductCard>          
                </swiper-slide>
              </swiper>
              <Button :link="'/ciluzio'" :secondary="true" class="self-center">Toutes nos lampes</Button>
          </div>
          <div class="brand w-screen">
              <div class="grid_brand">
                  <div class="brand_img w-screen h-[100vw] flex flex-col items-center justify-center laptop:h-auto laptop:w-auto">
                      <img src="../assets/images/brand_lamp.png" alt="IMAGE HERE" class="h-full">
                  </div>
                  <div class="brand_question w-screen h-[100vw] p-5 flex flex-col items-center justify-center text-center laptop:h-auto laptop:w-auto">
                      <p class="h1 text-2xl">Aama Design, qu’est ce que c’est ?</p>
                  </div>
                  <div class="brand_pattern w-screen h-[100vw] flex flex-col items-center justify-center overflow-hidden laptop:h-auto laptop:w-auto">
                      <img src="../assets/images/brand_pattern.svg" alt="PATERN HERE" class="w-full max-h-full">
                  </div>
                  <div class="brand_quote w-screen h-[100vw] p-5 flex flex-col items-center justify-center text-center bg-marine laptop:h-auto laptop:w-auto">
                      <p class="text-white font-bold text-2xl px-5">Une lampe faite à la main par nos artisans en France. Des matériaux 100 % européens et écoresponsable pour briller dans votre intérieur.</p>
                  </div>
                  <div class="brand_anim w-screen h-[100vw] px-5 flex flex-col items-center justify-evenly bg-beige overflow-x-hidden laptop:col-span-2 laptop:h-auto laptop:w-auto">
                      <p class="text-orange text-4xl font-saotorpes min-w-max animate-text-infinite">CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - </p>
                      <p class="text-orange text-4xl font-saotorpes min-w-max animate-text-infinite">CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - </p>
                      <p class="text-orange text-4xl font-saotorpes min-w-max animate-text-infinite">CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - </p>
                      <p class="text-orange text-4xl font-saotorpes min-w-max animate-text-infinite">CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - </p>
                      <p class="text-orange text-4xl font-saotorpes min-w-max animate-text-infinite">CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - </p>
                      <p class="text-orange text-4xl font-saotorpes min-w-max animate-text-infinite">CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - CILUZIO - </p>
                  </div>
                  <div class="brand_value w-screen h-[100vw] p-5 flex flex-col items-center justify-evenly bg-yellow laptop:h-auto laptop:w-auto">
                      <p class="text-black font-bold px-5 text-xl">Aama Design, c'est une entreprise française qui s'engage pour l'écologie et l'économie. Avec des matériaux écoresponsables et européens et des ateliers en France, nous luttons pour le développement de note pays.</p>
                  </div>
              </div>
  
          </div>
          <div class="personalisation w-screen h-screen bg-orange px-5 laptop:px-20 py-5 relative flex flex-col items-center justify-between overflow-hidden">
              <h2 class="h1 text-2xl text-white text-center laptop:text-8xl laptop:mt-72"><span>Personnalisez</span></h2>
              <img src="../assets/images/gif_ciluzio.gif" alt="" class="absolute bottom-60 z-10 laptop:-bottom-[140%]">
              <h2 class="h1 text-2xl text-white text-center mt-[-450px] z-20 laptop:text-8xl laptop:mt-0"><span>votre lampe</span></h2>
  
              <div class="flex flex-col justify-between laptop:h-56 laptop:flex-row laptop:w-11/12">
                  <p class="text-white justify-self-end z-10 laptop:w-[30vw]">Faites vous plaisir en personnalisant votre lampe selon vos envies.</p>
                  <div class="z-10 justify-self-end flex flex-col items-end">
                    <Button :link="'/ciluzio'" :svg="true" :color="'white'">Personnaliser</Button>
                    <Button :link="'/inspirations'" :secondary="true" :color="'white'">Besoin d'inspiration ?</Button>
                  </div>
              </div>
          </div>
          <div class="opinions pt-20">
              <h2 class="h2 px-5 laptop:px-20">Ils sont convaincus</h2>
              <swiper class="swiper_opinion px-5 flex flex-col justify-center items-center"
                :slides-per-view="auto"
                :space-between="30"
                :loop="true"
                :centeredSlides="true"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
              >
                <swiper-slide class="relative w-fit tablet:w-1/3">
                  <div class="absolute top-0 left-0 h-full w-2/3 p-5 tablet:w-3/4">
                      <p class="m-0 tablet:mb-4">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum harum tempore ratione possimus nesciunt odio?"</p>
                      <p class="text-end mr-2">lorem ipsum</p>
                  </div>
                  <img src="../assets/images/opinion_card.png" alt="" class="-z-10 w-[90vw]">
                </swiper-slide>
                <swiper-slide class="relative w-fit tablet:w-1/3">
                  <div class="absolute top-0 left-0 h-full w-2/3 p-5 tablet:w-3/4">
                      <p class="m-0 tablet:mb-4">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum harum tempore ratione possimus nesciunt odio?"</p>
                      <p class="text-end mr-2">lorem ipsum</p>
                  </div>
                  <img src="../assets/images/opinion_card.png" alt="" class="-z-10 w-[90vw]">
                </swiper-slide>
                <swiper-slide class="relative w-fit tablet:w-1/3">
                  <div class="absolute top-0 left-0 h-full w-2/3 p-5 tablet:w-3/4">
                      <p class="m-0 tablet:mb-4">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum harum tempore ratione possimus nesciunt odio?"</p>
                      <p class="text-end mr-2">lorem ipsum</p>
                  </div>
                  <img src="../assets/images/opinion_card.png" alt="" class="-z-10 w-[90vw]">
                </swiper-slide>
              </swiper>
          </div>
      </main>
    </div>
  </template>
  
  <script>
  import { client } from "@/utils/axios";
  
  import Button from '@/components/Buttons.vue';
  import ProductCard from '@/components/ProductCard.vue';
  
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import "swiper/css/pagination";
  import { Pagination } from "swiper";
  
  
  export default {
    components: { Swiper, SwiperSlide, Button, ProductCard, },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination],
      };
    },
    data(){
      return{
          products: [],
          variations: [],
          product: {},
      }
    },
    async mounted() {
        await this.getProductData();
    },
    async beforeRouteUpdate(to, from) {
        await this.getProductData(to.params.product);
    },
    methods: {
        // Get WooCommerce product data by slug
        async getProductData () {
            const response = await client.get('wc/v3/products?category=51')
            this.products = response.data
  
            for (const product of this.products){
                if (product.type === 'variable') {
  
                    for (const id of product.variations) {
                        const response = await client.get('/wc/v3/products/' + id)
                        this.variations.push(response.data)
                    }
                }
            }
        },
        activeProduct(variation){
            this.product = variation
        },
        addToCart(){
            this.$store.commit('add', { product:this.product, quantity:1 })
        },
    },
  };
  </script>