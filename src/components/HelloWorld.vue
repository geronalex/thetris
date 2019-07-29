'space_after_anon_function': true


<template>

  <div >

    <h1 class="text-center">{{ $t('titleMsg') }}</h1>
    <div>
    <p>
      {{ $t('welcomeMsg') }}</p>
    </div>

      <ChoixEquipe/>
      <marvelList/>
      <DCList/>


 </div>
</template>
<script>

import _ from 'lodash'
import $ from 'jquery'
import ChoixEquipe from './ChoixEquipe'
import marvelList from './marvelList'
import DCList from './DCList'
import fichePerso from './fichePerso'



export default {
  name: 'HelloWorld',
  components:{
ChoixEquipe,
marvelList,
DCList,
fichePerso
  }
}

</script>
<style>

#marvel{
  display:none;

},



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
