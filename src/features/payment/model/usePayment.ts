import React, {useRef, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {showModal} from "@/views/modal";
import {UserQueryKeys} from "@/shared/api";
import {MODAL_KEYS, UserService} from "@/shared/lib";
import {formatCreditCardNumber, formatCVC, formatExpirationDate} from "./formating";

interface FormState {
    number: string;
    name: string;
    expiry: string;
    cvc: string;
    issuer: string;
    focused: string;
}
export const usePayment = () => {
    const [state, setState] = useState<FormState>({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
    });

    const formRef = useRef<HTMLFormElement>(null);

    const handleCallback = ({ issuer }: { issuer: string }, isValid: boolean) => {
        if (isValid) {
            setState((prevState) => ({ ...prevState, issuer }));
        }
    };

    const handleInputFocus = ({ target }: React.FocusEvent<HTMLInputElement>) => {
        setState((prevState) => ({ ...prevState, focused: target.name }));
    };

    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = target;

        if (name === "number") {
            value = formatCreditCardNumber(value);
        } else if (name === "expiry") {
            value = formatExpirationDate(value);
        } else if (name === "cvc") {
            value = formatCVC(value);
        }

        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const {
        mutate ,
        isPending,
        isError
    } = useMutation<any, Error, string>({
        mutationKey: [UserQueryKeys.SUBSCRIBE],
        mutationFn: (data) => UserService.getSubscription(data),
        onSuccess: () => {
            showModal(MODAL_KEYS.subscribe)
            if (formRef.current) {
                formRef.current.reset();
            }
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       mutate("Премиум")
    };


    return {
        handleSubmit,
        isLoading: isPending,
        isError,
        handleInputChange,
        state,
        formRef,
        handleCallback,
        handleInputFocus

    }
}