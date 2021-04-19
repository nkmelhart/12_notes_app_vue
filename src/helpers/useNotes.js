import {ref} from 'vue'
import { useToggle } from '@vueuse/core'
import axios from 'axios'

export const [show, showToggle] = useToggle(false)

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    params: {
        username: process.env.VUE_APP_API_USERNAME,
        password: process.env.VUE_APP_API_PASSWORD
    }

})

export const notes = ref([])
export const noteToEdit = ref(null)

export const getAll = async () => {
    const { data } = await api.get('/notespath')
    notes.value = data
}

export const remove = async (id) => {
    await api.delete(`/notespath/${id}`)
}

export const add = async (notes) => {
    await api.post('/notespath', { notes })
}

export const save = async (notes) => {
    const { id, title, content } = notes

    await api.put(`/notespath/${id}`, { notes: { title, content } })
}