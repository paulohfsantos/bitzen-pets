import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { User } from "src/api/models/entities/user.model";
import { AuthService } from "src/api/services/auth.service";
import { UserLoginDto } from "src/api/models/dtos/login.dto";
import { UserRegisterDto } from "src/api/models/dtos/register.dto";

export const useAuth = defineStore('auth', () => {
  const user = ref<User>();
  const isAuthenticated = computed(() => !!user.value);
  const isUnauthenticated = computed(() => !user.value);

  const authService = new AuthService();

  function setUser(newUser: User) {
    user.value = newUser;
  }

  function login(credentials: UserLoginDto) {
    return authService.login(credentials);
  }

  function register(credentials: UserRegisterDto) {
    return authService.register(credentials);
  }

  function logout() {
    return authService.logout();
  }

  return {
    // state
    user,
    isAuthenticated,
    isUnauthenticated,

    // setters
    setUser,

    // actions
    login,
    logout,
    register
  };
});
