import { theme, ThemeConfig } from "antd";

// '#bfbf13'

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
      colorPrimary: '#8bc43b'
  },
  components: {
   Button: {
      primaryShadow: 'transparent',
      colorBorder: 'transparent'
   }
  }
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
   colorBgLayout: '#131314',
   colorBgContainer: '#2b2b2b',
   colorPrimary: '#8bc43b',
  },
  components: {
   Button: {
      primaryShadow: 'transparent'
   }}
};


export const lightSideTheme: ThemeConfig = {
   algorithm: theme.defaultAlgorithm,
   token: {
      colorFill: '#bfbf13',
      colorPrimary: '#8bc43b'
   },
   components: {
      Layout: {
         colorBgLayout: '#c1c1c1'
      },
      Tree: {
         colorBgContainer: '#FFFFFF'
      },
      Button: {
         colorBgContainer: '#FFFFFF',
         primaryShadow: 'transparent'
      },
      Card: {
         colorBgContainer: '#FFFFFF'
      },
      Input: {
         colorBgContainer: '#FFFFFF'
      },
   }
}

export const darkSideTheme: ThemeConfig = {
   token: {
      colorBgLayout: '#494a4b',
      colorPrimary: '#8bc43b'
   },
   components: {
      Tree: {
         colorBgContainer: '#2b2b2b'
      },
      Button: {
         colorBgContainer: '#2b2b2b',
         defaultShadow: 'transparent'
      },
      Card: {
         colorBgContainer: '#2b2b2b'
      },
      Input: {
         colorBgContainer: '#2b2b2b'
      }
   }
};
