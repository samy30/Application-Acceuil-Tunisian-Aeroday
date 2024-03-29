import React from 'react';
import { StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon, Rubrique } from '../components/';
import rubriques from '../constants/rubriques'

const { height, width } = Dimensions.get('screen');

export default class LandingPage extends React.Component {

  constructor(){
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ]
  }
  /*renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Landing')}>
          <Block row middle>
            <Icon name="grid-square" family="Galio" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Acceuil</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Loading')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Informations</Text>
          </Block>
        </Button>
      </Block>
    )
  }*/

  renderTabs = () => {
    const { navigation } = this.props;

    return (
      
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon name="grid-square" family="Galio" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
  
    )
  }

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.rubrique}>
        <Block flex>
          <Rubrique rubrique={rubriques[0]} horizontal />
          <Block flex row>
            <Rubrique rubrique={rubriques[1]}  style={{ marginRight: theme.SIZES.BASE }} />
            <Rubrique rubrique={rubriques[2]}  />
          </Block>
          <Rubrique rubrique={rubriques[3]} horizontal />
          <Rubrique rubrique={rubriques[4]} full />
        </Block>
      </ScrollView>
    )
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={require('../assets/images/beau2.jpg')} style={{width: '100%', height: '100%'}}>
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
  
    
    
  
    
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  rubrique: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  avatar: {
    height: 40,
    width: 80,
    //borderRadius: 20,
    marginBottom: theme.SIZES.LEFT,
  },
}); 