import React from "react";
import {
    ViroARScene,
    ViroARImageMarker,
    ViroImage,
    ViroARTrackingTargets,
} from "react-viro";

ViroARTrackingTargets.createTargets({
    traceMarker: {
        source: require("../assets/marker.jpg"),
        orientation: "Up",
        physicalWidth: 0.1,
    },
});

export default function ARScene({ imageUri }) {
    return (
        <ViroARScene>
            <ViroARImageMarker target="traceMarker">
                <ViroImage
                    source={{ uri: imageUri }}
                    position={[0, 0, 0]}
                    scale={[0.3, 0.3, 0.3]}
                    opacity={0.7}
                />
            </ViroARImageMarker>
        </ViroARScene>
    );
}
