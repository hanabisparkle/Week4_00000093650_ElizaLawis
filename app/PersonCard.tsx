import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import styles from "./AppStyles";

interface personData{
  name: string, 
  email: string, 
  photo: string
}

const PersonCard = (
  {
    name, email, photo
  }: personData
) => (
  <Card.Title
    title={name}
    subtitle={email}
    titleStyle={styles.nameText}
    subtitleStyle={styles.emailText}
    left={(props) => <Avatar.Image {...props} 
      style={{backgroundColor: "yellow"}}
      source={{uri : photo}} />}
  />
);

export default PersonCard;