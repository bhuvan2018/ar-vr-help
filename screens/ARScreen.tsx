import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ARScreen({ navigation, route }: { 
  navigation: any,
  route: { params?: { product?: any } }
}) {
  const handleOpenAR = () => {
    const sketchfabUrl = 'https://sketchfab.com/models/c226b9e0cace4a20bf017b7061ada18d/embed?autostart=1&ui_ar=1&ui_inspector=0&ui_help=0&ui_settings=0&ui_annotations=0&transparent=1';
    Linking.openURL(sketchfabUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}
        >
          <MaterialCommunityIcons name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View in AR</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          View {route.params?.product?.name} in AR
        </Text>
        <Text style={styles.instruction}>
          Click below to open the AR viewer in your browser
        </Text>
        <TouchableOpacity 
          style={styles.arButton}
          onPress={handleOpenAR}
        >
          <MaterialCommunityIcons name="augmented-reality" size={24} color="#fff" />
          <Text style={styles.arButtonText}>Open AR View</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  closeButton: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  instruction: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  arButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E7D32',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  arButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});