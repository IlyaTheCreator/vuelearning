<template>
    <label for="dropbox">Options. Come don! This is crazy!</label>
    <select 
        v-model="option" 
        name="dropbox" 
        id="dropbox"
        @change="optionChange"
    >
        <option value="null" disabled>Choose sth</option>
        <option value="first">firdst</option>
        <option value="second">second</option>
        <option value="third">third</option>
    </select>
    <Whatever />
</template>

<script>
import Whatever from "./Whatever";

export default {
    name: 'Dropbox',

    components: {
        Whatever
    },

    data() {
        return {
            option: 'null'
        }
    },

    methods: {
        optionChange() {
            this.$emit('update:option', this.option)
        }
    }
}
</script>

<style>

</style>