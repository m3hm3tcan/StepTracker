import { StyleSheet, Text, View } from 'react-native';
import SVG, { Circle, CircleProps } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import Animated, { useAnimatedProps, useSharedValue, withTiming, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProgressPros = {
    radius: number;
    strokeWidth?: number;
    progress: number;
}

const color = "#EE0F55";

export default function RingProgress({ radius = 100, strokeWidth = 35, progress }: RingProgressPros) {

    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    const fill = useSharedValue(0);

    useEffect(() => {
        fill.value = withTiming(progress, { duration: 1500 });
        // fill.value = withSpring(progress, {overshootClamping:true, mass:10});

    }, [progress])

    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray: [circumference * fill.value, circumference],
    }))

    const CirleBaseProps: CircleProps = {
        r: innerRadius,
        cx: radius,
        cy: radius,
        strokeWidth: strokeWidth,
        stroke: color,

    }

    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center',
        }}>
            <SVG>
                {/* backgorund circle */}
                <Circle
                    {...CirleBaseProps}
                    opacity={0.3}
                />

                {/* progress circle */}
                <AnimatedCircle
                    animatedProps={animatedProps}
                    {...CirleBaseProps}
                    originX={radius}
                    originY={radius}
                    strokeLinecap='round'
                    rotation="-90"
                />

            </SVG>
            <AntDesign name="arrowright" size={strokeWidth * 0.8} color="black" style={{ top: strokeWidth * 0.1, position: 'absolute', alignSelf: 'center' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    ringSection: {
        color: 'red'
    }
});