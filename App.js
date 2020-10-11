import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, ImageBackground, Image, ScrollView, TouchableHighlight, TextInput, Picker } from 'react-native';
import Constants from 'expo-constants';
// import functions from './Functions.js';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = require('./Styles.js');

export default class App extends Component {

    state = {
        homePageDisplay: 'block',
        projectsPageDisplay: 'none',
        requestPageDisplay: 'none',
        attributionsPageDisplay: 'none',

        title: "Enter a title",
        desc: "Enter a description",
        teacher: "Teacher name",
        email: "EMail of teacher",
        category: "Choose one from above",
        color: "",
        icon: "",


        projects: [
            {
                title: "Cellular Learning",
                desc: "A game that aids younger students learn the parts of a cell for an upcoming test",
                teacher: "Phineas Flynn",
                email: "pflynn@gmail.com",
                category: "Science",
                color: "#6bd7ce",
                icon: "https://codehs.com/uploads/3b864e57d76dc9b35267244472b39b4f",

            },
            {
                title: "Book Log",
                desc: "A program for students to keep track of books finished, books abandoned, and books to read",
                teacher: "Ferb Flynn",
                email: "fflynn@gmail.com",
                category: "English",
                color: "#ed7b81",
                icon: "https://codehs.com/uploads/5eec8f9daa6db8e2083a360e5e1c81c3",

            },
            {
                title: "Automatic Grader",
                desc: "A program that can automatically grade online quizzes given scanned tests and an answer key",
                teacher: "Patrick Star",
                email: "pstar@gmail.com",
                category: "Teacher Help",
                color: "#7aa2ff",
                icon: "https://codehs.com/uploads/c071f50feee04290e09008111e91ca4a",

            },
            {
                title: "Mental Math Development",
                desc: "A project that helps students develop basic arithmetic skills through mental math problems",
                teacher: "Mr. Squarepants",
                email: "ssquarepants@gmail.com",
                category: "Math",
                color: "#f8d2a9",
                icon: "https://codehs.com/uploads/50e1fc84ac2258cb751d29239ebfc987",

            },
            {
                title: "Presidents Timeline",
                desc: "An animation that shows all the presidents in order, as well as a quiz at the end",
                teacher: "Mr. Test",
                email: "jtest@gmail.com",
                category: "Social Studies",
                color: "#fb774b",
                icon: "https://codehs.com/uploads/eecc04cfe20e76f93208e5448148a713",

            },
            {
                title: "Music Notes Quiz",
                desc: "A practice quiz game to prepare studensts for a note-naming test",
                teacher: "Mr. Tentacles",
                email: "stentacles@gmail.com",
                category: "Fine-Arts",
                color: "#d391fa",
                icon: "https://codehs.com/uploads/6fa43908225b94ef2b2508292bcd5ed2",

            },
            
        ]
    }

    handleHomePagePress = () => {
        this.setState({
            homePageDisplay: 'block',
            projectsPageDisplay: 'none',
            requestPageDisplay: 'none',
            attributionsPageDisplay: 'none',
        })
    }

    handleProjectsPagePress = () => {
        this.setState({
            homePageDisplay: 'none',
            projectsPageDisplay: 'block',
            requestPageDisplay: 'none',
            attributionsPageDisplay: 'none',
        })
    }

    handleRequestPagePress = () => {
        this.setState({
            homePageDisplay: 'none',
            projectsPageDisplay: 'none',
            requestPageDisplay: 'block',
            attributionsPageDisplay: 'none',
        })
    }

    handleAttributionsPagePress = () => {
        this.setState({
            homePageDisplay: 'none',
            projectsPageDisplay: 'none',
            requestPageDisplay: 'none',
            attributionsPageDisplay: 'block',
        })
    }

