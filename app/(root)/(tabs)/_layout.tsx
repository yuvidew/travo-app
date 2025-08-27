import React from 'react';
import { Tabs } from 'expo-router';


import { Icons } from '../../../constants/icons';
import TabIcon from '../../../components/TabIcon';


const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    borderTopColor: "#318CE7",
                    borderTopWidth: 1,
                    minHeight: 70,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            icon={focused ? Icons.home_focus : Icons.home}
                            // title="Home"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            icon={Icons.search}
                            // title="Search"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="booked"
                options={{
                    title: "Booked",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            icon={focused ? Icons.save_focus : Icons.save}
                            // title="Search"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            icon={focused ? Icons.user_focus : Icons.user}
                            // title="Profile"
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
