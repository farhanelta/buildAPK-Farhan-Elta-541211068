import React from 'react';
import { Image, Text, View, StyleSheet, SafeAreaView, ImageBackground, ScrollView, Pressable } from 'react-native';

function App(){
  return(
    <SafeAreaView style={{paddingTop:20}}>
      <ScrollView>
        <View>
          <Image source={require('./assets/ColorPallete.png')} style={{width:'100%', height:5}}/>
        </View>
        <View style={styles.main}>
          <View style={{marginHorizontal:'10%', marginVertical:'5%'}}>

              <View style={{flexDirection:"row"}}>

              <View style={{flex:1}}>
                <Image source={require('./assets/Logo.png')} style={{width:20, height:20}}/>
              </View>

              <View style={{flex:2}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1, textAlign:'right',}}>XII RPL 2</Text>
              </View>
              
              <View style={{flex:1}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1, textAlign:'right',}}>SMK TELKOM PURWOKERTO</Text>
              </View>

            </View>
          </View>
          <View style={styles.container}>
            <View style={{alignItems:'center'}}>
              <ImageBackground source={{uri:'https://features.japantimes.co.jp/wp-content/uploads/2018/07/kaneda-bike.jpg'}} style={{width: 280, height: 250}}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color:'white', fontWeight:'bolder', fontSize:60, lineHeight:50, marginBottom:300, letterSpacing:-5}}>FARHAN ELTA</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{marginVertical:"3%", marginHorizontal:'5%'}}>
              <Text style={{fontSize:24, color:'white', fontWeight:'500', letterSpacing:-1}}>COLLECTION OF WORKS</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainSec}>

          <View>

            <View style={{marginHorizontal:'5%'}}>

            <View style={{flexDirection:"row", marginVertical:'10%'}}>

              <View style={{flex:0.5}}>
                <Text style={{color:'white', marginHorizontal:'13%', fontWeight:'bolder', fontSize:24, letterSpacing:-1}}>WORKS</Text>
              </View>

              <View style={{flex:0.7, justifyContent:'center'}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1, borderWidth:1, borderColor:'white', borderRadius:10, textAlign:'center', width:60}}>BEST WORKS</Text>
              </View>

            </View>

            <View style={{marginHorizontal: "5%", alignItems: 'center'}}>
              <Image source={{uri:'https://cdn.dribbble.com/userupload/4242593/file/original-eba4b021b42b3f0c3cc8132ef7f8c175.png?resize=1200x900'}} style={{width:280, height:300}}/>
            </View>
            <View style={{flexDirection:"row", marginVertical:'2%'}}>

              <View style={{flex:8}}>
                <Text style={{color:'white', marginHorizontal:'5%', fontWeight:'500', fontSize:24, letterSpacing:-1}}>AGENCY WEB DESIGN</Text>
              </View>

              <View style={{flex:1, marginVertical:'2%'}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1,}}>2022</Text>
              </View>

            </View>

            <View style={{flexDirection:"row", marginHorizontal:'5%'}}>

              <View style={{flex:1}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1, borderWidth:1, borderColor:'white', borderRadius:10, textAlign:'center', width:60}}>BRANDING</Text>
              </View>

              <View style={{flex:1}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1, borderWidth:1, borderColor:'white', borderRadius:10, textAlign:'center', width:60}}>WEBSITE</Text>
              </View>

              <View style={{flex:1}}>
              </View>

              <View style={{flex:1}}>
              </View>

            </View>

            <View style={{marginHorizontal:'5%', marginVertical:'5%'}}>
              <Text style={{color: 'white', lineHeight:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
            </View>

            <View style={{marginHorizontal:'5%', marginBottom:'10%'}}>
              <View style={{}}>
                <Pressable style={{borderWidth:1, borderColor:'white', justifyContent:'center', alignItems:'center', width:80, borderRadius:3}}>
                  <Text style={{color:'white'}}>EXPLORE</Text>
                </Pressable>
              </View>
            </View>

            <View style={{marginHorizontal: "5%", alignItems: 'center'}}>
              <Image source={{uri:'https://cdn.dribbble.com/userupload/4242593/file/original-eba4b021b42b3f0c3cc8132ef7f8c175.png?resize=1200x900'}} style={{width:280, height:300}}/>
            </View>
            <View style={{flexDirection:"row", marginVertical:'2%'}}>

              <View style={{flex:8}}>
                <Text style={{color:'white', marginHorizontal:'5%', fontWeight:'500', fontSize:24, letterSpacing:-1}}>AGENCY WEB DESIGN</Text>
              </View>

              <View style={{flex:1, marginVertical:'2%'}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1,}}>2022</Text>
              </View>

            </View>

            <View style={{flexDirection:"row", marginHorizontal:'5%'}}>

              <View style={{flex:1}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1, borderWidth:1, borderColor:'white', borderRadius:10, textAlign:'center', width:60}}>BRANDING</Text>
              </View>

              <View style={{flex:1}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1, borderWidth:1, borderColor:'white', borderRadius:10, textAlign:'center', width:60}}>WEBSITE</Text>
              </View>

              <View style={{flex:1}}>
              </View>

              <View style={{flex:1}}>
              </View>

            </View>

            <View style={{marginHorizontal:'5%', marginVertical:'5%'}}>
              <Text style={{color: 'white', lineHeight:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
            </View>

            <View style={{marginHorizontal:'5%', marginBottom:'10%'}}>
              <View style={{}}>
                <Pressable style={{borderWidth:1, borderColor:'white', justifyContent:'center', alignItems:'center', width:80, borderRadius:3}}>
                  <Text style={{color:'white'}}>EXPLORE</Text>
                </Pressable>
              </View>
            </View>

            <View style={{marginHorizontal: "5%", alignItems: 'center'}}>
              <Image source={{uri:'https://cdn.dribbble.com/userupload/4242593/file/original-eba4b021b42b3f0c3cc8132ef7f8c175.png?resize=1200x900'}} style={{width:280, height:300}}/>
            </View>
            <View style={{flexDirection:"row", marginVertical:'2%'}}>

              <View style={{flex:8}}>
                <Text style={{color:'white', marginHorizontal:'5%', fontWeight:'500', fontSize:24, letterSpacing:-1}}>AGENCY WEB DESIGN</Text>
              </View>

              <View style={{flex:1, marginVertical:'2%'}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1,}}>2022</Text>
              </View>

            </View>

            <View style={{flexDirection:"row", marginHorizontal:'5%'}}>

              <View style={{flex:1}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1, borderWidth:1, borderColor:'white', borderRadius:10, textAlign:'center', width:60}}>BRANDING</Text>
              </View>

              <View style={{flex:1}}>
                <Text style={{color:'white', fontSize:10, letterSpacing:-1, borderWidth:1, borderColor:'white', borderRadius:10, textAlign:'center', width:60}}>WEBSITE</Text>
              </View>

              <View style={{flex:1}}>
              </View>

              <View style={{flex:1}}>
              </View>

            </View>

            <View style={{marginHorizontal:'5%', marginVertical:'5%'}}>
              <Text style={{color: 'white', lineHeight:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
            </View>

            <View style={{marginHorizontal:'5%', marginBottom:'10%'}}>
              <View style={{}}>
                <Pressable style={{borderWidth:1, borderColor:'white', justifyContent:'center', alignItems:'center', width:80, borderRadius:3}}>
                  <Text style={{color:'white'}}>EXPLORE</Text>
                </Pressable>
              </View>
            </View>


            </View>
          </View>
        </View>

        <View style={styles.mainThr}>
          <View style={{justifyContent:'center', textAlign:'center'}}>
            <Text style={{marginVertical:30, fontSize:40, color:'white', fontWeight:'bold', letterSpacing:-1, lineHeight:40}}>LET'S WORK TOGETHER!</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex:1, height: 1, backgroundColor: 'white', marginBottom:'5%'}} />
              </View>
          </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor: "black",
  },
  mainSec:{
    backgroundColor: "#111111",
  },
  mainThr:{
    backgroundColor: "#AD7F34",
  },
  container:{
    marginTop: "25%",
    marginHorizontal: "5%"
  }
})

export default App;