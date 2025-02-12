<script setup lang="ts">
import { Input } from '@/components/ui/input'

const { loading, open } = useHelpers();
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
import useHelpers from '~/composable/useHelper';

const createNewProduct = async () => {
    loading.value = true;
    try {

    } catch (e) {

    } finally {
        loading.value = false;
        open.value = false;

    }

}
</script>

<template>
    <AlertDialog :open="open">
        <AlertDialogTrigger>
            <Button @click="open = true">Add A New Product</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Create a new Product
                </AlertDialogTitle>
                <Input placeholder="My New Product" />

            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel @click="open = false">Cancel</AlertDialogCancel>
                <AlertDialogAction @click="createNewProduct">Create</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>