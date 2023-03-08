<template>
    <div class="relative w-fit">
        <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
            <div class="flex flex-col">
                
                <div v-if="inspiration">
                    <p class="text-white text-sm mb-0">Création de {{creator}}</p>
                    <p class="text-white text-xs">{{size}}</p>
                </div>
                <p v-else class="text-white">{{name}}</p>
            </div>
            <div :class="{'hidden': inspiration, 'block': !inspiration }" class="flex flex-row justify-between w-full items-baseline">
                <p class="font-bold text-white">{{price}} €</p>
                <Button>Acheter</Button>
            </div>
        </div>  
        <div v-if="inspiration" class="relative -z-10">
            <img :src="imageInspi.url"  :alt="imageInspi.title" class="top-0">
        </div>
        <div v-else class="relative -z-10">
            <img src="../assets/images/product_card.svg" alt="">
            <img :src="image"  alt="" class="img absolute top-0">
        </div>

        <div v-if="inspiration" class="flex justify-evenly items-center inspi_card__colors">
            <div v-for="(color, index) in colors" :key="index">
                <svg class="mx-auto" width="20" height="20">
                    <circle cx="10" cy="10" r="8" :fill="codeCouleur(color)" stroke="black" stroke-width="2"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { client } from "@/utils/axios";

import Button from '@/components/Buttons.vue';

export default {
    components: { Button },
    props: {
        name: {
            type: String,
            default: null,
        },
        price: {
            type: String,
            default: null,
        },
        images: {
            type: Array,
            default: () => []
        },
        inspiration:{
            type: Boolean, 
            default: false,
        },
        creator: {
            type: String,
            default: null,
        },
        size: {
            type: String,
            default: null,
        },
        colors: {
            type: Array,
            default: () => []
        },
        imageInspi: {
            type: Object,
            default: () => {}
        },
    },
    data(){
        return{
            couleurs: [],
        }
    },
    async mounted() {
        this.getColorsData();
    },
    methods: {
        // Get WooCommerce product data by slug
        async getColorsData () {
            const response = await client.get('wp/v2/colors')
            this.couleurs = response.data
        },
        codeCouleur(color) {
            for (const couleur of this.couleurs) {
                if (couleur.id === color.ID) {
                return couleur.acf.code_hexadecimal;
                }
            }
            return '';
        },
    },
    computed: {
        image() {
            if (!this.images.length) return;
            return this.images[0].src;
        },
    },
};
</script>

<style>
.hidden{
    display: hidden;
}

.block{
    display: block;
}

.img{
    max-height: 90%;
    left: 50%;
    transform: translateX(-50%);
}
</style>