
<template>
    <div class="layout" >
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
            <div class="logo-con">
                <a href="./"><img src="logo.png" key="max-logo" /></a>
            </div>
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" @on-select="jumpAnchor">
                    <MenuItem name="我的收藏">
                        <Icon type="ios-heart" />
                        <span>我的收藏</span>
                    </MenuItem>
                    <MenuItem name="常用网址">
                        <Icon type="ios-navigate"></Icon>
                        <span>常用网址</span>
                    </MenuItem>
                    <MenuItem :name="item.title" v-for="(item,index) in data" :key="index">
                        <Icon type="ios-search"></Icon>
                        <span>{{ item.title }}</span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout :style="{height:windowHeight +'px'}">
            <Header class="layout-header-bar">欢迎使用
                <Input v-model="search" placeholder="请输入内容搜搜..." class="search" @on-enter="searchData"/>
                <span class="search-text"><Button type="primary" icon="search" @click="searchData">搜索</Button></span>
                <Button type="success" icon="plus-round" @click="resetSearch" v-show="searchStatus" >重置</Button>
            </Header>
                <Content >
                    <NavSub :data="data" :spinShow="spinShow"></NavSub>
                </Content>
                <Footer class="layout-footer-center">
                    WShuai ©2020 Created by WShuai
                    <a href="https://github.com/yufajieluo/compass" target="_blank">WS GitHub</a>
                    ©Forked from Lework
                    <a href="https://github.com/lework/lenav" target="_blank">lework GitHub</a>
                </Footer>
            </Layout>
        </Layout>
        <BackTop></BackTop>
    </div>
</template>
<script>
import NavSub from '@/components/card/sub'
// import Data from '@/data/data'
import Data from '@/data/data.company'
console.log('--------0',Data)
export default {
    data () {
        return {
            isCollapsed: false,
            search: '',
            searchStatus: false,
            data: Data,
            sourceData: '',
            serarchNum: 0,
            spinShow: false
        }
    },
    computed: {
        windowHeight: function () {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        },

        menuitemClasses: function () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },

    methods: {
        jumpAnchor (name) {
            if (document.documentElement.clientWidth <= 768 ){
                    this.isCollapsed = true
            }
            document.querySelector('#' + name).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        },
        searchData () {
            if (typeof this.search === 'undefined' || this.search === null || this.search === '') {
                this.$Message.error('输入内容呀！')
                return true
            }
            if (!this.searchStatus) {
                this.sourceData = JSON.parse(JSON.stringify(this.data))
            }
            this.searchStatus = true
            for (let d in this.data) {
                for (let i = 0; i < this.data[d]['nav'].length; i++) {
                    if (this.data[d]['nav'][i]['name'].toLowerCase().indexOf(this.search.toLowerCase()) === -1) {
                        if (this.data[d]['nav'][i]['link'].toLowerCase().indexOf(this.search.toLowerCase()) === -1) {
                            this.data[d]['nav'].splice(i--, 1)
                        } else {
                            this.serarchNum++
                        }
                    } else {
                        this.serarchNum++
                    }
                }
            }
            if (this.serarchNum === 0) {
                this.$Message.error('没找到哦.')
            } else {
                this.$Message.success('查找到了' + this.serarchNum + '个相近的.')
            }
        },
        resetSearch () {
            this.spinShow = true
            this.searchStatus = false
            this.search = ''
            this.serarchNum = 0
            this.data = JSON.parse(JSON.stringify(this.sourceData))
            setTimeout(() => {
                this.spinShow = false
            }, 1000)
        }
    },
    components: {
        NavSub
    }
}
</script>

<style lang=less scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
.ivu-layout-sider {
    z-index: 100;
    //height: -webkit-fill-available;
}
.logo-con img {
    width: 180px;
    margin: 10px;
}
.search {
    margin-left: 10px;
    width: 200px;
    @media screen {
        @media (max-width: 768px) {
            width: auto;
        }
    }
}
.search-text {
    margin: 0 10px;
    @media screen {
        @media (max-width: 768px) {
            margin: 0 3px;
        }
    }
}
.ivu-layout-header {
    @media screen {
        @media (max-width: 768px) {
            padding: 0 8px;
            //height: -webkit-fill-available;
        }     
    }
}
</style>
