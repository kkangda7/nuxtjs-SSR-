<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img 
          class="product-image" 
          :src="product.imageUrl" 
          :alt="product.name" 
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button 
          type="button"
          @click="addToCart"
        >카트에 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useAsync, useContext, useRouter, useStore } from '@nuxtjs/composition-api'
import { fetchProductById, createCartItem } from '@/api/index'

export default defineComponent({
  setup() {
    const product = ref({})
    const { route } = useContext()
    const id = route.value.params.id
    
    useAsync( async() => {
      const { data } = await fetchProductById(id)
      product.value = data
    })

    const router = useRouter()
    const store = useStore()
    const addToCart = async () => {
      try {
        await createCartItem(product.value)
        store.commit('addCartItem', product.value)
        router.push('/cart')
      } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }

    }

    return {
      product,
      addToCart
    }
  },
})
</script>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>