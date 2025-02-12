<script setup>
import { TabsContent } from 'radix-vue';
const list = [
  {
    title: "Today",
    component: "<div>Today</div>"
  },
  {
    title: "Week",
    component: "<div>This week</div>"
  },
  {
    title: "Month",
    component: "<div>This month</div>"
  },
  {
    title: "Year",
    component: "<div>This year</div>"
  },

];

let currentCategory = ref
  ('today');
let data = ref([])
function generateRandomData(number=24) {
  let values = []
  for (let i = 0; i < number ; i++) {
    values.push(Math.floor(Math.random() * 100))
  }
  // console.log(values);
  data.value = values;

  return values;
}

onMounted(() => {
  generateRandomData();
});



const setCategory = (e) => {
  // console.log('e', e)
  let v = e.target.innerText.toLowerCase();

  currentCategory.value = v;
      // console.log('v', v)

  switch (v) {
    case 'today':
      // console.log('v-t', v)
      generateRandomData(24);
    case 'week':
      generateRandomData(7);
    case 'month':
      generateRandomData(30);
    case 'year':
      generateRandomData(12);
    default :
  }




}



let categories = ref({
  today: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
    '20:00', '21:00', '22:00', '23:00'],
  week: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  month: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  year: [
      "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],

});

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
  legend: {
    enabled: false,
  },

  xAxis: {
    gridLineColor: 'transparent',
    // categories: currentCategory.value
    categories: categories.value[currentCategory.value]
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

  ]
})



)

// cards 

const cards = [
  {
  title:"Sales",
  progressions : 12,
  amount : 1244.440,
  label:"View sale",
  description: "Sale of march-2014",
  icon :"solar:ticket-sale-online"
},
  {
  title:"Refunds",
  progressions : 8,
  amount : 84.440,
  label:"View refuds",
  description: "Refunds since begining of the year",
  icon :"heroicons-outline:receipt-refund"
},
  {
  title:"Payouts",
  progressions : 14,
  amount : 899.99,
  label:"View payouts",
  description: "Payouts of this week",
  icon :"tabler:zoom-money"
},

]
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
        <Tabs default-value="Today" @click="setCategory">
          <TabsList class="max-w-[400px] m-2">
            <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
              {{ item.title }}
            </TabsTrigger>
          </TabsList>
          <TabsContent v-for="(item, index) in list" :key="index" :value="item.title">
             <div class="border p-4 rounded-lg ">
               <highchart :options="options" />
             </div>
           
          </TabsContent>


        </Tabs>
      </div>

      <!-- <div class="flex item-center gap-3">
        <div v-for="(item, index) in 3" :key="index" class="w-[120px] h-[36px] bg-neutral-200"></div>


      </div> -->
      <!-- <section>
        <div class="w-full h-[360px] bg-neutral-200">sect</div>
      </section> -->




      

    </main>
    <footer>
      <!-- I will have 3 different cards -->
      <!-- <div class="flex item-center gap-3"> -->
      <div class="grid lg:grid-cols-3 gap-4 mb-2">
        <Card v-for="(item, index) in cards" :card="item" :key="item" class=""></Card>
      </div>
    </footer>
  </div>
</template>