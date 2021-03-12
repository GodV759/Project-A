import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    item: {
        marginHorizontal: 16,
        marginVertical: 8,
        marginLeft:50,
        marginTop:20,
        marginRight:50,
    },
    header: {
        fontSize: 30,
    },
    info: {
        fontSize: 17
    },
    itemContainer: {
        width,
        height: 400
    },
    img: {
        width,
        height: 400
    }
})

export default styles;