<template>
    <div>
        <h1 v-text="option"></h1>

        <dropbox @update:option="optionChange"/>
    </div>
</template>

<script>
import Dropbox from './Dropbox'

export default {
    name: 'List',

    data() {
        return {
            option: ''
        }
    },

    components: {
        Dropbox,
    },

    methods: {
        optionChange(value) {
            this.option = value
        }
    }
}
</script>

<style>

</style>