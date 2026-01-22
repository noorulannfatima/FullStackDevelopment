import { Profile } from '@/components/Profile';
import { ScrollView, StyleSheet } from 'react-native';

const DUMMY_DATA = {
  user: {
    name: 'John Doe',
    handle: '@johndoe',
    avatar: 'https://picsum.photos/200',
    bio: 'Software developer | Coffee enthusiast | Travel lover',
  },
  stats: [
    { label: 'Posts', value: '245' },
    { label: 'Followers', value: '12.4k' },
    { label: 'Following', value: '435' },
  ],
  activities: [
    {
      id: '1',
      type: 'post',
      title: 'Posted a new photo',
      time: '2h ago',
      icon: 'images-outline' as const,
    },
    {
      id: '2',
      type: 'like',
      title: 'Liked a comment',
      time: '4h ago',
      icon: 'heart-outline' as const,
    },
    {
      id: '3',
      type: 'comment',
      title: 'Commented on a post',
      time: '1d ago',
      icon: 'chatbubble-outline' as const,
    },
    {
      id: '4',
      type: 'share',
      title: 'Shared a post',
      time: '2d ago',
      icon: 'share-outline' as const,
    },
  ],
};

export default function ProfilePage() {
  const handleEditProfile = () => {
    // Handle edit profile action
  };

  return (
    <ScrollView style={styles.container}>
      <Profile
        user={DUMMY_DATA.user}
        stats={DUMMY_DATA.stats}
        activities={DUMMY_DATA.activities}
        onEditProfile={handleEditProfile}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
