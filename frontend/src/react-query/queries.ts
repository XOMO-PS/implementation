import { axios } from "../react-query";
import { User } from "./types";
export const apiUserRegistration = (data: User) => {
  return axios({
    url: "https://29u7oz823i.execute-api.eu-north-1.amazonaws.com/dev/user/register", //need to change when there is baseURL.
    method: "post",
    data,
  });
};
