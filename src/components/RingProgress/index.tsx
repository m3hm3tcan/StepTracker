import { StyleSheet, Text, View } from 'react-native';
import SVG, { Circle } from 'react-native-svg';

type RingProgressPros = {
    radius: number;
    strokeWidth?: number;
    progress:number;
}

const color = "#EE0F55";

export default function RingProgress({ radius = 100, strokeWidth = 30, progress }: RingProgressPros) {

    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;
    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center',
        }}>
            <SVG>
                {/* backgorund circle */}
                <Circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    opacity={0.3}
                />

                {/* progress circle */}
                <Circle
                    r={innerRadius}
                    cx={radius}
                    cy={radius}
                    originX={radius}
                    originY={radius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeDasharray={[circumference * progress, circumference]}
                    strokeLinecap='round'
                    rotation="-90"

                />

            </SVG>
        </View>
    )
}

const styles = StyleSheet.create({
    ringSection: {
        color: 'red'
    }
});