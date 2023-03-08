<template>
    <footer class="px-5 laptop:px-20 py-5 bg-skin laptop:flex laptop:flex-rows laptop:w-full laptop:justify-evenly">
        <div class="footer_info">
            <h3 class="h4 text-marine">Informations</h3>
            <p><a href="">Livraison et retours</a></p>
            <p><a href="">Documents techniques</a></p>
            <p><a href="">CGV</a></p>
            <p><a href="">Mentions légales</a></p>
        </div>
        <div class="footer_contact">
            <h3 class="h4 text-marine">Contact</h3>
            <p><RouterLink to="/contact">Mail</RouterLink></p>
            <p><a href="">Facebook</a></p>
            <p><a href="">Instagram</a></p>
            <p><a href="">Pinterest</a></p>
        </div>
        <div class="footer_newslettre">
            <h3 class="h4 text-marine">Newsletter</h3>
            <form action="" class="flex flex-col">
                <label for="" class="hidden">Email</label>
                <input type="email" placeholder="Email" class="border-solid border-2 border-marine rounded-full bg-[transparent] px-4 py-2 mb-3 placeholder:text-marine">
                <Button type="submit" value="S'inscrire">S'inscrire</Button>
            </form>
        </div>
    </footer>
</template>

<script>
import Button from '@/components/Buttons.vue';

export default {
    components: { Button }
};
</script>

<style scoped>

</style>