<template>
  <div>
    <p>메인 페이지 입니다</p>
    <ProductList :products="products" />
  </div>
</template>

<script>
import { defineComponent, ref, useAsync } from '@nuxtjs/composition-api'
import axios from 'axios'
import ProductList from '../components/ProductList.vue'

export default defineComponent({
  components: { ProductList },
  setup() {
      const products = ref([]);
      useAsync(async () => {
          try {
              const { data } = await axios.get("http://localhost:3000/products");
              products.value = data;
          }
          catch (err) {
              alert(err);
          }
      });
      return {
          products
      };
    },
  })
</script>


<style>

</style>