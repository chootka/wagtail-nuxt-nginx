<template>
  <div class="layout">
    <div class="img-wrapper">
      <!-- some images -->
    </div>
    <div class="text-wrapper">
      <h2>
        Heading
      </h2>
      <p>
        Body text
      </p>
    </div>
  </div>
</template>

<style scoped>
  @media (max-width: 640px){
  }
  @media (max-width: 360px){
  }
</style>

<script>
export default {
  components: {},
  props: [],
  data () {
    return {
      title: ''
    }
  },
  computed: {},
  mounted () {
    this.getData();
  },
  methods: {
    async getImageData (id) {
      return this.$axios.get('/api/v2/images/'+id);
    },
    async getImages (data) {
      const images = data.filter((prop) => {
        if (prop.type === "image") {
          return true;
        }
      })

      let imageData = [];
      images.forEach(async (img) => {
        let res = await this.getImageData(img.value);
        imageData.push(res.data);
      })
      return imageData;
    },
    getData () {
      // this.$axios.get('/api/v2/pages/5/?fields=_,title,body')
      //   .then(async (response) => {

      //     const res = response.data;
      //     this.title = res.title;
      //     this.images = await this.getImages(res.body)
      //   })
      //   .catch((err) => {
      //     console.log("error getting about data");
      //   })
    }
  }
}
</script>
