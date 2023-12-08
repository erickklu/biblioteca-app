<template>
  <ion-page>
    <ion-content>
      <ion-card style="height: 97%;">
        <ion-card-content class="ion-text-center" style="height: 100%;">
          <div style="padding-left: 15px; padding-top: 15%; text-align: center;">

            <img src="/pucesdlogo.png" alt="">

            <h1>
              BIBLIOTECA
            </h1>
            <p>
              Ingrese su cédula
            </p>

            <ion-input placeholder="xxxxxxxxxx" v-model="cedula"></ion-input>
            <ion-button  :disabled="cedula.length == 0" @click="obtenerDatos()" style="padding-top: 12px;">INGRESAR</ion-button>
            <!-- <span v-text="user.apellidos"></span> -->



          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonCard, IonCardContent, alertController } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { Plugins } from '@capacitor/core';
import { onMounted, ref } from 'vue';
import { Http } from '@capacitor-community/http'
import { Storage } from '@ionic/storage';

const store = new Storage();



onMounted(async () => {
  await store.create();
});

const user = ref({
  apellidos: "",
  nombres: "",
  cedula: ""
})

const cedula = ref("")

async function obtenerDatos() {

  const options = {
    url: "/api/banner/check-usuario",
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
    /* console.log('Dato no valido') */

    const alert = await alertController.create({
      header: 'Usuario no valido',
      /* subHeader: 'A Sub Header Is Optional', */
      /* message: 'a', */
      buttons: ['Aceptar'],
    });

    await alert.present();


  } else {
    store.set('dato', res.data.result)
    MenuPrincipal()

  }
  /*   console.log(res.data.result.cedula)
   */
  user.value.apellidos = res.data.result.apellidos
}


/* Cambio de vista */
const router = useRouter()

function MenuPrincipal() {
  console.log('tabsp')
  router.replace({ name: 'tabsp' })
}

</script>

<style scoped>
ion-button {
  --background: #2A9EF9;
  /* --background-hover: #9ce0be;
  --background-activated: #88f4be;
  --background-focused: #88f4be;  */
}
</style>