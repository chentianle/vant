<template>
  <div>
    <van-loading type="spinner" color="#1989fa" vertical>微信认证中...</van-loading>
    <span>微信认证跳转页面...</span>
  </div>
</template>

<script>
import { Loading  } from 'vant';
export default {
  components: {
    [Loading.name]: Loading
  },
  data() {
    return {
      url1:''
    };
  },
  created: function(){
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      var redirect_uri = "http://yuanhongrenli.cn/"
      var url1 ="https://open.weixin.qq.com/connect/oauth2/authorize?" +
      "appid=wx157e60fb00148cff" +
      "&redirect_uri=" + redirect_uri +
      "&response_type=code" +
      "&scope=snsapi_base" +
      "&state=STATE" +
      "#wechat_redirect";
      this.url1 = url1+'&random='+Math.random();
      location.href=url1
    },
  },
};
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
