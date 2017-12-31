import Home from '../components/AppHome'
import ListNotes from '../components/ListNotes'
import AddNote from '../components/AddNote'
import ShowNote from '../components/ShowNote'

export default [
    { path: '/', component: Home},
    { path: '/notes', component: ListNotes},
    { path: '/notes/add', component: AddNote},
    { path: '/notes/:id', component: ShowNote},
]