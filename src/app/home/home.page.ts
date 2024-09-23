import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  currentLayer!: L.TileLayer;

  constructor() { }

  ngOnInit() {}

  ionViewDidEnter() {
    // Inisialisasi peta dengan basemap default (OpenStreetMap)
    this.map = L.map('mapId').setView([-7.770299599999986, 110.37790381342562], 15);

    // Basemap default OpenStreetMap
    this.currentLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Mengatur custom icon
    const iconDefault = L.icon({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],  // Ukuran icon
      iconAnchor: [12, 41], // Anchor icon
      popupAnchor: [1, -34], // Posisi popup terhadap icon
      shadowSize: [41, 41] // Ukuran shadow
    });

    // Menambahkan marker di koordinat tertentu dengan custom icon
    const marker = L.marker([-7.770299599999986, 110.37790381342562], { icon: iconDefault }).addTo(this.map);

    // Opsional: Menambahkan popup pada marker
    marker.bindPopup('<b>Marker!</b><br>Ini penanda titik peta.').openPopup();

    // Mendeklarasikan layer basemap di sini
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    });

    const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
    });

    const stamen = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
      maxZoom: 19,
    });

    // Menambahkan dua basemap baru
    const googleSatellite = L.tileLayer('https://mt1.google.com/vt/lyrs=s@176&r=0&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      attribution: '© Google'
    });

    const esriSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 20,
      attribution: 'Tiles &copy; Esri'
    });

    // Membuat objek basemap
    const baseMaps = {
      "OpenStreetMap": osm,
      "OpenStreetMap.HOT": osmHOT,
      "Stamen Toner": stamen,
      "Google Satellite": googleSatellite,
      "Esri Satellite": esriSatellite,
    };

    // Menambahkan kontrol layer ke peta
    L.control.layers(baseMaps).addTo(this.map);
  }
}
