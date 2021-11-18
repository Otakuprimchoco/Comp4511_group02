import {
    SingleDropdownList,
    ReactiveBase,
    ReactiveList,
    SelectedFilters,
} from '@appbaseio/reactivesearch-native'; // 0.6.0

// importing other libraries
import Expo from 'expo';
import React, { Component } from 'react';
import {
    FlatList,
    Image,
    Platform,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    View,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.3
import {
    Body,
    Button,
    Header,
    Left,
    Spinner,
    Text,
    Title,
} from 'native-base'; // 2.3.8
import { FontAwesome as Icon, Ionicons } from '@expo/vector-icons'; // 6.2.2
import { web } from 'react-native-communications'; // 2.2.1

import { GOOD_BOOKS as APPBASE_CONFIG } from './common/credentials';

import {
    DEFAULT_COLORS as COLORS,
    commonStyles as common,
} from './common/helpers';

import styles from './Styles';
// imports end

const COMPONENT_DEMO = 'SingleDropdownList';

class SingleDropdownListView extends Component {
    render () {
        const { isReady } = this.state;
        const { navigation, ...storyProps } = this.props;  // eslint-disable-line

        const isIOS = Platform.OS === 'ios';

        const headerColor = isIOS ? '#1A237E' : 'white';

        if ( !isReady ) {
            return (
                <View style={common.alignCenter}>
                    <StatusBar
                        backgroundColor={COLORS.primary}
                        barStyle="light-content"
                    />
                    {this.renderStatusBar()}
                    <Spinner color={COLORS.primary} />
                </View>
            );
        }

        const header = (
            <Header style={{ alignSelf: 'center' }}>
                <Left style={{ flex: 0 }}>
                    <Button
                        transparent
                        onPress={() => navigation.navigate( 'DrawerToggle' )}
                    >
                        <Ionicons
                            name="md-menu"
                            size={25}
                            color={headerColor}
                        />
                    </Button>
                </Left>
                <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Title
                        style={{
                            color: headerColor,
                            fontSize: 18,
                            textAlign: 'center',
                            left: -5,
                        }}
                    >
                        {COMPONENT_DEMO}
                    </Title>
                </Body>
            </Header>
        );

        const componentMarkup = (
            <View style={styles.componentContainer}>
                <SingleDropdownList
                    componentId="SingleDropdownListSensor"
                    dataField="original_series.raw"
                    size={30}
                    filterLabel="Series"
                    {...storyProps} // injecting props from navigator drawer story
                />
            </View>
        );

        return (
            <ReactiveBase
                app={APPBASE_CONFIG.app}
                credentials={APPBASE_CONFIG.credentials}
                type={APPBASE_CONFIG.type}
            >
                <View style={{ paddingTop: StatusBar.currentHeight, backgroundColor: COLORS.primary }} />
                {this.renderStatusBar()}
                {header}
                {componentMarkup}
                <ScrollView>
                    <View style={[common.container, common.column]}>
                        <View
                            style={[common.fullWidth, common.alignCenter, styles.results]}
                        >
                            <SelectedFilters style={{ alignSelf: 'flex-start', marginTop: 50 }} />
                            <ReactiveList
                                componentId="ReactiveList"
                                dataField="original_title"
                                size={5}
                                onAllData={this.onAllData}
                                // onData={this.itemCardMarkup}
                                pagination
                                paginationAt="bottom"
                                react={{
                                    and: ['SingleDropdownListSensor'],
                                }}
                                style={{ marginTop: 50 }}
                                showResultStats={false}
                                defaultQuery={
                                    () => ( {
                                        query: {
                                            match_all: {},
                                        },
                                    } )
                                }
                            />
                        </View>
                    </View>
                </ScrollView>
            </ReactiveBase>
        );
    }

    state = {
        isReady: false,
    }

    async componentWillMount () {
        await Expo.Font.loadAsync( {
            Roboto: require( 'native-base/Fonts/Roboto.ttf' ), // eslint-disable-line global-require
            Roboto_medium: require( 'native-base/Fonts/Roboto_medium.ttf' ), // eslint-disable-line global-require
            Ionicons: require( 'native-base/Fonts/Ionicons.ttf' ), // eslint-disable-line global-require
        } );

        this.setState( {
            isReady: true,
        } );
    }

    itemCardMarkup = bookData => (
        <TouchableOpacity
            onPress={
                () => web( `https://google.com/search?q=${ bookData.original_title }` )
            }
        >
            <View style={[styles.fullWidth, styles.booksRow]}>
                <View style={styles.booksRowContainer}>
                    <Image
                        source={{
                            uri: bookData.image_medium,
                        }}
                        style={styles.booksImage}
                    />
                </View>
                <View style={styles.bookInfoSection}>
                    <Text style={styles.bookTitle}>
                        {bookData.title}
                    </Text>
                    <Text style={styles.bookAuthorSection}>
                        <Text style={styles.bookAuthor}>
                            {bookData.authors}
                        </Text>
                    </Text>
                    <Text style={styles.bookPublication}>
                        Pub {bookData.original_publication_year}
                    </Text>
                    <View style={styles.bookStars}>
                        {
                            [...Array( bookData.average_rating_rounded )]
                                .map( ( e, i ) => (
                                    <Icon
                                        key={i} // eslint-disable-line react/no-array-index-key
                                        name="star"
                                        size={20}
                                        color="gold"
                                    />
                                ) )
                        }
                        <Text style={styles.bookRatings}>
                            ({bookData.average_rating})
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    onAllData = items => (
        <FlatList
            style={styles.listContainer}
            data={items || []}
            keyExtractor={item => item.id}
            renderItem={
                ( { item } ) => this.itemCardMarkup( item )
            }
        />
    )

    renderStatusBar = () => (
        <StatusBar
            backgroundColor={COLORS.primary}
            barStyle="light-content"
        />
    )
}

const navigationOptionsBuilder = ( drawerLabel, iconName ) => ( {
    drawerLabel,
    drawerIcon: iconName ? ( { tintColor, focused } ) => ( // eslint-disable-line react/prop-types
        <Ionicons
            name={focused ? `${ iconName }` : `${ iconName }-outline`}
            size={26}
            style={{ color: tintColor }}
        />
    ) : null,
} );

const RootDrawer = DrawerNavigator( {
    basic: {
        navigationOptions: navigationOptionsBuilder( 'Basic', 'ios-home' ),
        screen: ( { navigation } ) => ( // eslint-disable-line
            <SingleDropdownListView
                navigation={navigation}
            />
        ),
    },
    withoutPlaceholder: {
        navigationOptions: navigationOptionsBuilder( 'Without placeholder' ),
        screen: ( { navigation } ) => ( // eslint-disable-line
            <SingleDropdownListView
                placeholder=""
                showFilter={false}
                navigation={navigation}
            />
        ),
    },
    withSize: {
        navigationOptions: navigationOptionsBuilder( 'With max size as 5' ),
        screen: ( { navigation } ) => ( // eslint-disable-line
            <SingleDropdownListView
                size={6}
                navigation={navigation}
            />
        ),
    },
    withoutCount: {
        navigationOptions: navigationOptionsBuilder( 'Without count' ),
        screen: ( { navigation } ) => ( // eslint-disable-line
            <SingleDropdownListView
                showCount={false}
                navigation={navigation}
            />
        ),
    },
    withCustomStyles: {
        navigationOptions: navigationOptionsBuilder( 'With custom styles' ),
        screen: ( { navigation } ) => ( // eslint-disable-line
            <SingleDropdownListView
                // title="Series List"
                innerStyle={{
                    title: {
                        color: 'purple',
                    },
                    label: {
                        color: 'purple',
                    },
                }}
                navigation={navigation}
            />
        ),
    },
    withCustomSort: {
        navigationOptions: navigationOptionsBuilder( 'With sort Z->A' ),
        screen: ( { navigation } ) => ( // eslint-disable-line
            <SingleDropdownListView
                sortBy="desc"
                navigation={navigation}
            />
        ),
    },
    withSelectAll: {
        navigationOptions: navigationOptionsBuilder( 'With SelectAll option' ),
        screen: ( { navigation } ) => ( // eslint-disable-line
            <SingleDropdownListView
                selectAllLabel="All Series"
                navigation={navigation}
            />
        ),
    },
    withDefaultSelected: {
        navigationOptions: navigationOptionsBuilder( 'With defaultSelected' ),
        screen: ( { navigation } ) => ( // eslint-disable-line
            <SingleDropdownListView
                defaultSelected="Discworld"
                navigation={navigation}
            />
        ),
    },
    playground: {
        navigationOptions: navigationOptionsBuilder( 'Playground', 'ios-flask' ),
        screen: ( { navigation } ) => ( // eslint-disable-line
            <SingleDropdownListView
                // title="Series List"
                size={100}
                showCount
                sortBy="count"
                selectAllLabel="All Series"
                defaultSelected="Discworld"
                placeholder="Select one"
                showFilter={false}
                filterLabel="Series filter"
                innerStyle={{
                    title: {
                        color: 'purple',
                    },
                    label: {
                        color: 'purple',
                    },
                }}
                navigation={navigation}
            />
        ),
    },
} );

class App extends Component {
    state: {};
    render () {
        return <RootDrawer />;
    }
}

export default App;
