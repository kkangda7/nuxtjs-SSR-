<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <div class="list-wrapper">
      <ul>
        <li 
          v-for="cartItem in $store.state.cartItems" 
          :key="cartItem.id" 
          class="list-item"
        >
          <img 
            :src="cartItem.imageUrl" 
            :alt="cartItem.name"
            class="thumbnail"
          >
          <div class="description">
            <p>{{ cartItem.name }}</p>
            <span>{{ cartItem.price }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>

import { defineComponent } from '@nuxtjs/composition-api'
// import { FETCH_CART_ITEMS } from '@/store/index'

export default defineComponent({
  setup() {
    // const { store } = useContext()

    // nuxtServerInit를 쓰고있기 때문에 useAsync를 사용하지 않아도 됨.
    // useAsync(async () => {
    //   await store.dispatch(FETCH_CART_ITEMS);
    // })

  }
})
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>