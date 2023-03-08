<template>
    <div class="w-full h-full flex felx-col justify-center items-center">
        <h1>Merci pour votre commande {{ order.id }}.</h1>

        <p>Nous préparons votre commande pour qu'elle vous soit livrée au plus vite.</p>
        <RouterLink to="/"><Button>Retour à la page d'accueil</Button></RouterLink>
    </div>
</template>

<script>
    import Button from "@/components/Button.vue";

    export default {
        components: { Button },
        data () {
            return {
                order: {}
            }
        },
        created () {
            this.order = JSON.parse(localStorage.getItem('order'))
        }
    }
</script>

<style scoped>

</style>