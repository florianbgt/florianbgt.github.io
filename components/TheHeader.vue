<template>
    <b-navbar toggleable="sm" type="dark" variant="dark" class="px-5">
        <b-navbar-brand to="/">
            {{name}}
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item v-for="route in routes" :key="route" :class="{active: route == '' ? $route.name == 'index' : $route.name == route}" :to="`/${route}`">
                    {{route == '' ? 'Home' : route[0].toUpperCase() + route.slice(1)}}
                </b-nav-item>
            </b-navbar-nav> 
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return{
            name: null,
            routes: [
                '',
                'blog'
            ]
        }
    },
    async fetch() {
        const resume = await this.$content('resume').fetch();
        this.name = resume.information.name;
    },
}
</script>