<template>
    <div class="comment-form">
        <h3>Leave a Reply</h3>
        <form @submit.prevent="submitComment">
            <textarea v-model="comment" placeholder="Comment"></textarea>
            <input v-model="author" placeholder="Name" />
            <input v-model="email" placeholder="Email" />
            <button type="submit">Post Comment</button>
            <p v-if="error" class="error">{{ error }}</p>
        </form>
    </div>
</template>
  
<script>
export default {
    props: ['postId', 'parentId'],
    data() {
        return {
            comment: '',
            author: '',
            email: '',
            error: ''
        };
    },
    methods: {
        submitComment() {
            if (!this.comment || !this.author || !this.email) {
                this.error = 'Все поля обязательны для заполнения.';
                return;
            }

            this.error = '';
            const newComment = {
                postId: this.postId,
                content: this.comment,
                author: this.author,
                email: this.email,
                date: new Date().toISOString(),
                parentId: this.parentId || null
            };

            fetch('https://697df8674bf51950.mokky.dev/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newComment)
            })
                .then(response => response.json())
                .then(() => {
                    this.$emit('commentAdded');
                    this.comment = '';
                    this.author = '';
                    this.email = '';
                });
        }
    }
};
</script>
  
<style>
.comment-form {
    margin-top: 20px;
}

textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}

input {
    width: 100%;
    margin-bottom: 10px;
}

button {
    width: 100%;
    padding: 10px;
}
</style>
