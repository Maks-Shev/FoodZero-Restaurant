<template>
    <div class="post-detail">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <h3>{{ commentsCount }} Comments</h3>
        <CommentList :postId="post.id" @commentsUpdated="updateCommentsCount" ref="commentList" />
        <CommentForm :postId="post.id" @commentAdded="refreshComments" />
    </div>
</template>
  
<script>
import CommentList from '../components/CommentList.vue';
import CommentForm from '../components/CommentForm.vue';

export default {
    components: { CommentList, CommentForm },
    props: ['id'],
    data() {
        return {
            post: {},
            commentsCount: 0
        };
    },
    watch: {
        id: {
            handler: 'fetchPost',
            immediate: true
        }
    },
    methods: {
        fetchPost() {
            fetch(`https://697df8674bf51950.mokky.dev/posts/${this.id}`)
                .then(response => response.json())
                .then(data => {
                    this.post = data;
                    this.updateCommentsCount();
                });
        },
        updateCommentsCount() {
            fetch(`https://697df8674bf51950.mokky.dev/comments?postId=${this.id}`)
                .then(response => response.json())
                .then(comments => {
                    this.commentsCount = comments.length;
                });
        },
        refreshComments() {
            this.$refs.commentList.fetchComments();
            this.updateCommentsCount();
        }
    }
};
</script>
  
<style>
.post-detail {
    padding: 20px;
}
</style>
