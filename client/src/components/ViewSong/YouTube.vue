<template>
<panel title="Youtube Video">
    <youtube
        :video-id="youtubeId"
        :player-width="550"
        :player-height="200"
    >
    </youtube>
</panel>
</template>
<script>
export default {
  props: ["youtubeId"]
};
</script>

<style scoped>
</style>
