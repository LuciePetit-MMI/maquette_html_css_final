import { client } from "@/utils/axios";
import { createStore } from "vuex";


export default createStore({
  state: {
    count: 0,
    cart: [],
  },
  mutations: {
    set(state, products){
      state.cart = products
    },

    add(state, {product , quantity}) {
      const productInState = state.cart.find(
        (stateProduct) => stateProduct.id === product.id
      );
      if (!productInState) {
        // If product not in cart -> add product to cart
        state.cart.push({ ...product, quantity });
      } else {
        // If product is already in cart -> increase quantity
        productInState.quantity += quantity;
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    remove(state, id) {
      const index = state.cart.findIndex(
        (stateProduct) => stateProduct.id === id
      );
      state.cart.splice(index, 1);

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    updateQuantity(state, { id, action }) {
      const productInState = state.cart.find(
        (stateProduct) => stateProduct.id === id
      );
      if (action === "increase") {
        productInState.quantity++;
      } else {
        if (productInState.quantity > 1) {
          productInState.quantity--;
        }
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    emptyCart (state){
      state.cart= [],
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    cacheUser(state, { token, email, displayName }) {
      state.isLoggedIn = true;
      state.userToken = token;
      state.userEmail = email;
      state.userDisplayName = displayName;
    },
  
    deleteUserCache(state) {
      state.isLoggedIn = false;
      state.userToken = '';
      state.userEmail = '';
      state.userDisplayName = '';
    },
  },
  actions: {
    async login({ commit }, payload) {
      const response = await client.post('/jwt-auth/v1/token', {
        username: payload.username,
        password: payload.password,
      });
  
      const data = response.data;
  
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('token', data.token);
      localStorage.setItem('displayName', data.user_display_name);
      localStorage.setItem('email', data.user_email);
  
      // call cacheUser() from mutations
      await commit('cacheUser', {
        token: data.token,
        email: data.user_email,
        displayName: data.user_display_name,
      });
    },
  
    async logout({ commit }) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('displayName');
  
      commit('deleteUserCache');
    },
  
    /**
     * Check if user if logged in
     */
    async checkLoginState({ commit }) {
      const token = localStorage.getItem('token');
  
      // if no token, empty the loggedIn cache
      if (!token) {
        await commit('deleteUserCache');
        return false;
      }
  
      // if has token, check if it's still valid
      try {
        await client.post('/jwt-auth/v1/token/validate',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        
        // if still valid, cache it again
        await commit('cacheUser', {
          token,
          email: localStorage.getItem('email'),
          displayName: localStorage.getItem('displayName'),
        });
  
        return true;
      } catch (error) {
        localStorage.setItem('token', '');
        return false;
      }
    },
  }
});
