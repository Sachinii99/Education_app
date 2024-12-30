import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useClickCount } from "./components/ClickContext";  

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const { incrementCount } = useClickCount();  

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://en.wikipedia.org/w/api.php",
        {
          params: {
            action: "query",
            format: "json",
            origin: "*",
            list: "search",
            srsearch: "education", 
            srlimit: 10,
          },
        }
      );

      const searchResults = response.data.query.search;

    
      const articlesWithImages = await Promise.all(
        searchResults.map(async (item) => {
          const imageUrl = await fetchArticleImage(item.title);
          return {
            ...item,
            imageUrl,
            status: "Available", 
            description: item.snippet.replace(/(<([^>]+)>)/gi, ""), 
          };
        })
      );

      setArticles(articlesWithImages);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchArticleImage = async (title) => {
    try {
      const response = await axios.get(
        "https://en.wikipedia.org/w/api.php",
        {
          params: {
            action: "query",
            format: "json",
            origin: "*",
            titles: title,
            prop: "pageimages",
            piprop: "original", 
          },
        }
      );

      const pages = response.data.query.pages;
      const page = Object.values(pages)[0];

      return page.original?.source || "https://via.placeholder.com/150";
    } catch (error) {
      console.error("Error fetching image for article:", error);
      return "https://via.placeholder.com/150"; 
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.statusTag}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
       
        <Text style={styles.clickText} onPress={incrementCount}>
          Click to Count
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading articles...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.pageid.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
    backgroundColor: "#D4EBF8",
    // margin:10,
    // marginTop: 20,
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc",
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  statusTag: {
    alignSelf: "flex-start",
    backgroundColor: "#007bff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  clickText: {
    marginTop: 10,
    color: "#007bff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default HomePage;
