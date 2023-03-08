<template>
    <div class="w-full" :class="{'laptop:grid grid-cols-3': step!==1, 'laptop:flex-col': step===1}">
        <div class="">
            <h1 class="h1 relative laptop:text-5xl">Personnalisez <br/>votre Ciluzio</h1>
            <p class="text-marine font-bold relative">
                <span v-if="step===1">Choisissez votre taille</span>
                <span v-if="step===2">Choisissez vos couleurs</span>
                <span v-if="step===3">Finalisez votre lampe</span>
            </p>
        </div>
        <div v-if="step===1" class="size grow">
            <swiper class="swiper laptop:hidden px-5 w-full flex flex-col justify-center items-center" :slides-per-view="1" :space-between="30" :loop="false" :centered-slides="true">
                <swiper-slide class="relative overflow-hidden w-fit">
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Piccolo</p>
                            <p class="text-white font-bold text-xl">490 €</p>
                            <Button @click="selectSize('piccolo')" :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="relative overflow-hidden w-fit">
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Medio</p>
                            <p class="text-white font-bold text-xl">490 €</p>
                            <Button @click="selectSize('medio')" :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="relative overflow-hidden w-fit">
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Grande</p>
                            <p class="text-white font-bold text-xl">490 €</p>
                            <Button @click="selectSize('grande')" :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="hidden laptop:grid laptop:grid-cols-3 laptop:gap-10 laptop:mx-20">
                <div class="relative overflow-hidden w-fit">
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Piccolo</p>
                            <p class="text-white font-bold text-xl">490 €</p>
                            <Button @click="selectSize('piccolo')" :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden w-fit">
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Medio</p>
                            <p class="text-white font-bold text-xl">750 €</p>
                            <Button @click="selectSize('medio')" :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden w-fit">
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Grande</p>
                            <p class="text-white font-bold text-xl">890 €</p>
                            <Button @click="selectSize('grande')" :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="step===2" class="colors h-[50vh] laptop:h-[70vh] flex flex-col justify-end" >
            <div class="relative h-full overflow-y-hidden slide_container" :style="'max-height:' + etageHeight * nbEtage + 'px;'">
                <div v-for="(content, index) in sortedConfigurator" :key="index" class="etage block" :class="{'piccolo': nbEtage===5, 'medio': nbEtage===9, 'grande': nbEtage===12}" :style="'max-height:' + etageHeight + 'px;'">
                    <swiper v-if="content.choices[1]"  class="swiper h-full" 
                        :slides-per-view="3"
                        :space-between="0"
                        :loop="false"
                        :centered-slides="true"
                    >
                        <swiper-slide @click="changePieces(content.layerId)" v-for="(choice, indexColor) in content.choices" :key="indexColor" :class="{'showSlides': this.changePiece===content.layerId, 'slides': this.changePiece!==content.layerId}">
                                <img :src="choice.images[0].image.url" :alt="'Cylindre ' + choice.name + ' pour la lampe Ciluzio ' + slug" class="h-[50vh] laptop:h-[70vh] absolute top-0 w-auto left-1/2" :style="'transform: translate(-50%, calc( -100% / '+ nbEtage +' * '+ index +'  )); max-height:' + etageHeight * nbEtage + 'px;'">
                                <p class="hidden"> {{ choice.name }}</p>
                        </swiper-slide>
                    </swiper>
                    <swiper v-else class="swiper h-full z-0"
                        :slides-per-view="1"
                        :space-between="0"
                        :loop="false"
                        :centered-slides="true"
                    >
                        <swiper-slide class="slides solid">
                                <img :src="content.choices[0].images[0].image.url" :alt="content.choices[0].name + ' pour la lampe Ciluzio ' + slug" class="h-[50vh] laptop:h-[70vh] absolute top-0 w-auto left-1/2" :style="'transform: translate(-50%, calc( -100% / '+ nbEtage +' * '+ index +'  )); max-height:' + etageHeight * nbEtage + 'px;'">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div v-if="step===3" class="relative h-[50vh] laptop:h-[70vh] flex flex-col justify-end">
            <img v-for="(image, index) in customLampe" :key="index" :src="image" alt="" class="absolute left-1/2 w-1/2">
        </div>
        <div class="buttons flex flex-col justify-end items-end relative">
            <p v-if="step!==1" class="text-xl text-marine font-bold"><span v-for="data in product" :key="data.id">{{ data.price }} €</span></p>
            <Button @click="activeProduct" v-if="this.step===2" :svg="true">Finaliser</Button>
            <Button @click="previous()" v-if="this.step===2" :secondary="true">Précédent</Button>
            <Button @click="addToCart" v-if="this.step===3" :svg="true">Acheter</Button>
            <Button @click="previous()" v-if="this.step===3" :secondary="true">Précédent</Button>
        </div>
    </div>
</template>

<script>
import { client } from "@/utils/axios";

import Button from '@/components/Buttons.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import { height } from "dom7";

export default{
    components: { Swiper, SwiperSlide, Button, },
    data(){
        return{
            step: 1,
            active: false,
            product: [],
            configurator: [],
            customProduct: {},
            chooseColors: [],
            customLampe: [],
            slug: '',
            nbEtage: 0,
            etageHeight: 80,
            windowWidth: window.innerWidth,
            changePiece: 2,
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
        };
    },
    mounted() {
        if (this.windowWidth > 1080) {
            this.etageHeight = 50
        }
    },
    computed: {
        sortedConfigurator(){
            return this.configurator.sort((a, b) => { 
                return b.layerId - a.layerId
            })
        },
    },
    methods:{
        previous(){
            this.step--
            this.customLampe = []
        },
        async getProductData () {
            this.step = 2;
            const response = await client.get('wc/v3/products?slug=' + this.slug)
            this.product = response.data;
            const productContent = this.product[0]
            this.configurator = productContent.meta_data[10].value
        },
        selectSize(slug){
            this.step = 2
            this.slug = slug

            if(slug === 'piccolo') this.nbEtage = 5
            if(slug === 'medio') this.nbEtage = 9
            if(slug === 'grande') this.nbEtage = 12
            this.getProductData()
        },
        changePieces(index){
            this.changePiece = index;
            console.log(this.changePiece)
        },
        activeProduct(){
            //get selected pieces
            var slides = document.getElementsByClassName("swiper-slide-active")
            for(var i=0; i < slides.length; i++){
                //get p content
                var color =  " " + slides[i].lastElementChild.textContent
                //add p content to chooseColors
                this.chooseColors.push(color)

                var image =  " " + slides[i].firstElementChild.getAttribute(['src'])
                this.customLampe.push(image)

            }
            //change step 
            this.step = 3
            //add product informations to custom product
            this.customProduct = this.product[0]
            //add selected colors to custom product description
            this.customProduct.description = this.chooseColors
        },
        addToCart(){
            this.$store.commit('add', { product:this.customProduct, quantity:1 })
        },
        log(x){
            console.log(x)
        }
    },
}
</script>

<style scoped>

.slide_container {
    overflow: hidden;
}
.swiper-slide {
    transform: translateX(0%);
}
.swiper-slide img {
    pointer-events: none;
    width: auto;
}

div.swiper-slide-active.slides{
    visibility: visible;
}
.showSlides{
    visibility: visible;
    cursor: grab;
}
.slides{
    visibility: hidden;
    cursor: pointer;
}

.solid {
    pointer-events: none;
}
.swiper {
    overflow: visible;
}
.piccolo{
    display: block;
    height: calc(100% / 5);
}
.medio{
    display: block;
    height: calc(100% / 9);
}
.grande{
    display: block;
    height: calc(100% / 12);
}
</style>
