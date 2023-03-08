<template>
    <div>
        <router-link v-if="link" :to="link" :class="[{'button': !secondary, 'button_secondary': secondary}, `-is-${color}`]" class="justify-self-end"><slot></slot>
            <svg v-if="svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                <path d="M1 8H26" stroke-width="2" stroke-linecap="round"/>
                <path d="M19.5 1.5L26 8L19.5 14.5" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </router-link>
        <button v-else :class="[{'button': !secondary, 'button_secondary': secondary}, `-is-${color}`]" class="justify-self-end"><slot></slot>
            <svg v-if="svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                <path d="M1 8H26" stroke-width="2" stroke-linecap="round"/>
                <path d="M19.5 1.5L26 8L19.5 14.5" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
    </div>
</template>

<script>

export default {
    props: {
        link: {
            type: String,
            default: null,
        },
        svg: {
            type: Boolean,
            default: false,
        },
        secondary:{
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'blue',
            validator: color => {
                return['blue', 'red', 'white'].includes(color)
            }
        }
    },
};
</script>

<style scoped>
.button {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    --tw-bg-opacity: 1;
    background-color: rgb(12 39 80 / var(--tw-bg-opacity));
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: Quicksand;
    text-transform: uppercase;
    --tw-text-opacity: 1;
    color: rgb(241 238 237 / var(--tw-text-opacity));
}
.button svg {
    margin-left: 1rem;
    stroke: rgb(241 238 237 / var(--tw-text-opacity));
}
.button.-is-red{
    background-color: rgb(224 62 51 / var(--tw-bg-opacity));
    color: rgb(235 200 157 / var(--tw-text-opacity));
}
.button.-is-red svg {
    stroke: rgb(235 200 157 / var(--tw-text-opacity));
}
.button.-is-white{
    background-color: rgb(241 238 237 / var(--tw-bg-opacity));
    color: rgb(233 156 108 / var(--tw-text-opacity));
}
.button.-is-white svg {
    stroke: rgb(233 156 108 / var(--tw-text-opacity));
}
.button_secondary {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border-width: 2px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(12 39 80 / var(--tw-border-opacity));
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: Quicksand;
    --tw-text-opacity: 1;
    color: rgb(12 39 80 / var(--tw-text-opacity));
}
.button_secondary svg {
    margin-left: 1rem;
    stroke: #0C2750;
}
.button_secondary.-is-red{
    border-color: rgb(224 62 51 / var(--tw-border-opacity));
    color: rgb(224 62 51 / var(--tw-text-opacity));
}
.button_secondary.-is-red svg{
    stroke: rgb(224 62 51 / var(--tw-text-opacity));
}
.button_secondary.-is-white{
    border-color: rgb(241 238 237 / var(--tw-border-opacity));
    color: rgb(241 238 237 / var(--tw-text-opacity));
}
.button_secondary.-is-white svg{
    stroke: rgb(241 238 237 / var(--tw-text-opacity));
}
</style>