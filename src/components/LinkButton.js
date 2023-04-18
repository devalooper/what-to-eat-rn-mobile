import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Link } from "@react-navigation/native"
import { typography } from '@/theme';
import { Text, Box } from 'native-base';
import { color } from 'react-native-reanimated';
import { Button } from './Button';

const styles = StyleSheet.create({
  linkButton: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    zIndex: 1,
  },
});

export function LinkButton({ style, textStyle, title, to, ...rest }) {
  const { colors } = useTheme();

  return (
    <Link to={to} style={[styles.linkButton, { color: colors.text }, typography.label, textStyle]}>
      {title}
    </Link>
  );
}

LinkButton.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  style: null,
  textStyle: null,
};
