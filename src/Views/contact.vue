<template>
  <div>
    <Header title="Contact us" />
    <v-container>
      <v-row>
        <v-col class="hidden-md-and-down">
          <l-map
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              style="height: 100%"
              @update:center="centerUpdate"
              @update:zoom="zoomUpdate"
          >
            <l-tile-layer
                :url="url"
            />
            <l-marker :lat-lng="ratul">
              <l-tooltip :options="{ permanent: true}">
                <div>This is where Ratul lives :P</div>
              </l-tooltip>
            </l-marker>
            <l-marker :lat-lng="ronit">
              <l-tooltip :options="{ permanent: true}">
                <div>This is where Ronit lives :o</div>
              </l-tooltip>
            </l-marker>
            <l-marker :lat-lng="aron">
              <l-tooltip :options="{ permanent: true }">
                <div>This is where Aron lives :))</div>
              </l-tooltip>
            </l-marker>
          </l-map>
        </v-col>
        <v-col>
          <v-row v-for="support in supports" :key="support.name">
            <v-col>
              <v-card class="pa-2 flex-column">
                <v-icon class="float-right ma-5" x-large>{{ support.icon }}</v-icon>
                <v-card-title>{{ support.name }}</v-card-title>
                <v-card-subtitle>{{ support.description }}</v-card-subtitle>
                <v-divider />
                <v-card-text>{{ support.content }}</v-card-text>
                <v-card-actions>
                  <v-btn block color="red" :href="support.link">Proceed</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { latLng } from "leaflet";
export default {
  name: "contact",
  components: { Header },
  data: () => ({
    supports: [
      {
        name: "Discord",
        description:
          "Discord for any discussion, ANY programming related topics.",
        link: "https://discord.gg/GR2qNVXVNn",
        icon: "mdi-discord"
      },
      {
        name: "Administration",
        description: "Got any administration problems/questions?",
        link: "mailto:romeah@blazify.rocks",
        icon: "mdi-account"
      },
      {
        name: "Mail",
        description: "For any non-administration problems/questions",
        link: "mailto:contact@blazify.rocks",
        icon: "mdi-email"
      }
    ],
    zoom: 1,
    center: latLng(47.41322, -1.219482),
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    withPopup: latLng(47.41322, -1.219482),
    aron: latLng(58.3897415, 13.8462427),
    ratul: latLng(22.565654,88.3654219),
    ronit: latLng(24.0936069,88.2589225),
    currentZoom: 11.5,
    currentCenter: latLng(47.4731341, 54.456323),
    showParagraph: false,
    mapOptions: {
      zoomSnap: 0.3
    },
    showMap: true
  }),
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  }

};
</script>

<style>
.leaflet-bottom.leaflet-right {
  visibility: hidden;
}
</style>
