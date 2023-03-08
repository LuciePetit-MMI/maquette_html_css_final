<template>
    <div>
        <main class="mt-24 flex flex-col px-5 laptop:px-20">
            <div class="text-center">
                <h1 class="h1">Nos inspirations</h1>
                <p>Trouvez de l'inspiration avec les lampes que d'autres ont créé</p>    
            </div>
            <div class="inspi_card">
                <div v-for="(inspiration, index) in inspirations" :key="index">
                    <ProductCard 
                    :inspiration="true" 
                    :creator="inspiration.acf.createur" 
                    :size="inspiration.acf.taille"
                    :imageInspi="inspiration.acf.image"
                    :colors="inspiration.acf.couleurs"></ProductCard>
                </div>
            </div>
            <Button class="self-center">Voir plus</Button>    
        </main>

    </div>
</template>

<script>
import { client } from "@/utils/axios";

import Button from '@/components/Buttons.vue'
import ProductCard from '@/components/ProductCard.vue';

export default{
    components: { Button, ProductCard, },
    data(){
        return{
            inspirations: [],
        }
    },
    async mounted() {
        await this.getInspirationData();
    },
    methods: {
        // Get WooCommerce product data by slug
        async getInspirationData () {
            const response = await client.get('wp/v2/inspirations')
            this.inspirations = response.data
        },
    },
}
</script>