<script setup>
const loading= ref(false)
</script>

<template>
  <div class=' grid h-screen gap-8'>
    <header class="flex item-start justify-between">
      <div class="grow">
        <p> All Your Transactions ! </p>
        <h1>Transactions</h1>
      </div>
      
      <ProductNew></ProductNew>

     

    </header>  </div>
</template>