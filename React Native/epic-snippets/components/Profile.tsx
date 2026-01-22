import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export type UserProfile = {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
};

export type ProfileStat = {
  label: string;
  value: string;
};

export type Activity = {
  id: string;
  type: string;
  title: string;
  time: string;
  icon: keyof typeof Ionicons.glyphMap;
};

type ProfileProps = {
  user: UserProfile;
  stats: ProfileStat[];
  activities: Activity[];
  onEditProfile?: () => void;
};

export const Profile = ({ user, stats, activities, onEditProfile }: ProfileProps) => {
  return (
    <>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.handle}>{user.handle}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        <Pressable style={styles.editButton} onPress={onEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </Pressable>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {activities.map((activity) => (
          <Link key={activity.id} href="/" asChild>
            <Pressable style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Ionicons name={activity.icon} size={24} color="#007AFF" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
            </Pressable>
          </Link>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  handle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  editButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#007AFF',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 14,
    color: '#666',
  },
});
