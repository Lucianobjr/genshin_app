import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";

import { List } from "../../components/list";

import { Ionicons } from "@expo/vector-icons";

export default function Caracters() {
  const [data, setData] = useState([]);

  const genshindb = require("genshin-db");

  useEffect(() => {
    function getCharacters() {
      const response = genshindb.characters("names", { matchCategories: true });
      setData(response);
    }

    getCharacters();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 130 }}>
        <View style={styles.search}>
          <TextInput
            placeholder="Digite o nome do seu Heroi..."
            style={styles.textInput}
          />
          <TouchableOpacity>
            <Ionicons name="search-circle" size={38} color="#000" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => <List data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginTop: 25,
  },
  search: {
    backgroundColor: "#FFF3CC",
    width: "90%",
    borderRadius: 24,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ECECEC",
    paddingLeft: 8,
    paddingRight: 8,
    marginStart: 14,
    marginEnd: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    width: "90%",
    maxWidth: "90%",
    height: 50,
    color: "#000",
  },
});
