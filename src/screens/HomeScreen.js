import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Button
                title="Pick Image"
                onPress={() => navigation.navigate("Editor")}
            />
        </View>
    );
}
