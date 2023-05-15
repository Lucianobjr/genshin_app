import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

export function List({ data }) {
  const genshindb = require("genshin-db");

  const navigation = useNavigation();

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    function getCharacter() {
      const response = genshindb.characters(`${data}`);
      setCharacters(response);
    }

    getCharacter();
  }, []);

  function getElement() {
    if (genshindb.characters(`${data}`).element === "Pyro") {
      return "https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg/revision/latest/scale-to-width-down/350?cb=20220119211527";
    } else if (genshindb.characters(`${data}`).element === "Dendro") {
      return "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg/revision/latest/scale-to-width-down/350?cb=20220119211226";
    } else if (genshindb.characters(`${data}`).element === "Geo") {
      return "https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg/revision/latest/scale-to-width-down/350?cb=20220119211105";
    } else if (genshindb.characters(`${data}`).element === "Electro") {
      return "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg/revision/latest/scale-to-width-down/350?cb=20220119211156";
    } else if (genshindb.characters(`${data}`).element === "Anemo") {
      return "https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg/revision/latest/scale-to-width-down/350?cb=20220119211128";
    } else if (genshindb.characters(`${data}`).element === "Hydro") {
      return "https://static.wikia.nocookie.net/gensin-impact/images/8/80/Element_Hydro.svg/revision/latest/scale-to-width-down/350?cb=20220119211435";
    } else if (genshindb.characters(`${data}`).element === "Cryo") {
      return "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg/revision/latest/scale-to-width-down/350?cb=20220119211508";
    } else {
      return "https://genshin.honeyhunterworld.com/img/icons/element/none_35.webp?x70590";
    }
  }

  function handleNavigate() {
    navigation.navigate("Details", { data: genshindb.characters(`${data}`) });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.containerCard}>
        <Image
          source={{ uri: `${genshindb.characters(`${data}`).images.icon}` }}
          style={styles.card}
        />
        <Text style={styles.text}>{characters.name}</Text>
        <Image source={{ uri: getElement() }} style={styles.element} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#9E7658",
    width: "100%",
    height: 200,
    borderRadius: 14,
  },
  containerCard: {
    width: "85%",
    margin: 10,
  },
  text: {
    position: "absolute",
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    borderBottomRightRadius: 24,
    borderTopRightRadius: 6,
    paddingLeft: 10,
    paddingRight: 14,
    padding: 4,
    bottom: 0,
    fontSize: 16,
  },
  element: {
    position: "absolute",
    right: 0,
    width: 50,
    height: 50,
    borderColor: "#fff",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 30,
  },
});
