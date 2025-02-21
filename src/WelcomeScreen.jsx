import {
    View, Text, SafeAreaView, FlatList, StyleSheet, Alert,
    TouchableOpacity
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import axios from 'axios';
  import { useNavigation } from '@react-navigation/native';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  
  const WelcomeScreen = () => {
    const [empData, setEmpData] = useState([]);
    const [error, setError] = useState(null);
    const navigation = useNavigation();
  
    // Fetch Data with Token Validation
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("accessToken");
        console.log("Retrieved Token:", token);
  
        if (!token) {
          alert("No token found, please log in again.");
          handleLogout();
          return;
        }
  
        const response = await axios.get("http://192.168.1.67:8080/emp/fetchLeads", {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        console.log("Response Data:", response?.data?.data);
  
        if (!response.data || !response.data.data) {
          throw new Error("Invalid response format: Missing 'data' key");
        }
  
        setEmpData(response.data.data);
      } catch (err) {
        console.log('Error fetching employee data:', err);
        if (err.response?.status === 401) {
          Alert.alert("Session Expired", "Your session has expired. Please log in again.");
          handleLogout();
        } else {
          setError(err.message);
        }
      }
    };
  
    // Logout Function
    const handleLogout = async () => {
      try {
        await AsyncStorage.removeItem("accessToken");
        console.log("Token removed. Logging out...");
        Alert.alert("Logged out", "You have been logged out successfully.");
        navigation.navigate('login');
      } catch (error) {
        console.error("Error clearing storage:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    useEffect(() => {
      console.log("Updated Employee Data:", empData);
    }, [empData]);
  
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.bar_icon} onPress={() => navigation.navigate("sidebar", { handleLogout })}>
          <FontAwesome name="bars" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Clients Details</Text>
  
        {error ? (
          <Text style={styles.errorText}>❌ Error: {error}</Text>
        ) : empData.length > 0 ? (
          <FlatList
            data={empData}
            keyExtractor={(item) => item._id || Math.random().toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={() => navigation.navigate("clientDetails")}>
                <Text style={styles.cardTitle}>
                  {item.fieldEmpID?.name || "No Name"}
                </Text>
                <Text style={styles.cardText}>
                  📍 <Text style={styles.boldText}>City:</Text> {item.fieldEmpID?.city || "No City"}
                </Text>
                <Text style={styles.cardText}>
                  📞 <Text style={styles.boldText}>Mobile:</Text> {item.fieldEmpID?.mobile || "No Mobile"}
                </Text>
                <Text style={styles.cardText}>
                  🌍 <Text style={styles.boldText}>Source:</Text> {item.clientID?.source || "No Source"}
                </Text>
  
                <View style={[styles.badge, item.fieldEmpID ? styles.assigned : styles.notAssigned]}>
                  <Text style={styles.badgeText}>
                    {item.fieldEmpID ? `Assigned: ${item.fieldEmpID._id}` : "Not Assigned"}
                  </Text>
                </View>
  
                <Text style={styles.cardText}>
                  📅 <Text style={styles.boldText}>Visiting Date:</Text> {formatDate(item.createAt)}
                </Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={styles.noDataContainer}>
            <Text style={styles.loadingText}>No employee records available.</Text>
            <TouchableOpacity title="Retry" onPress={fetchData} />
          </View>
        )}
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#F8F9FA",
    },
    bar_icon: {
      textAlign: 'center'
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
      marginBottom: 20,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    errorText: {
      color: "red",
      fontSize: 16,
      textAlign: "center",
    },
    loadingText: {
      fontSize: 18,
      textAlign: "center",
      marginTop: 20,
      color: "#555",
    },
    noDataContainer: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    card: {
      backgroundColor: "white",
      padding: 15,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 5,
      elevation: 5,
      marginBottom: 15,
      borderLeftWidth: 5,
      borderLeftColor: "#007BFF",
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#007BFF",
      marginBottom: 8,
    },
    cardText: {
      fontSize: 16,
      color: "#555",
      marginTop: 2,
    },
    boldText: {
      fontWeight: "bold",
      color: "#333",
    },
    badge: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 8,
      alignSelf: "flex-start",
      marginTop: 10,
    },
    assigned: {
      backgroundColor: "#28A745",
    },
    notAssigned: {
      backgroundColor: "#6C757D",
    },
    badgeText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 14,
    },
  });
  
  export default WelcomeScreen;
  