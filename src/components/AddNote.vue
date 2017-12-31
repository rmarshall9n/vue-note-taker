<template>
    <div class="add-note">
        <h2>Create Note</h2>
        <form>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" v-model="note.title">

            <label for="note">Note</label>
            <textarea name="note" class="note" id="note" rows="10" v-model="note.body"></textarea>

            <button type="button" class="btn-create">Create</button>
        </form>

        <hr>

        <div class="preview">
            <h2>Preview</h2>
            <strong>{{ note.title }}</strong>
            <pre>{{ note.body }}</pre>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                note: {
                    title: '',
                    body: ''
                }
            }
        },

        created() {

        }
    }
</script>

<style lang="scss">
    .add-note {
        label{
            display: block;
            margin: 20px 0 10px;
        }
        input[type="text"], textarea{
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 9px;
        }
        .btn-create {
            margin: 20px 0 10px;
        }
    }
</style>