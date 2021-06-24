<template>
    <h6>
        <fa v-for="(i, index) in new Array(4)" :key="index"
            :icon="level-1 >= index ? ['fas', 'plus-circle'] : ['far', 'circle']"
            :class="getColor(level)"
            style="font-size: 20px;"
        />
        - {{label}}
    </h6>
</template>

<script>
export default {
    props: ['label', 'level'],

    methods: {
        getColor : (level) => {
            const color = {
                1: 'text-warning',
                2: 'text-info',
                3: 'text-primary',
                4: 'text-success'
            }
            return color[level]
        }
    }
}
</script>