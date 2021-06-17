<template>
  <div class="relative h-full w-full">
    <div v-if="!loaded" class="shine absolute h-full w-full"></div>
    <img
      :src="src"
      :alt="alt"
      class="img w-full"
      :style="{ opacity: loaded ? 1 : 0 }"
      loading="lazy"
      @load="handleImageLoad"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
  props: {
    alt: String,
    src: {
      type: String,
      required: true,
    },
    placeholder: String,
  },
  methods: {
    handleImageLoad() {
      this.loaded = true;
    },
  },
  data() {
    return { loaded: false };
  },
};
</script>

<style>
.img {
  opacity: 0;
  transition: opacity 300ms ease;
}

.shine {
  display: block;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  display: block;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
}

@-webkit-keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
