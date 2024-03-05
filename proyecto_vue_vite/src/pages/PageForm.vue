<script setup lang="ts">
import Slider from '../components/Slider.vue';
import Sidebar from '../components/Sidebar.vue';
import { ref } from 'vue';
import ArticleListComplete from "../components/ArticleListComplete.vue";
import PageContent from "../components/PageContent.vue";
// import { useVuelidate } from '@vuelidate/core';
// import { required, email } from '@vuelidate/validators';
// import { messages } from '@vuelidate/error-extractor';


const user = ref({
  name: '',
  surname: '',
  bio: '',
  gender: 'NoDefined'
})


// const rules = computed(() => ({
//   user: {
//     name: {
//       required,
//     },
//     surname: {
//       required,
//     },
//     bio: {
//       required,
//     }
//   }
// }));

// const $v = useVuelidate();


const sendData = () => {
  console.log(user.value.name);
  console.log(user.value.surname);
  console.log(user.value.bio);
  console.log(user.value.gender);
  console.log("datos enviados");
}




</script>


<template>
  <PageContent
      slider-title='Contact Form'
      subheader-title=""
  >
    <section id="content" class="page-form">
      <!-- {this.showUserDataIfDataExists()} -->

      <form class="mid-form" @submit.prevent="sendData">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" name="name" placeholder='José Pepe' v-model="user.name" />
          <!-- <p v-if="$v.name.$dirty && !$v.name.required">Name is required</p> -->
        </div>

        <div class="form-group">
          <label for="surname">Surname</label>
          <input id="surname" type="text" name="surname" placeholder='Ramirez García' v-model="user.surname" />
        </div>

        <div class="form-group">
          <label for="bio">Biografía</label>
          <textarea id="bio" name="bio" cols=30 rows=10 placeholder='Yo me dedico a contar experiencias de vida....'
                    v-model="user.bio"></textarea>
        </div>

        <div class="form-group radio-button">
          <label><input type="radio" name="gender" value="man" v-model="user.gender" /> Man</label>
          <label><input type="radio" name="gender" value="woman" v-model="user.gender" /> Woman</label>
          <label><input type="radio" name="gender" value="NoDefined" checked v-model="user.gender" /> Not defined</label>
        </div>

        <div class="form-group">
          <input type="submit" value="Enviar" class="btn" />
        </div>
      </form>
    </section>
  </PageContent>


</template>

