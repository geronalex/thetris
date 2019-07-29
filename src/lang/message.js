import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    titleMsg:'The superhero amanac',
    welcomeMsg: 'Welcome to the superhero amanac, this application aims to give you a listing of the superhero principles of the Marvel and DC universes.',
    addHeroButton:"Add a new hero",
    heroName:'Name of the superhero',
    heroTeam:'Team',
    heroSecretId:'Secret Identity',
    heroFiche:'Profil page',
    heroDel:'Delete',
    backBtn:'Back',
    editBtn:'Edit',
    heroAlter:'Alter ego',
    heroFirstApp:'First appearance',
    heroCarac:'Characters',
    editHeroTitle:"Editing a superhero",
    teamChoice:"Choice of the team",
    imgLink:"Profile picture link",
    saveBtn:"Save",
    backToListBtn:'Back to the list',
    msgEditDone:'Changes saved !',
    addHeroTitle:"Add a superhero",


  },
  'fr': {
    titleMsg:'L\'almanach des super héros',
    welcomeMsg: 'Bienvenue sur l\'amanach des super héros, cette application a pour but de vous donner un listing des principeaux super héros des univers Marvel et DC.',
    addHeroButton:"Ajouter un héros",
    heroName:'Nom du super héros',
    heroTeam:'Team',
    heroSecretId:'Identité secrète',
    heroFiche:'Page de profil',
    heroDel:'Supprimer',
    backBtn:'Retour',
    editBtn:'Editer',
    heroAlter:'Alter égo',
    heroFirstApp:'Première apparition',
    heroCarac:'Personnages',
    editHeroTitle:"Editer un super héros",
    teamChoice:"Choix de la team",
    imgLink:"Lien image de profil",
    saveBtn:"Sauvegarder",
    backToListBtn:'Retour à la liste',
    msgEditDone:'Modifications sauvegardées !',
    addHeroTitle:"Ajouter un super héros",
  }
};

const i18n = new VueI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;
