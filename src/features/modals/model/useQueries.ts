import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {
    EquipmentQueryKeys,
    OrganizationQueryKeys,
    ResumeQueryKeys,
    ServiceQueryKeys,
    VacancyQueryKeys
} from "@/shared/api";
import {OrdersQueryKeys} from "@/shared/api/queryKeys";
import {
    EquipmentService,
    OrdersService,
    OrganizationService,
    ServicesService,
    ORGANIZATION_ROUTES, MODAL_KEYS, ResumeService, VacancyService
} from "@/shared/lib";
import {closeModal} from "@/views/modal";
import {WORK} from "@/shared/lib/routes.config";


export const useHideEquipment = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, string>({
      mutationKey: [OrdersQueryKeys.ORDER_HIDE],
      mutationFn: (slug) => EquipmentService.hideEquipment(slug),
      onSuccess: () => {
          closeModal()
          toast.success("Вы успешно скрыли оборудование");
      },
      onError: () => {
          closeModal()
          console.log("error");
      },
   });
};

export const useHideOrder = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, string>({
      mutationKey: [EquipmentQueryKeys.EQUIPMENT_HIDE],
      mutationFn: (slug) => OrdersService.hideOrder(slug),
      onSuccess: () => {
          closeModal()
         toast.success("Вы успешно скрыли заказ");
      },
      onError: () => {
          closeModal()
         console.log("error");
      },
   });
};

export const useHideService = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, string>({
      mutationKey: [ServiceQueryKeys.HIDE_SERVICE],
      mutationFn: (slug) => ServicesService.hideService(slug),
      onSuccess: () => {
          closeModal()
          toast.success("Вы успешно скрыли услугу");
      },
      onError: () => {
          closeModal()
          console.log("error");
      },
   });
};

export const useDeleteEquipment = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, string>({
      mutationKey: [EquipmentQueryKeys.EQUIPMENT_DELETE],
      mutationFn: (slug) => EquipmentService.deleteEquipment(slug),
      onSuccess: () => {
         toast.success("Вы успешно удалили оборудование");
         closeModal()
      },
      onError: () => {
         console.log("error");
         closeModal()
      },
   });
};

export const useDeleteOrder = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, string>({
      mutationKey: [OrdersQueryKeys.ORDER_DELETE],
      mutationFn: (slug) => OrdersService.deleteOrder(slug),
      onSuccess: () => {
         toast.success("Вы успешно удалили заказ");
         closeModal()
      },
      onError: () => {
         console.log("error");
         closeModal()
      },
   });
};

export const useDeleteEmployee = () => {
    const {push} = useRouter()
   return useMutation<any, Error, string>({
      mutationKey: [OrganizationQueryKeys.DELETE_EMPLOYEE],
      mutationFn: (slug) => OrganizationService.deleteEmployee(slug),
      onSuccess: () => {
         toast.success("Сотрудник был удалён!");
         push(ORGANIZATION_ROUTES.EMPLOYEES)
      },
      onError: () => {
         console.log("error");
      },
   });
};

export const useDeleteService = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, string>({
        mutationKey: [ServiceQueryKeys.DELETE_SERVICE],
        mutationFn: (slug) => ServicesService.deleteService(slug),
        onSuccess: () => {
            toast.success("Услуга была удалена")
        },
        onError: () => {
            console.log("error")
        }
    })
}

export const useDeletePosition = () => {
    const {replace} = useRouter()
    return useMutation<any, Error, string>({
        mutationKey: [OrganizationQueryKeys.DETAILS_POSITION],
        mutationFn: (slug) => OrganizationService.deletePosition(slug),
        onSuccess: () => {
            toast.success("Долнжость была удалена")
            replace(ORGANIZATION_ROUTES.POSITIONS)
        },
        onError: () => {
            console.log("error")
        }
    })
}

export const useDeleteVacancy = () => {
    const {replace} = useRouter()
    return useMutation<any, Error, string>({
        mutationKey: [VacancyQueryKeys.VACANCY_DELETE],
        mutationFn: (slug) => VacancyService.deleteVacancy(slug),
        onSuccess: () => {
            toast.success("Вакансия было удалена")
            replace(WORK.VACANCIES)
        },
        onError: () => {
            toast.error("Произошла ошибка при удалении, попробуйте еще раз")
            console.log("error")
        }
    })
}

export const useHideVacancy = () => {
    const queryClient = useQueryClient();
    return useMutation<any, Error, string>({
        mutationKey: [VacancyQueryKeys.VACANCY_DELETE],
        mutationFn: (slug) => VacancyService.hideVacancy(slug),
        onSuccess: () => {
            closeModal()
            toast.success("Вы успешно скрыли услугу");
        },
        onError: () => {
            closeModal()
            console.log("error");
        },
    });
};


export const useDeleteResume = () => {
    const {replace} = useRouter()
    return useMutation<any, Error, string>({
        mutationKey: [ResumeQueryKeys.RESUME_DELETE],
        mutationFn: (slug) => ResumeService.deleteResume(slug),
        onSuccess: () => {
            toast.success("Резюме было удалено")
            replace(WORK.MY_RESUMES)
            closeModal()
        },
        onError: () => {
            console.log("error")
            closeModal()
        },
    })
}

export const useHideResume = () => {
    const queryClient = useQueryClient();
    return useMutation<any, Error, string>({
        mutationKey: [ResumeQueryKeys.RESUME],
        mutationFn: (slug) => ResumeService.hideResume(slug),
        onSuccess: () => {
            closeModal()
            toast.success("Вы успешно скрыли услугу");
        },
        onError: () => {
            closeModal()
            console.log("error");
        },
    });
};

export const useActiveOrganization = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, string>({
        mutationKey: [OrganizationQueryKeys.ORGANIZATION_ACTIVATE],
        mutationFn: (slug) => OrganizationService.activateOrganization(slug),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [OrganizationQueryKeys.ORGANIZATION]
            })
            closeModal()
        }
    })
}

export const useDeleteOrganization = () => {
    const {replace} = useRouter()
    return useMutation<any, Error, string>({
        mutationKey: [OrganizationQueryKeys.DELETE_ORGANIZATION],
        mutationFn: (slug) => OrganizationService.deleteOrganization(slug),
        onSuccess: () => {
            toast.success("Организация было удалена")
            replace(ORGANIZATION_ROUTES.ORGANIZATION_LIST)
            closeModal()
        },
        onError: () => {
            console.log("error")
            closeModal()
        },
    })
}