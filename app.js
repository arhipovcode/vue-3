const App = {
    data() {
        return {
            notesTable: {
                title: 'Список заметок',
                placeholder: 'Добавьте заметку',
                textNotes: 'Список заметок пуст',
                notes: [],
                inputValue: '',
                isVisible: false,
            },
            todoList: {
                title: 'Список дел',
                text: 'Вперед',
                activeIndex: 0,
                collection: null,
                lists: [
                    {title: 'Шаг 1'},
                    {title: 'Шаг 2'},
                    {title: 'Шаг 3'},
                    {title: 'Шаг 4'},
                    {title: 'Шаг 5'},
                ],
            },
        }
    },
    methods: {
        addNote() {
            if (this.notesTable.inputValue !== '') {
                this.notesTable.notes.push(this.notesTable.inputValue)
                this.notesTable.inputValue = ''
            }
        },
        removeNote(index) {
            this.notesTable.notes.splice(index, 1);
            if (this.notesTable.notes.length === 0) {
                this.isHover()
            }
        },
        hover() {
            this.notesTable.isVisible = true
        },
        isHover() {
            this.notesTable.isVisible = false
        },
        prevList() {
            this.addCollection()
            if(this.todoList.activeIndex !== 0) {
                this.todoList.collection[this.todoList.activeIndex].classList.remove('active')
                this.todoList.activeIndex--
            }
            if (this.todoList.activeIndex === 0) {
                this.todoList.collection[this.todoList.activeIndex].classList.remove('active')
            }
        },
        nextOfFinish() {
            this.addCollection()
            this.todoList.collection[this.todoList.activeIndex].classList.add('active')
            this.todoList.activeIndex++
            this.todoList.collection[this.todoList.activeIndex].classList.add('active')

        },
        addCollection() {
            if(this.todoList.collection === null) {
                this.todoList.collection = document.querySelectorAll('.circle')
            }
        },
        setActive(ind) {
            this.addCollection()
            this.todoList.activeIndex = ind

            if(ind > 0) {
                for(let i = 0; i <= ind; i++) {
                    this.todoList.collection[i].classList.add('active')
                }
            }
        },
        reset() {
            for(let i = 0; i <= this.todoList.activeIndex; i++) {
                this.todoList.collection[i].classList.remove('active')
            }
            this.todoList.activeIndex = 0
        }
    }
}

Vue.createApp(App).mount('#app')