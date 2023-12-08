<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
        <ion-title>Datos de Usuario</ion-title>
      </ion-toolbar> -->
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card style="height: 98%;">
        <ion-card-content>
          <div style="padding-left: 5%; padding-right: 5%; height: 820px;">
            <h1 style="color: black;">Datos de Usuario</h1>
            <div style="padding-top: 26%; text-align: center; justify-content: center;">

              <ion-card>
                <ion-card-content>
                  <span v-text="user.apellidos"></span>
                  <hr>
                  <span v-text="user.nombres"></span>
                  <hr>
                  <span v-text="user.cedula"></span>
                  <hr>
                </ion-card-content>
              </ion-card>

              <!--  <ion-card>
                <ion-card-content>
                  <img ref="barcodeImage" alt="Barcode">
                </ion-card-content>
              </ion-card> -->

              <ion-card>
                <ion-card-content>
                  <img :src="Qr" alt="" style="width: 100%;">
                </ion-card-content>
              </ion-card>

              <ion-button @click="Login()">Cambiar de usuario</ion-button>

            </div>
            <ion-fab @click="Info()" slot="fixed" vertical="bottom" horizontal="end">
            <ion-fab-button size="small">
              <ion-icon :icon="informationOutline"></ion-icon>
            </ion-fab-button>

          </ion-fab>
          </div>
          
        </ion-card-content>

        <!-- <div style="width: 100%; height: 100%; text-align:end; color: black; background-color:aquamarine;">
            <ion-icon aria-hidden="true"
              :icon="informationOutline"></ion-icon>
            </div>
 -->

      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonIcon, IonFab, IonFabButton } from '@ionic/vue';
import { ellipse, square, triangle, qrCode, barcodeOutline, personOutline, logInOutline, informationOutline, chevronUpCircle } from 'ionicons/icons';

import { ref, onMounted } from 'vue';
import JsBarcode from 'jsbarcode';
import { Storage } from '@ionic/storage';
import { useRouter } from 'vue-router';
import qr from 'qrcode';

const store = new Storage();
let Qr = ref("")

onMounted(async () => {

  /* const codigoCedula = 'hola'; */

  await store.create();
  const datos = await store.get('dato')
  console.log(await store.get('dato'))
  user.value.apellidos = datos.apellidos
  user.value.nombres = datos.nombres
  user.value.cedula = datos.cedula

  let stJson = JSON.stringify(user.value);
  qr.toDataURL(stJson, function (err, code) {
    if (err) return;

    Qr.value = code

  });
});

/* Datos que se guardaran obtenidos con el numero de cedula del login */
const user = ref({
  apellidos: "",
  nombres: "",
  cedula: ""
})

const router = useRouter()

async function Login() {
  console.log('login')
  router.replace({ name: 'Login' })
  await store.clear();
}

async function Info() {
  console.log('info')
  router.push({ name: 'Info' })
  
/*   await store.clear();
 */}

</script>

<style scoped>
ion-button {
  --background: #2A9EF9;
  /* --background-hover: #9ce0be;
  --background-activated: #88f4be;
  --background-focused: #88f4be;  */

}

ion-fab-button {
    --background: white;
    --color: rgb(79, 79, 79);

  }
</style>

