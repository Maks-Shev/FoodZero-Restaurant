<template>
    <div class="booking__form bg-[#EBF0E4] w-full flex flex-col justify-center items-center text-center">
        <div class="booking_title">
            <h2 class="text-[108px] max-w-[700px] font-rufina text-start leading-[120px]">Make a Reservation</h2>
            <p class="text-[#4D4D4D] font-lato text-2xl">Get in touch with restaurant</p>
        </div>
        <form @submit.prevent="handleSubmit"
            class="form flex flex-wrap justify-center max-w-[700px] gap-x-10 gap-y-4 mt-3 mb-48">
            <div class="form__group">
                <input type="date" v-model="date" required class="input__field" :min="minDate" @change="validateDate">
            </div>
            <div class="form__group">
                <select v-model="time" required class="input__field">
                    <option value="" disabled>Select Time</option>
                    <option v-for="time in filteredTimes" :key="time" :value="time">{{ time }}</option>
                </select>
            </div>
            <div class="form__group">
                <select v-model="guests" required class="input__field">
                    <option value="" disabled>Select Number of Guests</option>
                    <option v-for="guest in guestsOption" :key="guest" :value="guest">{{ guest }} чел</option>
                </select>
            </div>
            <div class="form__group">
                <input type="text" v-model="name" placeholder="Your Name" required class="input__field">
            </div>
            <div class="form__group">
                <input type="tel" v-model="phone" placeholder="Phone Number" required class="input__field" pattern="\d+"
                    title="Номер телефона должен содержать только цифры" @input="validatePhone">
                <p v-if="phoneError" class="error__message">{{ phoneError }}</p>
            </div>
            <br>
            <button class="text-white bg-[#233000] py-5 px-14 mt-8 hover:bg-[#555] disabled:cursor-not-allowed"
                type="submit" :disabled="loading || dateError || phoneError">{{ loading ? 'Submitting...' : 'Book Now'
                }}</button>
        </form>
        <div v-if="message" class="message">
            <p class="mt-2 p-3 bg-[#d4edda] text-[#155724] border border-solid rounded-md font-lato text-2xl">{{ message }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookingForm',
    data() {
        return {
            date: '',
            time: '',
            guests: '',
            name: '',
            phone: '',
            message: '',
            loading: false,
            errorPhone: '',
            dateError: '',
            times: [
                '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '23.00'
            ],
            guestsOption: Array.from({ length: 20 }, (_, i) => i + 1),
            minDate: new Date().toISOString().split('T')[0]
        }
    },
    computed: {
        filteredTimes() {
            if (this.date === this.minDate) {
                const currentTime = new Date().getHours() * 60 + new Date().getMinutes()
                return this.times.filter(time => {
                    const [hour, minute] = time.split('.').map(Number)
                    return (parseInt(hour) * 60 + parseInt(minute)) > currentTime
                })
            } else {
                return this.times;
            }
        }
    },
    methods: {
        validateDate() {
            if (new Date(this.date) < new Date(this.minDate)) {
                this.dateError = 'Дата бронирования должна быть больше текущей'
            }
        },
        validatePhone() {
            const phonePattern = /^\d+$/
            if (!phonePattern.test(this.phone)) {
                this.errorPhone = 'Номер телефона должен состоять только из цифр'
            } else {
                this.errorPhone = '';
            }
        },

        async handleSubmit() {
            this.validateDate();
            this.validatePhone();

            if (this.dateError || this.errorPhone) {
                return;
            }
            this.loading = true;

            const bookingDetails = {
                date: this.date,
                time: this.time,
                guests: this.guests,
                name: this.name,
                phone: this.phone,
            };

            try {
                const response = await fetch('https://697df8674bf51950.mokky.dev/booking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingDetails),
                });

                if (!response.ok) {
                    throw new Error(`Ошибка при бронировании. Пожалуйста, попробуйте еще раз.`);
                }
                this.message = `Бронирование успешно!`;

                // Сброс формы
                this.date = '';
                this.time = '';
                this.guests = '';
                this.name = '';
                this.phone = '';
                setTimeout(() => {
                    this.message = '';
                }, 5000)
            } catch (error) {
                this.message = error.message
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
.input__field {
    font-family: Lato;
    width: 200px;
    height: 50px;
    background-color: transparent;
    border: 2px solid #000000;
    padding: 10px 15px;
}
.error-message {
    color: #d9534f;
    font-size: 0.875rem;
    margin-top: 0.5rem;
}</style>