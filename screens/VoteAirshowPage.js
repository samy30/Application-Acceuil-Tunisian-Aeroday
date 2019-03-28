import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { storeVoteStatus, retrieveVoteStatus, removeVoteStatus } from '../constants/utils';

const teams = [
  {
    name: "Equipe 1",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 2",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 3",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 4",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 5",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 6",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 7",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 8",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 9",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 10",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 11",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Equipe 12",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  }
];

export default class VoteAirshowPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      voted: false,
      isLoading: true,
      isFetching: false
    };

    this.fetchData = this.fetchData.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

 // In case you want to remove the vote status for debugging purposes, uncomment the code below.

  // componentWillMount() {
  //   removeVoteStatus()
  //   .then(status => {
  //     console.log(status);
  //   })
  // }

  componentDidMount() {
    retrieveVoteStatus()
    .then(status => {
      if(status) {
        this.setState({
          voted: true,
          isLoading: false,
          isFetching: false
        })
      }
      else {
        this.setState({
          voted: false,
          isLoading: false,
          isFetching: true
        });

        this.fetchData();
      }
    })
  }
  
  fetchData() {
    setTimeout(() => {
      this.setState({
        isFetching: false
      })
    }, 2000)
  }

  handlePress(){
    storeVoteStatus()
    .then(status => {
      if(status) {
        this.setState({
          voted: true
        });
      }
    })
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      titleStyle={styles.titleStyle}
      subtitle="Votez pour cette équipe"
      leftAvatar={{ source: { uri: item.avatar } }}
      bottomDivider={true}
      onPress={this.handlePress}
    />
  );

  render() {
    const { isLoading, voted, isFetching } = this.state;

    if (isLoading) {
      <View style={styles.loading}>
      <Text style={styles.loadingText}>
        Loading...
      </Text>
    </View>
    }
    else if(voted) {
      return (
        <View style={styles.loading}>
          <Text style={styles.votedText}>
            Thank you for your vote! 😀
          </Text>
        </View>
      );
    }
    else if (isFetching) {
      return (
        <View style={styles.loading}>
        <Text style={styles.loadingText}>
          Fetching teams...
        </Text>
      </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Votez pour une équipe</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={teams}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textStyle: {
    padding: 10,
    fontSize: 18
  },
  item: {
    padding: 10
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  votedText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
