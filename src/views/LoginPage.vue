<template>
  <ion-page>
    <ion-content>
      <ion-card style="height: 97%;">
        <ion-card-content class="ion-text-center" style="height: 100%;">

            <img src="/pucesdlogo.png" alt="">

            <h1>
              BIBLIOTECA
            </h1>
            <p>
              Ingrese su cédula
            </p>

            <ion-input placeholder="xxxxxxxxxx" v-model="cedula"></ion-input>
            <ion-button :disabled="cedula.length == 0" @click="obtenerDatos()"
              style="padding-top: 12px;">INGRESAR</ion-button>
         
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonInput, IonButton, IonCard, IonCardContent, alertController } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { CapacitorHttp as Http } from '@capacitor/core';
import { onMounted, ref } from 'vue';
import { Storage } from '@ionic/storage';

const store = new Storage();

onMounted(async () => {
  await store.create();
  user.value = await store.get("dato")

  if (user.value) {
    MenuPrincipal()
  }
});

const user = ref({
  apellidos: "",
  nombres: "",
  cedula: "",
  image: ""
})

const cedula = ref("")

async function obtenerDatos() {

  const options = {
    url: "https://unitec.pucesd.edu.ec/banner/check-usuario",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      params: {
        cedula: cedula.value
      }
    }
  }

  const res = await Http.post(options)

  if (res.data.result.cedula == null) {
    const alert = await alertController.create({
      header: 'Usuario no valido',
      buttons: ['Aceptar'],
    });

    await alert.present();

  } else {
    store.set('dato', res.data.result)
    MenuPrincipal()

  }
}

/* Cambio de vista */
const router = useRouter()

function MenuPrincipal() {
  router.replace({ name: 'tabsp' })
}

</script>

<style scoped>
ion-button {
  --background: #2A9EF9;
}
</style>