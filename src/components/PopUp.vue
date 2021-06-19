<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <input type="text" v-model="dataList.titleModel" />
            </div>

            <div class="modal-body">
              <textarea v-model="dataList.textModel" cols="30" rows="10">
              </textarea>
            </div>

            <div class="modal-footer">
              <button class="modal-default-button" @click="saveChange">
                Ok
              </button>
              <input type="text" v-model="dataList.authorModel" />
              <button class="modal-default-button" @click="close">
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    text: String,
    title: String,
    author: String,
  },
  data() {
    return {
      dataList: {
        textModel: this.text,
        titleModel: this.title,
        authorModel: this.author,
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    saveChange() {
      this.$emit("saveChange", this.dataList);
      this.close();
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.modal-footer {
  display: flex;
  justify-content: space-between;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
