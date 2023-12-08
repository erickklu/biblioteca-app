<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
        <ion-title>Codigo QR</ion-title>
      </ion-toolbar> -->
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card style="height: 98%;">
        <ion-card-content>
          <div style="padding: 1% 10% 10% 5%;">
            <h1 style="color: black;">Codigo Qr</h1>
          </div>
          <div style="padding-top: 20%; text-align: center; justify-content: center;">

            <ion-card>
              <ion-card-content>
                <img :src="Qr" alt="" style="height: 200px;">
              </ion-card-content>
            </ion-card>

          </div>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { Plugins } from '@capacitor/core';
import qr from 'qrcode';
import { ref } from 'vue';

/* Generar codigo QR con qrcode */
let data = {
  name: "hola"

};

let stJson = JSON.stringify(data);
let Qr = ref()
qr.toDataURL(stJson, function (err, code) {
  if (err) return console.log("todoposi");
  console.log(code);
  Qr.value = code

});
</script>
