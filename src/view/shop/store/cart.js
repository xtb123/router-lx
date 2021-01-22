
const state = {
  items: [],
  checkoutStatus: null
};

// getters
const getters = {

};

// actions
const actions = {
  addProductToCard({ commit }, product) {
    if (product.inventory > 0) {
      commit(
        "products/deleteProductInventory",
        { id: product.id },
        { root: true }
      );
      commit("addItem",product);
    }
  },
  del({ commit }, item){
    commit("delCount", item);
    commit(
        "products/addProductInventory",
        { id: item.id,num:1},
        { root: true }
    );
  },
  allDel({ commit }, item){
    commit("delAllCount", item);
    commit(
        "products/addProductInventory",
        { id: item.id, num: item.count },
        { root: true }
    );
  }

};

// mutations
const mutations = {
  addItem(state,pro){
    let i=0;
    for(let item of state.items) {
      if (item.id === pro.id) {
        item.count++;
        item.subtotal += pro.price;
        i = 1;
        break;
      }
    }
      if(i===0){
        const itemPro={
          id:pro.id,
          title:pro.title,
          price:pro.price,
          count:1,
          subtotal:pro.price
        };
        state.items.push(itemPro);
      }
  },
  delCount(state,item){
    item.count--;
    item.subtotal-=item.price;

    if(item.count===0){
      state.items.splice(state.items.indexOf(item),1)
    }
  },
  delAllCount(state,item){
    state.items.splice(state.items.indexOf(item),1)
  }

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
