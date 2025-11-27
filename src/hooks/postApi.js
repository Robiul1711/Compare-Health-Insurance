import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import {
  showLoadingToast,
  updateToastSuccess,
  updateToastError,
} from "@/lib/utils";

export const useApiMutation = ({
  url,
  method = "post",
  successMessage = "Success!",
}) => {
  const axiosPublic = useAxiosPublic();

  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic[method](url, data);
      return response.data;
    },

    onMutate: () => {
      const toastId = showLoadingToast("Processing...");
      return { toastId };
    },

    onSuccess: (response, variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || successMessage
      );
    },

    onError: (error, variables, context) => {
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Try again.";

      updateToastError(context.toastId, message);
    },
  });
};
