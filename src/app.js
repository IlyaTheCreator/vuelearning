import Vue from 'vue'

window.axios = require('axios')

new Vue({
    el: '#app',

    components: {
        
    },

    mounted() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response.data)
            .catch(() => this.posts = [{ title: 'No posts found' }])

    },

    data: {
        posts: null,
    },
})