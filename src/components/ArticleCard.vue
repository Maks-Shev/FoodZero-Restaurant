<template>
    <div class="article-card bg-white shadow-md rounded-lg overflow-hidden">
        <img :src="image" alt="Article Image" class="w-full h-56 object-cover">
        <div class="p-6">
            <span class="bg-[#233000] text-white text-[26px] font-rufina py-[7px] px-[50px] rounded-full">Fashion</span>
            <div class="flex items-center mt-4">
                <img :src="authorImage" alt="Author image" class="w-[60px] h-[60px] rounded-full">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleCard",
    props: {
        image: String,

    }
}
</script>


сейчасть мы делаем показ двух случайных элементов Блога, при нажатии на этот элемент, откроется конкретный блог со статьей о нем, в котором будет описание и возможность оставить комментарий к этой статье, так же там должны отражаться все комментарии и возможность отвечать на эти комментарии. там же должно быть указано количество комментариев к той или иной странице. пример комментариев на изображении. как правильно оформить страницу и как правильно настроить REST API, чтобы каждый комментарий был к конкретной статьи.