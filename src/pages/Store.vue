<template>
  <div ref="scrollComponent">
    <div class="pb-2">My products page</div>

    <div
      class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-2 overflow-auto pb-5"
    >
      <AsyncProduct
        v-for="(product, index) in products"
        :product="product"
        :key="index"
      />
    </div>

    <div v-if="loading" class="flex justify-center pt-3 pb-8 bg-transparent">
      <AsyncLoader />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from "vue";
import { getProducts } from "../services/product-loader";

const AsyncProduct = defineAsyncComponent(() =>
  import("../components/Product.vue" /* webpackChunkName: "product" */)
);
const AsyncLoader = defineAsyncComponent(() =>
  import("../components/Loader.vue" /* webpackChunkName: "loader" */)
);

export default {
  components: {
    AsyncLoader,
    AsyncProduct,
  },
  setup() {
    const products = ref([]);
    const loading = ref(true);

    (async () => {
      products.value = await getProducts();
      loading.value = false;
    })();

    const scrollComponent = ref(null);

    const loadMoreProducts = async () => {
      loading.value = true;
      let newProducts = await getProducts();
      loading.value = false;
      products.value.push(...newProducts);
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      let element = scrollComponent.value;
      if (
        element.getBoundingClientRect().bottom <= window.innerHeight &&
        !loading.value
      ) {
        loadMoreProducts();
      }
    };

    return {
      products,
      loading,
      scrollComponent,
    };
  },
};
</script>
