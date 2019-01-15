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
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div id="title" class="layout-logo">智能巡检系统</div>
          <div class="layout-nav">
            <MenuItem v-bind:key="nav.id" v-for="nav in navlist" v-bind:name="nav">
              <Icon type="ios-navigate"></Icon>
              {{nav}}
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" >
            <div v-for="array in sublist" :key="array.id">
                <Submenu v-if="array.submenu.ischild" :name="array.submenu.name" :key="array.submenu.id">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>{{array.submenu.name}}
                  </template>
                  <MenuItem :key="sub.id" :name="sub" v-for="sub in array.submenu.child.child" >{{sub}}</MenuItem>
                </Submenu>
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
      navlist: [],
      sublist: {}
    }
  },
  methods: {
    AddNavList () {
      this.navlist = navdata.navdata.nav
    },
    AddSubList () {
      this.sublist = navdata.submenu.array
    }
  },
  created: function () {
    this.AddNavList()
    this.AddSubList()
  }
}
</script>
