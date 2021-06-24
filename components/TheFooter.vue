<template>
    <b-container fluid class="bg-light text-dark border-top border-bottom border-dark text-center mt-2 py-5">
        &copy;
        {{new Date().getFullYear()}}
        <strong>{{name}}</strong>
    </b-container>
</template>

<script>
export default {
    data() {
        return {name: null};
    },
    async fetch() {
        const resume = await this.$content('resume').fetch();
        this.name = resume.information.name;
    },
}
</script>