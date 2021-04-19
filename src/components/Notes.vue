<template>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 container mx-auto animate__animated animate__fadeInLeft" id="notes" >
            <Note v-for="note in notes" :key="note" :note="note" @deleted="refresh"/>
            <NoteAdd />
        
    </div>
    <NotesForm v-if="show" @added="refresh" @saved="refresh"/>
</template>

<script>
    import Note from '../components/Note.vue'
    import NoteAdd from '../components/NoteAdd.vue'
    import NotesForm from '../components/NotesForm.vue'
    import {show, notes, getAll} from '../helpers/useNotes'
    import {onMounted} from 'vue'

    export default {
        name: 'Notes',
        components: {Note, NoteAdd, NotesForm},
        setup(){
            onMounted(() => refresh())
            

            const refresh = async () => await getAll()
            return {show, notes, refresh}

        }
        } 
</script>