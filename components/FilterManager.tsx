import FilterToggleButton from "./FilterToggleButton";
import Filter from "./Filter";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

type HeaderProps = {
    topicsValue: string;
    setTopicsValue: React.Dispatch<React.SetStateAction<string>>;
    orderValue: string;
    setOrderValue: React.Dispatch<React.SetStateAction<string>>;
  };

export default function FilterManager({
    topicsValue,
    setTopicsValue,
    orderValue,
    setOrderValue,
  }: HeaderProps) {

    return (
        <View style={{backgroundColor: '#F2F2D0'}}>
            <ImageBackground style={styles.bar} resizeMode='contain' source={require('../assets/filterbar.png')}>
                <Filter
                topicsValue={topicsValue}
                setTopicsValue={setTopicsValue}
                orderValue={orderValue}
                setOrderValue={setOrderValue}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        width: 228 * 1.5,
        height: 26 * 1.5,
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
    },
})