import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled = false }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.8}
        >
            <LinearGradient
                colors={['#0f0c29', '#302b63', '#24243e']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.button, disabled && styles.disabledButton]}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

// batu yapti (partially):
const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: '#0b0c10',
        shadowColor: '#66FCF1',
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        elevation: 8,
    },
    disabledButton: {
        backgroundColor: '#3a3a3a',
    },
    buttonText: {
        color: '#66FCF1',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
});

export default Button;