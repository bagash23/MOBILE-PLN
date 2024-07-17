const size = {
  xxsmall: 8,
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 20,
  xxxlarge: 24,
};

const fontFamily = {
  bold: 'Poppins-Bold',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
};

const Fonts = {
  regular: {
    fontFamily: fontFamily.regular,
    fontWeight: 'normal' as const,
  },
  medium: {
    fontFamily: fontFamily.medium,
    fontWeight: 'normal' as const,
  },
  bold: {
    fontFamily: fontFamily.bold,
    fontWeight: 'normal' as const,
  },
  fontFamily,
  size,
};

export default Fonts;
