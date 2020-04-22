<template>
<div>
  <van-form @submit="onSubmit">
      <van-field v-model="username1"  label="资质类型" placeholder="资质类型" :rules="[{ required: true, message: '请填写资质类型' }]" />
      <van-field v-model="username2"  label="公司名称" placeholder="公司名称" :rules="[{ required: true, message: '请填写公司名称' }]" />
      <van-field v-model="username3"  label="地区" placeholder="地区" :rules="[{ required: true, message: '请填写地区' }]" />
      <van-field v-model="username4"  label="工种" placeholder="工种" :rules="[{ required: true, message: '请填写工种' }]" />
      <van-field v-model="username5"  label="联系方式" placeholder="联系方式" :rules="[{ required: true, message: '请填写联系方式' }]" />
      <van-field v-model="username6"  label="头像" placeholder="头像" :rules="[{ required: true, message: '请填写头像' }]" />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
  </van-form>
</div>
</template>

<script>
import Vue from 'vue';
import { Form } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { RadioGroup, Radio } from 'vant';

Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Form);

export default {
 
  components: {
  },

  data() {
    return {
      username1:"", 
      username2:"", 
      username3:"", 
      username4:"", 
      username5:"", 
      username6:"", 
    };
  },

  methods: {
    onSubmit() {
    },
  },
};
</script>
