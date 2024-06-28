import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
   EquipmentQueryKeys,
   OrganizationQueryKeys,
   ResumeQueryKeys,
   ServiceQueryKeys,
   UserQueryKeys,
   VacancyQueryKeys,
} from "@/shared/api";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";
import {
   EquipmentService,
   OrdersService,
   OrganizationService,
   ServicesService,
   ORGANIZATION_ROUTES,
   MODAL_KEYS,
   ResumeService,
   VacancyService,
   DASHBOARD,
   useScrollTop,
   errorCatch,
} from "@/shared/lib";
import { closeModal } from "@/views/modal";
import { WORK } from "@/shared/lib/routes.config";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";

export const useHideEquipment = () => {
   const queryClient = useQueryClient();
   const { handleScrollToTop } = useScrollTop();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [OrdersQueryKeys.ORDER_HIDE],
      mutationFn: ({ slug }) => EquipmentService.hideEquipment(slug),
      onSuccess: () => {
         closeModal();
         handleScrollToTop();
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.GET_MY_EQUIPMENT] });
         toast.success("Успешно!");
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useHideOrder = () => {
   const queryClient = useQueryClient();
   const { handleScrollToTop } = useScrollTop();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [EquipmentQueryKeys.EQUIPMENT_HIDE],
      mutationFn: ({ slug }) => OrdersService.hideOrder(slug),
      onSuccess: () => {
         closeModal();
         handleScrollToTop();
         toast.success("Успешно!");
         queryClient.invalidateQueries({ queryKey: [OrdersQueryKeys.GET_MY_ORDER] });
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useHideService = () => {
   const queryClient = useQueryClient();
   const { handleScrollToTop } = useScrollTop();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [ServiceQueryKeys.HIDE_SERVICE],
      mutationFn: ({ slug }) => ServicesService.hideService(slug),
      onSuccess: () => {
         closeModal();
         handleScrollToTop();
         queryClient.invalidateQueries({ queryKey: [ServiceQueryKeys.GET_MY_SERVICE] });
         toast.success("Успешно!");
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useDeleteEquipment = () => {
   const queryClient = useQueryClient();
   const { push } = useRouter();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [EquipmentQueryKeys.EQUIPMENT_DELETE],
      mutationFn: ({ slug }) => EquipmentService.deleteEquipment(slug),
      onSuccess: () => {
         closeModal();
         toast.success("Вы успешно удалили оборудование");
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.GET_MY_ADS] });
         push(DASHBOARD.LISTINGS);
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useDeleteOrder = () => {
   const queryClient = useQueryClient();
   const { push } = useRouter();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [OrdersQueryKeys.ORDER_DELETE],
      mutationFn: ({ slug }) => OrdersService.deleteOrder(slug),
      onSuccess: () => {
         closeModal();
         toast.success("Вы успешно удалили заказ");
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.GET_MY_ADS] });
         push(DASHBOARD.LISTINGS);
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useDeleteEmployee = () => {
   const { push } = useRouter();
   const queryClient = useQueryClient();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [OrganizationQueryKeys.DELETE_EMPLOYEE],
      mutationFn: ({ slug }) => OrganizationService.deleteEmployee(slug),
      onSuccess: () => {
         closeModal();
         toast.success("Сотрудник был удалён!");
         queryClient.invalidateQueries({ queryKey: [OrganizationQueryKeys.EMPLOYEES] });
         push(ORGANIZATION_ROUTES.EMPLOYEES);
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useDeleteService = () => {
   const queryClient = useQueryClient();
   const { push } = useRouter();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [ServiceQueryKeys.DELETE_SERVICE],
      mutationFn: ({ slug }) => ServicesService.deleteService(slug),
      onSuccess: () => {
         closeModal();
         toast.success("Услуга была удалена");
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.GET_MY_ADS] });
         push(DASHBOARD.LISTINGS);
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useDeletePosition = () => {
   const { replace } = useRouter();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [OrganizationQueryKeys.DETAILS_POSITION],
      mutationFn: ({ slug }) => OrganizationService.deletePosition(slug),
      onSuccess: () => {
         toast.success("Долнжость была удалена");
         replace(ORGANIZATION_ROUTES.POSITIONS);
         closeModal();
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useDeleteVacancy = () => {
   const { replace } = useRouter();
   const queryClient = useQueryClient();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [VacancyQueryKeys.VACANCY_DELETE],
      mutationFn: ({ slug }) => VacancyService.deleteVacancy(slug),
      onSuccess: () => {
         toast.success("Вакансия было удалена!");
         queryClient.invalidateQueries({ queryKey: [VacancyQueryKeys.GET_ORGANIZATION_VACANCIES] });
         replace(ORGANIZATION_ROUTES.VACANCIES);
         closeModal();
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useHideVacancy = () => {
   const queryClient = useQueryClient();
   const { handleScrollToTop } = useScrollTop();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [VacancyQueryKeys.VACANCY_DELETE],
      mutationFn: ({ slug }) => VacancyService.hideVacancy(slug),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [VacancyQueryKeys.VACANCY_DETAILS] });
         handleScrollToTop();
         closeModal();
         toast.success("Успешно!");
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useDeleteResume = () => {
   const { replace } = useRouter();
   const queryClient = useQueryClient();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [ResumeQueryKeys.RESUME_DELETE],
      mutationFn: ({ slug }) => ResumeService.deleteResume(slug),
      onSuccess: () => {
         toast.success("Резюме было удалено!");
         replace(WORK.MY_RESUMES);
         queryClient.invalidateQueries({ queryKey: [ResumeQueryKeys.GET_MY_RESUMES] });
         closeModal();
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useHideResume = () => {
   const queryClient = useQueryClient();
   const { handleScrollToTop } = useScrollTop();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [ResumeQueryKeys.RESUME],
      mutationFn: ({ slug }) => ResumeService.hideResume(slug),
      onSuccess: () => {
         handleScrollToTop();
         queryClient.invalidateQueries({ queryKey: [ResumeQueryKeys.RESUME_DETAILS] });
         toast.success("Успешно!");
         closeModal();
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useActiveOrganization = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [OrganizationQueryKeys.ORGANIZATION_ACTIVATE],
      mutationFn: ({ slug }) => OrganizationService.activateOrganization(slug),
      onSuccess: async () => {
         await queryClient.invalidateQueries({ queryKey: [OrganizationQueryKeys.ORGANIZATION] });
         await queryClient.invalidateQueries({ queryKey: [UserQueryKeys.PROFILE] });
         queryClient.removeQueries({ queryKey: [OrganizationQueryKeys.GET_ORDERS] });

         closeModal();
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useDeleteOrganization = () => {
   const { replace } = useRouter();
   const queryClient = useQueryClient();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [OrganizationQueryKeys.DELETE_ORGANIZATION],
      mutationFn: ({ slug }) => OrganizationService.deleteOrganization(slug),
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: [OrganizationQueryKeys.ORGANIZATION, UserQueryKeys.PROFILE],
         });
         queryClient.invalidateQueries({ queryKey: [UserQueryKeys.PROFILE] });
         closeModal();
         toast.success("Организация было удалена");

         replace(ORGANIZATION_ROUTES.ORGANIZATION_LIST);
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useLeaveOrganization = () => {
   const queryClient = useQueryClient();
   const { push } = useRouter();
   return useMutation<any, Error, { slug: string }>({
      mutationKey: [OrganizationQueryKeys.LEAVE_ORGANIZATION],
      mutationFn: ({ slug }) => OrganizationService.leaveOrganization(slug),
      onSuccess: () => {
         push(DASHBOARD.PROFILE);

         queryClient.invalidateQueries({ queryKey: [UserQueryKeys.PROFILE] });
         queryClient.removeQueries({ queryKey: [OrganizationQueryKeys.ORGANIZATION] });
         queryClient.removeQueries({ queryKey: [OrganizationQueryKeys.EMPLOYEES] });
         queryClient.removeQueries({ queryKey: [OrganizationQueryKeys.POSITIONS] });
         queryClient.removeQueries({ queryKey: [OrganizationQueryKeys.GET_ORDERS] });
         queryClient.removeQueries({ queryKey: [OrganizationQueryKeys.HISTORY_ORDERS] });

         toast.success("Поздравляем! Вы успешно покинули организацию!");
         closeModal();
      },
      onError: (error) => {
         const errorMessage = errorCatch(error);
         toast.error(errorMessage);
         console.log("Error " + errorMessage);
         closeModal();
      },
   });
};

export const useGetVacancyResponses = () => {
   return useQuery({
      queryKey: [VacancyQueryKeys.GET_VACANCIES_RESPONSES],
      queryFn: () => VacancyService.getVacancyResponses(),
   });
};
