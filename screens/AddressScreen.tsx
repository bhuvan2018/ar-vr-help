import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddressScreen({ navigation }: { navigation: any }) {
  const [addresses] = useState([
    {
      id: '1',
      name: 'John Doe',
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      phone: '(555) 123-4567',
      isDefault: true,
    }
  ]);

  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shipping Address</Text>
      </View>

      <ScrollView style={styles.content}>
        {addresses.map((address) => (
          <TouchableOpacity
            key={address.id}
            style={[
              styles.addressCard,
              selectedAddress === address.id && styles.selectedCard
            ]}
            onPress={() => setSelectedAddress(address.id)}
          >
            <View style={styles.addressHeader}>
              <Text style={styles.addressName}>{address.name}</Text>
              {address.isDefault && (
                <View style={styles.defaultBadge}>
                  <Text style={styles.defaultText}>Default</Text>
                </View>
              )}
            </View>
            <Text style={styles.addressText}>{address.street}</Text>
            <Text style={styles.addressText}>{`${address.city}, ${address.state} ${address.zip}`}</Text>
            <Text style={styles.addressText}>{address.phone}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.addAddressButton}>
          <MaterialCommunityIcons name="plus" size={24} color="#2E7D32" />
          <Text style={styles.addAddressText}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('Payment')}
        >
          <LinearGradient
            colors={['#43A047', '#2E7D32']}
            style={styles.continueGradient}
          >
            <Text style={styles.continueText}>Continue to Payment</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  addressCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  selectedCard: {
    borderColor: '#2E7D32',
    backgroundColor: '#E8F5E9',
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  defaultBadge: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  defaultText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2E7D32',
    borderStyle: 'dashed',
  },
  addAddressText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  continueButton: {
    width: '100%',
  },
  continueGradient: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});