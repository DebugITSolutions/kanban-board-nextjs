import $api from "@/api/http";

export const getAllBoardsByUserId = async (userId) => {
    const response = await $api.get(`/boards/all-boards/${userId}`)

    return response.data
}