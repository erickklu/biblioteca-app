<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Acerca de</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-card style="height: 98%;">
                <ion-card-content>
                    <div style="padding: 1% 10% 10% 5%;">
                    </div>
                    <div style="padding-top: 20%; text-align: center; justify-content: center;">

                        <ion-card>
                            <ion-card-content>
                                <p>Version: 1.2.0</p>
                                <p>Derrollado en DTI-PUCESD por Erick Trejo, Juan Triviño y Jonathan Moreno</p>
                            </ion-card-content>
                        </ion-card>

                    </div>
                </ion-card-content>
            </ion-card>

        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButtons, IonBackButton, IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';


const router = useRouter()

async function Menu() {
    router.back()

}

</script>
  