<template>
  <div>
    <ul>
      <li v-for="room in rooms">
        <a href="/">{{room.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "Scheduler",
      data() {
        return {

        }
      },
      computed: {
        rooms(){
          return this.$store.getters.rooms;
        }
      }
}

</script>