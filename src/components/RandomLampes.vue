<template>
    <div>
        <div class="generateur  laptop:w-3/5 laptop:mx-auto">
                    <div class="navigationSize mb-4">
                        <div class="flex flex-wrap place-items-end">
                            <p @click="size='fixed'" :class="{ active: size==='fixed'}" href="" class="relative cursor-pointer mr-8">
                                <span class="block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-marine" aria-hidden="true"></span>
                                <p class="text relative">Taille fixe</p>
                            </p>
                            <p @click="size='random'" :class="{ active: size==='random'}" href="" class="relative cursor-pointer mr-8">
                                <span class="block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-blue" aria-hidden="true"></span>
                                <p class="text relative">Taille aléatoire</p>
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between items-center my-8 laptop:my-4">
                        <div class="tailles self-start">
                            <div v-if="size==='fixed'">
                                <div class="flex row items-center mb-2">
                                    <input type="radio" class="button_radio mr-2"><label for="" class="mb-0">Piccolo <br/>- 140 cm</label>
                                </div>
                                <div class="flex row items-center mb-2">
                                    <input type="radio" class="button_radio mr-2"><label for="" class="mb-0">Medio <br/>- 140 cm</label>
                                </div>
                                <div class="flex row items-center mb-2">
                                    <input type="radio" class="button_radio mr-2"><label for="" class="mb-0">Grande <br/>- 140 cm</label>
                                </div>
                            </div>
                            <div v-if="size==='random'">
                                <div class="flex row items-center mb-2">
                                    <p class="mb-0">Piccolo <br/>- 140 cm</p>
                                </div>
                            </div>
                        </div>
                        <div class="image w-2/3 laptop:max-h-[45vh]">
                            <img src="../assets/images/victor-medio.webp" alt="" class="mx-auto laptop:h-96">
                        </div>
                        <div class="couleurs">
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="12" stroke="black" fill="white" stroke-width="3"/>
                            </svg>
                        </div>
                    </div>
                    <div class="buttons flex row justify-between items-baseline mb-4">
                        
                        <div class="button-left flex flex-col items-start">
                            <Button :secondary="true">
                                <svg class="ml-0" width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4998 4.29383L11.3795 3.14226C8.74984 0.439138 3.92796 1.37195 2.18734 4.77039C1.37015 6.36883 1.18577 8.67664 2.67796 11.622C4.11546 14.4579 7.10609 17.8548 12.4998 21.5548C17.8936 17.8548 20.8826 14.4579 22.3217 11.622C23.8139 8.67508 23.6311 6.36883 22.8123 4.77039C21.0717 1.37195 16.2498 0.437576 13.6201 3.1407L12.4998 4.29383ZM12.4998 23.4376C-11.458 7.60633 5.12327 -4.74992 12.2248 1.78601C12.3186 1.87195 12.4108 1.96101 12.4998 2.0532C12.588 1.9611 12.6797 1.87249 12.7748 1.78758C19.8748 -4.75305 36.4576 7.60476 12.4998 23.4376Z" fill="#0C2750"/>
                                </svg>
                            </Button>
                            <Button  :secondary="true">Générer</Button>
                        </div>
                        <div class="button-right flex flex-col items-end">
                            <p class="font-bold text-marine text-2xl">Prix €€€</p>
                            <Button :svg="true">Acheter</Button>   
                        </div>
                    </div>
                </div>

    </div>
</template>

<script>import Button from '@/components/Buttons.vue'

export default{
    components: { Button, },
    data(){
        return{
            size: "random"
        }
    }
}
</script>

<style scoped>
.navigationSize p:hover .underline{
    height: 0.5rem;
}

.navigationSize p:active .underline{
    height: 0.75rem;
}

.navigationSize p:active p{
    font-weight: bold;
}
</style>