    createProject = () => {
        if (this.state.category == "Math"){
            this.state.projects.splice(this.state.projects.length, 0, 
            {
                title: this.state.title,
                desc: this.state.desc,
                teacher: this.state.teacher,
                email: this.state.email,
                color: "#f8d2a9",
                icon: "https://codehs.com/uploads/50e1fc84ac2258cb751d29239ebfc987",
                
            }
        )}
            else if (this.state.category == "Science"){
            this.state.projects.splice(this.state.projects.length, 0, 
            {
                title: this.state.title,
                desc: this.state.desc,
                teacher: this.state.teacher,
                email: this.state.email,
                color: "#6bd7ce",
                icon: "https://codehs.com/uploads/3b864e57d76dc9b35267244472b39b4f",
                
            }
        )}
            else if (this.state.category == "Social Studies"){
            this.state.projects.splice(this.state.projects.length, 0, 
            {
                title: this.state.title,
                desc: this.state.desc,
                teacher: this.state.teacher,
                email: this.state.email,
                color: "#fb774b",
                icon: "https://codehs.com/uploads/eecc04cfe20e76f93208e5448148a713",
                
            }
        )}
            else if (this.state.category == "English"){
            this.state.projects.splice(this.state.projects.length, 0, 
            {
                title: this.state.title,
                desc: this.state.desc,
                teacher: this.state.teacher,
                email: this.state.email,
                color: "#ed7b81",
                icon: "https://codehs.com/uploads/5eec8f9daa6db8e2083a360e5e1c81c3",
                
            }
        )}
            else if (this.state.category == "Fine-Arts"){
            this.state.projects.splice(this.state.projects.length, 0, 
            {
                title: this.state.title,
                desc: this.state.desc,
                teacher: this.state.teacher,
                email: this.state.email,
                color: "#d391fa",
                icon: "https://codehs.com/uploads/6fa43908225b94ef2b2508292bcd5ed2",
                
            }
        )}
            else if (this.state.category == "Teacher Help"){
            this.state.projects.splice(this.state.projects.length, 0, 
            {
                title: this.state.title,
                desc: this.state.desc,
                teacher: this.state.teacher,
                email: this.state.email,
                color: "#7aa2ff",
                icon: "https://codehs.com/uploads/c071f50feee04290e09008111e91ca4a",
                
            }
        )}

        this.setState({
            title: "Enter a title",
            desc: "Enter a description",
            teacher: "Teacher name",
            email: "EMail of teacher",
            category: "Choose one from above",
        })
    }

