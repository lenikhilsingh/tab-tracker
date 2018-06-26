<template>
  <panel title="Tab">
        <textarea
            readonly
            v-model="song.tab">
        </textarea>
  </panel>
</template>

<script>
// import BookmarksService from '@/services/BookmarksService'

export default {
  props: ["song"]
};
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 60px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
