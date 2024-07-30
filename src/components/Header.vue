<template >
    <div>
        <header>
            <div class="bg-[#233000] bg-transparent">
                <div class="flex justify-between items-center text-center h-52">
                    <div class="flex ml-28">
                        <img src="/Logo.svg" alt="">
                        <div class="hamburger__menu flex items-center">
                            <div class="hamburger__menu__line flex flex-col ml-11 cursor-pointer" @click="openModal">
                                <div class="bg-white  mt-3.5 w-11 h-0.5"></div>
                                <div class="bg-white  mt-3.5 w-11 h-0.5"></div>
                                <div class="bg-white  mt-3.5 w-11 h-0.5"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center text-2xl mr-32 pr-3.5">
                        <a class="text-white mr-7  font-sans w-[320px]" href="tel:+79260000000">
                            +7 926 000 00 00
                        </a>
                        <button
                            class="text-white text-[32px] border-2 border-white pt-5 pb-5 px-11 font-rufina bg-transparent">
                            Reservations
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- Модальное окно гамбургер меню -->
        <div class="bg-[#233000] bg-[url('/bg_hamburger.png')] bg-cover bg-no-repeat bg-center bg-blend-overlay ">
            <div v-if="isModalOpen" class="modal-overlay w-full h-[800px]" @click.self="closeModal">
                <div class="modal-content">
                    <button class="modal-close w-[30px] bg-transparent text-black text-[80px]"
                        @click="closeModal">×</button>
                    <div class="flex justify-around">
                        <ul class="modal-menu flex flex-col text-[80px] text-white font-rufina font-bold">
                            <li><router-link to="/" @click="closeModal">Home</router-link></li>
                            <li><a href="#" @click="closeModal">Menu</a></li>
                            <li><router-link to="/BlogList" @click="closeModal">Blogs</router-link></li>
                            <li><a href="#" @click="closeModal">About</a></li>
                            <li><a href="#" @click="closeModal">Contact</a></li>
                        </ul>
                        <ul class="w-[250px] flex flex-col mt-[250px]">
                            <li class="border-b-4 border-dotted mt-14 font-rufina text-[32px] text-white">
                                Contact</li>
                            <li>
                                <address class="mt-14 font-lato not-italic text-[18px] w-[200px] text-white">
                                    <a class="" href="tel:+9260000000">+79260000000</a>
                                    <p>info@foodzero.com</p>
                                    <p class="pt-7">1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isModalOpen: false
        };
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    }
};
</script>
<!-- 
<style scoped>
.hamburger__menu__line {
    cursor: pointer;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    position: relative;
    width: 300px;
}

.modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

.modal-menu {
    list-style: none;
    padding: 0;
}

.modal-menu li {
    margin: 10px 0;
}

.modal-menu a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
}
</style> -->
