<template>
    <article>
        <blog-img :src="'image' in article ? article.image : 'default.png'" style="width: 100%; height: 250px; object-fit: cover"/>
        <h1>{{ article.title }}</h1>
        <h4 class="text-secondary">
            <small>
                <i>
                    <fa :icon="['fas', 'user']" style="font-size: 20px"/>
                    {{name}}
                    -
                    <fa :icon="['far', 'calendar-alt']" style="font-size: 20px"/>
                    {{ new Date(article.createdAt).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                </i>
            </small>
        </h4>
        <nuxt-content :document="article" />
    </article>
</template>

<script>
export default {
    layout: 'blog',

    async asyncData({ $content, params }) {
        const article = await $content('blog', params.slug, 'index').fetch();
        const resume = await $content('resume').fetch();
        const name = resume.information.name;;
        return { article, name }
    }
}
</script>