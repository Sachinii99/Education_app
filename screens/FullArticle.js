import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const FullArticle = ({ route }) => {
  const { article } = route.params; 

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.snippet}>{article.snippet}</Text>
      <Text style={styles.content}>Full article content will be displayed here...</Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  snippet: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  content: {
    fontSize: 14,
    color: '#333',
  },
});

export default FullArticle;
