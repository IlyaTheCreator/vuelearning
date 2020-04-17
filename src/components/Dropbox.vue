<template>
    <label for="dropbox">Options. This is crazy!</label>
    <select 
        v-model="option" 
        name="dropbox" 
        id="dropbox"
        @change="optionChange"
    >
        <option value="null" disabled>Choose sth</option>
        <option value="first">first</option>
        <option value="second">second</option>
        <option value="third">third</option>
    </select>
</template>

<script>
export default {
    name: 'Dropbox',

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