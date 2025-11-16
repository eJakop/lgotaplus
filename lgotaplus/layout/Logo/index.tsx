import { IMAGES } from '@/constatns/images';
import { COLORS } from '@/constatns/ui';
import { Image, StyleSheet, View } from 'react-native';



const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.IMAGE_LOGO}
        style={styles.image}
        width={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.MAIN_COLOR,
    marginTop: 100
  },
  image: {
    width: 150,
    height: 150,
    resizeMode:'contain'
  },
});

export default Logo;