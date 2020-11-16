import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './PersonalInformationStylesheet';
import DateTimePicker from '@react-native-community/datetimepicker';



export default class PersonInformation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sexoptions = ["male", "female"];
        const hispanicoptions = [];
        const raceoptions = {
            white: [],
            black: [], 
            asian: ["Chinese", "Filipino", "Asian Indian", "Vietnamese", "Korean", "Japanese", "Other"], 
            pacific: []
        };

        return <View>
            <Text Text="Information about you" />
            <Text Text="name" />
            <View style={styles.horizontal}>
                <Text Text="enter your name" />
                <TextInput placeholder="enter name" />

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Name</Text>
                    <TextInput style={styles.sectionDescription} />
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Sex</Text>
                    <Text style={styles.sectionDescription}>
                        <Text>
                            Are YOU male or female?
                        </Text>

                    </Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Date of Birth</Text>
                    <Text style={styles.sectionDescription}>
                        <DateTimePicker />
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Hispanic Origin</Text>
                    <Text style={styles.sectionDescription}>
                        <Text>
                            Are YOU male or female?
                        </Text>

                    </Text>
                    <Text style={styles.sectionDescription}>
                        <Text>
                            Are YOU Mexican, Mexican American, Chicano; Puerto Rican, Cuban, or some other Hispanic, Latino, or Spanish Origin?
                        </Text>

                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Race</Text>
                    <Text style={styles.sectionDescription}>
                        <Text>
                            I'm going to read a list of races. You may choose one or more races. For this census, Hispanic origin is not a race. What is YOUR race?
                        </Text>
                        <Text>
                        Are YOU White, Black or African American, American Indian or Alaska Native, Asian, Native Hawaiian, or Other Pacific Islander, or Some other race?
                        </Text>
                        <Text>
                            What are {name}'s {race[0]} origin or origins? For example, {getEthicitiesFromRace()}, etc.
                        </Text>
                    </Text>
                    <Text style={styles.sectionDescription}>
                        <Text>
                            what is YOUR other race or orign?
                        </Text>

                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Race: {race[0]}</Text>
                    <Text style={styles.sectionDescription}>
                        <Text>
                            What are YOUR {race[0]} origin or origins? For example, {getEthicitiesFromRace()}, etc.
                        </Text>
                        <Text>
                            What are {name}'s {race[0]} origin or origins? For example, {getEthicitiesFromRace()}, etc.
                        </Text>
                    </Text>
                    <Text style={styles.sectionDescription}>
                        <Text>
                            You may choose one or more Asian groups. Is {name} Chinese, Filipino, Asian Indian, Vietnamese, Korean, Japanese, or of some other Asian origin?
                        </Text>
                        <Text>
                            What are {name}'s {race[0]} origin or origins? For example, {getEthicitiesFromRace()}, etc.
                        </Text>
                        <Text>
                        What is that other Asian origin or origins? For example, Pakistanim Cambodian, Hmong, etc.?
                        </Text>
                    </Text>
                    <Text style={styles.sectionDescription}>
                        <Text>
                            You may choose one or more Pacific Islander groups. Is {name} Native Hawaiian, Samoan, Camorro, or of some other PacificIslander origin?
                        </Text>
                        <Text>
                            What are {name}'s {race[0]} origin or origins? For example, {getEthicitiesFromRace()}, etc.
                        </Text>
                        <Text>
                        What is that other Pacific Islander origin or origins? For example, Tongan, Fijian, Marshallese, etc.?
                        </Text>
                    </Text>
                    <Text style={styles.sectionDescription}>
                        <Text>
                            What is {name}'s other race or origin?
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    }
}