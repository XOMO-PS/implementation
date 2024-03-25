import { useMutation } from "@tanstack/react-query";
import { apiUserRegistration } from "./queries";

type CustomMutationProps = {
  onSuccess?: (data: any) => void;
  onError?: (err: any) => void;
};

//const defaultQueryOptions = { cacheTime: 0, refetchOnWindowFocus: false };

export const useUserRegistrationMutation = ({
  onSuccess,
  onError,
}: CustomMutationProps = {}) => {
  return useMutation({
    mutationFn: apiUserRegistration,
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (err) => {
      onError?.(err);
    },
  });
};
