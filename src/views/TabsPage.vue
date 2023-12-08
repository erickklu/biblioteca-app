<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="personOutline" />
          <ion-label>Usuario</ion-label>
        </ion-tab-button>

        <!-- <ion-tab-button tab="tab2">
          <ion-icon aria-hidden="true" :icon="logOutOutline" />
          <ion-label>Cerrar Sesion</ion-label>
        </ion-tab-button> -->
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, qrCode, barcodeOutline, personOutline, logOutOutline } from 'ionicons/icons';

</script>

        <!-- <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="qrCode" />
          <ion-label>Código QR</ion-label>
        </ion-tab-button> -->