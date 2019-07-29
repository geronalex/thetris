



<template>
<div >
 <table id="DC" class="table">
  <thead>
    <tr>
      <th scope="col">{{ $t('heroName') }}</th>
      <th scope="col">{{ $t('heroTeam') }}</th>
      <th scope="col">{{ $t('heroSecretId') }}</th>
      <th scope="col">{{ $t('heroFiche') }}</th>
      <th scope="col">{{ $t('heroDel') }}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in myJson">
      <td>{{row.superhero}}</td>
      <td>{{row.publisher}}</td>
      <td>{{row.alter_ego}}</td>
      <th scope="col"><router-link :to="{ name: 'fiche', params: { id: row.superhero }}" class="button">Fiche</router-link></th>
      <td><button v-on:click="deleteHero(row.superhero)">supprimer</button></td>
    </tr>
  </tbody>
</table>


 </div>
</template>
<script>
import _ from 'lodash'
import $ from 'jquery'


export default {
  name: 'marvelList',
  data(){
    return{
      myJson: this.$Dc
    }
  },
  methods: {
    deleteHero: function (hero) {
      var tab = this.$Dc


      for (var i = 0; i < tab.length; i++){

        if (tab[i].superhero == hero){
          tab.splice(i, 1);
        }

      }

    }

  }


}
</script>
<style>
#DC{
margin-top:2%;
margin-right:2%;
display:none;
  float: right;
  width : 40%;
}
</style>
