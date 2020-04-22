<template>
  <!-- 输入任意文本 -->
  <div>
    <van-row gutter="20" type="flex" align="center">
      <van-col span="8">
        <van-dropdown-menu>
          <van-dropdown-item v-model="village" :options="option1" size="small"/>
        </van-dropdown-menu>
      </van-col>
      <van-col span="10">
        <van-cell-group>
          <van-field v-model="endArea" placeholder="输入内容" size="small"/>
        </van-cell-group>
      </van-col>
      <van-col span="6">
        <van-button type="info" size="small">搜索</van-button>
      </van-col>
    </van-row>

    <van-card price="水电工" currency="" desc="邯郸峰峰" title="xxx设计公司" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" centered="true">
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">联系他</van-button>
        <van-button size="mini">查看施工案例</van-button>
      </template>
    </van-card>

    <van-card price="水电工" currency="" desc="邯郸峰峰" title="xxx设计公司" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" centered="true">
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">联系他</van-button>
        <van-button size="mini">查看施工案例</van-button>
      </template>
    </van-card>
    <van-card price="水电工" currency="" desc="邯郸峰峰" title="xxx设计公司" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" centered="true">
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">联系他</van-button>
        <van-button size="mini">查看施工案例</van-button>
      </template>
    </van-card>
    
  </div>
</template>
<script>
import Vue from 'vue';
import { Field } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Button } from 'vant';
import { Col, Row } from 'vant';
import { Notify } from 'vant';
import { Card } from 'vant';
Vue.use(Notify);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Field);
Vue.use(Card);

export default {
  data() {
    return {
      name: '',
      idCard: '',
      phone: '',
      village: '0',
      bodyHot: '',
      startArea: '',
      endArea: '',
      option1: [
        { text: '全部', value: '0' },
        { text: '施工队', value: '1' },
        { text: '装修公司', value: '2' }
      ]
    };
  },
  methods: {
    // 获取数据列表
    saveDate () {
      this.dataListLoading = true
      this.$http({
        url: this.$http.adornUrl('/ouvillagerInformation/save'),
        method: 'post',
        data: {'name':this.name,'idCard':this.idCard,'phone':this.phone,'village':this.village,'bodyHot':this.bodyHot,'startArea':this.startArea,'endArea':this.endArea}
      }).then((data) => {
        if (data && data.code === 0) {
            this.$notify('记录成功');
        } else {
            this.$notify('记录失败');
        }
      })
    },
  }
};
</script>
