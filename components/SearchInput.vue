<template>
  <div class="input-wrapper flex">
    <input 
      type="text"
      class="search-input"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
    <button 
      class="btn"
      @click="$emit('search')"
    >search</button>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  setup() {
    
  },
})
</script>


<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>