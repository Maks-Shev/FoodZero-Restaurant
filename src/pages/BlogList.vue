<template>
    <div class="bg-[url('/blogs/bg_blogs.png')] bg-cover bg-no-repeat bg-center h-[800px]">
        <Header />
        <div class="flex flex-col justify-center items-center text-center mt-[160px]">
            <h2 class="text-white text-[108px] font-rufina font-bold">Blogs</h2>
            <p class="text-white text-[24px] font-lato">It is easy way to create your beautiful blog for daily</p>
        </div>
    </div>
    <div>
        <div class="mt-[130px] flex justify-around">
            <div>
                <!-- Навигация по сайту -->
                <router-link to="/" :class="[viewMode === 'Home' ? 'text-[#4D4D4D]' : 'text-[#B0B0B0]']"
                    class="text-[24px] font-lato font-bold">
                    Home /
                </router-link>
                <router-link to="/BlogList" :class="[viewMode === 'blogs' ? 'text-[#4D4D4D]' : 'text-[#B0B0B0]']"
                    class="text-[24px] font-lato font-bold">
                    Blogs /
                </router-link>
                <router-link v-if="viewMode === 'list'" to="" class="text-[#4D4D4D] text-[24px] font-lato font-bold">
                    Blog List One Column
                </router-link>
                <router-link v-if="viewMode === 'grid'" to="" class="text-[#4D4D4D] text-[24px] font-lato font-bold">
                    Blog Two Columns
                </router-link>
            </div>
            <!-- Переключение вида таблицы -->
            <div class="view-toggle flex float-end w-[90px]">
                <button @click="setViewMode('list')" class="p-0"><img src="/blogs/list-details.svg" alt=""></button>
                <button @click="setViewMode('grid')" class="p-0"><img src="/blogs/list-grid.svg" alt=""></button>
            </div>
        </div>

        <!-- Блог списком -->
        <div v-if="viewMode === 'list'" class="blog-list">
            <div v-for="post in displayedPosts" :key="post.id" class="blog-item">
                <div class="blog-info">
                    <router-link :to="{ name: 'BlogDetails', params: { id: post.id } }"
                        class="blog-title flex justify-around items-center my-[120px]">
                        <img :src="post.image" alt="" class="blog-image w-[500px]">
                        <div class="w-[650px]">
                            <div class="flex items-center gap-[14px]">
                                <img :src="post.avatar" alt="">
                                <p class="text-[18px] font-lato font-bold text-[#5E6600]">{{ post.author }}</p>
                                <div class="bg-[#5E6600] w-[4px] h-[4px] rounded-full"></div>
                                <p class="text-[18px] font-lato font-bold text-[#5E6600]">{{ formatDate(post.date) }}</p>
                                <div class="bg-[#5E6600] w-[4px] h-[4px] rounded-full"></div>
                                <p class="text-[18px] font-lato font-bold text-[#5E6600]"
                                    v-if="post.commentCount !== undefined">{{ post.commentCount }} Comments</p>
                                <p class="text-[18px] font-lato font-bold text-[#5E6600]" v-else>Loading comments...</p>
                            </div>
                            <h2 class="border-b-4 border-black border-dotted text-[48px] font-rufina font-bold mt-[47px]">{{
                                post.title }}</h2>
                            <p class="text-[22px] text-[#4D4D4D] font-lato font-bold mt-[18px]">{{ post.content.substring(0,
                                100) }}...</p>
                            <button class="flex p-0 mt-[46px] text-[24px] font-lato font-bold items-center">Read More<img
                                    class="ml-[10px] mt-[3px]" src="/blogs/Icon_arrow-right.svg" alt=""></button>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="flex justify-center">
                <button v-if="hasMorePosts" @click="loadMorePosts"
                    class="border-2 border-black text-2xl font-lato font-bold w-[184px] h-[54px] mb-[128px] p-0 px-[40px] subpixel-antialiased">Loading...</button>
            </div>
        </div>

        <!-- Блог сеткой -->
        <div v-if="viewMode === 'grid'" class="flex justify-center">
            <div class="grid grid-cols-2 gap-[60px]">
                <div v-for="post in paginatedPosts" :key="post.id" class="blog-item-grid">
                    <div class="blog-info">
                        <router-link :to="{ name: 'BlogDetails', params: { id: post.id } }"
                            class="flex flex-col items-center mt-[60px]">
                            <img :src="post.image" alt="" class="blog-image w-[600px]">
                            <div class="w-[650px]  ">
                                <div class="flex items-center gap-[14px] mt-[68px]">
                                    <img :src="post.avatar" alt="">
                                    <p class="text-[18px] font-lato font-bold text-[#5E6600]">{{ post.author }}</p>
                                    <div class="bg-[#5E6600] w-[4px] h-[4px] rounded-full"></div>
                                    <p class="text-[18px] font-lato font-bold text-[#5E6600]">{{ formatDate(post.date) }}
                                    </p>
                                    <div class="bg-[#5E6600] w-[4px] h-[4px] rounded-full"></div>
                                    <p class="text-[18px] font-lato font-bold text-[#5E6600]"
                                        v-if="post.commentCount !== undefined">{{ post.commentCount }} Comments</p>
                                    <p class="text-[18px] font-lato font-bold text-[#5E6600]" v-else>Loading comments...</p>
                                </div>
                                <h2
                                    class="border-b-4 border-black border-dotted w-[600px] text-[48px] font-rufina font-bold mt-[47px]">
                                    {{
                                        post.title }}</h2>
                                <p class="text-[22px] text-[#4D4D4D] font-lato font-bold mt-[18px]">{{
                                    post.content.substring(0,
                                        100) }}...</p>
                                <button class="flex p-0 mt-[46px] text-[24px] font-lato font-bold ml-[100px]"><img
                                        class="ml-[10px] my-[40px]" src="/blogs/Icon_arrow-right.svg" alt=""></button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="viewMode === 'grid'" class="pagination flex gap-[40px] justify-center mb-[128px] mt-[68px] ">
            <button class="p-0 w-[93px] h-[54px] border-2 border-black rounded-xl" v-if="currentPage > 1"
                @click="prevPage">Назад</button>
            <button class="p-0 w-[54px] h-[54px] border-2 border-black rounded-xl" v-for="page in totalPages" :key="page"
                :class="{ 'bg-black text-white': page === currentPage, 'bg-white text-black': page !== currentPage }"
                @click="goToPage(page)">{{ page }}</button>
            <button class="p-0 w-[93px] h-[54px] border-2 border-black rounded-xl" v-if="currentPage < totalPages"
                @click="nextPage">Вперед</button>
        </div>
    </div>
    <Footer />
</template>
  
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: { Header, Footer },
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
                // Если viewMode равен 'grid', сбросить displayedPosts
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
        },
    },
    computed: {
        hasMorePosts() {
            return this.displayedPosts.length < this.posts.length;
        },
        totalPages() {
            return Math.ceil(this.posts.length / this.postsPerPage);
        },
        paginatedPosts() {
            const start = (this.currentPage - 1) * this.gridPostsPerPage;
            const end = this.currentPage * this.gridPostsPerPage;
            return this.posts.slice(start, end);
        }
    }
}
</script>


<!-- <style>
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
    /* padding: 10px; */
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
    /* padding: 5px 10px; */
    border: 1px solid #000;
    background: #fff;
    cursor: pointer;
}

.pagination button.active {
    background: #000;
    color: #fff;
}</style> -->
