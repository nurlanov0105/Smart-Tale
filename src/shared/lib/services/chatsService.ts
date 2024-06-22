import {baseApiInstance} from "@/shared/api/instance";
import {ChatsEndpoints} from "@/shared/api/endpoints";

export const ChatsService = {
    conversationStart: async ( slug: string) => {
        const response = await baseApiInstance.post(ChatsEndpoints.CONVERSATION_START, {
            user_slug: slug
        })
        return response.data
    },
    getConversations: async () => {
        const response = await baseApiInstance.get(ChatsEndpoints.CONVERSATIONS)
        return response.data
    },
    getMessages: async (id: string) => {
        const response = await baseApiInstance.get(ChatsEndpoints.MESSAGES + id)
        return response.data
    }
}