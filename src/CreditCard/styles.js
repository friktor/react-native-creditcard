import { margin, padding, flex } from "../utils/mixins"   
import { StyleSheet, Platform } from "react-native"

const defaultTheme = StyleSheet.create({
  card: {
    height: 180,
    padding: 3,
    width: 300,
  },

  dashed: {
    borderColor: 'rgba(255,255,255, 0.3)',
    borderStyle: 'dashed',
    borderRadius: 3,
    borderWidth: 1,
  },

  front: {
    borderWidth: 1, borderColor: 'rgba(0,0,0, 0.1)',
    ...flex('column', null, 'space-between'),

    borderRadius: 10,
    padding: 10,
    flex: 1
  },

  back: {
    borderWidth: 1, borderColor: 'rgba(0,0,0, 0.1)',
    ...flex('column', null, 'center'),

    ...padding(10, 0),
    borderRadius: 10,
    flex: 1,
    ...Platform.select({
      ios: {
        shadowColor: "#FFF",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
          height: 0,
          width: 0
        }
      }
    }) 
  },

  bankLogoContainer: {
    ...flex('row', 'center', 'flex-start'),
    backgroundColor: 'transparent'
  },

  frontLogoImage: {
    height: 30, width: '60%'
  },

  cardNumber: {
    color: 'rgba(255, 255, 255, 0.85)',
    textShadowOffset: { height: 1, width: -1 },
    textShadowColor: '#000',
    textShadowRadius: 1,

    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: '300',
    marginTop: 15,
    fontSize: 16,
  },

  emptyNumber: {
    ...margin(20, 30, 0, 30),
    height: 25,
  },

  info: {
    ...flex('row', 'center', 'space-between'),
    ...padding(0, 15),
    marginTop: 25,
  },

  employer: {
    ...flex('column', 'flex-start', 'flex-start'),
  },

  employerText: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    fontSize: 11,

    textShadowOffset: { height: 1, width: 0 },
    textShadowColor: '#000',
    textShadowRadius: 1,
  },

  frontBrandImage: {
    ...flex('row', 'center', 'flex-end'),
    height: 26, width: 40
  },

  cvcContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    ...flex('row', 'center', 'flex-end'),
    height: 30
  },

  cvcText: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    ...flex('row', 'center', 'center'),
    textAlign: 'center',
    color: '#000',
    paddingTop: 6,
    fontSize: 15,
    width: '25%',
    height: 30
  }
})

export default defaultTheme
