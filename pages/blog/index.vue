<template>
    <div>
        <h1>Blog</h1>
        <p>Welcome to my blog!</p>
        <p>Feel free to email me if you wanna chat about my content &#128512;</p>
        <b-form-group label="Search" style="max-width: 350px">
            <b-form-input type="text" v-model="search"/>
        </b-form-group>
        <hr>
        <div v-if="posts.length > 0" class="row">
            <div v-for="(post, index) in posts" :key="index" class="col-lg-4 col-md-6 p-0 my-2">
                <b-card class="h-100 p-1 mx-2">
                    <img :src="'image' in post ? require(`~/content${post.path}/${post.image}`) : require('~/content/blog/default.png')" style="width: 100%; height: 150px; object-fit: cover"/>
                    <h3>{{ post.title }}</h3>
                    <b-card-text>{{ post.description }}</b-card-text>
                    <div class="text-center">
                        <b-button :to="post.path" variant="secondary">Read</b-button>
                    </div>
                </b-card>
            </div>
        </div>
        <p v-else class="text-info"><strong>No posts are matching you search</strong></p>
    </div>
</template>

<script>
export default {
    layout: 'blog',

    async asyncData({ $content, params }) {
        const articles = await $content('blog', {deep:true}).fetch();
        articles.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        articles.forEach(article => {
            article.path = article.path.split('/');
            article.path.splice(article.path.length-1, 1);
            article.path = article.path.join('/');
        });
        return { articles };
    },

    data () {
        return {
            search: ''
        }
    },

    computed: {
        posts: function () {
            if (this.search.trim() == '') {return this.articles}
            else {
                return this.articles.filter(article => {
                    return this.search.trim().toLowerCase().split(' ').some((el) => {
                        return article.slug.replace(/_/g, ' ').toLowerCase().includes(el);
                    })
                });
            }
        },
    }
}
</script>
