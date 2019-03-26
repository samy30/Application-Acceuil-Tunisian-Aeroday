import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class Rubrique extends React.Component {
  render() {
    const { navigation, rubrique, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row={horizontal} card flex style={[styles.rubrique, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { rubrique: rubrique })}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={rubrique.image} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { rubrique: rubrique })}>
          <Block flex space="between" style={styles.rubriqueDescription}>
            <Text size={14} style={styles.rubriqueTitle}>{rubrique.title}</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(Rubrique);

const styles = StyleSheet.create({
  rubrique: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});