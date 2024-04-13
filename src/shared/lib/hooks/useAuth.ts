export function useAuth() {
   const refreshToken = false;

   if (refreshToken) {
      return true;
   } else {
      return false;
   }
}
