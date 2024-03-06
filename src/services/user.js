import api from "../configs/api";
import { getCookie } from "../utils/cookie";

const getProfile = () => {
  return api.get("user/whoami");
};
export { getProfile };
