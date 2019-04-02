import React from 'react';
import { StyleSheet, View, Image, ScrollView} from 'react-native';
import { Text, ListItem } from "react-native-elements";
import {Block} from 'galio-framework';
import { db } from '../config';
import { Competition } from '../components';
import {competitions} from '../constants'

let CompetitionsRef= db.ref('/competitions')

export default class RealTimePage extends React.Component {
  state = {
    mycompetitions: [],
  };

  componentDidMount() {
    CompetitionsRef.on('value', snapshot => {
      let data = snapshot.val();
      let mycompetitions = Object.values(data);
      this.setState({ mycompetitions });
    });
   }

   render () {
    let  mycompetitions  = this.state.mycompetitions;
    let activeCompetitions = [];
    mycompetitions.map(element => {
      if(element.isActive)
    activeCompetitions.push(element);
    });
    console.log(activeCompetitions);
    return (
      <ScrollView >
      {
        activeCompetitions.map((item) => (
      <ListItem
        key={item.id}
        title={item.name}
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{item.place}</Text>
          </View>
        }
        leftAvatar={{ source: competitions[item.id].image }}
      />
    ))
      }
      </ScrollView>
    )
  }
}

  styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    headerText: {
      lineHeight: 19,
    fontWeight: '300'
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    }
  })