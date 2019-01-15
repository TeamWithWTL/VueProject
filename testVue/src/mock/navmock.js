import Mock from 'mockjs'

const navdata = Mock.mock({
  'nav|1-10': [
    '@string("lower", 1, 3)'
  ]
})
const submenu = Mock.mock({
  'array|3-10': [{
    'submenu|3-10': {
      'name': '@string("lower", 5, 10)',
      'ischild': '@boolean',
      'child': {'child|1-3': ['@string("lower", 5, 10)']}
    }
  }]
})
export default {
  navdata,
  submenu
}
