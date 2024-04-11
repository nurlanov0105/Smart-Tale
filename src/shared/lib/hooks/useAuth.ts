export function useAuth() {
   const accessToken = "11";

   if (accessToken) {
      return true;
   } else {
      return false;
   }
}
