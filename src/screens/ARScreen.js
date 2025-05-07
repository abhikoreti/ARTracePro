import React from "react";
import { ViroARSceneNavigator } from "react-viro";
import ARScene from "../ar/ARScene";

export default function ARScreen({ route }) {
    const { imageUri } = route.params;

    return (
        <ViroARSceneNavigator
            autofocus={true}
            initialScene={{ scene: () => <ARScene imageUri={imageUri} /> }}
            worldAlignment="Gravity"
        />
    );
}
