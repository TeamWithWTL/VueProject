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
        <Menu mode="horizontal" theme="dark" active-name="1" v-on:on-select="selectnav($event)">
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
        <Sider hide-trigger :style="{background: '#fff', minHeight: '80vh'}">
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
                <MenuItem v-else :name="array.name">
                  {{array.name}}
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
          <Content :style="{padding: '24px', minHeight: '70vh', background: '#fff'}">content</Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
// 模拟的数据有了后端就没用了
import navdata from './mock/navmock.js'

export default {
  data: () => {
    return {
      navlist: [], // 顶部导航栏数据
      sublist: [] // 测导航栏数据
    }
  },
  methods: {
    // 动态添加导航栏的数据
    AddNavList () {
      this.navlist = navdata.navdatas
    },
    // 动态添加测导航栏的数据
    AddSubList (sub) {
      // 判断上导航栏的点击
      if (sub === 'basedata') {
        this.sublist = navdata.basedata
      }
      if (sub === 'ledge') {
        this.sublist = navdata.ledge
      }
      if (sub === 'together') {
        this.sublist = navdata.together
      }
    },
    // 点击获取名字
    selectnav (sub) {
      // 通过获取的名字为左侧导航栏赋值
      this.AddSubList(sub)
    }
  },
  created: function () {
    this.AddNavList()
    // 给左侧导航栏赋初试值
    this.AddSubList('basedata')
  }
}
</script>
