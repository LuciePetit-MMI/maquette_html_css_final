<template>
    <div>
        <div class="swiper h-[60vh] relative laptop:w-11/12">
            <swiper class="px-5 flex flex-col justify-center items-center"
                :slides-per-view="3"
                :space-between="30"
                :loop="true"
                :centered-slides="true"
                :navigation="true"
                :modules="modules"
            >           
                <swiper-slide v-for="(product, index) in products" :key="index" class="text-center h-full w-screen flex flex-col justify-between laptop:h-[60vh] laptop:w-1/3">
                        <p>{{product.name}}</p>
                        
                        <div class="flex flex-row w-full">
                            <div @click="activeProduct(variation)" v-for="(variation, index) in variations" :key="index" class="product_card cursor-pointer">
                                <div v-if="variation.parent_id === product.id" class="h-full text-center">
                                    <img v-for="(image, index) in variation.images" :key="index" :src="image.src" :alt="image.alt" class="laptop:h-[40vh] laptop:mx-auto">
                                    <p>{{variation.price}}€</p>
                                    <div :class="[this.variations.id === variation.id ? 'visible' : '']" class="product_card--underline w-full h-1 bg-light-red"></div>
                                </div>
                            </div>
                        </div>
                        <div @click="addToCart" class="self-center"><Button :svg="true">Acheter</Button></div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { client } from "@/utils/axios";

import Button from '@/components/Buttons.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';;

export default{
    components: { Swiper, SwiperSlide, Button, },
    data(){
        return{
            products: [],
            variations: [],
            product: {},
        }
    },
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
            modules: [Navigation],
        };
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
}
</script>

<style scoped>
div.swiper-wrapper > div > div > div > p, 
div.swiper-wrapper > div.swiper-slide > div.self-center > div{
    visibility: hidden!important;
}
div.swiper-wrapper > div.swiper-slide.text-center.h-full.w-screen.flex.flex-col.justify-between.laptop\:h-\[60vh\].laptop\:w-1\/3.swiper-slide-active > div.flex.flex-row.w-full > div > p, 
#app > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div > div > div.swiper-wrapper > div.swiper-slide.text-center.h-full.w-screen.flex.flex-col.justify-between.laptop\:h-\[60vh\].laptop\:w-1\/3.swiper-slide-active > div.self-center > div{
    visibility: visible!important;
}
.product_card--underline{
    visibility: hidden!important;
}
.swiper-slide-active .product_card:hover .product_card--underline{
    visibility: visible!important;
}
.swiper-slide-active .product_card .visible{
    visibility: visible!important;
}
</style>