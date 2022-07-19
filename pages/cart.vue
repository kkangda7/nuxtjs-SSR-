<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <CartList/>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>

import { defineComponent } from '@nuxtjs/composition-api'
import CartList from '../components/CartList.vue'
// import { FETCH_CART_ITEMS } from '@/store/index'

export default defineComponent({
    components: { CartList },
    setup() {
        // const { store } = useContext()
        // nuxtServerInit를 쓰고있기 때문에 useAsync를 사용하지 않아도 됨.
        // useAsync(async () => {
        //   await store.dispatch(FETCH_CART_ITEMS);
        // })
    },
   
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
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>