    render() {
        return (
                <View style={styles.container}>
                    <View style = {[{ display: this.state.homePageDisplay }, { height: (deviceHeight / 10) * 9}]}>
                        <ImageBackground
                            style = {styles.background}
                            source={{ uri: 'https://codehs.com/uploads/87cfd4917f75fd26e03784f83f4ae348' }}
                        >
                            
                            <View style = {styles.titleContainer}>
                                <Text style={[styles.titleText, {fontSize: (deviceHeight / 133) * 5}, {fontWeight: 'bold'}]}>
                                    TreeBranch features:
                                </Text>
                                <Text style={styles.titleText}>
                                    • Submit a project request
                                </Text>
                                <Text style={styles.titleText}>
                                    • Find project ideas
                                </Text>
                                <Text style={styles.titleText}>
                                    • Help the community
                                </Text>
                            </View>
                        </ImageBackground>
                    
                    
                        <ScrollView>
                                <View style = {styles.buttonContainer}>
                                    <TouchableHighlight onPress = {this.handleProjectsPagePress}>
                                        <View style = {[styles.button, {backgroundColor: '#6bd7ce'}]}>
                                            <Text style = {styles.buttonText}>
                                                Project List →
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress = {this.handleRequestPagePress}>
                                        <View style = {[styles.button, {backgroundColor: '#eb4952'}]}>
                                            <Text style = {styles.buttonText}>
                                                Request →
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                        </ScrollView>
                    </View>

                    <View style = {[{ display: this.state.projectsPageDisplay }, {height: (deviceHeight / 10) * 9}]}>
                        <ImageBackground
                            style = {[styles.background, {position: 'absolute'}]}
                            source={{ uri: 'https://codehs.com/uploads/87cfd4917f75fd26e03784f83f4ae348' }}
                        >
                        
                        </ImageBackground>

                        <View style = {styles.headingContainer}>
                            <Text style = {styles.header}>
                                Projects
                            </Text>
                        </View>


                        <ScrollView style = {{ height: (deviceHeight / 10) * 7.5 }}>
                            <View style = {[{ width: deviceWidth }, { alignItems: 'center'}]}>
                                {this.state.projects.map((project) => (
                                    <View style = {[{backgroundColor: project.color}, styles.projectContainer]}>
                                        <View style = {styles.projectTextContainer}>
                                            <Text style = {styles.projectTitle}>
                                                {project.title}
                                            </Text>
                                            <Text style = {styles.projectDesc}>
                                                {project.desc}
                                            </Text>
                                            <Text style = {styles.projectInfo}>
                                                {project.teacher}
                                            </Text>
                                            <Text style = {styles.projectInfo}>
                                                {project.email}
                                            </Text>
                                        </View>
                                        <Image
                                            style = {styles.projectIcon}
                                            source = {{ uri: project.icon }}
                                        />
                                    </View>    
                                ))}
                            </View>
                            
                        </ScrollView>
                    </View>

                    <View style = {[{ display: this.state.requestPageDisplay }, { height: (deviceHeight / 10) * 9 }]}>
                        <ImageBackground
                            style = {[styles.background, {position: 'absolute'}]}
                            source={{ uri: 'https://codehs.com/uploads/87cfd4917f75fd26e03784f83f4ae348' }}
                        >
                        
                        </ImageBackground>

                        <View style = {styles.headingContainer}>
                            <Text style = {styles.header}>
                                Request
                            </Text>
                        </View>

                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <View style = {{width: deviceWidth, flex: 1, alignItems: 'center',}}>
                                <View style = {styles.inputContainer}>
                                    <Text style = {styles.inputLabel}>
                                        Project Title
                                    </Text>
                                    <TextInput
                                        style = {styles.textInput}
                                        onChangeText = {(title) => this.setState({title})}
                                        value = {this.state.title}
                                    />
                                </View>
                                
                                <View style = {styles.inputContainer}>
                                    <Text style = {styles.inputLabel}>
                                        Project Description
                                    </Text>
                                    <TextInput
                                        style = {[styles.textInput, {height: (deviceHeight / 8)}]}
                                        onChangeText = {(desc) => this.setState({desc})}
                                        value = {this.state.desc}
                                    />
                                </View>
                                <View style = {styles.inputContainer}>
                                    <Text style = {styles.inputLabel}>
                                        Teacher
                                    </Text>
                                    <TextInput
                                        style = {styles.textInput}
                                        onChangeText = {(teacher) => this.setState({teacher})}
                                        value = {this.state.teacher}
                                    />
                                </View>
                                <View style = {styles.inputContainer}>
                                    <Text style = {styles.inputLabel}>
                                        EMail (for further project info)
                                    </Text>
                                    <TextInput
                                        style = {styles.textInput}
                                        onChangeText = {(email) => this.setState({email})}
                                        value = {this.state.email}
                                    />
                                </View>
                                
                                <View style = {[styles.inputContainer, {height: (deviceHeight/2)}]}>
                                    <Text style = {styles.inputLabel}>
                                        Category
                                    </Text>
                                    <Text style = {[styles.attributionText, {marginTop: 10}]}>
                                        Choose from:
                                    </Text>
                                    <Text style = {[styles.attributionText, {margin: 10}]}>
                                        • Math
                                    </Text>
                                    <Text style = {[styles.attributionText, {margin: 10}]}>
                                        • Science
                                    </Text>
                                    <Text style = {[styles.attributionText, {margin: 10}]}>
                                        • Social Studies
                                    </Text>
                                    <Text style = {[styles.attributionText, {margin: 10}]}>
                                        • English
                                    </Text>
                                    <Text style = {[styles.attributionText, {margin: 10}]}>
                                        • Fine-Arts
                                    </Text>
                                    <Text style = {[styles.attributionText, {margin: 10}]}>
                                        • Teacher Help
                                    </Text>
                                    <TextInput
                                        style = {[styles.textInput, {marginBottom: 20}]}
                                        onChangeText = {(category) => this.setState({category})}
                                        value = {this.state.category}
                                    />
                                </View>

                                <TouchableHighlight
                                    onPress = {this.createProject}
                                >
                                    <View style = {[styles.button, {backgroundColor: '#fb774b'}]}>
                                        <Text style = {styles.buttonText}>
                                            Submit
                                        </Text>
                                    </View> 
                                </TouchableHighlight>
                            </View>
                        </ScrollView>
                    </View>

                    <View style = {[{ display: this.state.attributionsPageDisplay }, { height: (deviceHeight / 10) * 9 }]}>
                        <View style = {styles.headingContainer}>
                            <Text style = {styles.header}>
                                Attributions
                            </Text>
                        </View>

                        <ScrollView>
                            <View style = {styles.attributionsContainer}>
                                <Text style = {styles.attributionText}>
                                    Home Icon: Dave Gandy / CC BY (https://creativecommons.org/licenses/by/3.0)
                                </Text>
                                <Text style = {styles.attributionText}>
                                    To-do list Icon by Amit Jakhu on Iconscout
                                </Text>
                                <Text style = {styles.attributionText}>
                                    Request Icon: Created by Sophia Bai from Noun Project
                                </Text>
                                <Text style = {styles.attributionText}>
                                    Attibutions Icon: Icons made by Freepik www.flaticon.com
                                </Text>
                                <Text style = {styles.attributionText}>
                                    Science Icon: Created by Guillaume Beau from Noun Project
                                </Text>
                                <Text style = {styles.attributionText}>
                                    Math Icon by Diacanvas Studio
                                </Text>
                                <Text style = {styles.attributionText}>
                                    Social Studies Icon: Icons made by from www.flaticon.com
                                </Text>
                                <Text style = {styles.attributionText}>
                                    English Icon: Created by Jakub Čaja from Noun Project
                                </Text>
                                <Text style = {styles.attributionText}>
                                    Test Icon: Icons made by Freepik from www.flaticon.com
                                </Text>
                                <Text style = {styles.attributionText}>
                                    Fine-Arts Icon: Icons made by from www.flaticon.com
                                </Text>

                            </View>
                        </ScrollView>
                    </View>

                    
                        
                    <View style = {styles.navBar}>
                        <TouchableHighlight 
                            onPress = {this.handleHomePagePress}
                            style = {styles.navBarButton}
                        >
                            <View style = {styles.navBarButton}>
                                <Image
                                    style = {styles.navBarImage}
                                    source = {{ uri: 'https://codehs.com/uploads/65e9abda6061c8f932808209986d03e4' }}
                                />
                                <Text style = {styles.navBarButtonText}>
                                    Home
                                </Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight 
                            onPress = {this.handleProjectsPagePress}
                            style = {styles.navBarButton}
                        >
                            <View style = {styles.navBarButton}>
                                <Image
                                    style = {styles.navBarImage}
                                    source = {{ uri: 'https://codehs.com/uploads/b841f46765cf2fc7be43f27e1a0d264e' }}
                                />
                                <Text style = {styles.navBarButtonText}>
                                    Projects
                                </Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight 
                            onPress = {this.handleRequestPagePress}
                            style = {styles.navBarButton}
                        >
                            <View style = {styles.navBarButton}>
                                <Image
                                    style = {styles.navBarImage}
                                    source = {{ uri: 'https://codehs.com/uploads/6fbc2956c9f952fd1468f5fb4c0e0fe6' }}
                                />
                                <Text style = {styles.navBarButtonText}>
                                    Request
                                </Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight 
                            onPress = {this.handleAttributionsPagePress}
                            style = {styles.navBarButton}
                        >
                            <View style = {styles.navBarButton}>
                                <Image
                                    style = {styles.navBarImage}
                                    source = {{ uri: 'https://codehs.com/uploads/cf24b52ac81e35cd4d227b63828a7e23' }}
                                />
                                <Text style = {styles.navBarButtonText}>
                                    Attributions
                                </Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                </View>
        ); 
    }
}



