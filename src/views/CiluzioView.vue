<template>
    <div>
        <div class="bg-beige px-5 laptop:px-20 pt-20 relative h-screen w-screen overflow-hidden">
            <div>
                <svg class="absolute -top-32 -left-32" width="282" height="282" fill="none">
                    <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M141 282C218.872 282 282 218.872 282 141C282 63.1278 218.872 0 141 0C63.1278 0 0 63.1278 0 141C0 218.872 63.1278 282 141 282ZM141 223.051C186.315 223.051 223.051 186.316 223.051 141C223.051 95.6846 186.315 58.9492 141 58.9492C95.6845 58.9492 58.9491 95.6846 58.9491 141C58.9491 186.316 95.6845 223.051 141 223.051Z" fill="#E7BC87"/>
                </svg>
                <svg class="absolute top-24 -right-16 scale-75" width="282" height="282" fill="none">
                    <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M141 282C218.872 282 282 218.872 282 141C282 63.1278 218.872 0 141 0C63.1278 0 0 63.1278 0 141C0 218.872 63.1278 282 141 282ZM141 223.051C186.315 223.051 223.051 186.316 223.051 141C223.051 95.6846 186.315 58.9492 141 58.9492C95.6845 58.9492 58.9491 95.6846 58.9491 141C58.9491 186.316 95.6845 223.051 141 223.051Z" fill="#E7BC87"/>
                </svg>
                <svg class="absolute top-64 -left-16 scale-50" width="282" height="282" fill="none">
                    <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M141 282C218.872 282 282 218.872 282 141C282 63.1278 218.872 0 141 0C63.1278 0 0 63.1278 0 141C0 218.872 63.1278 282 141 282ZM141 223.051C186.315 223.051 223.051 186.316 223.051 141C223.051 95.6846 186.315 58.9492 141 58.9492C95.6845 58.9492 58.9491 95.6846 58.9491 141C58.9491 186.316 95.6845 223.051 141 223.051Z" fill="#E7BC87"/>
                </svg>
                <svg class="absolute -bottom-20 right-4 scale-90" width="282" height="282" fill="none">
                    <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M141 282C218.872 282 282 218.872 282 141C282 63.1278 218.872 0 141 0C63.1278 0 0 63.1278 0 141C0 218.872 63.1278 282 141 282ZM141 223.051C186.315 223.051 223.051 186.316 223.051 141C223.051 95.6846 186.315 58.9492 141 58.9492C95.6845 58.9492 58.9491 95.6846 58.9491 141C58.9491 186.316 95.6845 223.051 141 223.051Z" fill="#E7BC87"/>
                </svg>
            </div>
            <div>
                <div class="navigation laptop:mb-32 laptop:my-10">
                    <div class="flex flex-wrap w-full justify-between place-items-end laptop:w-1/3 laptop:mx-auto">
                        <p @click="view = 'totems'" :class="{ active: view==='totems'}" class="relative cursor-pointer">
                            <span class="underline block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-marine" aria-hidden="true"></span>
                            <span class="text relative">Totems</span>
                        </p>
                        <p @click="view = 'custom'" :class="{ active: view==='custom' }" class="relative cursor-pointer">
                            <span class="underline block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-light-red" aria-hidden="true"></span>
                            <span class="text relative">Personnaliser</span>
                        </p>
                        <p @click="view = 'random'" :class="{ active: view==='random' }" class="hidden relative cursor-pointer">
                            <span class="underline block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-blue" aria-hidden="true"></span>
                            <span class="text relative">Générateur</span>
                        </p>
                    </div>
                </div>
                <Custom v-if="view==='custom'"></Custom>
                <Totems v-if="view==='totems'"></Totems>
                <Random v-if="view==='random'"></Random>
            </div>
        </div>

    </div>
</template>

<script>
import Nav from '@/components/NavLampes.vue';
import Custom from '@/components/CustomLampes.vue';
import Totems from '@/components/TotemsLampes.vue';
import Random from '@/components/RandomLampes.vue';

export default {
    components:{ Nav, Custom, Totems, Random, },
    data(){
        return{
            view: 'custom',
        }
    }
}
</script>

<style scoped>


.navigation p:hover .underline{
    height: 0.5rem;
}

.navigation p:active .underline{
    height: 0.75rem;
}

.navigation p:active .text{
    font-weight: bold;
}
</style>