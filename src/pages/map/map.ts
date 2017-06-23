import { Component } from '@angular/core';
import { NavController ,Platform ,ModalController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, LatLng } from '@ionic-native/google-maps';
import { Geolocation,Geoposition } from '@ionic-native/geolocation';
import { Toast } from '@ionic-native/toast';
import { ModalMapPage } from '../modal-map/modal-map';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {
    
    map:GoogleMap;
    lat:any;
    lng:any;

    constructor(public navCtrl : NavController,public platfrom : Platform,
                private geolocator : Geolocation,
                private googleMap : GoogleMaps,
                private toast:Toast,
                private modalMap : ModalController
                ) {

    }

    ionViewDidLoad() {
      // validacion
      if(this.platfrom.is('cordova')){
        this.loadInitMap('map');
      }else{

      }
    }

    private loadInitMap(mapEle){
            
      this.map = new GoogleMap(mapEle);

       this.googleMap.isAvailable().then(() => {
         const position = new LatLng(-33,-72);
         this.map.setCenter(position);
         console.log("mapa disponible");
       });
    }

    private movePosition(){
      this.geolocator.getCurrentPosition().then( res => {
        this.lat = res.coords.latitude;
        this.lng = res.coords.longitude;

        const position = new LatLng(this.lat,this.lng);
        this.map.setCenter(position);
        this.map.setZoom(10);
        this.addMarker(position);
       // console.log(res);
      }).catch( err => {
       // console.log(err);
      });
    }

    private addMarker(position:LatLng){
      let markerOptions = {
        position:position
      }
      this.map.addMarker(markerOptions).then(()=>{
        console.log("entroooooooooo");
        this.showToast('Se cargo el marcador');
      }).catch(()=>{
        this.showToast('No se pudo cargar el marcador');
      });
    }

    private showToast(msg){
      this.toast.show(msg,'2000','bottom').subscribe(()=>{
        console.log("cargo");
      });
    }

    private openModal(){
      const myData ={
        name:'javier',
        age:'21'
      }
      let mymodal =this.modalMap.create(ModalMapPage, { data:myData } );
      mymodal.present();
    }
    
}




