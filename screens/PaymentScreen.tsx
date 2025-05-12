import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PaymentScreen({ navigation }: { navigation: any }) {
  const [selectedMethod, setSelectedMethod] = useState('card1');

  const paymentMethods = [
    {
      id: 'card1',
      type: 'visa',
      last4: '4242',
      expiry: '12/24',
      isDefault: true,
    },
    {
      id: 'card2',
      type: 'mastercard',
      last4: '8888',
      expiry: '06/25',
      isDefault: false,
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
      </View>

      <ScrollView style={styles.content}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentCard,
              selectedMethod === method.id && styles.selectedCard
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <View style={styles.paymentInfo}>
              <MaterialCommunityIcons
                name={method.type === 'visa' ? 'credit-card' : 'credit-card-outline'}
                size={32}
                color="#2E7D32"
              />
              <View style={styles.cardDetails}>
                <Text style={styles.cardType}>
                  {method.type.charAt(0).toUpperCase() + method.type.slice(1)}
                </Text>
                <Text style={styles.cardNumber}>•••• {method.last4}</Text>
                <Text style={styles.cardExpiry}>Expires {method.expiry}</Text>
              </View>
              {method.isDefault && (
                <View style={styles.defaultBadge}>
                  <Text style={styles.defaultText}>Default</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.addPaymentButton}>
          <MaterialCommunityIcons name="plus" size={24} color="#2E7D32" />
          <Text style={styles.addPaymentText}>Add New Payment Method</Text>
        </TouchableOpacity>

        <View style={styles.orderSummary}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>$299.99</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={styles.summaryValue}>$0.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryValue}>$24.00</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$323.99</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.placeOrderButton}>
          <LinearGradient
            colors={['#43A047', '#2E7D32']}
            style={styles.placeOrderGradient}
          >
            <Text style={styles.placeOrderText}>Place Order</Text>
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
  paymentCard: {
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
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDetails: {
    marginLeft: 16,
    flex: 1,
  },
  cardType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardNumber: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cardExpiry: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
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
  addPaymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2E7D32',
    borderStyle: 'dashed',
    marginBottom: 24,
  },
  addPaymentText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  orderSummary: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    color: '#333',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  placeOrderButton: {
    width: '100%',
  },
  placeOrderGradient: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});