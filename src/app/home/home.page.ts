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

  constructor() {}

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
      shadowSize: [41, 41]   // Ukuran shadow
    });

    // Data marker
    const markerData = [
      {
        coords: [-7.789087196129326, 110.36730052822668],
        name: 'Parkiran Abu Bakar Ali',
        address: 'Jl. Abu Bakar Ali No.75, 001, Suryatmajan, Kec. Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55213',
        status: 'TKP',
        vehicleType: 'Mobil & Motor',
        photoUrl: 'https://media.kompas.tv/library/image/content_article/article_img/20230814005132.jpg',
        gmapsLink: 'https://www.google.com/maps/dir/?api=1&destination=-7.789087196129326, 110.36730052822668',
      },
      {
        coords: [-7.786110341391642, 110.36665428673355],
        name: 'Jalan Margo Utomo',
        address: 'Yogyakarta City, Special Region of Yogyakarta',
        status: 'Tepi jalan',
        vehicleType: 'Motor',
        photoUrl: 'https://wartakonstruksi.com/upload/01-2022/jalan-margo-utomo--30-14.jpeg',
        gmapsLink: 'https://www.google.com/maps/dir/?api=1&destination=-7.786110341391642, 110.36665428673355',
      },
      {
        coords: [-7.79639692868479, 110.36820633688082],
        name: 'Jalan Ketandan',
        address: 'Yogyakarta City, Special Region of Yogyakarta',
        status: 'Tepi jalan',
        vehicleType: 'Motor',
        photoUrl: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/krjogja/site/2022/07/28/416025/informasi-minim-lokasi-parkir-ketandan-dioptimalkan-2207282.jpg',
        gmapsLink: 'https://www.google.com/maps/dir/?api=1&destination=-7.79639692868479, 110.36820633688082',
      },
      {
        coords: [-7.793214881161121, 110.36691828426821],
        name: 'Parkir Bsement Malioboro Mall',
        address: 'Mataram St No.31, Suryatmajan, Danurejan, Yogyakarta City, Special Region of Yogyakarta 55213',
        status: 'Dikelola mall',
        vehicleType: 'Mobil & Motor',
        photoUrl: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/18/2023/04/19/parkir_basement_malioboro_mall-3517869020.jpeg',
        gmapsLink: 'https://www.google.com/maps/dir/?api=1&destination=-7.793214881161121, 110.36691828426821',
      },
      {
        coords: [-7.795485856278799, 110.36704968150973],
        name: 'Parkir Mobil Baleworo',
        address: '6938+PVR, Suryatmajan, Danurejan, Yogyakarta City, Special Region of Yogyakarta 55213',
        status: 'TKP',
        vehicleType: 'Mobil & Motor',
        photoUrl: 'https://jogjacagar.jogjaprov.go.id//assets/uploads/files/thumbs/thumb_f15d99d5b231d1498b79d412412efd5c.jpg',
        gmapsLink: 'https://www.google.com/maps/dir/?api=1&destination=-7.793214881161121, 110.36691828426821',
      },
      {
        coords: [-7.797048785657354, 110.36423927981194],
        name: 'Parkir Beskalan',
        address: 'Jl. Beskalan No.28, RW.08, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122',
        status: 'Basement',
        vehicleType: 'Mobil & Motor',
        photoUrl: 'https://tekonsipil.sv.ugm.ac.id/wp-content/uploads/sites/938/2019/08/tkp-beskalan.jpg',
        gmapsLink: 'https://www.google.com/maps/dir/?api=1&destination=-7.797048785657354, 110.36423927981194',
      },
      {
        coords: [-7.801002995296668, 110.36346680384945],
        name: 'Kantong Parkir Malioboro',
        address: '59X7+CCJ, Jl. KH. Ahmad Dahlan, Notoprajan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta',
        status: 'TKP',
        vehicleType: 'Mobil & Motor',
        photoUrl: 'https://img.antaranews.com/cache/1200x800/2012/11/20121121juru-parkir-malioboro.jpg.webphttps://www.astra-daihatsu.id/_next/image?url=https%3A%2F%2Fdsoodysseusstprod.blob.core.windows.net%2Fstrapi-media%2Fassets%2Fsys_master_media_hbc_h52_8822265577502_parkir_20malioboro_20_1_580cd303b5.jpg&w=1920&q=75https://www.astra-daihatsu.id/_next/image?url=https%3A%2F%2Fdsoodysseusstprod.blob.core.windows.net%2Fstrapi-media%2Fassets%2Fsys_master_media_hbc_h52_8822265577502_parkir_20malioboro_20_1_580cd303b5.jpg&w=1920&q=75https://statik.tempo.co/data/2019/05/30/id_845605/845605_720.jpg',
        gmapsLink: 'https://www.google.com/maps/dir/?api=1&destination=-7.801002995296668, 110.36346680384945',
      },
      {
        coords: [-7.7988239327845665, 110.36661788786908],
        name: 'Area Parkir Beringharjo',
        address: 'Ps. Beringharjo, Jalan Pabringan, Taman Parkir TKP 2 Malioboro Selatan, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122',
        status: 'TKP',
        vehicleType: 'Mobil & Motor',
        photoUrl: 'https://jogjacagar.jogjaprov.go.id//assets/uploads/files/thumbs/thumb_0e1e409206c71379dd4f8bd108137151.JPG',
        gmapsLink: 'https://www.google.com/maps/dir/?api=1&destination=-7.7988239327845665, 110.36661788786908',
      }
      // Tambahkan data marker lainnya jika ada
    ];

    // Menambahkan marker dan popup
    markerData.forEach(data => {
      const marker = L.marker(data.coords as L.LatLngExpression, { icon: iconDefault })
        .bindPopup(`
          <b>${data.name}</b><br>
          ${data.address}<br>
          Status: ${data.status}<br>
          Jenis Kendaraan: ${data.vehicleType}<br>
          <a href="${data.gmapsLink}" target="_blank">Lihat di Google Maps</a>
        `)
        .addTo(this.map);
    });

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
