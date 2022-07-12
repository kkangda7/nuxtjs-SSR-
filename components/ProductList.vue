<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  setup() {
    
  },
})
</script>


<style>

</style>