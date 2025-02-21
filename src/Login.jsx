import {
    View, Text, StyleSheet, SafeAreaView, Image, TextInput,
    TouchableOpacity, ScrollView,
    Alert
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('');
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();

    const handleLogin = async () => {
        if (!email || !password || !department) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            const sendRequest = await axios.post(`http://192.168.1.67:8080/auth/login`, {
                email, password, department
            });

            const response = sendRequest.data;
            console.log('Login response:', response);

            if (response.success && response.accessToken) {
                await AsyncStorage.setItem('accessToken', response.accessToken);
                const storedToken = await AsyncStorage.getItem('accessToken');
                console.log('Stored Token:', storedToken);
                Alert.alert('Login Successful');
                navigation.navigate('welcome');
            } else {
                Alert.alert('Login Failed', response.message || 'Invalid credentials');
            }
        } catch (error) {
            console.log('Login error:', error);
            Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.logo_part}>
                    <View style={styles.logo_circle}>
                        <Text style={styles.logo_text}>G</Text>
                    </View>
                    <Text style={styles.heading_title}>CRM</Text>
                </View>

                <Text style={styles.subtitle}>
                    <Text style={styles.highlight}>Login</Text> in. To see it in action.
                </Text>

                <View style={styles.form}>
                    <Text style={styles.label}>Employee Id</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Employee Id"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor='gray'
                    />

                    <Text style={styles.label}>Department</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Employee_Id"
                        value={department}
                        onChangeText={setDepartment}
                        placeholderTextColor='gray'
                    />

                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={[styles.input, styles.passwordInput]}
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor="gray"
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.showPasswordButton}
                        >
                            <Icon
                                name={showPassword ? "eye-off" : "eye"}
                                size={20}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleLogin}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setChecked(!checked)}
                    >
                        <FontAwesome
                            name={checked ? "check-square" : "square-o"}
                            size={20}
                            color="black"
                        />
                        <Text style={styles.rememberText}> Remember me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forget password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line_text}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>Or Login With</Text>
                    <View style={styles.line} />
                </View>

                <View style={styles.socialIcons}>
                    <TouchableOpacity style={styles.icon_container}>
                        <Image
                            style={styles.icon}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png' }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon_container}>
                        <Image
                            style={styles.icon}
                            source={{ uri: 'https://vectips.com/wp-content/uploads/2020/08/tutorial-preview-large-1.png' }}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo_part: {
        alignItems: 'center',
        marginBottom: 20
    },
    logo_circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo_text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },
    heading_title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
    },
    highlight: {
        color: 'gold',
        fontWeight: 'bold'
    },
    form: {
        width: '100%'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 15,
        backgroundColor: '#f9f9f9'
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    passwordInput: {
        flex: 1,
        paddingRight: 50,
        color:'#000'
    },
    showPasswordButton: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    loginButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    forgotPassword: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    line_text: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black'
    },
    orText: {
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        gap: 20
    },
    icon_container: {
        width: 80,
        height: 80,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
});

export default Login;
