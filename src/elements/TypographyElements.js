import styled from 'styled-components'

const fontSizes = {
  medium: '1.125rem',
  small: '1rem',
  xSmall: '0.875rem',
  default: '1.125rem',
}

const lineHeights = {
  medium: '1.4375rem',
  small: '1.375rem',
  xSmall: '1.125rem',
  default: '1.4375rem',
}

const fontWeights = {
  normal: 400,
  bold: 700,
  default: 400,
}

export const P = styled.p`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-size: ${(props) => fontSizes[props.size] || fontSizes['default']};
  line-height: ${(props) => lineHeights[props.size] || lineHeights['default']};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'none')};
  font-weight: ${(props) => fontWeights[props.weight] || fontWeights['default']};
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1
      case 'dark2':
        return props.theme.colors.dark2
      case 'dark3':
        return props.theme.colors.dark3
      case 'light1':
        return props.theme.colors.light1
      case 'light2':
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
`

export const H1 = styled.h1`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 400;
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1
      case 'dark2':
        return props.theme.colors.dark2
      case 'dark3':
        return props.theme.colors.dark3
      case 'light1':
        return props.theme.colors.light1
      case 'light2':
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
`

export const H2 = styled.h2`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-size: 1.5rem;
  line-height: 1.875rem;
  font-weight: 400;
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1
      case 'dark2':
        return props.theme.colors.dark2
      case 'dark3':
        return props.theme.colors.dark3
      case 'light1':
        return props.theme.colors.light1
      case 'light2':
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
`
