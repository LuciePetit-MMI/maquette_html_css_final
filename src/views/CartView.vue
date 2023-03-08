<template>
    <div>
        <main class="px-5 laptop:px-20 mt-24">
            <div v-if="feedBack.message" :class="['order-view__feedback', `-is-type-${feedBack.type}`]">
                <p>{{ feedBack.message }}</p>
            </div>
        <div class="panier">
            <div v-if="step==='1'" class="panier_items">
                <div class="w-full">
                    <h2 class="h2 mb-1">Récapitulatif panier 1/4</h2>
                    <div class="w-1/4 h-1 bg-marine"></div>
                </div>
                <div v-if="$store.state.cart.length">
                    <div v-for="(product, index) in $store.state.cart" :key="index">
                        <ProductCart :id="product.id" :name="product.name" :price="product.price" :images="product.images" :quantity="product.quantity" :dimensions="product.dimensions" :description="product.description"></ProductCart>
                    </div>
                </div>
                
                <div v-else>
                    <p>Votre panier est vide, <RouterLink to="/Ciluzio" class="underline text-orange">créez votre lampe dès maintenant</RouterLink></p>
                </div>
                <div class="flex flex-row justify-between laptop:justify-end">
                    <Button :link="'/ciluzio'" :secondary="true">Continuer mes achats</Button>
                    <Button @click="step='2'" :svg="true" class="laptop:ml-4">Suivant</Button>
                </div>
            </div>
            <div v-if="step==='2'" class="panier_adresse_form">
                <div class="w-full">
                    <h2 class="h2 mb-1">Adresse de livraison 2/4</h2>
                    <div class="w-2/4 h-1 bg-marine"></div>
                </div>
                
                <form action="" @submit="onSubmit">
                    <div class="order-view__shipping flex flex-col">
                        <div class="flex flex-col laptop:flex-row laptop:justify-between">
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Nom</label>
                                <input v-model="shipping.last_name" type="text" placeholder="Nom" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">    
                            </div>
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Prénom</label>
                                <input v-model="shipping.first_name" type="text" placeholder="Prénom" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                            </div>
                        </div>
                        <label for="" class="text-marine font-bold">Adress</label>
                        <input v-model="shipping.address_1" type="text" placeholder="Adresse" class="border-2 border-marine rounded-lg px-2 py-1">
                        <label for="" class="text-marine font-bold">Complément d'adresse</label>
                        <input v-model="shipping.address_2" type="text" placeholder="Complément d'adresse" class="border-2 border-marine rounded-lg px-2 py-1">
                        <div class="flex flex-col laptop:flex-row laptop:justify-between">
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Code postal</label>
                                <input v-model="shipping.postcode" type="text" placeholder="Code postal" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">    
                            </div>
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Ville</label>
                                <input v-model="shipping.city" type="text" placeholder="Ville" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                            </div>
                        </div>
                        <label for="" class="text-marine font-bold">Pays</label>
                        <input v-model="shipping.country" type="text" placeholder="Pays" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                        <label for="" class="text-marine font-bold">Numéro de téléphone</label>
                        <input v-model="shipping.phone" type="text" placeholder="Numéro de téléphone" class="border-2 border-marine rounded-lg px-2 py-1">
                        <div class="flex flex-row items-baseline">
                            <input type="checkbox" id="other-address" v-model="otherAddress">
                            <label for="other-address">Utiliser une adresse de facturation différente</label>
                        </div>
                    </div>
                    <div class="order-view__shipping flex flex-col" v-if="otherAddress">
                        <div class="flex flex-col laptop:flex-row laptop:justify-between">
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Nom</label>
                                <input v-model="billing.last_name" type="text" placeholder="Nom" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">    
                            </div>
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Prénom</label>
                                <input v-model="billing.first_name" type="text" placeholder="Prénom" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                            </div>
                        </div>
                        <label for="" class="text-marine font-bold">Adress</label>
                        <input v-model="billing.address_1" type="text" placeholder="Adresse" class="border-2 border-marine rounded-lg px-2 py-1">
                        <label for="" class="text-marine font-bold">Complément d'adresse</label>
                        <input v-model="billing.address_2" type="text" placeholder="Complément d'adresse" class="border-2 border-marine rounded-lg px-2 py-1">
                        <div class="flex flex-col laptop:flex-row laptop:justify-between">
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Code postal</label>
                                <input v-model="billing.postcode" type="text" placeholder="Code postal" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">    
                            </div>
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Ville</label>
                                <input v-model="billing.city" type="text" placeholder="Ville" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                            </div>
                        </div>
                        <label for="" class="text-marine font-bold">Pays</label>
                        <input v-model="billing.country" type="text" placeholder="Pays" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                        <label for="" class="text-marine font-bold">Email</label>
                        <input v-model="billing.email" type="text" placeholder="Email" class="border-2 border-marine rounded-lg px-2 py-1">
                        <label for="" class="text-marine font-bold">Numéro de téléphone</label>
                        <input v-model="billing.phone" type="text" placeholder="Numéro de téléphone" class="border-2 border-marine rounded-lg px-2 py-1">
                    </div>
                </form>
                <div class="flex flex-row justify-between laptop:justify-end">
                    <Button @click="step='1'" :secondary="true">Précédent</Button>
                    <Button @click="step='3'" :svg="true" class="laptop:ml-4">Suivant</Button>
                </div>
            </div>
            <div v-if="step==='3'" class="panier_livraison_items">
                <div class="w-full">
                    <h2 class="h2 mb-1">Mode de livraison 3/4</h2>
                    <div class="w-3/4 h-1 bg-marine"></div>
                </div>
                <div class="border-b-2 h-fit border-black">
                    <div>
                        <div class="flex flex-row justify-between items-baseline">
                            <p class="h3 mb-2">Mode de livraison</p>
                            <input type="radio" class="">
                        </div>
                        <div class="flex flex-row">
                            <p class="text-sm mr-20">Colissimo <br/>2 à 5 jours ouvrés</p>
                            <p>8.99 €</p>  
                        </div>
                    </div>    
                </div>
                <div class="flex flex-row justify-between laptop:justify-end">
                    <Button @click="step='2'" :secondary="true">Précédent</Button>
                    <Button @click="step='4'" :svg="true" class="laptop:ml-4">Suivant</Button>
                </div>
            </div>
            <div v-if="step==='4'" class="panier_adresse_form">
                <div class="w-full">
                    <h2 class="h2 mb-1">Paiement 4/4</h2>
                    <div class="w-4/4 h-1 bg-marine"></div>
                </div>
                <form action="" class="flex flex-col">
                    <label for="" class="text-marine font-bold">Titulaire de la carte</label>
                    <input type="text" placeholder="Nom Prénom" class="border-2 border-marine rounded-lg px-2 py-1">
                    <span v-if="!validation.number" class="order-view__error">Numéro de carte invalide</span>
                    <label for="" class="text-marine font-bold">Numéro de la carte</label>
                    <input v-model="payment.number" type="text" placeholder="XXXX XXXX XXXX XXXX XXXX" class="border-2 border-marine rounded-lg px-2 py-1">
                    <div class="flex flex-col laptop:flex-row laptop:justify-between">
                        <div class="flex flex-col laptop:w-1/2">
                            <span v-if="!validation.date" class="order-view__error">Date d'expiration non valide</span>
                            <label for="" class="text-marine font-bold">Date d'éxpiration</label>
                            <input v-model="payment.date" :min="dates.min" :max="dates.max" type="date" placeholder="11/12" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">    
                        </div>
                        <div class="flex flex-col laptop:w-1/2">
                            <span v-if="!validation.cvv" class="order-view__error">Cryptogramme non valide</span>
                            <label for="" class="text-marine font-bold">Cryptogramme visuel</label>
                            <input v-model="payment.cvv" type="text" placeholder="XXX" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                        </div>
                    </div>
                </form>
                <div class="flex flex-row justify-between laptop:justify-end">
                    <Button @click="step='3'" :secondary="true">Précédent</Button>
                    <Button @click="confirmInformation" :svg="true" class="laptop:ml-4">Valider</Button>
                </div>
            </div>
            <div class="recap fixed -ml-5 p-10 bg-marine flex flex-col justify-between laptop:static laptop:m-10 laptop:h-[60vh]">
                <div>
                    <h4 class="h4 m-0 text-white">Récapitulatif</h4>
                    <p class="font-bold text-white mb-0 mt-4">Produits</p>
                    <div v-for="(product, index) in $store.state.cart" :key="index" class="flex flex-row justify-between">
                        <p class="text-white text-sm my-1">{{product.quantity}} x {{product.name}}</p>
                        <p class="text-white text-sm my-1">{{product.price}} €</p>
                    </div>
                </div>
                <div>
                    <div class="flex flex-row justify-between">
                        <p class="text-white font-bold">Total panier</p>
                        <p class="text-white font-bold">{{cartTotal}} €</p>    
                    </div>
                </div>
            </div>
        </div>
    </main>

    </div>
