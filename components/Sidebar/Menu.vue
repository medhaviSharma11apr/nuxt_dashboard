<script setup>

const items = ref([
    {
        title: "Overview",
        // path: "/overview",
        path: "/",
        icon: "ri:dashboard-line",

    },
    {
        title: "Transactions",
        path: "/transactions",
        icon: "grommet-icons:transaction",
    },
    {
        title: "Account",
        path: "/account",
        icon: "tdesign:setting",
    },
    {
        title: "Contacts",
        path: "/contacts",
        icon: "mdi:contact-outline",
    },
    {
        title: "Setting",
        path: "/setting",
        icon: "solar:settings-outline",
    },
])
</script>


<template>
    <div>

        <header class="flex items-center gap-2 p-2 hover:scale-[101%] transition cursor-pointer">
            <Logo class="w-6 h-6" />
            <p class="font-bold text-black">Nuxt-Finance</p>
        </header>


        <div class="px-4 grow">
            <div class="grid gap-2">
                <NuxtLink :href="item.path" v-for="(item, index) in items" :key="index" 
                    class="flex item-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100">

  
                    <Icon :name="item.icon" style="color: black"  size="25" />

                    <span>{{ item.title }}</span>
                </NuxtLink>

            </div>
        </div>

    </div>
</template>