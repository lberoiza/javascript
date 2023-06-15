<template>
  <section id="content" class="page-home">
    <h2 class="subheader">My Component</h2>
    <div class="my-component">
      <p>Hello World</p>
      <p>text of MyComponent: <strong>{{ msg }} </strong></p>
      <div class="button-bar">
        <p>Options from MyComponent</p>
        <button @click="buttonClicked" name="Button1">Button 1</button>
        <button @click="buttonClicked" name="Button2">Button 2</button>
        <button @click="buttonClicked" name="Button3">Button 3</button>
      </div>
      <hr>
    </div>
  </section>
</template>

<script setup lang="ts">

const emit = defineEmits(['buttonHandler']);


type MyComponentType = { msg: string}
defineProps<MyComponentType>()


const buttonClicked = (event: MouseEvent) => {
  const target = event.target as HTMLButtonElement;
  const name = target.getAttribute('name');
  emit('buttonHandler', name)
}

</script>

<style>
.button-bar button{
  margin: 2px;
}

</style>