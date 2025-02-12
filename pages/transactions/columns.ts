import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'


export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'email',
    header: () => h('div', { class: 'text-left ' }, 'Email'),
    cell: ({ row }: any) => {
     const email = row.getValue("email")
     return h('div',{ class: 'text-left font-medium' }, email );
    },
    
  },
   {
     accessorKey: 'id',
    header: () => h('div', { class: 'text-left ' }, 'id'),
    cell: ({ row }: any) => {
     const id = row.getValue("id")
     return h('div',{ class: 'text-left font-medium' }, id );
    },},
  
  {
     accessorKey: 'status',
    header: () => h('div', { class: 'text-left ' }, 'status'),
    cell: ({ row }: any) => {
     const status = row.getValue("status")
     return h('div',{ class: 'text-left font-medium' }, status );
    },
    
    
    
  },
  {
     accessorKey: 'amount',
    header: () => h('div', { class: 'text-left ' }, 'amount'),
    cell: ({ row }: any) => {
     const amount = row.getValue("amount")
     return h('div',{ class: 'text-left font-medium' }, amount );
    },
    
    
    
  }
]