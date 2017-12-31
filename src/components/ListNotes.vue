<template>
    <div>
        <div v-for="note in notes">
            <h1>{{ note.title }}</h1>
            <p>{{ note.body }}</p>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                notes: []
            }
        },

        created() {
            this.$http.get(this.$config.api).then(function(data){
                this.notes = data.body.slice(0, 10);
            });
        }
    }
</script>