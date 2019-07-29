


<template>
  <div id="test" class="text-center">
  <button v-on:click="showMarvel" class="btn btn-danger">marvel</button>
  <button v-on:click="showDC" class="btn btn-info">DC</button>
  <router-link :to="{ name: 'newHero'}" class="btn btn-success">{{ $t('addHeroButton') }}</router-link>
 </div>
</template>
<script>


export default {
  name: 'ChoixEquipe',

   methods: {
   showMarvel: function (){
    if (marvel.style.display === "none") {
    marvel.style.display = "inline-block";
  } else {
    marvel.style.display = "none";
  }
   },

    showDC: function (){
    if (DC.style.display === "none") {
    DC.style.display = "inline-block";
  } else {
    DC.style.display = "none";
  }
   },

   },
}
</script>
<style>


</style>
