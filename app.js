const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Добавьте заметку',
            textNotes: 'Список заметок пуст',
            notes: [],
            inputValue: '',
            isVisible: false,
        }
    },
    methods: {
        addNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(index) {
            this.notes.splice(index, 1);
            if(this.notes.length === 0) {
                this.isHover()
            }
        },
        hover() {
            this.isVisible = true
        },
        isHover() {
            this.isVisible = false
        }
    }
}

Vue.createApp(App).mount('#app')