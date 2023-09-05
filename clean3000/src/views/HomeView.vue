<script setup>
import HeaderView from "../components/HeaderView.vue";
import { ref } from "vue";

let clients = ref([
  "Jardins d'Ariana",
  "Jérome Livran",
  "Philippe Parguey",
  "Archimed",
  "BeCom",
]);
/* defineProps({
  selectedClient: String,
  intervDate : Date,
  clientRemarks : String
})
defineEmits(['update:selectedClient', 'update:intervDate', 'update:clientRemarks']) */
</script>

<template>
  <HeaderView />

  <h2>Avis de passage</h2>
  <form action="submit">
    <div class="content">
      <h3>Informations</h3>

      <label for="clientsList"
        >Veuillez sélectionner le nom du client ou de l'entreprise :</label
      >
      <select name="clientsList" id="clientsList">
        <option v-for="client in clients" value="{{ client }}">
          {{ client }}
        </option></select
      ><br />
      <br />

      <label for="date"
        >Veuillez entrer la date d'intervention de notre technicien :</label
      ><br />
      <input type="date" name="date" id="date" required />

      <h3>Observations</h3>

      <label for="remarks"
        >Avez-vous des remarques à faire concernant la qualité de l'intervention
        ?</label
      ><br />
      <textarea name="remarks" id="remarks" cols="30" rows="7"></textarea>

      <h2>Merci d'avoir fait confiance a Clean3000 !</h2>

      <div class="signatures">
        <div class="firstSignature">
          <label for="techSignature">Signature du technicien :</label><br />
          <textarea
            class="signatureArea"
            name="techSignature"
            id="techSignature"
            cols="20"
            rows="9"
          ></textarea>
        </div>

        <div class="secondSignature">
          <label for="clientSignature">Signature du client :</label><br />
          <textarea
            class="signatureArea"
            name="clientSignature"
            id="clientSignature"
            cols="20"
            rows="9"
          ></textarea>
        </div>
      </div>
      <button class="submitBtn">Terminer</button>
    </div>
  </form>
</template>

<style>
form {
  background-color: rgb(61, 61, 52);
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h2 {
  text-align: center;
  text-decoration: underline;
  margin-top: 50px;
}

h3 {
  text-decoration: underline;
  margin-top: 30px;
}

.signatures {
  display: flex;
}

label {
  margin-bottom: 5px;
}

input {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

select {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 15px;
}

.firstSignature {
  margin-right: 70px;
}

.submitBtn {
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
