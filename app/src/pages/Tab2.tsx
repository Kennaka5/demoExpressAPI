import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid,  IonRow, IonCol} from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
      <IonGrid fixed>
      <IonRow>
          <IonCol>
          <IonButton size="small" >Default</IonButton>
          </IonCol>
          <IonCol>
          <IonButton size="small" color="secondary">Secondary</IonButton>
          </IonCol>
          <IonCol>
          <IonButton size="small" color="tertiary">Tertiary</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
          <IonButton size="default" color="success">Success</IonButton>
          </IonCol>
          <IonCol>
          <IonButton size="default" color="warning">Warning</IonButton>
          </IonCol>
          <IonCol>
          <IonButton size="default" color="danger">Danger</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
          <IonButton size="large" color="light">Light</IonButton>
          </IonCol>
          <IonCol>
          <IonButton size="large" color="medium">Medium</IonButton>
          </IonCol>
          <IonCol>
          <IonButton size="large" color="dark">Dark</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
           <IonButton expand="block">A block button</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
           <IonButton expand="full" color="secondary">Full Width Button button</IonButton>
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
