<script setup>
const open = ref(false)
</script>

<template>
    <div >

        <div class=" z-50 flex lg:hidden  items-center justify-between w-full p-full p-4">
            <Logo></Logo>
            <Icon class="z-50 cursor-pointer left-2 top-2 " size="50" name="iconamoon:menu-burger-horizontal"
                @click="open = !open"></Icon>

            <div class="absolute top-0 left-0 w-full h-full h-screen bg-white " v-show="open">
                  <Icon class=" absolute z-50 cursor-pointer right-4 top-4 " size="50" name="material-symbols:close"
                @click="open = !open"></Icon>
                <SidebarMenu ></SidebarMenu>
            </div>

        </div>
        <div class="hidden lg:flex w-[250px] h-screen flex flex-col justify-between border-r ">
            <SidebarMenu></SidebarMenu>
            <div>
                User Items
            </div>
        </div>
    </div>
</template>