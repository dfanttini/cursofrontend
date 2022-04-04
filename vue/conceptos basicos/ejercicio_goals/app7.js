const vm = new Vue({
    el: "#app",
    data: {
        goal: [],
        goalInput: "",
    },
    methods: {
        addGoal() {
            this.goalInput = ''
                ? this.goal.push(this.goalInput)
                : console.error('no puede estar vacío');

            this.goalInput = ''
            console.log(this.goal)
        },
        removeGoalAll() {
            this.goal.length = 0
            this.goal = []
        },
        removeGolById(e) {
            const id = e.target.getAttribute('data-id')
            this.goal.splice(id, 1)
        },
        setDone(e) {
            e.target.style.textDecoration = 'line-through'
            goalContainer.style.backgroundColor = '#a2a29c'
        },
        enter(e) {
            if (e.key === 'Enter') {
                this.addGoal()
            }
        }
    },

})