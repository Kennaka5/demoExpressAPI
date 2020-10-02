import { IonActionSheet, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { caretForwardCircle, close, heart, share, trash } from 'ionicons/icons';
import React, { useState } from 'react';


const Tab4: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton onClick={() => setShowActionSheet(true)} expand="block">
          Show Action Sheet
      </IonButton>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          cssClass='my-custom-class'
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              console.log('Delete clicked');
            }
          }, {
            text: 'Share',
            icon: share,
            handler: () => {
              console.log('Share clicked');
            }
          }, {
            text: 'Play (open modal)',
            icon: caretForwardCircle,
            handler: () => {
              console.log('Play clicked');
            }
          }, {
            text: 'Favorite',
            icon: heart,
            handler: () => {
              console.log('Favorite clicked');
            }
          }, {
            text: 'Cancel',
            icon: close,
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]}
        >
        </IonActionSheet>
      </IonContent>
  );
    </IonPage>
  );
};

export default Tab4;
