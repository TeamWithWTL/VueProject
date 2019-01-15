import Mock from 'mockjs'

const navdata = Mock.mock({
  'nav|1-10': [
    '@string("lower", 1, 3)'
  ]
})
const submenu = Mock.mock({
  'array|5': [{
    'submenu|3-10': {
      'name': '@string("lower", 5, 10)',
      'ischild': '@boolean',
      'child': {'child|1-3': ['@string("lower", 5, 10)']}
    }
  }]
})
const navdatas = Mock.mock([
  {'key': 'basedata', 'value': '基础数据'},
  {'key': 'ledge', 'value': '台账'},
  {'key': 'together', 'value': '协同工作'}
])
const basedata = Mock.mock(
  [{
    'name': '楼宇',
    'ischild': true,
    'child': [
      '一号楼', '二号楼', '三号楼'
    ]
  },
  {
    'name': '小区',
    'ischild': false
  },
  {
    'name': '随便写了',
    'ischild': false
  }
  ]
)
const ledge = Mock.mock(
  [{
    'name': '楼宇1',
    'ischild': true,
    'child': [
      '一号楼1', '二号楼1', '三号楼1'
    ]
  },
  {
    'name': '小区1',
    'ischild': false
  },
  {
    'name': '随便写了1',
    'ischild': false
  }
  ]
)
const together = Mock.mock(
  [{
    'name': '楼宇2',
    'ischild': true,
    'child': [
      '一号楼2', '二号楼2', '三号楼2'
    ]
  },
  {
    'name': '小区2',
    'ischild': false
  },
  {
    'name': '随便写了2',
    'ischild': false
  }
  ]
)
export default {
  navdata,
  submenu,
  navdatas,
  basedata,
  ledge,
  together
}
