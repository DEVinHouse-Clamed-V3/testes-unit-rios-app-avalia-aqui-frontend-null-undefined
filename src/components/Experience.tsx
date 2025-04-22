import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useState } from 'react';

export default function Experience({ onExperienceChange }: { onExperienceChange: (value: string) => void }) {
    
    const [experience, setExperience] = useState('')

    function changeExperienceToHappy() {
        setExperience('Feliz')
        onExperienceChange('Feliz')
    }
    function changeExperienceToGood() {
        setExperience('Bom')
        onExperienceChange('Bom')
    }
    function changeExperienceToAverage() {
        setExperience('Medio')
        onExperienceChange('Medio')
    }
    function changeExperienceToBad() {
        setExperience('Ruim')
        onExperienceChange('Ruim')
    }

    return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.buttonExp, experience === 'Feliz' && styles.selectedButton]} onPress={changeExperienceToHappy}>
                    <Text style={styles.buttonText}>Feliz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonExp, experience === 'Bom' && styles.selectedButton]} onPress={changeExperienceToGood}>
                    <Text style={styles.buttonText}>Bom</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonExp, experience === 'Medio' && styles.selectedButton]} onPress={changeExperienceToAverage}>
                    <Text style={styles.buttonText}>Médio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonExp, experience === 'Ruim' && styles.selectedButton]} onPress={changeExperienceToBad}>
                    <Text style={styles.buttonText}>Ruim</Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    buttonExp: {
        backgroundColor: '#D5D5D5',
        padding: 8,
        width: 80,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16
    },
    selectedButton: {
        backgroundColor: '#7ED321'
    }
})