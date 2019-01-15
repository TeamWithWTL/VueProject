<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 600px;
  margin-left: 150px;
}
#title {
  font-size: 20px;
  font-family: "微软雅黑";
  font-weight: bold;
  color: #f5f7f9;
  top: 0px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1" v-on:on-select="lala($event)">
          <div id="title" class="layout-logo">智能巡检系统</div>
          <div class="layout-nav" >
            <MenuItem v-bind:key="nav.key" v-for="nav in navlist" v-bind:name="nav.key">
              <Icon type="ios-navigate"></Icon>
              {{nav.value}}
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" >
            <!-- 遍历读取到的测导航栏的数据 -->
            <div v-for="array in sublist" :key="array.id">
              <!-- 判断是否存在下拉选，如果存在则添加下拉选的按钮 -->
                <Submenu v-if="array.ischild" :name="array.name" :key="array.id">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>{{array.name}}
                  </template>
                  <!-- 下拉选里的选项 -->
                  <MenuItem :key="sub.id" :name="sub" v-for="sub in array.child" >
                    {{sub}}
                  </MenuItem>
                </Submenu>
                <!-- 没有下拉选的按钮 -->
                <MenuItem v-else :name="array.submenu.name">
                  {{array.submenu.name}}
                </MenuItem>
            </div>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">Content</Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import navdata from './mock/navmock.js'

export default {
  data: () => {
    return {
      navlist: [], // 顶部导航栏数据
      sublist: [], // 测导航栏数据
      name: ''
    }
  },
  methods: {
    // 动态添加导航栏的数据
    AddNavList () {
      this.navlist = navdata.navdatas
    },
    // 动态添加测导航栏的数据
    AddSubList (sub) {
      if (name === 'basedata') {
        this.sublist = navdata.basedata
        console.log(name)
      }
      if (name === 'ledge') {
        this.sublist = navdata.ledge
      }
      if (name === 'together') {
        this.sublist = navdata.together
      }
    },
    lala (name) {
      console.log(name)
      this.AddSubList(name)
    }
  },
  created: function () {
    this.AddNavList()
    this.AddSubList('basedata')
  },
  evil: function (fn) {
    var Fn = Function// 一个变量指向Function，防止有些前端编译工具报错
    return new Fn('return ' + fn)()
  }
}
</script>
