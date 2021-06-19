<template>
  <div class="container">
    <router-link
      :to="{ name: 'Articles', params: { id: id } }"
      class="more-info"
    >
      <div class="card">
        <div class="card-header">
          <img :src="img" alt="rover" />
        </div>
        <div class="card-body">
          <h4>{{ title }}</h4>
          <p>{{ text }}</p>
          <div class="user">
            <div class="user-info">
              <h5>{{ author }}</h5>
              <small> {{ new Date().getFullYear() }} </small>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    text: String,
    author: String,
    img: String,
    id: Number,
  },
  data() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.more-info {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 56px; /* fallback */
  //   font-size: 13px;
  //   overflow: hidden;
  //   height: 40px;
  //   text-overflow: ellipsis;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
</style>