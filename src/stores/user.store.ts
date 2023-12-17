import { defineStore } from "pinia";
import { UserEditDto } from "src/api/models/dtos/edituser.dto";
import { User } from "src/api/models/entities/user.model";
import { UserService } from "src/api/services/user.service";
import { computed, ref } from "vue";

export const useUser = defineStore('user', () => {
  const userService = new UserService();
  const user = ref<User>();
  const isAuthenticated = computed(() => !!user.value);
  const isUnauthenticated = computed(() => !user.value);

  function setUser(newUser: User) {
    user.value = newUser;
  }

  async function getUser() {
    // return userService.getLoggedUser();
    const res = await userService.getLoggedUser();

    setUser(res.data);

    return res.data;
  }

  function getUserInfo() {
    return userService.getUserInfo();
  }

  function updateUser(body: UserEditDto) {
    return userService.updateUser(body);
  }

  return {
    // state
    user,
    isAuthenticated,
    isUnauthenticated,

    // setters
    setUser,

    // actions
    getUser,
    getUserInfo,
    updateUser
  };
});
