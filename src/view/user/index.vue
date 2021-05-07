<template>
  <div>
    <van-loading type="spinner" color="#1989fa" vertical>微信认证中...</van-loading>
  </div>
</template>

<script>
import { Loading  } from 'vant';
export default {
  components: {
    [Loading .name]: Loading
  },
  created: function(){
    var _this = this
    setTimeout(() => {
      _this.onSubmit();
    }, 500);
  },
  methods: {
    onSubmit() {
      var redirect_uri = "http://laochao.handanyunding.com/"
      var url1 ="https://open.weixin.qq.com/connect/oauth2/authorize?" +
      "appid=wx157e60fb00148cff" +
      "&redirect_uri=" + redirect_uri +
      "&response_type=code" +
      "&scope=snsapi_base" +
      "&state=STATE" +
      "#wechat_redirect";
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
