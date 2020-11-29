import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Text, Button, Input } from 'react-native-ui-kitten'
import { withFirebaseHOC } from '../utils'
import { Firebase } from '../utils'
import * as ImagePicker from 'expo-image-picker';

class AddPost extends Component {
    state = { image: null, title: '', description: '' }
  
    onChangeTitle = title => {
      this.setState({ title })
    }
    onChangeDescription = description => {
      this.setState({ description })
    }
  
    onSubmit = async () => {
      try {
        const post = {
          photo: this.state.image,
          title: this.state.title,
          description: this.state.description
        }
        this.props.firebase.uploadPost(post)
  
        this.setState({
          image: null,
          title: '',
          description: ''
        })
      } catch (e) {
        console.error(e)
      }
    }
  

    
    selectImage = async () => {
      const options = {
        noData: true
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({image: result.uri});
      }
    }
  
    render() {
      return (
        <View style={{ flex: 1, marginTop: 60 }}>
          <View>
            {this.state.image ? (
              <Image
                source={{uri: this.state.image}}
                style={{ width: '100%', height: 300 }}
              />
            ) : (
              <Button
                onPress={this.selectImage}
                style={{
                  alignItems: 'center',
                  padding: 10,
                  margin: 30
                }}>
                Add an image
              </Button>
            )}
          </View>
          <View style={{ marginTop: 80, alignItems: 'center' }}>
            <Text category='h4'>Post Details</Text>
            <Input
              placeholder='Enter title of the post'
              style={{ margin: 20 }}
              value={this.state.title}
              onChangeText={title => this.onChangeTitle(title)}
            />
            <Input
              placeholder='Enter description'
              style={{ margin: 20 }}
              value={this.state.description}
              onChangeText={description => this.onChangeDescription(description)}
            />
            <Button status='success' onPress={this.onSubmit}>
              Add post
            </Button>
          </View>
        </View>
      )
    }
  }
  
  export default withFirebaseHOC(AddPost)