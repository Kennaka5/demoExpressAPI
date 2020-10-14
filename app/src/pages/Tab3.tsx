import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonHeader>
            Recent Conversations
        </IonHeader>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar/avatar-finn.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-han.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Han</h2>
              <h3>Look, kid...</h3>
              <p>I've got enough on my plate as it is, and I...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-rey.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Rey</h2>
              <h3>I can handle myself</h3>
              <p>You will remove these restraints and leave...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-luke.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Luke</h2>
              <h3>Your thoughts betray you</h3>
              <p>I feel the good in you, the conflict...</p>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonHeader>
            Online
        </IonHeader>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-poe.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Poe</h2>
              <h3>New Ride</h3>
              <p>I just upgraded my X-Wing. Next time...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-ben.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Ben</h2>
              <h3>Move Along</h3>
              <p>These aren't the droids you're looking for...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-leia.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Leia</h2>
              <h3>You're My Only Hope</h3>
              <p>I've placed information vital to the survival...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-yoda.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Yoda</h2>
              <h3>Size matters not</h3>
              <p>Do or do not. There is no try...</p>
            </IonLabel>
          </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
