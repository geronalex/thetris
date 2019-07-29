


<template>
  <div id="test" >

<!-- Form Name -->
<legend class="text-center">{{ $t('editHeroTitle') }}</legend>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="team">{{ $t('teamChoice') }}</label>
  <div class="col-md-4">
    <select id="team" name="team" class="form-control" :value="$data.fiche.publisher">
      <option value="Marvel Comics">Marvel</option>
      <option value="DC Comics">Dc Comics</option>
    </select>
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="superhero">{{ $t('heroName') }}</label>
  <div class="col-md-4">
  <input id="superhero" name="superhero" type="text" placeholder="" class="form-control input-md" required=""  :value="$data.fiche.superhero">

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="firstApparance">{{ $t('heroFirstApp') }}</label>
  <div class="col-md-4">
  <input id="firstApparance" name="firstApparance" type="text" placeholder="" class="form-control input-md" required="" :value="$data.fiche.first_appearance">

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="alterEgo">{{ $t('heroAlter') }}</label>
  <div class="col-md-4">
  <input id="alterEgo" name="alterEgo" type="text" placeholder="" class="form-control input-md" required="" :value="$data.fiche.alter_ego">

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="carac">{{ $t('heroCarac') }}</label>
  <div class="col-md-4">
  <input id="carac" name="carac" type="text" placeholder="" class="form-control input-md" required="" :value="$data.fiche.characters">

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="img">{{ $t('imgLink') }}</label>
  <div class="col-md-4">
  <input id="img" name="img" type="text" placeholder="" class="form-control input-md" :value="$data.fiche.img">

  </div>
</div>

  <button v-on:click="save" class="btn btn-info">{{ $t('saveBtn') }}</button>
    <router-link  :to="{ name: 'root'}" class="btn btn-info">{{ $t('backToListBtn') }}</router-link>

 </div>
</template>
<script>


export default {
  name: 'newHero',
  methods:{


  save : function(){

  var superhero = document.getElementById('superhero').value;
  var team = document.getElementById('team').value;
  var alter = document.getElementById('alterEgo').value;
  var firstApparance = document.getElementById('firstApparance').value;
  var carac = document.getElementById('carac').value;
  var img = document.getElementById('img').value;


  var newHero = {
      "superhero": superhero,
      "publisher":team,
      "alter_ego":alter,
      "first_appearance":firstApparance,
      "characters":carac,
      "img":img
  }
if (team == "Marvel Comics"){

  this.$Marvel[this._data.i] = newHero;
}
else{

  this.$Dc[this._data.i] = newHero;
}
alert('Done !');

  }
  },


  created: function () {

var tab = this.$Marvel.concat(this.$Dc)


   for (var i = 0; i < tab.length; i++){

      if (tab[i].superhero == this.$route.params.id){
          this._data.i = i
          this._data.fiche = tab[i]
        this._data.carac = tab[i].characters.split(',');
      }

   }



  }


   }
</script>
<style>
h2 {
        text-transform: capitalize;
      }

</style>
