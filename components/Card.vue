<script setup>
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const props = defineProps(["card",]);
const loading = ref(false)

</script>

<template>
    <Card>
        <CardHeader class="px-2 pt-4 pb-2 ">
            <div class="flex justify-between  item-center">

                <p>{{ card.title }}</p>
                <Badge class="bg-green-400">{{'+'+card.progressions + '%' }}</Badge>
            </div>

        </CardHeader>
        <CardContent class="flex justify-end  item-center border-b pt-0 pb-2">
            <div class="text-[48px] font-[800]">
                <span class="text-neutral-500"> $</span>
                <span> {{card.amount}}</span>
            </div>

        </CardContent>

        <CardFooter class="flex gap-2 py-2  px-2 item-center justify-between">
            <div>
                     <Icon class=" " size="20" :name="card.icon"
               ></Icon>
            </div>
            <p class="text-xs grow">
                 {{ card.description }}
            </p>
            <Button variant="outline">{{card.label}}</Button>
           
          
        </CardFooter>
    </Card>
</template>