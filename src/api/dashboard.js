import $api from "@/api/http";

export const getAllBoardsByUserId = async (userId) => {
    try {
        const response = await $api.get(`/boards/all-boards/${userId}`)
        return response.data
    } catch (e) {
        console.log(e.message)
    }
}