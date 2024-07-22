<template>
    <div class="mx-auto flex flex-col flex-wrap max-w-[700px]">
        <div class="border-b-[2px] border-dashed border-b-[#000000] flex flex-row-reverse max-w-[700px] w-[700px]">
            <span class="text-[#000000] text-[48px] font-rufina">${{ price }}</span>
        </div>
        <h2 class="text-[#111] text-[68px] font-rufina max-w-[700px]">{{ title }}</h2>
        <p class="text-[#4D4D4D] text-[24px] font-lato">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: "MenuItemHome",
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
}
</script>