<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import BookingForm from '../components/BookingForm.vue'
import MenuHome from '../components/MenuHome.vue';
</script>

<template>
    <div>

        <header>

            <div class="bg-[#233000] pb-[200px] px-8">
                <Header />
                <div class="flex justify-around">
                    <div class="flex flex-col">
                        <div class="relative flex flex-col">
                            <h2
                                class="text-white text-[148px] absolute z-20 w-[1040px] font-rufina font-bold leading-[150px]">
                                Healthy Eating
                                is important
                                part of lifestyle</h2>
                            <p class="text-white font-lato mt-[500px] break-normal text-[24px] max-w-[550px]">Lorem ipsum
                                dolor sit
                                amet, consectetur adipiscing elit. Neque
                                congue arcu
                            </p>
                        </div>
                        <div class="flex flex-col justify-evenly items-center h-[400px] w-[50px] mt-10">
                            <span class="text-white font-rufina rotate-90 w-5 text-[48px] pr-20">Scroll</span>
                            <div class="border-b border-dashed w-[180px] rotate-90 mt-16"></div>
                        </div>
                    </div>
                    <div class="relative mt-[120px]">
                        <img class="w-[600px] z-0" src="/home/Home_title.img.png" alt="">
                        <img class="w-[520px] h-[150px] absolute z-10 top-[580px] end-[280px]"
                            src="/home/Home_title_desc_img.png" alt="">
                    </div>
                </div>
                <div class="flex justify-around pt-[200px]">
                    <div>
                        <img class="w-[500px]" src="/home/Home_img-1.png" alt="">
                        <h2 class="text-white font-rufina text-5xl max-w-[400px] mt-12">Start to plan <br> your diet today
                        </h2>
                        <p class="text-white font-lato text-2xl max-w-[550px] mt-12">Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit. Neque congue arcu</p>
                    </div>
                    <div>
                        <p class="text-white font-lato text-2xl max-w-[500px]">Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit. Neque congue
                            arcu</p>
                        <img class="mt-[84px] h-[600px]" src="/home/Home_img-2.png" alt="">
                    </div>
                </div>
            </div>
        </header>

        <main>
            <div class="container__menu">
                <div class="home__menu__up flex justify-between">
                    <div class="home__menu__up__left mx-auto mt-[170px]">
                        <h2 class="text-[#111] font-rufina text-[108px]">Our Menu</h2>
                        <p class="text-[#111] text-[24px] font-lato">This is a section of your menu. Give your section a
                            brief description</p>
                    </div>
                    <div class="home__menu__up__right">
                        <img src="/home/Home_decaration.png" alt="">
                    </div>
                </div>

                <div class="home__menu__down">
                    <!-- меню -->
                    <div>
                        <MenuHome />
                    </div>
                </div>
            </div>
            <!-- chef cook -->
            <div class="container__chef flex justify-between text-center bg-[#EBF0E4] pb-[100px]">
                <div class="img_chef  pl-[40px] mt-[150px] w-[930px]">
                    <img src="/public/home/Chef.png" alt="" class="">
                </div>
                <div class="text__chef pr-[20px] w-[930px] mx-auto">
                    <h2 class="text-[108px] font-rufina pt-[220px]">Excellent cook</h2>
                    <p class="text-[24px] text-[#4D4D4D] font-lato">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Purus lorem id penatibus imperdiet. Turpis
                        egestas ultricies purus auctor tincidunt lacus nunc.</p>
                    <img src="/home/Leaf-2.png" alt="" class="mt-[200px] ml-[170px]">
                </div>
            </div>
            <!-- Характеристики -->
            <div class="flex justify-center mt-[200px] mb-[190px]">
                <div class="w-[508px] flex flex-col text-center items-center">
                    <img src="/home/icon_fish.svg" alt="" class="w-[260px] ">
                    <h2 class="text-[48px] font-rufina font-bold pt-[40px]">Premium Quality</h2>
                    <p class="text-[24px] font-lato text-[#4D4D4D] pt-[40px]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Neque congue arcu</p>
                </div>
                <div class="w-[508px] flex flex-col text-center items-center">
                    <img src=" /home/icon_carrot .svg" alt="" class="w-[260px]">
                    <h2 class="text-[48px] font-rufina font-bold pt-[40px]">Seasonal Vegetables</h2>
                    <p class="text-[24px] font-lato text-[#4D4D4D] pt-[40px]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Neque congue arcu</p>
                </div>
                <div class="w-[508px] flex flex-col text-center items-center">
                    <img src=" /home/ikon_fruit.svg" alt="" class="w-[260px]">
                    <h2 class="text-[48px] font-rufina font-bold pt-[40px]">Fresh Fruit</h2>
                    <p class="text-[24px] font-lato text-[#4D4D4D] pt-[40px]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Neque congue arcu</p>
                </div>
            </div>
        </main>
        <BookingForm />
        <Footer />
    </div>
</template>

