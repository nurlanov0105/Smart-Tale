import {baseApiInstance} from "@/shared/api/instance";
import {ChatsEndpoints} from "@/shared/api/endpoints";

export const ChatsService = {
    conversationStart: async ({initiator, receiver}: {initiator?: string, receiver: string}) => {
        const response = await baseApiInstance.post(ChatsEndpoints.CONVERSATION_START )
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