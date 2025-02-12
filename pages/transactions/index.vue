<script setup lang="ts">
import { h,  onMounted , ref } from 'vue';
import {columns } from './columns'
const loading= ref(false)

const data = ref<any>([
  
]);

function generateRandomData(numObject: any ) {
  const statuses = ['pending', 'completed', 'failed', 'processing'];

  const randomData: any[] =[]
  for(let i =0 ; i < numObject; i++ ){
  const id = Math.random().toString(36).substring(2, 10); // Generate a random 8-character string
  const amount = Math.floor(Math.random() * 1000) + 1; // Random amount between 1 and 1000
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const email = `user${Math.floor(Math.random() * 1000)}@example.com`; // Random email

  randomData.push(
    {
      id,
      amount,
      status,
      email,
    }
  )
  }


  return data.value = randomData
}

onMounted(() => {
  generateRandomData(10);
  
});


</script>

<template>
  <div class=' grid h-screen gap-8'>
    <header class="flex item-start justify-between">
      <div class="grow">
        <p> All Your Transactions ! </p>
        <h1>Transactions</h1>
      </div>
      
      <ProductNew></ProductNew>

     

    </header> 
     <MyDataTable :data="data" :columns="columns"></MyDataTable>
  </div>
</template>