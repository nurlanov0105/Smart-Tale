export type Props = {
   handleSubscribe: () => void;
   isLoading: boolean;
};

export interface FormState {
   number: string;
   name: string;
   expiry: string;
   cvc: string;
   issuer: string;
   focused: string;
}
