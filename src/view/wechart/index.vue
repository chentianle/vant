<template>
  <div>
    <van-notice-bar left-icon="info-o">
      涉及到发工资，请仔细填写如下信息。
    </van-notice-bar>
     <van-divider />
    <van-form @submit="onSubmit" @failed="onFailed" validate-first>
      <van-field v-model="userName" name="userName" placeholder="姓名" :rules="[{required: true, message: '请填写用户名' }]"/>
      <br/>
      <van-field v-model="telphone" name="telphoneValidator" placeholder="手机号" :rules="[{ validator:telphoneValidator, message: '请输入正确手机号' }]"/>
      <br/>
      <van-field v-model="idCard" name="idCardValidator" placeholder="身份证号码" :rules="[{ validator:idCardValidator, message: '请输入正确身份证号码' }]"/>
      <van-divider />
      <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" v-show="userInfoTrue">
        您已经填写过个人信息，如需修改请修改后提交即可！
      </van-notice-bar>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Form,Button,Toast,Field,Divider,NoticeBar,Notify  } from 'vant';
export default {
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    [Toast.name]: Toast, 
    [Field.name]: Field, 
    [Divider.name]: Divider, 
    [NoticeBar.name]: NoticeBar, 
    [Notify.name]: Notify,
  },
  data() {
    return {
      codeUrl: '',
      code: '',
      query:'',
      openId:'',
      idCard:'',
      telphone:'',
      userName:'',
      userInfoTrue:false,
    };
  },
  created: function(){
    var _this = this
    setTimeout(() => {
      _this.getOpenId();
    }, 500);
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    telphoneValidator(val) {
      console.log(/^1(3|4|5|6|7|8|9)\d{9}$/.test(val))
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(val);
    },
    idCardValidator(val) {
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
      return reg.test(val);
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
    onSubmit(){
      this.$http({
        url: this.$http.adornUrl('/wechart/saveUserInfo'),
        method: 'post',
        data: {'openId':this.openId,'userName':this.userName,'telphone':this.telphone,'idCard':this.idCard}
      }).then((data) => {
        console.log("resultData=",data);
        if (data && data.flag) {
            this.openId = data.data
            Notify({ type: 'success', message: '提交成功,将会跳转至首页面。' });
            location.href="https://mp.weixin.qq.com/mp/getmasssendmsg?__biz=MzI1NTY3MzQzNA==#wechat_webview_type=1&wechat_redirect&random="+Math.random();
        } else {
            Notify({ type: 'warning', message: '提交失败' });
        }
      })
    },
    getOpenId() {
      var test = window.location.href;
      this.codeUrl = test;
      var query = window.location.search.substring(1);
      this.query = query;
      
      var vars = query.split("&");
      for (var i=0; i < vars.length ; i++) {
        var pair = vars[i].split("=")
        if(pair[0] == "code"){
          this.code = pair[1];
        }
      }
      this.$http({
        url: this.$http.adornUrl('/wechart/getOpenId'),
        method: 'post',
        data: {'code':this.code}
      }).then((data) => {
        console.log("resultData=",data);
        if (data && data.flag) {
            this.openId = data.data
            Notify({ type: 'success', message: '认证成功，请填写信息' });
            this.getUserInfo();
        } else {
            Notify({ type: 'warning', message: '获取openId失败' });
        }
      })
    },
    getUserInfo(){
      this.$http({
        url: this.$http.adornUrl('/wechart/getUserInfo'),
        method: 'post',
        dataType : 'json', 
        data: {'openId': this.openId}
      }).then((data) => {
        console.log("resultUserInfoData=",data);
        if (data && data.flag) {
                 console.log("resultUserInfoData111=", data.data.userName);
          this.userName = data.data.userName
          this.telphone = data.data.telphone
          this.idCard = data.data.idCard
          this.userInfoTrue = true;
        }
      })
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
