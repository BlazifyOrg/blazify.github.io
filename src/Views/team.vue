<template>
  <div>
    <Header title="Team" />
    <v-container fill-height>
      <v-row>
        <v-col
          v-for="member in members"
          :key="member.title"
          class="d-flex justify-center"
        >
          <v-dialog
            transition="dialog-bottom-transition"
            max-width="600"
            v-model="member.dialog"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card height="650" width="400" class="pa-2 flex-column">
                <v-img :src="member.image" height="400" />
                <v-card-title>{{ member.name }}</v-card-title>
                <v-card-subtitle>{{ member.description }}</v-card-subtitle>
                <v-divider />
                <v-card-text>{{ member.content }}</v-card-text>
                <v-card-actions>
                  <v-btn
                    color="red"
                    style="position: relative;bottom: 1px;padding-left: 20%;padding-right: 20%; left: 25%;"
                    v-bind="attrs"
                    v-on="on"
                    >More</v-btn
                  >
                </v-card-actions>
              </v-card>
            </template>
            <v-card>
              <v-toolbar color="primary" flat>{{ member.name }}</v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-6">About</div>
                <p class="font-weight-light text-center font-italic">"{{member.long}}"
                </p>
                <v-chip-group column>
                  <v-chip
                    v-for="role in member.roles"
                    :key="role + member.name"
                    >{{ role }}</v-chip
                  >
                </v-chip-group>
                <v-divider />
                <v-chip-group column>
                  <v-chip
                    link
                    v-for="social in member.socials"
                    :key="social.name + member.name"
                    :href="social.link"
                    large
                    ><v-icon :alt="social.name" large>{{
                      social.icon
                    }}</v-icon></v-chip
                  >
                </v-chip-group>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="member.dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "team",
  components: { Header },
  data: () => ({
    members: [
      {
        name: "Ronit Rahaman",
        description: "Founder & Owner",
        dialog: false,
        image:
          "https://cdn.discordapp.com/attachments/713410105928056856/835597895696121866/IMG-20210111-WA0056.jpg",
        long: "Hi, I'm Ronit \"RoMeAh\" Rahaman, a passionate self-taught backend and systems developer from West Bengal, India. Current Project I'm actively working on is Blazescript. Not to be mentioned I'm trash at front end... frowning_face",
        content:
          'Hi, I\'m Ronit "RoMeAh" Rahaman, a passionate self-taught backend developer from West Bengal, India.',
        socials: [
          {
            name: "Github",
            icon: "mdi-github",
            link: "https://github.com/RoMeAh"
          }
        ],
        roles: [
          "Rust",
          "Typescript",
          "Javascript",
          "Kotlin",
          "NodeJS",
          "Deno",
          "Python",
          "Crystal",
          "Ruby",
          "Java",
          "C++"
        ]
      },
      {
        name: "Aron Kylebäck",
        description: "Owner & Developer",
        image:
          "https://cdn.discordapp.com/attachments/713410105928056856/835846448939270144/image0.jpg",
        content:
          "Hi there, I am Aron! I am a fullstack web developer and enjoy anything from electronics to animals :)",
        dialog: false,
        long: "Borned and raised in the small Swedish town \"Skövde\" I got introduced to coding in 6th grade and fell in love with it. Two years later at the age of 14 I landed my first Fullstack Consult Job at MMR Solutions where I am currently working :)",
        socials: [
          {
            name: "Github",
            icon: "mdi-github",
            link: "https://github.com/Collbrothers"
          },
          {
            name: "Instagram",
            icon: "mdi-instagram",
            link: "https://www.instagram.com/collbrothers/"
          }
        ],
        roles: [
          "TypeScript",
          "JavaScript",
          "Fullstack",
          "NodeJS",
          "C#",
          "C++",
          "Python",
          "R"
        ]
      },
      {
        name: "Ratul Saha",
        long: "I am a full-stack self-taught web developer from India. I am 17 years old and till date I have worked on various projects to build my knowledge and experience. Currently, I am looking for internships to further develop my skill-set and experience!",
        description: "Owner & Developer",
        image:
          "https://cdn.discordapp.com/attachments/693495170380857446/835847273098510336/53178362.png",
        dialog: false,
        content:
          "I love designing minimal and simple yet classy apps and websites. "
      }
    ]
  })
};
</script>

<style scoped></style>
