import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ChatsQueryKeys } from "@/shared/api/queryKeys";
import { ChatsService, ROUTES } from "@/shared/lib";
import { ChatTypes, IMessageFullTypes } from "./types";
import { useRouter } from "next/navigation";
import {closeModal} from "@/views/modal";

export const useGetChats = () => {
   return useQuery<ChatTypes[]>({
      queryKey: [ChatsQueryKeys.CONVERSATIONS],
      queryFn: () => ChatsService.getConversations(),
   });
};

export const useGetMessages = (selectedChat: string) => {
   return useQuery<IMessageFullTypes>({
      queryKey: [ChatsQueryKeys.MESSAGES, selectedChat],
      queryFn: () => ChatsService.getMessages(selectedChat),
      // enabled: !selectedChat,
   });
};

export const useStartChat = () => {
   const { push } = useRouter();
   const queryClient = useQueryClient();
   return useMutation<Error, any, string>({
      mutationKey: [ChatsQueryKeys.CONVERSATION_START],
      mutationFn: (slug) => ChatsService.conversationStart(slug),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [ChatsQueryKeys.CONVERSATIONS] });
         push(ROUTES.NOTICES);
         closeModal()
      },
   });
};

export const useSendMessage = () => {
   const { push } = useRouter();
   const queryClient = useQueryClient();
   return useMutation<Error, any, { slug: string, message: string }>({
      mutationKey: [ChatsQueryKeys.CONVERSATION_START],
      mutationFn: ({slug, message}) => ChatsService.sendMessage(slug, message),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [ChatsQueryKeys.CONVERSATIONS] });
         push(ROUTES.NOTICES);
         closeModal()
      },
   });
};


