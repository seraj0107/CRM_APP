import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ClientsDetails = () => {
  const [Video, setVideo] = useState([]);
  const [aadhaarPhotos, setaadhaarPhotos] = useState([]);
  const [pancard, setpancard] = useState([]);
  const [electricitybill, setelectricitybill] = useState([]);
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [BankAddress, setBankAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);



  const  navigation = useNavigation()
  const openCamera = async (setImage, isVideo = false) => {
    launchCamera(
      {
        mediaType: isVideo ? 'video' :  'photo',
        cameraType: 'back',
        quality: 1,
        includeBase64: true,
      },
      async (response) => {
        if (response.didCancel) {
          console.log('User  cancelled camera picker');
        } else if (response.errorCode) {
          console.log('Camera Error:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const media = response.assets[0]
          setImage([media])
          // try {
          //   // const originalPhoto = response.assets[0];
          //   // const resizedImage = await ImageResizer.createResizedImage(
          //   //   originalPhoto.uri,
          //   //   600,
          //   //   600,
          //   //   'JPEG',
          //   //   50,
          //   //   0,
          //   //   null,
          //   // );

          //   // const resizedPhoto = {
          //   //   ...originalPhoto,
          //   //   uri: resizedImage.uri,
          //   //   base64: resizedImage.base64 || originalPhoto.base64,
          //   // };
          //   // setImage([resizedPhoto]);
          // } catch (error) {
          //   console.log('Error resizing image:', error.message);
          //   Alert.alert('Error', 'Failed to resize the image.');
          // }
        }
      },
    );
  };

  const handleRemoveImage = (setImage) => {
    setImage(null);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    // Append images to FormData
if(Video.length > 0){
  formData.append('Video',{
    uri: Video[0].uri,
    name:'video.mp4',
    type:'video/mp4'
  })
}

    if (aadhaarPhotos.length > 0) {
      formData.append('aadhaarPhotos', {
        uri: aadhaarPhotos[0].uri,
        name: 'aadhaar.jpg',
        type: 'image/jpeg',
      });
    }

    if (pancard.length > 0) {
      formData.append('pancard', {
        uri: pancard[0].uri,
        name: 'pancard.jpg',
        type: 'image/jpeg',
      });
    }

    if (electricitybill.length > 0) {
      formData.append('electricitybill', {
        uri: electricitybill[0].uri,
        name: 'electricitybill.jpg',
        type: 'image/jpeg',
      });
    }

    // Append text data
    formData.append('accountNumber', accountNumber);
    formData.append('ifscCode', ifscCode);
    formData.append('BankAddress', BankAddress);

    console.log('Submitting FormData:', formData);

    try {
      setLoading(true);

      const response = await axios.post(
        'http://192.168.1.67:8080/emp/addtionalclientDetails',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        Alert.alert('Success', 'Form submitted successfully!');
      }

      navigation.goBack();
     // console.log('Response from server:', response.data);
    } catch (error) {
      console.log('Error submitting form:', error.response?.data || error.message);
      Alert.alert('Error', 'Failed to submit form.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Client Details</Text>
      <Text style={styles.subTitle}>Upload Documents</Text>

      {/* Roof Video Section */}
      <Text style={styles.label}>Roof Video</Text>

      <TouchableOpacity onPress={() => openCamera(setVideo, true)} style={styles.imageButton}>
        {Video.length > 0 ? (

          <Image source={{ uri: Video[0].uri }} style={styles.imagePreview} />


        ) : (
          <Image
            source={{ uri: 'https://blog.coursify.me/wp-content/uploads/2020/12/video-recording-app-coursifyme.jpg' }}
            style={{ width: "100%", height: 200, resizeMode: 'contain' }}
          />
        )}
      </TouchableOpacity>
      {/* {roofVideo ? (
        <View style={styles.mediaContainer}>
          <TouchableOpacity onPress={() => handleRemoveImage(setRoofVideo)}>
            <Icon name="close-circle" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => openCamera(setRoofVideo)}>
          <Image source={{ uri: 'https://blog.coursify.me/wp-content/uploads/2020/12/video-recording-app-coursifyme.jpg' }}
            style={{ width: '100%', height: 200, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      )} */}

      {/* Aadhar Card Section */}
      <Text style={styles.label}>Aadhar Card</Text>

      <TouchableOpacity onPress={() => openCamera(setaadhaarPhotos)} style={styles.imageButton}>
        {aadhaarPhotos.length > 0 ? (

          <Image source={{ uri: aadhaarPhotos[0].uri }} style={styles.imagePreview} />


        ) : (
          <Image
            source={{ uri: 'https://surepass.io/wp-content/uploads/2020/12/updated-aadhaar.png' }}
            style={{ width: "100%", height: 200, resizeMode: 'contain' }}
          />
        )}
      </TouchableOpacity>

      {/* PAN Card Section */}
      <Text style={styles.label}>PAN Card</Text>
      
      <TouchableOpacity onPress={() => openCamera(setpancard)} style={styles.imageButton}>
        {pancard.length > 0 ? (
          <Image source={{ uri: pancard[0].uri }} style={styles.imagePreview} />
        ) : (
          <Image
            source={{ uri: 'https://as1.ftcdn.net/jpg/03/45/67/40/1000_F_345674072_QwzzCNH6PElHQxsow7DtAr50TyGmcYGs.jpg' }}
            style={{ width: '100%', height: 200, resizeMode: 'contain' }}
          />
        )}
      </TouchableOpacity>

      {/* Electric Bill Section */}
      <Text style={styles.label}>Electric Bill</Text>
     
      <TouchableOpacity onPress={() => openCamera(setelectricitybill)} style={styles.imageButton}>
        {electricitybill.length > 0 ? (
          <Image source={{ uri: electricitybill[0].uri }} style={styles.imagePreview} />
        ) : (
          <Image
            source={{ uri: 'https://imagesvs.oneindia.com/img/2025/01/electricity-bill-small-1736490926.jpg' }}
            style={{ width: '100%', height: 200, resizeMode: 'contain', borderRadius: 10 }}
          />
        )}
      </TouchableOpacity>

      {/* Other Inputs */}
      <TextInput style={styles.input} placeholder="Bank Account Number" value={accountNumber} onChangeText={setAccountNumber}
        placeholderTextColor="gray"
      />
      <TextInput style={styles.input} placeholder="IFSC Code" value={ifscCode} onChangeText={setIfscCode}
        placeholderTextColor="gray"
      />
      <TextInput style={styles.input} placeholder="Bank Address" value={BankAddress} onChangeText={setBankAddress}
        placeholderTextColor="gray"
      />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address"
        placeholderTextColor="gray"

      />
      <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad"
        placeholderTextColor="gray"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Upload All Data</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    width: '100%',
    textTransform: 'uppercase',
    letterSpacing: 2.5
  },
  label: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  imageButton: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginBottom: 30,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  mediaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePreview: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default ClientsDetails;