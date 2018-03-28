<template>
  <div class='comp-media'>
    <a :href='link'>
      <div v-if='isImage' class="img" :style="loadImg"></div>
      <video v-else-if='isVideo' :src='src'></video>
    </a>
  </div>
</template>

<script>
import Media from './media.types'
import compBaseMixin from '../comp.base.mixin'

export default {
  name: 'AdiMedia',
  mixins: [compBaseMixin],
  computed: {
    isImage() {
      return Media.isImage(this.properties.data.src)
    },
    isVideo() {
      return Media.isVideo(this.properties.data.src)
    },
    hasMedia() {
      return this.properties.data.src && this.properties.data.src !== ''
    },
    src() {
      return this.properties.data.src
    },
    link() {
      return this.properties.data.link
    },
    loadImg() {
      return this.generateStyleString({
        background: 'url(' + this.properties.data.src + ')',
        'background-position': 'center',
        'background-size': 'cover'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.comp-media {
  width: 100%;
  height: 100%;

  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
