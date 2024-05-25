import { FC } from "react";
import { ErrorMessageProps } from "../model/types";

const ErrorMessage: FC<ErrorMessageProps> = ({ isEmpty }) => {
   return isEmpty ? (
      <h3 className="h3">Упс, нету данных 😅</h3>
   ) : (
      <h3 className="h3">Упс, произошла ошибка 😅</h3>
   );
};

export default ErrorMessage;
