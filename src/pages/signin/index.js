import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { validationSchema } from "./validation";
import { styles } from "./styles";
import FormField from "./FormField";

export default function LOGIN() {
  function onSubmitHandler(values) {
    // https://reactnative.dev/docs/alert
    Alert.alert(
      "Register Successfully!",
      "Form data: " + JSON.stringify(values)
    );
  }

  function isFormValid(isValid, touched) {
    return isValid && Object.keys(touched).length !== 0;
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>LOGIN</Text>
        </View>

        {/* https://github.com/APSL/react-native-keyboard-aware-scroll-view */}
        <KeyboardAwareScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={150}
        >
          {/* https://formik.org/docs/overview */}
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={onSubmitHandler}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>

                <FormField
                  field="email"
                  label="Email Address"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormField
                  field="password"
                  label="Password"
                  secureTextEntry={true}
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <TouchableOpacity
                  onPress={handleSubmit}
                >
                  <View
                    style={[
                      styles.button,
                    ]}
                  >
                    <Text style={styles.buttonText}>LOGIN</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}