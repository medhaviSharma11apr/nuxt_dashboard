<script setup>
const items = ref([
    {
        title: "Overview",
        path: "/overview",

    },
    {
        title: "Transactions",
        path: "/transactions"
    },
    {
        title: "Account",
        path: "/account",
    },
    {
        title: "Contacts",
        path: "/contacts",
    },
    {
        title: "Setting",
        path: "/setting",
    },
])
</script>


<template>
    <div>
        <!-- <header class="flex items-center gap-1 p-2 hover:scale-[101%] transition cursor-pointer ">
        <Logo class="w-6 h-6" ></Logo>

        <p class="font-bold ">Nuxt-Finance</p>
    </header> -->
        <header class="flex items-center gap-2 p-2 hover:scale-[101%] transition cursor-pointer">
            <Logo class="w-6 h-6" />
            <p class="font-bold">Nuxt-Finance</p>
        </header>


        <div class="px-4 grow">
            <div class="grid gap-4">
                <div v-for="(item, index) in items" :key="index" class="flex item-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100">
                    <span>{{ item.title }}</span>
                </div>

            </div>
        </div>

    </div>
</template>