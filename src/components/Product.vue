<template>
  <div class="flex flex-col w-60 h-64 shadow-xl rounded-md my-3 mx-auto">
    <div class="h-4/6 overflow-hidden p-1">
      <AsyncImage :alt="product.title" :src="product.image" />
    </div>

    <div class="flex flex-col w-100 justify-between h-2/6 px-2">
      <h5 class="text-center py-1 truncate">{{ product.title }}</h5>
      <div class="flex items-center justify-between pb-2">
        <p class="text-xl font-semibold text-gray-500">
          {{ accountInUSD }}
        </p>
        <button
          class="w-20 py-1 flex items-center justify-center rounded-md bg-black text-white hover:bg-green"
          type="submit"
        >
          Buy now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { add } from "lodash/add";

const AsyncImage = defineAsyncComponent(() =>
  import("../components/Image.vue" /* webpackChunkName: "image" */)
);

export default {
  name: "Product",
  props: {
    product: Object,
  },
  computed: {
    accountInUSD() {
      return "$" + add(this.product.price, 10);
    },
  },
  components: {
    AsyncImage,
  },
};
</script>
