import React from 'react';
import { 
  KeyboardView, 
  Title, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton
} from './styles';
import Header from '../../components/index';

const Signin: React.FC = () => {
    return(
        <KeyboardView>
          <Header />
          <Container>
            <Title>LOGIN</Title>
            <Input 
              placeholderTextColor="#000"
              placeholder="E-mail"
            />
            <Input 
              placeholderTextColor="#000"
              placeholder="Senha"
              secureTextEntry
            />
            <ButtonSubmit>
              <TextButton>
                Entrar
              </TextButton>
            </ButtonSubmit>
          </Container>
        </KeyboardView>
      )
}

export default Signin;