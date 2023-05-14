import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

export default function Details() {
  const genshindb = require("genshin-db");

  const route = useRoute();
  const navigation = useNavigation();

  function getElement() {
    if (genshindb.characters(`${route.params?.data.name}`).element === "Pyro") {
      return "https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg/revision/latest/scale-to-width-down/350?cb=20220119211527";
    } else if (
      genshindb.characters(`${route.params?.data.name}`).element === "Dendro"
    ) {
      return "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg/revision/latest/scale-to-width-down/350?cb=20220119211226";
    } else if (
      genshindb.characters(`${route.params?.data.name}`).element === "Geo"
    ) {
      return "https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg/revision/latest/scale-to-width-down/350?cb=20220119211105";
    } else if (
      genshindb.characters(`${route.params?.data.name}`).element === "Electro"
    ) {
      return "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg/revision/latest/scale-to-width-down/350?cb=20220119211156";
    } else if (
      genshindb.characters(`${route.params?.data.name}`).element === "Anemo"
    ) {
      return "https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg/revision/latest/scale-to-width-down/350?cb=20220119211128";
    } else if (
      genshindb.characters(`${route.params?.data.name}`).element === "Hydro"
    ) {
      return "https://static.wikia.nocookie.net/gensin-impact/images/8/80/Element_Hydro.svg/revision/latest/scale-to-width-down/350?cb=20220119211435";
    } else if (
      genshindb.characters(`${route.params?.data.name}`).element === "Cryo"
    ) {
      return "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg/revision/latest/scale-to-width-down/350?cb=20220119211508";
    } else {
      return "https://genshin.honeyhunterworld.com/img/icons/element/none_35.webp?x70590";
    }
  }

  function handleBack() {
    navigation.navigate("Caracters");
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.buttomBack} onPress={handleBack}>
        <Ionicons name="arrow-back" size={28} color="#FFF3CC" />
        <Text style={styles.textBack}>Character details</Text>
      </TouchableOpacity>

      <View style={styles.containerCover}>
        <Image
          source={{
            uri: genshindb.characters(`${route.params?.data.name}`).images
              .cover1,
          }}
          style={styles.cover}
        />

        <View style={styles.containerText}>
          <Text style={styles.title}>Name</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>
              {genshindb.characters(`${route.params?.data.name}`).name}
            </Text>
            <Image source={{ uri: getElement() }} style={styles.img} />
          </View>
          <Text style={styles.title}>Weapon Type</Text>
          <Text style={styles.text}>
            {genshindb.characters(`${route.params?.data.name}`).weapontype}
          </Text>
          <Text style={styles.title}>Region</Text>
          <Text style={styles.text}>
            {genshindb.characters(`${route.params?.data.name}`).region}
          </Text>
          <Text style={styles.title}>title</Text>
          <Text style={styles.text}>
            {genshindb.characters(`${route.params?.data.name}`).title}
          </Text>
          <Text style={styles.title}>Constellation</Text>
          <Text style={styles.text}>
            {genshindb.characters(`${route.params?.data.name}`).constellation}
          </Text>
        </View>
      </View>

      <View style={styles.containerDescription}>
        <Text style={styles.titleDescription}>Description</Text>
        <Text style={styles.textDescription}>
          {genshindb.characters(`${route.params?.data.name}`).description}
        </Text>

        <View style={styles.boxDescription}>
          <Text style={styles.biodata}>Rarity</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.textDescription}>
              {genshindb.characters(`${route.params?.data.name}`).rarity}
            </Text>
            <Ionicons
              name="star"
              size={24}
              color="yellow"
              style={styles.star}
            />
          </View>
        </View>

        <View style={styles.boxDescription}>
          <Text style={styles.biodata}>Gender</Text>
          <Text style={styles.textDescription}>
            {genshindb.characters(`${route.params?.data.name}`).gender}
          </Text>
        </View>

        <View style={styles.boxDescription}>
          <Text style={styles.biodata}>Birthday</Text>
          <Text style={styles.textDescription}>
            {genshindb.characters(`${route.params?.data.name}`).birthday}
          </Text>
        </View>

        <View style={styles.boxDescription}>
          <Text style={styles.biodata}>Bonus Ascension</Text>
          <Text style={styles.textDescription}>
            {genshindb.characters(`${route.params?.data.name}`).substat}
          </Text>
        </View>

        <View style={styles.boxDescription}>
          <Text style={styles.biodata}>Affiliation</Text>
          <Text style={styles.textDescription}>
            {genshindb.characters(`${route.params?.data.name}`).affiliation}
          </Text>
        </View>

        <Text style={[{ marginBottom: 10 }, styles.titleDescription]}>
          Voice Actor
        </Text>

        <View style={styles.boxDescription}>
          <Text style={styles.biodata}>Japanese VA</Text>
          <Text style={styles.textDescription}>
            {genshindb.characters(`${route.params?.data.name}`).cv.japanese}
          </Text>
        </View>

        <View style={styles.boxDescription}>
          <Text style={styles.biodata}>English VA</Text>
          <Text style={styles.textDescription}>
            {genshindb.characters(`${route.params?.data.name}`).cv.english}
          </Text>
        </View>

        <View style={styles.boxDescription}>
          <Text style={styles.biodata}>Chinese VA</Text>
          <Text style={styles.textDescription}>
            {genshindb.characters(`${route.params?.data.name}`).cv.chinese}
          </Text>
        </View>

        <View style={styles.boxDescription}>
          <Text style={styles.biodata}>Korean VA</Text>
          <Text style={styles.textDescription}>
            {genshindb.characters(`${route.params?.data.name}`).cv.korean}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    marginTop: 24,
  },
  cover: {
    width: "100%",
    height: 270,
    backgroundColor: "#FFF3CC",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  containerCover: {
    marginTop: 10,
  },
  title: {
    fontWeight: "500",
    textShadowColor: "#9E7658",
    textShadowOffset: {
      width: 1,
      height: 2,
    },
    textShadowRadius: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    textShadowColor: "#9E7658",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 9,
  },
  containerText: {
    position: "absolute",
    marginTop: 10,
    marginStart: 8,
    marginEnd: 14,
    borderRadius: 14,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  img: {
    width: 40,
    height: 40,
    marginTop: -10,
    marginLeft: 5,
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 20,
  },
  star: {
    paddingLeft: 2,
    top: -5,
  },
  containerDescription: {
    top: -14,
    width: "95%",
    height: "100%",
    backgroundColor: "#9E7658",
    marginStart: 10,
    marginEnd: 10,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    padding: 14,
    marginBottom: 30,
  },
  buttomBack: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 15,
    marginTop: 10,
  },
  textBack: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#FFF3CC",
  },
  titleDescription: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textDescription: {
    fontSize: 16,
    color: "#FFF3CC",
    paddingLeft: 10,
    marginBottom: 10,
  },
  boxDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  biodata: {
    fontWeight: "500",
    fontSize: 16,
  },
});
