<script setup>
import { TabsContent } from 'radix-vue';


function generateRandomData(number =7){
let values =[]  
for(let i=0 ; i< number +1 ; i++){
  values.push(Math.floor(Math.random() *100 ))
}
console.log(values);
data.value= values;
return values;
}

onMounted(() => {
  generateRandomData();
});

const loading = ref(false);

const list = [
  {
    title: "Today",
    component: "<div>Today</div>"
  },
  {
    title: "This week",
    component: "<div>This week</div>"
  },
  {
    title: "This month",
    component: "<div>This month</div>"
  },
  {
    title: "This year",
    component: "<div>This year</div>"
  },

];
let data= ref([])
// let data = ref([
//       16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
//       22.0, 17.8
//     ]);
let categories = ref({
  'today': [],
  'week': [],
  'month': [],
  'year': [],

});
let currentCategory = ref([
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'
],);
const options = computed(() => ({
  chart: {
    type: 'line',
    animation: {
      enabled: false,
    }
  },
  title: {
    text: ''
  },
  legend:{
  enabled:false,  
  },

  xAxis: {
    gridLineColor: 'transparent',
    categories: currentCategory.value
  },
  yAxis: {
    gridLineColor: 'transparent',
    title: {
      text: ''
    }
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: true
    }
  },
  series: [{
    lineWidth: '4px',
    color: {
      linearGradient: {

      },
      stops: [
        [0, 'rgba(252, 176,69, 1)'],
        [0.33, 'rgba(253, 29,29, 1)'],
        [0.66, 'rgba(131,58,180, 1)'],
        [1, 'rgba(29, 217,59, 1)'],
      ]
    },
    name: 'Reggane',
    data: data.value
  },
    // {
    //   name: 'Tallinn',
    //   data: [
    //     -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
    //     2.0, -0.9
    //   ]
    // }
  ]
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
        <Tabs default-value="Today" >
          <TabsList class="max-w-[400px]">
            <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
              {{ item.title }}
            </TabsTrigger>
          </TabsList>
          <TabsContent v-for="(item, index) in list" :key="index" :value="item.title">
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