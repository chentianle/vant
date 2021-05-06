<template>
  <div>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
    <p>
    String url = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
      "appid=APPID" +
      "&redirect_uri=REDIRECT_URI" +
      "&response_type=code" +
      "&scope=snsapi_base" +
      "&state=STATE" +
      "#wechat_redirect";


    </p>
    <van-form @submit="onSubmit">
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
  </van-form>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup,Form,Button } from 'vant';
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Form.name]: Form,
    [Button.name]: Button
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
