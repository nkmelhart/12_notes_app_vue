<template>
    <div class="add-div text-yellow-800 rounded text-center p-2 space-y-2 flex flex-col justify-center items-center">
    <p class="mb-3 font-bold">Add Note</p>
     <button @click="showToggle" class="text-6xl transform transition-all hover:scale-125 opacity-60 hover:opacity-100"><i class="fas fa-plus-circle"></i></button>
    </div>
</template>

<script>

import {showToggle} from '../helpers/useNotes'

export default {
    name: 'NoteAdd',
    components: {},
    setup(){
        return {showToggle}
    }
}
</script>

<style scoped>
    div .add-div{
        background-color: #7731D4;
        color: black;
    }
</style>