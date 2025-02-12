<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const createNewProduct = async ()=>
{
    try{
        
    }catch(e){
        
    }
    
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
        <Button>Add A New Product</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
       
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="createNewProduct">Create</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>