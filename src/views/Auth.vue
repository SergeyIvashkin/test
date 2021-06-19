<template>
  <div class="main">
    <h1>Войти в личный кабинет</h1>
    <form class="login" @submit.prevent="login">
      <input
        :class="{ 'text-danger': showErrorName }"
        type="text"
        v-model="form.name"
        name="name"
        placeholder="name"
      />
      <span v-if="showErrorName">Error</span>

      <input
        type="email"
        v-model="form.email"
        name="email"
        placeholder="email"
      />
      <span v-if="showErrorEmail">Error</span>

      <input
        :class="{ 'text-danger': showErrorPassword }"
        type="password"
        v-model="form.password"
        name="password"
        placeholder="password"
      />
      <span v-if="showErrorPassword">Error</span>

      <div>
        <label for="ava">Сhoose a photo</label>

        <input
          type="file"
          accept="image/*"
          id="upload-file"
          @change="onFileChange"
        />
        <img
          v-show="imageSrc"
          class="ava"
          :src="imageSrc"
          width="50px"
          height="50px"
        />
      </div>

      <button type="submit" name="commit" @click="login">Войти</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Auth",
  components: {},
  data: () => ({
    form: {
      name: "",
      password: "",
      email: "",
      image: {},
    },
    imageSrc: false,
    showErrorName: false,
    showErrorEmail: false,
    showErrorPassword: false,
  }),
  methods: {
    ...mapActions(["LOGIN"]),

    login() {
      console.log(!!this.form.image.length);
      if (
        !this.validName() &&
        !this.validEmail(this.form.email) &&
        !this.validPassword(this.form.password) &&
        !!this.form.image.length
      ) {
        localStorage.setItem("token", this.form.name);
        this.LOGIN(this.form);
        this.$router.push("/Home");
      }
    },
    validName() {
      return this.form.name.length < 5
        ? (this.showErrorName = true)
        : (this.showErrorName = false);
    },
    validEmail(email) {
      let reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email)
        ? (this.showErrorEmail = false)
        : (this.showErrorEmail = true);
    },
    validPassword(password) {
      let reg = /^[A-Z](?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
      return reg.test(password)
        ? (this.showErrorPassword = false)
        : (this.showErrorPassword = true);
    },
    onFileChange(e) {
      if (e.target.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.imageSrc = e.target.result;
          this.form.image = this.imageSrc;
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;

  input,
  button {
    margin: 5px;
    padding: 5px;
  }
  span {
    color: red;
  }
}

.text-danger {
  border: 4px double red;
}
</style>