import { fetchCartItem } from "~/api"

// constants
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'


// store
export const state = () => ({
  cartItems: []
})

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  },

  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  }
}

export const actions = {
  async [FETCH_CART_ITEMS]({commit}) {
    const { data } = await fetchCartItem()
    commit('setCartItems', data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    })))
  },
  // 이걸(nuxtServerInit)쓰면 useAsync(렌더링)전에(서버쪽에서 호출) 파일을 스테이트에 저장할수있기때문에
  //  vue파일에서 라이프사이클을 사용할할필요가 없다
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch(FETCH_CART_ITEMS)
  }
}