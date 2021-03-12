import React from 'react';
import {
	View,
	Text,
	FlatList,
	Image,
	ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import List from '../../services/List';
import { useState } from 'react/cjs/react.development';

function Item({ uri }) {
	return (
		<View style={styles.itemContainer}>
			<Image source={{ uri }} style={styles.img}></Image>
		</View>
	);
}
function ListWorksDetails({ navigation, route }) {
	const { idWork } = route.params;
    //const [number, setNumber] = useState(0);
	const data = List.filter((item) => item.id === idWork)[0];
    return (
		<View style={styles.container}>
			<Header
				onBack={() => navigation.goBack()}
				title='Work Detail'
			></Header>
			<ScrollView>
				<View style={styles.content}>
					<View style={styles.item}>
						<Text style={styles.header}>Work name</Text>
						<Text style={styles.info}>{data.name}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Detail</Text>
						<Text style={styles.info}>{data.details}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Time</Text>
						<Text style={styles.info}>{data.time}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Status</Text>
						<Text style={styles.info}>
							{data.status}
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

export default ListWorksDetails;