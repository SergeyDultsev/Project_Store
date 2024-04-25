import axios from 'axios';

export async function registerUser({ fio, email, password }) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, { fio, email, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 201) {
            return response.data?.data?.user_token;
        } else {
            throw new Error('Ошибка регистрации');
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 422) {
                throw new Error('Ошибка валидации полей');
            } else {
                throw new Error('Произошла ошибка при регистрации');
            }
        }
    }
}