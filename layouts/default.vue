<script setup lang="ts">


</script>

<template>
    <div class="grid items-start lg:flex">
    <Sidebar></Sidebar>
    
        <div class="p-8 w-full"
        >
            <slot />
        </div>
    </div>
</template>