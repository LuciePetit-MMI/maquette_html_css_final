<template>
    <div class="px-5 laptop:px-20" :class="{'bg-transparant h-fit w-fit': step, 'bg-beige h-screen w-screen': !step}">
        <div v-if="!step" class="signs pt-24 mb-12 px-5 laptop:px-20">
            <div>
                <p v-if="message">{{ message }}</p>
                <form class="laptop:grid laptop:grid-cols-2 laptop:gap-10" @submit="onSubmit">
                    <div v-if="connection==='signup'" action="" class="flex flex-col">
                        <h1 class="h1">Connexion</h1>
                        <p>Vous n'avez pas de compte ? <span class="underline" @click="connection='signin'">Inscrivez-vous</span></p>        
                        <label for="" class="text-marine text-xl">Email</label>
                        <input v-model.trim="username" type="email" placeholder="Email" class="border-solid border-2 border-marine rounded-full bg-[transparent] px-4 py-2 mb-3 placeholder:text-marine">
                        <label for="" class="text-marine text-xl">Mot de passe</label>
                        <input v-model.trim="password" type="password" placeholder="********" class="border-solid border-2 border-marine rounded-full bg-[transparent] px-4 py-2 mb-3 placeholder:text-marine">
                        <input @click="login()" type="submit" value="Se connecter" class="button bg-marine text-white rounded-full h-10">
                    </div>
                    <div v-if="connection==='signin'" action="" class="flex flex-col">
                        <h1 class="h1">Inscription</h1>
                        <p>Vous avez déjà un compte ? <span class="underline" @click="connection='signup'">Connectez-vous</span></p>    
                        <label for="" class="text-marine text-xl">Nom</label>
                        <input v-model="user.last_name" type="text" placeholder="Nom" class="border-solid border-2 border-marine rounded-full bg-[transparent] px-4 py-2 mb-3 placeholder:text-marine">
                        <label for="" class="text-marine text-xl">Prénom</label>
                        <input v-model="user.first_name" type="text" placeholder="Prénom" class="border-solid border-2 border-marine rounded-full bg-[transparent] px-4 py-2 mb-3 placeholder:text-marine">
                        <label for="" class="text-marine text-xl">Email</label>
                        <input v-model="user.email" type="email" placeholder="Email" class="border-solid border-2 border-marine rounded-full bg-[transparent] px-4 py-2 mb-3 placeholder:text-marine">
                        <label for="" class="text-marine text-xl">Mot de passe</label>
                        <input v-model="user.mdp" type="password" placeholder="********" class="border-solid border-2 border-marine rounded-full bg-[transparent] px-4 py-2 mb-3 placeholder:text-marine">
                        <label for="" class="text-marine text-xl">Confirmez votre mot de passe</label>
                        <input v-model="user.mdpCheck" type="password" placeholder="********" class="border-solid border-2 border-marine rounded-full bg-[transparent] px-4 py-2 mb-3 placeholder:text-marine">
                        <input @click="createAccount" type="submit" value="S'inscrire" class="button bg-marine text-white text-white rounded-full h-10">
                    </div>
                    <div class="hidden laptop:block">
                        <h3 class="font-saotorpes text-3xl text-white text-center">Votre lampe n'est plus qu'à un fils</h3>
                        <img src="../assets/images/gif_ciluzio.gif" alt="" class="w-1/2 mx-auto">
                    </div>
                </form>
            </div>
        </div>
        <main v-if="step" class="pt-24 mb-12">
            <div class="nav_account">
                <h1 class="h1">Mon compte</h1>
                <div class="flex flex-wrap w-full justify-between laptop:w-1/3 laptop:mx-auto">
                    <a @click="step='informations'" class="relative cursor-pointer">
                        <span class="block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-marine" aria-hidden="true"></span>
                        <span class="relative">Infos</span>
                    </a>
                    <a @click="step='commandes'" class="relative cursor-pointer">
                        <span class="block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-marine" aria-hidden="true"></span>
                        <span class="relative">Commande</span>
                    </a>
                    <a @click="step='inspirations'" class="hidden relative cursor-pointer">
                        <span class="block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-marine" aria-hidden="true"></span>
                        <span class="relative">Mes lampes</span>
                    </a>
                </div>
            </div>
            <div class="infos_account laptop:account my-10">
                <div class="hidden laptop:block">
                    <p class="h1 text-blue mx-16 text-5xl">Si vous pouvez le rêver, vous pouvez le faire.</p>
                </div>
                <div class="laptop:ml-10 laptop:mr-16">
                    <section v-if="step==='informations'" id="infos">
                        <form action="" class="flex flex-col">
                            <label for="">Nom Prénom</label>
                            <input type="text" placeholder="John Doe">
                            <div class="flex flex-col laptop:flex-row">
                                <div class="flex flex-col w-1/2">
                                    <label for="">Email</label>
                                    <input type="text" placeholder="johndoe@gmail.com">
                                        </div>
                                <div class="flex flex-col w-1/2">
                                    <label for="">Mot de passe</label>
                                    <input type="password" placeholder="**********">
                                </div>
                            </div>
                            <label for="">Rue</label>
                            <input type="text" placeholder="1 grande rue">
                            <label for="">Complément d'adresse</label>
                            <input type="text" placeholder="Complément d'adresse">
                            <div class="flex flex-col laptop:flex-row">
                                <div class="flex flex-col w-1/2">
                                    <label for="">Code postal</label>
                                    <input type="text" placeholder="25000">    
                                </div>
                                <div class="flex flex-col w-1/2">
                                    <label for="">Ville</label>
                                    <input type="text" placeholder="Besançon">
                                </div>
                            </div>
                            <label for="">Pays</label>
                            <input type="text" placeholder="France">
                            <Button type="submit" :secondary="true" class="self-end">Modifier</Button>
                        </form>
                    </section>
                    <section v-if="step==='commandes'" id="commandes">
                            <div>                            
                                <div class="flex justify-between border-b-black border-b-2 my-2">
                                    <p>Date</p>
                                    <p>12 / 02 / 2023</p>
                                </div>
                                <div>
                                    <div class="flex justify-between">
                                        <p>N° commande</p>
                                        <p>0002</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>Produits</p>
                                        <ul>
                                            <li class="my-1">Ciluzio Victor Grande</li>
                                        </ul>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>Statut</p>
                                        <p>Livré</p>
                                    </div>
                                </div>
                            </div>
                    </section>
                    <section v-if="step==='inspirations'" id="lampes">
                        <swiper class="swiper_product px-5 flex flex-col justify-center items-center laptop:hidden"
                            :slides-per-view="auto"
                            :space-between="30"
                            :loop="true"
                            :centeredSlides="true"
                            :pagination="{
                                clickable: true,
                            }"
                            :modules="modules"
                        >
                            <swiper-slide class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </swiper-slide>
                            <swiper-slide class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </swiper-slide>
                            <swiper-slide class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </swiper-slide>
                        </swiper>

                        <div class="hidden laptop:grid grid-cols-3 gap-4 px-5 laptop:p-0">
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                        </div>
                    </section>    
                </div>
        
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
    data(){
            return{
                step:               null,
                connection:         'signup',
                username:           '',
                password:           '',
                message:            '',
                user: {
                    email:          '',
                    first_name:     '',
                    last_name:      '',
                    username:       '',
                    mdp:            '',
                    mdpCheck:       '',
                },
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
            modules: [Pagination],
        };
    },
    methods: {
        onSubmit($event){
            $event.preventDefault()
        },
        connectAccount () {
            this.step = 'informations'
        },
        async createAccount () {
            if(this.user.mdp === this.user.mdpCheck){
                console.log('mdp passed')
            }
            else{
                console.log('mdp non identique')
            }
            console.log(this.user)
            try {
                const response = await client.post('/wc/v3/customers', {
                    email: this.user.email,
                    first_name: this.user.first_name,
                    last_name: this.user.last_name,
                    role: "customer",
                    username: this.user.first_name+this.user.last_name,
                })

                localStorage.setItem('customers', JSON.stringify(response.data))
                this.step = 'informations'
                console.log(response)
            } catch (err) {
                // Request has failed
                this.feedBack = { type: 'error', message: 'Des informations sont érronées' }
                console.log(err)
            }
        },
        async login() {
            this.message = '';

            try {
                // Call the login function in store.js
                await this.$store.dispatch('login', {
                    username: this.username,
                    password: this.password,
                });

                // if redirected to login from secured page, redirect back
                if (this.$route.query.redirectTo) {
                    this.step = 'informations';
                }
                // else redirect to Home
                else {
                    this.$router.push({ name: 'Home' });
                }
            } catch (error) {
                this.message = 'L\'email ou le mot de passe sont incorrects';
                console.log(error)
            }
        }
    }
};
</script>