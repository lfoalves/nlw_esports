import { ImageBackground } from 'react-native';

import brackgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
  children: React.ReactNode

}

export function Brackground({ children }: Props) {
  return (
    <ImageBackground
      source={brackgroundImg}
      defaultSource={brackgroundImg}
      style={styles.container}
    >
      { children }
    </ImageBackground>
  );
}