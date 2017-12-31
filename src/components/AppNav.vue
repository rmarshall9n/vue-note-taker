<template>
    <nav id="app-nav" class="app-nav">
        <ul>
            <li v-for="link in links"><router-link exact v-bind:to="link.route">{{ link.name }}</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    { route: '/', name: 'Home' },
                    { route: '/notes', name: 'Notes' },
                    { route: '/notes/add', name: 'Create Note' },
                ]
            }
        }
    }
</script>

<style lang="scss">
    .app-nav {
      background: #2d2d2d;
      padding: 15px 10px;

      ul {
        list-style-type: none;
        text-align: center;
        margin: 0;

        li {
          display: inline-block;
          margin: 0 10px;

          a {
            color: #tomato;
            text-decoration: none;
            padding: 6px 8px;
            border-radius: 10px;
            display: block;
          }

          .router-link-active {
            background-color: tomato;
            color: #2d2d2d;
          }
        }
      }

    }
</style>