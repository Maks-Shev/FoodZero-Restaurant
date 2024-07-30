<template>
    <div>
        <!-- Toggle View Buttons -->
        <div class="view-toggle">
            <button @click="setViewMode('list')">Список</button>
            <button @click="setViewMode('grid')">Сетка</button>
        </div>
        
        <!-- Blog List View -->
        <div v-if="viewMode === 'list'" class="blog-list">
            <div v-for="post in displayedPosts" :key="post.id" class="blog-item">
                <div class="blog-info">
                    <router-link :to="{ name: 'BlogDetails', params: { id: post.id } }" class="blog-title">
                        <img :src="post.image" alt="" class="blog-image">
                        <h2>{{ post.title }}</h2>
                        <p class="blog-date">{{ formatDate(post.date) }}</p>
                        <p>{{ post.content.substring(0, 100) }}...</p>
                        <p v-if="post.commentCount !== undefined">{{ post.commentCount }} Comments</p>
                        <p v-else>Loading comments...</p>
                    </router-link>
                </div>
                <router-link :to="{ name: 'BlogDetails', params: { id: post.id } }" class="read-more">→</router-link>
            </div>
            <button v-if="hasMorePosts" @click="loadMorePosts">Показать еще</button>
        </div>

        <!-- Blog Grid View -->
        <div v-if="viewMode === 'grid'" class="blog-grid">
            <div v-for="post in paginatedPosts" :key="post.id" class="blog-item-grid">
                <div class="blog-info">
                    <router-link :to="{ name: 'BlogDetails', params: { id: post.id } }" class="blog-title">
                        <img :src="post.image" alt="" class="blog-image-grid">
                        <h2>{{ post.title }}</h2>
                        <p class="blog-date">{{ formatDate(post.date) }}</p>
                        <p>{{ post.content.substring(0, 100) }}...</p>
                        <p v-if="post.commentCount !== undefined">{{ post.commentCount }} Comments</p>
                        <p v-else>Loading comments...</p>
                    </router-link>
                </div>
                <router-link :to="{ name: 'BlogDetails', params: { id: post.id } }" class="read-more-grid">→</router-link>
            </div>
            <div class="pagination">
                <button v-if="currentPage > 1" @click="prevPage">Назад</button>
                <button 
                    v-for="page in totalPages" 
                    :key="page" 
                    :class="{ active: page === currentPage }" 
                    @click="goToPage(page)"
                >{{ page }}</button>
                <button v-if="currentPage < totalPages" @click="nextPage">Вперед</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            posts: [],
            displayedPosts: [],
            viewMode: 'list', // 'list' or 'grid'
            postsPerPage: 5,
            currentPage: 1,
            gridPostsPerPage: 6,
        };
    },
    created() {
        this.fetchPosts();
    },
    methods: {
        fetchPosts() {
            fetch('https://697df8674bf51950.mokky.dev/posts')
                .then(response => response.json())
                .then(data => {
                    this.posts = data;
                    this.fetchCommentCounts();
                })
                .catch(error => console.error('Error fetching posts:', error));
        },
        fetchCommentCounts() {
            const postIds = this.posts.map(post => post.id);
            Promise.all(postIds.map(id =>
                fetch(`https://697df8674bf51950.mokky.dev/comments?postId=${id}`)
                    .then(response => response.json())
                    .then(comments => {
                        const post = this.posts.find(post => post.id === id);
                        post.commentCount = comments.length;
                    })
            ))
                .catch(error => console.error('Error fetching comment counts:', error))
                .finally(() => {
                    this.updateDisplayedPosts();
                });
        },
        updateDisplayedPosts() {
            if (this.viewMode === 'list') {
                const start = (this.currentPage - 1) * this.postsPerPage;
                const end = this.currentPage * this.postsPerPage;
                this.displayedPosts = this.displayedPosts.concat(this.posts.slice(start, end));
            } else {
                // If viewMode is grid, reset displayedPosts
                this.displayedPosts = this.posts.slice(0, this.gridPostsPerPage);
            }
        },
        loadMorePosts() {
            this.currentPage++;
            this.updateDisplayedPosts();
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        setViewMode(mode) {
            this.viewMode = mode;
            this.currentPage = 1;
            this.displayedPosts = [];
            this.updateDisplayedPosts();
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        goToPage(page) {
            this.currentPage = page;
        }
    },
    computed: {
        hasMorePosts() {
            return this.displayedPosts.length < this.posts.length;
        },
        totalPages() {
            return Math.ceil(this.posts.length / this.gridPostsPerPage);
        },
        paginatedPosts() {
            const start = (this.currentPage - 1) * this.gridPostsPerPage;
            const end = this.currentPage * this.gridPostsPerPage;
            return this.posts.slice(start, end);
        }
    },
    watch: {
        currentPage() {
            this.updateDisplayedPosts();
        }
    }
};
</script>
  
<style>
.blog-list {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.blog-item {
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
}

.blog-image {
    width: 200px;
    height: auto;
}

.blog-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.blog-title {
    text-decoration: none;
    color: black;
}

.blog-title h2 {
    margin: 0;
}

.blog-date {
    color: gray;
    font-size: 14px;
}

.read-more {
    text-decoration: none;
    font-size: 24px;
    color: black;
    align-self: flex-end;
}

button {
    align-self: center;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
}

/* Grid Styles */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.blog-item-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #ccc;
    padding: 10px;
}

.blog-image-grid {
    width: 100%;
    height: auto;
}

.read-more-grid {
    text-decoration: none;
    font-size: 24px;
    color: black;
    align-self: flex-end;
}

.pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.pagination button {
    padding: 5px 10px;
    border: 1px solid #000;
    background: #fff;
    cursor: pointer;
}

.pagination button.active {
    background: #000;
    color: #fff;
}
</style>
