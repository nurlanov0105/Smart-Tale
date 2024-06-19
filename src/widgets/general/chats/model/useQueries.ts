import {useMutation, useQuery} from "@tanstack/react-query";
import {ChatsQueryKeys} from "@/shared/api/queryKeys";
import {ChatsService} from "@/shared/lib";
import {ChatTypes, IMessageFullTypes} from "./types";


export const useGetChats = () => {
    return useQuery<ChatTypes[]>({
        queryKey: [ChatsQueryKeys.CONVERSATIONS],
        queryFn: () => ChatsService.getConversations()
    })
}


export const useGetMessages = (selectedChat: boolean) => {
    return useQuery<IMessageFullTypes>({
        queryKey: [ChatsQueryKeys.MESSAGES],
        queryFn: () => ChatsService.getMessages(`${2}`),
        enabled: selectedChat
    })
}


export const useStartChat = () => {
    return useMutation<Error, any, string>({
        mutationKey: [ChatsQueryKeys.CONVERSATION_START],
        mutationFn: (receiver) => ChatsService.conversationStart({receiver})
    })
}