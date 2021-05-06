<template>
  <div>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    
    <p>
      跳转过来的url2 
    </p>
      <span class="van-cell-text">{{codeUrl}}</span> 
       <span class="van-cell-text">{{query}}</span> 
       
    <van-form @submit="onSubmit">
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
  </van-form>
      <span class="van-cell-text">{{code}}</span> 
  </div>
</template>

<script>
import { Form,Button } from 'vant';
export default {
  components: {
    [Form.name]: Form,
    [Button.name]: Button
  },
  data() {
    return {
      codeUrl: '',
      code: '12132123',
      query:''
    };
  },
  methods: {
    onSubmit() {
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
        if (data && data.code === 0) {
            this.$notify('记录成功');
        } else {
            this.$notify('记录失败');
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
