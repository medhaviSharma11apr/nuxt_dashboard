<script setup>
import { TabsContent } from 'radix-vue';

const loading = ref(false);

const list =[
  {
    title:"Today",
    component:"<div>Today</div>"
  },
   {
    title:"This week",
    component:"<div>This week</div>"
  },
   {
    title:"This month",
    component:"<div>This month</div>"
  },
   {
    title:"This year",
    component:"<div>This year</div>"
  },
  
];
const options = computed(()=>({
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ]
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Reggane',
        data: [
            16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
            22.0, 17.8
        ]
    }, {
        name: 'Tallinn',
        data: [
            -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
            2.0, -0.9
        ]
    }]
})



)
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
      <div class="trial">
        <Tabs default-value="today" class="w-[400px]">
          <TabsList>
            <TabsTrigger v-for="(item , index) in list" :key="index" :value="item.title">
            {{ item.title }}
            </TabsTrigger>
          </TabsList>
          <TabsContent v-for="(item , index) in list" :key="index" :value="item.title">
            <!-- {{ item.component }} -->
              <highchart :options="options" />
          </TabsContent>
         
        
        </Tabs>
      </div>

      <!-- <div class="flex item-center gap-3">
        <div v-for="(item, index) in 3" :key="index" class="w-[120px] h-[36px] bg-neutral-200"></div>


      </div> -->
      <section>
        <div class="w-full h-[360px] bg-neutral-200">sect</div>
      </section>




      >

    </main>
    <footer>
      <!-- I will have 3 different cards -->
      <div class="flex item-center gap-3">
        <div v-for="(item, index) in 3" :key="index" class="w-full h-[300px] bg-neutral-200"></div>
      </div>
    </footer>
  </div>
</template>