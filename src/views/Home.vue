<template>
  <div class="home">
    <h1>Videos</h1>
    <div class="videos-container">
      <router-link
        v-for="(video, index) in videos"
        :key="index"
        :to="{ name: 'video-watch', params: { id: video.id } }"
        class="video-box"
      >
        <img :src="video.thumbnail" alt="logo" />
        <div>
          <h3>{{ video.name }}</h3>
          <div v-html="video.description"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      // videos: this.$store.state
    };
  },
  methods: {},
  mounted() {
    this.$store.dispatch("initData");
  },
  computed: {
    videos() {
      return this.$store.state.videos;
    }
  }
};
</script>

<style scopped lang="scss">
.videos-container {
  width: 80vw;
  margin: 0 auto;
  .video-box {
    border: 1px solid black;
    border-radius: 0.75rem;
    margin: 0.75rem;
    padding: 0.75rem;

    text-align: left;
    display: flex;
    justify-content: flex-start;

    img {
      width: 200px;
      padding: 0.75rem;
    }
  }
}
</style>
