<template>
    <div class="comment-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
            <p><strong>{{ comment.author }}</strong> - {{ comment.date }}</p>
            <p>{{ comment.content }}</p>
            <button @click="toggleReplyForm(comment.id)">Reply</button>
            <div v-if="comment.showReplyForm">
                <CommentForm :postId="postId" :parentId="comment.id" @commentAdded="fetchComments" />
            </div>
            <div v-if="comment.replies && comment.replies.length" class="replies">
                <div v-for="reply in comment.replies" :key="reply.id" class="reply-item">
                    <p><strong>{{ reply.author }}</strong> - {{ reply.date }}</p>
                    <p>{{ reply.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import CommentForm from './CommentForm.vue';

export default {
    name: 'CommentList',
    components: { CommentForm },
    props: ['postId'],
    data() {
        return {
            comments: []
        };
    },
    watch: {
        postId: {
            handler: 'fetchComments',
            immediate: true
        }
    },
    methods: {
        fetchComments() {
            fetch(`https://697df8674bf51950.mokky.dev/comments?postId=${this.postId}`)
                .then(response => response.json())
                .then(data => {
                    this.comments = this.structureComments(data);
                    this.$emit('commentsUpdated', this.comments.length);
                });
        },
        structureComments(comments) {
            let commentMap = {};
            comments.forEach(comment => {
                comment.replies = [];
                comment.showReplyForm = false; // добавляем поле для отображения формы ответа
                commentMap[comment.id] = comment;
            });

            let structuredComments = [];
            comments.forEach(comment => {
                if (comment.parentId) {
                    if (commentMap[comment.parentId]) {
                        commentMap[comment.parentId].replies.push(comment);
                    }
                } else {
                    structuredComments.push(comment);
                }
            });

            return structuredComments;
        },
        toggleReplyForm(commentId) {
            const comment = this.comments.find(c => c.id === commentId);
            if (comment) {
                comment.showReplyForm = !comment.showReplyForm;
            }
        }
    }
};
</script>
  
<style>
.comment-list {
    margin-top: 20px;
}

.comment-item {
    margin-bottom: 20px;
}

.replies {
    margin-left: 20px;
}

.reply-item {
    margin-top: 10px;
}
</style>
