<template>
    <div class="panier_items_card border-b-2 h-fit border-black">
        <img class="w-full h-1/2 object-cover object-bottom" :src="images[0].src" alt=""/>
            <div class="h-min">
                <div class="flex flex-row justify-between items-baseline">
                    <p class="h3">{{name}}</p>
                    <span class="">{{total}} €</span>    
                </div>
                <div>
                    <p class="text-sm mb-0">Prix unitaire : {{price}} €</p>
                    <p class="text-sm mb-0">Hauteur : {{dimensions.height}} cm</p>
                    <p v-if="dimensions.height === '53'" class="text-sm mb-0">Étagère(s) : 1</p>
                    <p v-else class="text-sm mb-0">Étagère(s) : 2</p>
                    <div class="product_description" v-html="description"></div>
                </div>
                <div class="flex flex-row justify-between">
                    <p class="">
                        Quantité : 
                        <button @click="onDecreaseQuantity"> - </button>
                        {{quantity}}
                        <button @click="onIncreaseQuantity"> + </button>
                    </p>
                    <span class="cursor-pointer" @click="onDeleteClick">Supprimer</span>    
                </div>
            </div>
    </div>
</template>

<script>
export default{
    props: {
        id: {
            type: Number,
            default: null
        },
        name: {
            type: String,
            default: null,
        },
        price: {
            type: String,
            default: null,
        },
        quantity: {
            type: Number,
            default: null,
        },
        slug: {
            type: String,
            default: null,
        },
        dimensions: {
            type: Number,
            default: {},
        },
        description: {
            type: String,
            default: null,
        },
        images: {
            type: Array,
            default: () => [],
        },
        layout:{
            type: String, 
            default: 'cart',
                validator: layout => {
                    return['cart', 'order'].includes(layout)
                }
        },
    },
    computed:{
        total() {
            return this.price * this.quantity;
        },
    },
    methods: {
        onDecreaseQuantity () {
            this.$store.commit('updateQuantity', {id:this.id, action:'decrease'})
        },
        onIncreaseQuantity () {
            this.$store.commit('updateQuantity', {id:this.id, action:'increase'})
        },
        onDeleteClick () {
            this.$store.commit('remove', this.id)
        }
    },
}
</script>

<style scoped>
.product_description p{
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
}
</style>