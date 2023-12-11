<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card style="height: 98%;">
        <ion-card-content>
          <div style="padding-left: 0%; padding-right: 0%; height: 820px;">
            <h1 style="color: black;">Datos de Usuario</h1>
            <div style="padding-top: 26%; text-align: center; justify-content: center;">

              <ion-card style="">
                <ion-card-content>
                  <span v-text="user.apellidos"></span>
                  <hr>
                  <span v-text="user.nombres"></span>
                  <hr>
                  <span v-text="user.cedula"></span>
                  <hr>
                </ion-card-content>
              </ion-card>
              <img :src="`data:image/png;base64,${user.image}`" alt="" style="width: 100%;">
              <!-- <ion-card>
                <ion-card-content>
                  <img :src="`data:image/png;base64,${user.image}`" alt="" style="width: 100%;">
                </ion-card-content>
              </ion-card>
 -->
              <ion-button @click="Login()">Cambiar de usuario</ion-button>

            </div>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonButton } from '@ionic/vue';
import { informationOutline } from 'ionicons/icons';

import { ref, onMounted } from 'vue';
import { Storage } from '@ionic/storage';
import { useRouter } from 'vue-router';

const store = new Storage();

onMounted(async () => {
  await store.create();
  const datos = await store.get('dato')
  user.value.apellidos = datos.apellidos
  user.value.nombres = datos.nombres
  user.value.cedula = datos.cedula
  user.value.image = datos.image
});

/* Datos que se guardaran obtenidos con el numero de cedula del login */
const user = ref({
  apellidos: "",
  nombres: "",
  cedula: "",
  image: ""
})

const router = useRouter()

async function Login() {
  router.replace({ name: 'Login' })
  await store.clear();
}

async function Info() {
  router.push({ name: 'Info' })
}

</script>

<style scoped>
ion-button {
  --background: #2A9EF9;
}

ion-fab-button {
  --background: white;
  --color: rgb(79, 79, 79);

}
</style>

