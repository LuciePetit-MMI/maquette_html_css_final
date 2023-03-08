<template>
  <div class="fixed top-0 left-0 z-50 backdrop-blur">
    <div class="menu relative flex flex-row justify-between items-center w-screen px-5 py-2">
        <div @click="openNav = !openNav" class="burger flex flex-col justify-between h-6 z-50 laptop:hidden">
            <span class="burger__line w-10 h-1 bg-marine rounded-full block"></span>
            <span class="burger__line w-10 h-1 bg-marine rounded-full block"></span>
            <span class="burger__line w-10 h-1 bg-marine rounded-full block"></span>
        </div>

        <router-link to="/"><img src="../assets/logo.svg" alt="" class="logo z-50"></router-link>

        <router-link to="/compte"><img src="../assets/images/cartIcon.svg" class="w-10 h-10 z-50 laptop:hidden"></router-link>
        <nav :class="{'block': openNav, 'hidden': !openNav}" class="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white text-center z-10 laptop:static laptop:max-w-fit laptop:block laptop:h-full laptop:bg-[transparent]">
            <ul class="flex flex-col laptop:flex-row">
                <li class="mb-8 laptop:mb-0 laptop:mr-8"><router-link to="/" class="font-saotorpes text-marine text-2xl">Accueil</router-link></li>
                <li class="mb-8 laptop:mb-0 laptop:mr-8"><router-link to="/ciluzio" class="font-saotorpes text-marine text-2xl">Ciluzio</router-link></li>
                <li class="mb-8 laptop:mb-0 laptop:mr-8"><router-link to="/panier" class="font-saotorpes text-marine text-2xl">Panier</router-link></li>
                <li class="mb-8 laptop:mb-0 laptop:mr-8"><router-link to="/compte" class="font-saotorpes text-marine text-2xl">Mon compte</router-link></li>
            </ul>
        </nav>
    </div>    
</div>
</template>

<script>
export default({
  data() {
    return{
      openNav: false,
    }
  }
})
</script>

<style scoped>

</style>
