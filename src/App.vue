<template>
  <Navbar />
  <Notes />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Notes from './components/Notes.vue'
import NotesForm from './components/NotesForm.vue'

export default {
  name: 'App',
  components: {Navbar, Notes, NotesForm},
  setup(){

  }
}

</script>


<style>

</style>
