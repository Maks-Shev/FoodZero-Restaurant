<template>
    <div class="mx-auto py-8">
        <div class="gap-x-8 gap-y-[70px] flex flex-wrap">
        <MenuItemHome v-for="item in selectedItems" :key="item.id" :title="item.title" :description="item.description" :price="item.price"/>
    </div>
    </div>
</template>

<script>
import MenuItemHome from './MenuItemHome.vue';

export default {
    name: 'MenuHome',
    components: {
        MenuItemHome
    },
    data() {
        return {
            allFoods: [],
            allDrinks: [],
            selectedItems: []
        };
    },
    async created() {
        try {
            const foodResponse = await fetch('https://697df8674bf51950.mokky.dev/items_foods')
            if (!foodResponse.ok) {
                throw new Error(`HTTP error! status: ${foodResponse.status}`);
            }
            const foodData = await foodResponse.json()
            this.allFoods = foodData

            const drinkREsponse = await fetch('https://697df8674bf51950.mokky.dev/items_drinks')
            if (!drinkREsponse.ok) {
                throw new Error(`HTTP error! status: ${drinkREsponse.status}`);
            }
            const drinkData = await drinkREsponse.json()
            this.allDrinks = drinkData

            this.selectRandomItems()
        } catch (error) {
            console.error('Error fetching menu data');
        }
    },
    methods: {
        selectRandomItems() {
            const getRandomItems = (items, count) => {
                const shuffled = items.sort(() => 0.5 - Math.random())
                return shuffled.slice(0, count)
            }
            const randomFoods = getRandomItems(this.allFoods, 3)
            const randomDrinks = getRandomItems(this.allDrinks, 3)

            this.selectedItems = [...randomFoods, ...randomDrinks]
        }
    }
}
</script>