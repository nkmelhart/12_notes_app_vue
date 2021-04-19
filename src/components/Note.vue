<template>
    <div class="note-div text-yellow-800 rounded text-center p-2 space-y-2">
        <h3 class="text-2xl font-thin tracking-wide">{{note.title}}</h3>
        <p class="text-sm font-medium text-yellow-900">{{note.content}}
        </p>
        <div class="flex justify-end">
            <button @click="editNote(note)" class="mx-3 hover:text-green-800"><i class="far fa-edit"></i></button>
            <button @click="removeNote(note.id)" class="mx-3 hover:text-red-800"><i class="far fa-trash-alt"></i></button>
        </div>
    </div>
</template>

<script>

    import { remove, showToggle, noteToEdit } from '../helpers/useNotes'

    export default{
        props: ['note'],
        setup(props, context){
            const note = props.note

            const removeNote = async id => {
                await remove(id)
                context.emit('deleted')
            }

            const editNote = (note) => {
                noteToEdit.value = note
                showToggle()
            }

            return  { note, removeNote, editNote}
        }
    }
</script>

<style scoped>
    div .note-div {
        background-color: #318DD4;
    }
</style>