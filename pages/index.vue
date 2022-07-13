<template>
  <div class="app">
    <main>
      <SearchInput 
        v-model="searchKeyword" 
        @search="searchProduct"
      /> 
      <ul>
        <li 
          v-for="product in products" 
          :key="product.id" 
          class="item"
          @click="moveToDetailPage(product.id)"
        >
          <img 
            :src="product.imageUrl" 
            class="product-image"
          >
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn">
          장바구니 바로가기
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent, ref, useFetch, useRouter } from '@nuxtjs/composition-api'
import axios from 'axios'
import { fetchProductByKeyword } from '@/api/index'
import SearchInput from '@/components/SearchInput.vue'

export default defineComponent({
  components: {
    SearchInput
  },
  setup() {
    const products = ref([]);
    useFetch(async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/products");
        products.value = data.map((item) => {
          return {
            ...item,
            imageUrl: `${item.imageUrl}?random=${Math.random()}`,
          }
        });
      }
      catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });

    const router = useRouter()
    const moveToDetailPage = (id) => {
      router.push({path:`product/${id}`})
    }

    const searchKeyword = ref('')
    const searchProduct = async() => {
      const { data } = await fetchProductByKeyword(searchKeyword.value);
      products.value = data.map((item) => {
        return {
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        }
      })
    }

    return {
      products,
      moveToDetailPage,
      searchKeyword,
      searchProduct
    };
  },
})
</script>


<style scoped>
.app {
    position: relative;
}
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
