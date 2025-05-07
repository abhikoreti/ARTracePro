import React, { useState } from "react";
import { View, Image, Button } from "react-native";
import ImagePicker from "react-native-image-crop-picker";

export default function EditorScreen({ navigation }) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        const img = await ImagePicker.openPicker({ cropping: true });
        setImage({ uri: img.path });
    };

    return (
        <View style={{ flex: 1 }}>
            <Button title="Select Image" onPress={pickImage} />
            {image && (
                <>
                    <Image
                        source={image}
                        style={{ width: "100%", height: 300 }}
                        resizeMode="contain"
                    />
                    <Button
                        title="Go to AR View"
                        onPress={() =>
                            navigation.navigate("AR", { imageUri: image.uri })
                        }
                    />
                </>
            )}
        </View>
    );
}
