<template>
  <form class="mid-form" @submit.prevent="sendData">
    <div v-if="errorStr.length > 0" class="form-group">
      <p class="error-message">{{ errorStr }}</p>
    </div>

    <div v-if="props.article" class="form-group form-article-image">
      <img :src="ApiImage.getImageUrl(props.article?.image)" :alt="props.article?.title">
    </div>

    <div class="form-group">
      <label for="title">Article Title</label>
      <input id="title" type="text" name="title" placeholder='Article about Time and Space' v-model="article.title" />
    </div>

    <div class="form-group">
      <label for="article-content">Content of the Article</label>
      <textarea id="article-content" type="text" name="content" cols=30 rows=10 placeholder='Text about Time and Space'
        v-model="article.content"></textarea>
    </div>


    <div class="form-group">
      <label for="article-image">Image of the Article</label>
      <input type="file" id="article-image" name="imagen" />
    </div>

    <div class="form-group">
      <input type="submit" value="Save" class="btn btn-success" />
    </div>

  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ArticleResponse, ArticleFormFields } from '../api/ApiArticle';
import useForm from "../hooks/useForm";
import ApiArticle from '../api/ApiArticle';
import ApiImage from '../api/ApiImage';
import UseFetchData from '../classes/UseFetchData';
import Alert from '../classes/Alert';
import { FetchRequestReturn } from '../classes/FetchRequest';

const router = useRouter();
const { getData, validateStringFields } = useForm<ArticleFormFields>();


type ArticleFormProps = {
  article?: ArticleResponse
};

const props = defineProps<ArticleFormProps>()

const errorStr = ref<string>('');
const article = ref<{ title: string, content: string }>({
  title: props.article?.title ?? '',
  content: props.article?.content ?? ''
});


const redirectAfterProcess = (articleId: string = '') => {
  let name = 'pageBlog';
  let params = { articleId: '' };
  if (articleId != '') {
    name = 'pageArticle'
    params.articleId = articleId
  }
  router.push({ name, params });
}

const sendData = (event: Event) => {
  errorStr.value = '';
  const formDataObject = getData(event.target as HTMLFormElement);

  try {
    if (!validateStringFields(formDataObject)) {
      throw new Error("Title o Content of the Article are empty.");
    }

    const articleId = props.article?._id ?? null;
    let api: FetchRequestReturn<ArticleResponse> = ApiArticle.createArticle(formDataObject);
    let opString = 'created';


    if (articleId) {
      api = ApiArticle.updateArticle(articleId, formDataObject);
      opString = 'updated';
    }

    api.promise.then(wsResult => {
      const result = new UseFetchData<ArticleResponse>().setFetchData(wsResult);
      if (formDataObject.imagen.name != '') {
        if (result.hasResponse()) {
          const { promise } = ApiArticle.updateArticleImage(result.response?._id!, formDataObject);
          promise.then(wsResult => {
            console.log(wsResult);
            Alert.showSuccess(`Article '${wsResult.response?.title}' with Image '${formDataObject.imagen.name}' sucessfully ${opString}`);
            redirectAfterProcess(result.response?._id);
          });
        }

      } else {
        Alert.showSuccess(`Article '${result.response?.title}' sucessfully ${opString}`);
        redirectAfterProcess(result.response?._id);
      }
    });

  } catch (err) {
    const error = err as Error;
    errorStr.value = error.message;
  }

}

</script>