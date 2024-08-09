<template>
    <div class="comment-form flex flex-col items-center ">
        <h3 class="text-[32px] font-rufina font-bold mt-[130px]">Leave a Reply</h3>
        <form @submit.prevent="submitComment" class=" w-[1200px] mt-[96px]">
            <label for="comment" class="text-[24px] font-lato font-bold ">Comment:</label>
            <textarea v-model="comment" class="border-2 border-black h-[350px] my-[20px] text-[20px] p-[30px]"></textarea>
            <label for="author" class="text-[24px] font-lato font-bold">Name*</label>
            <input v-model="author" class="border-2 border-black h-[100px] my-[10px] p-[20px] text-[20px]" />
            <label for="email" class="text-[24px] font-lato font-bold mt-[20px]">Email*</label>
            <input v-model="email" class="border-2 border-black h-[100px] my-[10px] p-[20px] text-[20px]" />
            <button type="submit"
                class="border-2 border-black w-[320px] h-[85px] mt-[96px] text-[32px] font-rufina font-bold ">Post
                Comment</button>
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
