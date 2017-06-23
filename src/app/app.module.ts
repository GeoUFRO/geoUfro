import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage   } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { MapPage     } from '../pages/map/map';
import { TabsPage    } from '../pages/tabs/tabs';
import { LoginPage   } from '../pages/login/login';
import { ModalMapPage   } from '../pages/modal-map/modal-map';

import { StatusBar    } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps   } from '@ionic-native/google-maps';
import { Geolocation  } from '@ionic-native/geolocation';
import { Toast  } from '@ionic-native/toast';
 
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    MapPage,
    TabsPage,
    LoginPage,
    ModalMapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,  
    MapPage,
    TabsPage,
    LoginPage,
    ModalMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
