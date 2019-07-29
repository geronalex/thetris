
<template>

  <div>

<router-link :to="{ name: 'root'}" class="btn btn-danger" id="back">{{ $t('backBtn') }}</router-link>
<router-link :to="{ name: 'edit', params: { id: $data.fiche.superhero }}" class="btn btn-success" id="edit">{{ $t('editBtn') }}</router-link>
  <div class="image">
        <img :src="$data.fiche.img" alt="">
      </div>
  <h2 class="text-center">{{$data.fiche.superhero}}</h2>

<div class="data">
  <div class="property">
          <div class="left">{{ $t('heroAlter') }}</div>
          <div class="right">{{$data.fiche.alter_ego}}</div>
  </div>

   <div class="property">
          <div class="left">{{ $t('heroFirstApp') }}</div>
          <div class="right">{{$data.fiche.first_appearance}}</div>
  </div>

   <div class="property">
          <div class="left">{{ $t('heroTeam') }}</div>
          <div class="right">{{$data.fiche.publisher}}</div>
  </div>

  <h3>{{ $t('heroCarac') }}</h3>
        <div class="types">
          <div class="type"
            v-for="car in $data.carac">
            {{ car }}
          </div>
        </div>

</div>

 </div>

</template>
<script>

export default {

  name: 'fichePerso',
  created: function () {
    var tab = this.$Marvel.concat(this.$Dc)

    for (var i = 0; i < tab.length; i++) {
      if (tab[i].superhero === this.$route.params.id) {
        this._data.fiche = tab[i]
        this._data.carac = tab[i].characters.split(',')
      }
    }
  }

}
</script>
<style >

      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 40%;
        margin-top: 4%;
        width: 250px;
        height: 250px;
        background-color: #333;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);
      }

      h2 {
        text-transform: capitalize;
      }

     .data {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 40px;}
        .property {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;

        }

        .left { float: left; }
          .right { float: right; }
        h3 {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid #ccc;
        }

        .types {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 90%;
          max-width: 400px;

          }
          .type{
            margin: 0 10px 10px 0;
            padding: 5px 10px;
            border-radius: 20px;
            color: #fff;
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: capitalize;
            word-wrap: none;
            word-break: keep-all;
             background-color: #0A2E50;
          }

      #back{
      margin-top:1%;
      margin-left:1%;
      }

      #edit{
        margin-top:1%;
        margin-right:1%;
        float: right;
      }

</style>
