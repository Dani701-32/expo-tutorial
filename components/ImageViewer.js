import { StyleSheet, Image } from "react-native";

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
	const imageSource =
		selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;

	return <Image style={styles.image} source={imageSource} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});
