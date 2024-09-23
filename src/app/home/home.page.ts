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
    this.map = L.map('mapId').setView([35.76943, -580081], 13);

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
    const marker = L.marker([35.76943, -580081], { icon: iconDefault }).addTo(this.map);

    // Opsional: Menambahkan popup pada marker
    marker.bindPopup('<b>Hello!</b><br>This is your marker.').openPopup();
  }

  // Fungsi untuk mengubah basemap
  changeBasemap(event: any) {
    const selectedBasemap = event.detail.value;

    // Hapus layer saat ini
    this.map.removeLayer(this.currentLayer);

    // Pilihan basemap berdasarkan input dari pengguna
    switch (selectedBasemap) {
      case 'osm':
        this.currentLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        break;
      case 'topo-vector':
        this.currentLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
        });
        break;
      case 'streets-vector':
        this.currentLayer = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        });
        break;
      case 'satellite':
        this.currentLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        });
        break;
      case 'dark-gray':
        this.currentLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; Stadia Maps, &copy; OpenMapTiles &copy; OpenStreetMap contributors'
        });
        break;
      case 'oceans':
        this.currentLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri &mdash; Source: GEBCO, NOAA, National Geographic, DeLorme, NAVTEQ, and other contributors'
        });
        break;
      default:
        this.currentLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        break;
    }

    // Menambahkan basemap baru ke peta
    this.currentLayer.addTo(this.map);
  }

}
