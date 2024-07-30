<template>
    <div>
        <footer class="bg-[#233000]">
            <div class="footer__container  flex flex-1 flex-col">
                <div class="footer__up flex mb-32 justify-between">
                    <div class="text-white text-7xl pt-40 ml-32 font-rufina">
                        <p>Food</p>
                        <p>Zero.</p>
                    </div>
                    <div class="flex flex-col pt-32  mr-18">
                        <h2 class="text-white font-rufina text-3xl">Contact</h2>
                        <address class="mt-14 font-lato not-italic text-lg text-white">
                            <a class="" href="tel:+9260000000">+79260000000</a>
                            <p>info@foodzero.com</p>
                            <p class="pt-7">1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                        </address>
                    </div>
                    <div class="flex flex-col pt-32 mr-28">
                        <h2 class="text-white font-rufina text-3xl">Never Miss a Recipe</h2>
                        <form class="mt-14 flex items-center max-w-3xl">
                            <input
                                class="h-24 w-96 py-10 px-7 m-0 text-2xl text-white placeholder:text-white bg-transparent border border-white"
                                type="email" name="email" id="" placeholder="Email Address">
                            <button
                                class="h-20 w-48 border border-b-white ml-7 text-white text-3xl font-rufina bg-[#5E6600]"
                                type="submit">Subscribe
                            </button>
                        </form>
                        <p class="text-white pt-4 font-lato">Join our subscribers and get best recipe delivered each week!
                        </p>
                    </div>
                </div>
                <div class="footer__down border-t-2 border-dashed flex justify-between pt-14 pb-20">
                    <div>
                        <span class="text-white font-lato text-2xl pl-32">© 2024 Zero Inc. All rights Reserved</span>
                    </div>
                    <div class="footer__social">
                        <form class="flex gap-7 mr-28">
                            <a href="#"><img src="/Icon_instagram.svg" alt="instagram"></a>
                            <a href="#"><img src="/Icon_twitter.svg" alt="twitter"></a>
                            <a href="#"><img src="/Icon_facebook.svg" alt="facebook"></a>
                            <a href="#"><img src="/Icon_youtube.svg" alt="youtube"></a>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>