<template>
    <div class="px-5 laptop:px-20 bg-blue">
        <div class="laptop:grid grid-cols-2">
            <div>
                <h1 class="h1 mt-0 pt-20 text-beige">Contact</h1>
                <form action="" class="flex flex-col">
                    <label for="" class="text-white text-2xl">Nom Prénom</label>
                    <input type="text" placeholder="Nom Prénom" class="p-3 rounded-lg placeholder:text-marine">
                    <label for="" class="text-white text-2xl">Email</label>
                    <input type="text" placeholder="Email" class="p-3 rounded-lg placeholder:text-marine">
                    <label for="" class="text-white text-2xl">Objet</label>
                    <input type="text" placeholder="Objet" class="p-3 rounded-lg placeholder:text-marine">
                    <label for="" class="text-white text-2xl">Message</label>
                    <textarea placeholder="Message" rows="3" class="p-3 rounded-lg placeholder:text-marine"></textarea>
                    <input type="submit" value="Envoyer" class="button_secondary text-white border-white my-6 self-end">
                </form>        
            </div>
            <div class="hidden laptop:flex flex-col items-center laptop:relative h-full">
                <h2 class="font-saotorpes text-4xl uppercase text-white text-center z-20 laptop:mt-48"><span>Personnalisez</span></h2>
                <img src="/src/images/victor-medio.webp" alt="" class="z-10 absolute scale-75 -bottom-[15%]">
                <h2 class="font-saotorpes text-4xl uppercase text-white text-center mt-[-450px] laptop:mt-10"><span>votre lampe</span></h2>
                <h2 class="font-saotorpes text-4xl uppercase text-white text-center z-20 laptop:mt-10"><span>à l'infini</span></h2>
            </div>
        </div>
    </div>

</template>

<script>
</script>