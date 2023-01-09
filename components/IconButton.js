import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const IconButton = ({ icon, label, onPress }) => {
	return (
		<Pressable onPress={onPress} style={styles.IconButton}>
			<MaterialIcons name={icon} size={24} color="#fff" />
			<Text style={styles.iconButtonLabel}>{label}</Text>
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	IconButton: {
		justifyContent: "center",
		alignContent: "center",
	},
	iconButtonLabel: {
		color: "#FFFFFF",
		marginTop: 12,
	},
});
