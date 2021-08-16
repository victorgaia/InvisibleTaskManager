import React from 'react';
import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  width: 90%;
`

export const Title = styled.Text`
  color: #000;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
`

export const Input = styled.TextInput`
  border: 2px solid   #2b40c4 ;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #000;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #2b40c4;
  border-radius: 9px;
  width: 90%;
  padding: 20px;
  align-items: center;
`

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

const HEADER_BACKGROUND = "#3498db";
const CONTENT_BACKGROUND = "#f9f9f9";

export const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: HEADER_BACKGROUND,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor:
      Platform.OS === "ios" ? CONTENT_BACKGROUND : HEADER_BACKGROUND,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: HEADER_BACKGROUND,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  content: {
    padding: 20,
    backgroundColor: CONTENT_BACKGROUND,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    color: "#7d7e79",
    fontSize: 16,
    lineHeight: 30,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "#ff7675",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#2980b9",
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
