<script setup>
import HeaderView from "../components/HeaderView.vue";
import { ref } from 'vue'

let clients = ref(["Jardins d'Ariana", "Jérome Livran", "Philippe Parguey", "Archimed", "BeCom"])
defineProps({
  selectedClient: String,
  intervDate : Date,
  clientRemarks : String,
})
</script>

<template>
  <HeaderView />

  <h2>Avis de passage</h2>
  <form action="submit">
    <div class="content">
      <h3>Informations</h3>

      <label for="clientsList">Veuillez entrer le nom du client ou de l'entreprise :</label>
      <select name="clientsList" id="clientsList">
        <option v-for="client in clients" value="{{ client }}">{{ client }}</option>
      </select><br> <br>

      <label for="date"
        >Veuillez entrer la date d'intervention de notre technicien :</label
      ><br />
      <input v-model="something" type="date" name="date" id="date" required />

      <h3>Observations</h3>

      <label for="remarks"
        >Avez-vous des remarques à faire concernant la qualité de l'intervention
        ?</label
      ><br />
      <textarea name="remarks" id="remarks" cols="30" rows="7"></textarea>

      <h2>Merci d'avoir fait confiance a Clean3000 !</h2>

      <div class="signatures">
        <label for="techSignature">Signature du technicien :</label><br />
        <textarea
        class="signatureArea"
          name="techSignature"
          id="techSignature"
          cols="20"
          rows="9"
        ></textarea>

        <label for="clientSignature">Signature du client :</label><br />
        <textarea
        class="signatureArea"
          name="clientSignature"
          id="clientSignature"
          cols="20"
          rows="9"
        ></textarea>
      </div>
      <button>Terminer</button>
    </div>
  </form>
</template>

<style>
form {
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
}

.content {

}

h2 {
  text-align: center;
}

.signatures {
  display: flex;
}

label {
  margin-bottom: 5px;
}
</style>
