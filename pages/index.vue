<script setup>
const loading = ref(false)
</script>

<template>
  <div class=' grid h-screen gap-8'>
    <header class="flex item-start justify-between">
      <div class="grow">
        <p> Hi welcome back Deepak ! </p>
        <h1>Dash Board</h1>
      </div>

      <div class="bg-neutral-200 h-[120px] w-[120px]">
        
      </div>

    </header>
    <main class="grid gap-2">
          <div class="flex item-center gap-3">
           <div  v-for="(item, index) in 3" :key="index" class="w-[120px] h-[36px] bg-neutral-200"></div>

            
          </div>
      <section>
         <div class="w-full h-[360px] bg-neutral-200">sect</div>
      </section>
    </main>
    <footer >
      <!-- I will have 3 different cards -->
        <div class="flex item-center gap-3">
        <div  v-for="(item, index) in 3" :key="index" class="w-full h-[300px] bg-neutral-200"></div>
        </div>
    </footer>
  </div>
</template>