</template>

<script>
import { client } from "@/utils/axios";
import Button from '@/components/Buttons.vue';
import ProductCart from '@/components/ProductCart.vue';

export default{
    components: { Button, ProductCart, },
    data(){
        return{
            step:                   '1',
            otherAddress:           false,
            validation: {
                    email:          true,
                    number:         true,
                    cvv:            true,
                    date:           true,
            },
            feedBack: {
                type:               null, 
                message:            null 
            },
            billing: {
                first_name:         '',
                last_name:          '',
                address_1:          '',
                address_2:          '',
                city:               '',
                state:              '',
                postcode:           '',
                country:            '',
                email:              '',
                phone:              ''
            },
            shipping: {
                first_name:         '',
                last_name:          '',
                address_1:          '',
                address_2:          '',
                city:               '',
                state:              '',
                postcode:           '',
                country:            '',
            },
            payment:{
                number:             '',
                cvv:                '',
                date:               '',
            },
        }
    },
    computed:{
        cartTotal() {
            return this.$store.state.cart.reduce((total, product) => {
                total += product.price * product.quantity;
                return total;
            }, 0);
        },
        dates () {
            const now = new Date()
            const in3years = new Date(new Date().setFullYear(new Date().getFullYear() + 3))
            return {
                min: now.toISOString().split('T')[0],
                max: in3years.toISOString().split('T')[0]
            }
        },
    },
    methods: {
            onSubmit($event){
                $event.preventDefault()
            },
            testPayment(){
                // equals to this.payment.number.length === 16 && /^[0-9]*$/.test(this.payment.number)
                this.validation.number = /\(|\)|\d{16}$/.test(this.payment.number)
                this.validation.cvv = /\(|\)|\d{3}$/.test(this.payment.cvv)
                return this.validation.number && this.validation.cvv
            },
            async confirmInformation () {
                if(!this.testPayment()) return

                this.feedBack = { type: null, message: null }

                const line_items = this.$store.state.cart.map(product =>{
                    return{
                        product_id: product.id,
                        quantity: product.quantity,
                        //meta_data: product.description,
                    }
                })

                try {
                    const response = await client.post('/wc/v3/orders', {
                        payment_method: "bacs",
                        payment_method_title: "Direct Bank Transfer",
                        set_paid: true,
                        shipping: this.shipping,
                        billing: this.otherAddress ? this.billing : this.shipping,
                        line_items: line_items,
                        shipping_lines: [
                            {
                                method_id: "flat_rate",
                                method_title: "Flat Rate",
                                total: "10.00"
                            }
                        ]
                    })
                    // Request has succeeded
                    this.$store.commit('emptyCart')
                    this.feedBack = { type: 'success', message: 'Merci pour votre commande' }

                    localStorage.setItem('order', JSON.stringify(response.data))
                    this.$router.push({ name: 'cart-order-thank-you' })

                } catch (err) {
                    // Request has failed
                    this.feedBack = { type: 'error', message: 'Le paiement n\'est pas passé' }
                    console.log(err)
                }
            },
        },
}
</script>
