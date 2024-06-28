import { baseApiInstance } from "@/shared/api/instance";
import { ChatsEndpoints } from "@/shared/api/endpoints";

export const ChatsService = {
   conversationStart: async (slug: string) => {
      const response = await baseApiInstance.post(ChatsEndpoints.CONVERSATION_START, {
         user_slug: slug,
      });
      return response.data;
   },
   getConversations: async () => {
      const response = await baseApiInstance.get(ChatsEndpoints.CONVERSATIONS);
      return response.data;
   },
   getMessages: async (selectedChat: string) => {
      const response = await baseApiInstance.get(ChatsEndpoints.MESSAGES + selectedChat + "/");
      return response.data;
   },
   sendMessage: async (slug: string, message: string) => {
      const response = await baseApiInstance.post(ChatsEndpoints.SEND_MESSAGE + slug, {
         data: message,
      });
      return response.data;
   },
};
