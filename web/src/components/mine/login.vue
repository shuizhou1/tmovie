<template>
  <div class="login">
    <div class="header">
      <span class="goBack" @click="back">&lt;</span>
      <span class="logoWraper"></span>
    </div>
    <div class="form">
      <form  method="post" id="form1" onsubmit="return false">
        <div>
          <span>账本名：</span>
          <input type="text" placeholder="请输入用户名" name="userName" id="userName" v-focus>
        </div>
        <div>
          <span class="fa-arr">密&nbsp&nbsp&nbsp码：</span>
          <input type="password" placeholder="请输入密码" id="userPsw" name="userPsw" @focus="inpFoucus" >
        </div>
        <p class="errMessage"><span></span></p>
        <button type="submit" class="btn" @click="login">登录</button>
      </form>
    </div>
  </div>


</template>

<script>
    export default {
        name: "login",
        methods: {
          back () {
            this.$router.go(-1)
          },
          inpFoucus () {
            $('.errMessage span').hide()
          },
          login () {
            const userName = $('#userName').val()
            const userPsw = $('#userPsw').val()
            const data = { 'userName': userName, 'userPsw': userPsw}
          
            $.ajax({
                url: 'http://localhost:3001/login',
                type: 'post',
                data: data,
                success: function(data,status,c){
                  if(status == 'success'){
                    // location.href = '/';
                    if (data.message === null) {
                      $('.errMessage span').show().html('用户名不存在！')
                    } else if(data.message === 'error') {
                      $('.errMessage span').show().html('你输入的密码不正确！')
                    } else {
                      alert('登录成功！')
                      window.location.href = '/'                  
                    }
                  }
                },
                error: function(data,status,c,){
                  if(status == 'error'){
                    console.log(data);
                    console.log(status)
                    console.log(c)
                  }
                }
            })
          }
        }
    }
</script>

<style scoped lang="less">
  .login {
    height: 100%;
    font-size: calc(14px + 4*(100vw - 436px)/1100);
    color: #444;

    .header {
      height: 8rem;
      background: midnightblue;
      position: relative;
      .logoWraper {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -3rem;
        margin-left: -10rem;
        height: 6rem;
        width: 20rem;
        display: inline-block;
        background: url("../../comen/img/head.png") no-repeat;
        background-size: 100% 100%;
      }
      span.goBack {
        display: inline-block;
        color: #fff;
        font-size: calc( 30px + (100vw - 436px)/1100);
        position: absolute;
        top: -10%;
        left: 2rem;
      }

    }
    .form {
      /*background: aliceblue;*/
      height: 100%;
      position: relative;
      form {
        padding-left: 2rem;
        div {
          /*margin-bottom: 3rem;*/
          border-bottom: 1px solid #ddd;
          padding: 3rem 0 3rem 0;
          input {
            outline: none;
            font-size: calc(12px + 4*(100vw - 436px)/1100);
            border: none;
          }
        }
        p.errMessage {
          height: 2.5rem;
          span{
            display: none;
            padding-top: 1rem;
            color: #ff4400;
            font-size: calc(12px + (100vw - 436px)/1100);
          }
        }
      }
      .btn {
        position: absolute;
        bottom: -10rem;
        display: block;
        width: 90%;
        left: 5%;
        border: none;
        height: 8rem;
        background: #2277CF;
        -webkit-border-radius: 4rem;
        -moz-border-radius: 4rem;
        border-radius: 4rem;
        font-size: calc(20px + 4*(100vw - 436px)/1100);
        /*font-weight: bold;*/
        color: #fff;
      }
    }
  }

</style>
