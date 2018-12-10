<template>
  <div class="register">
    <div class="header">
      <span class="goBack" @click="back">&lt;</span>
      <span class="logoWraper"></span>
    </div>
    <div class="formWraper">
      <form action method="post" id="form1" onsubmit="return false">
        <div>
          <span>用户名：</span>
          <p class="err_userName"></p>
          <input
            type="text"
            placeholder="2-8位汉字、数字、字母、下划线"
            id="userName"
            name="userName"
            @keyup="testUserName($event)"
          >
        </div>
        <div>
          <span>密&nbsp&nbsp&nbsp码：</span>
          <p class="err_userPsw"></p>
          <input
            type="password"
            placeholder="6-10位字母、数字"
            id="userPsw"
            name="userPsw"
            @keyup="testUserPsw($event)"
          >
        </div>
        <div>
          <span>确认密码：</span>
          <p class="err_confirmPsw"></p>
          <input
            type="password"
            placeholder="请再次输入密码"
            id="confirmPsw"
            name="confirmPsw"
            @keyup="confirmPsw($event)"
          >
        </div>
        <div>
          <span>手机号码：</span>
          <p class="err_phoneNum"></p>
          <input
            type="text"
            placeholder="请输入手机号码"
            id="phoneNum"
            name="phoneNum"
            @blur="testPhoneNum($event)"
            v-focus
          >
        </div>
        <button type="submit" class="btn" @click="register">注册</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  methods: {
    // 验证用户名合法性
    testUserName(e) {
      const re = /^[\u4e00-\u9f151-9a-z_]{2,8}$/i;
      const val = $(e.target).val();
      if (val.length > 0 && !re.test(val)) {
        $(".err_userName")
          .show()
          .html("! 用户名必须由2-8位中文或数字字母下划线组成");
      } else {
        $(".err_userName").hide();
      }
    },
    // 验证密码合法性
    testUserPsw(e) {
      const re = /^[0-9a-z]{6,8}$/i;
      const val = $(e.target).val();
      if (val.length > 0 && !re.test(val)) {
        $(".err_userPsw")
          .show()
          .html("! 密码为6-8为数字或字母组成");
      } else {
        $(".err_userPsw").hide();
      }
    },
    // 检查两次输入密码是否一致
    confirmPsw(e) {
      const val1 = $("#userPsw").val();
      const val2 = $(e.target).val();
      if (val1 !== val2) {
        $(".err_confirmPsw")
          .show()
          .html("! 两次输入的密码不一致");
      } else {
        $(".err_confirmPsw").hide();
      }
    },
    // 验证手机号码合法性
    testPhoneNum(e) {
      const val = $(e.target).val();
      const re = /[1][3, 4, 5, 7, 8][0-9]{9}$/; // 手机号码正则
      if (val.length > 0 && !re.test(val)) {
        $(".err_phoneNum")
          .show()
          .html("！您输入的手机号码格式有误");
      } else {
        $(".err_phoneNum").hide();
      }
    },

    // 检查各项是否为空
    back() {
      this.$router.go(-1);
    },
    register() {
      const [userName, userPsw, phoneNum] = [
        $("#userName"),
        $("#userPsw"),
        $("#phoneNum")
      ];
      const [val1, val2, val3] = [
        userName.val(),
        userPsw.val(),
        phoneNum.val()
      ];

      if (val1.length === 0) {
        $(".err_userName")
          .show()
          .html("! 用户名不能为空");
        userName.focus();
      } else if (val2.length === 0) {
        $(".err_userPsw")
          .show()
          .html("! 密码不能为空");
        userPsw.focus();
      } else if (val3.length === 0) {
        $(".err_phoneNum")
          .show()
          .html("! 手机号码不能为空");
        phoneNum.focus();
      } else {
        $.ajax({
          url: "http://localhost:3001/register",
          type: "post",
          data: { userName: val1, userPsw: val2, phoneNum: val3 },
          success(data, status, c) {
            if (data.message === "用户名已经注册！") {
              $(".err_userName")
                .show()
                .html("！该用户名已被占用")
                .css({ left: "30%", bottom: "20%" });
            } else if (data.message === "success") {
              alert("注册成功");
              window.location.href = "/login";
            }
          },
          error(data, status) {
            if (status === "error") {
              console.log(data);
              console.log(status);
            }
          }
        });
      }
    }
  },
  created() {}
};
</script>

<style scoped lang="less">
html {
  background: aliceblue;
}
.register {
  height: 100%;
  font-size: calc(14px + 4 * (100vw - 436px) / 1100);
  color: #444;
  /*position: relative;*/
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
      font-size: calc(30px + (100vw - 436px) / 1100);
      position: absolute;
      top: -10%;
      left: 2rem;
    }
  }
  .formWraper {
    /*background: aliceblue;*/
    height: 100%;
    position: relative;
    form {
      padding-left: 2rem;
      div {
        position: relative;
        border-bottom: 1px solid #ddd;
        padding: 3rem 0 3rem 0;
        p {
          display: none;
          position: absolute;
          bottom: -35%;
          left: 20%;
          color: #ff4400;
          font-size: calc(12px + (100vw - 436px) / 1100);
        }
        input {
          outline: none;
          font-size: calc(12px + 4 * (100vw - 436px) / 1100);
          border: none;
          width: 60%;
        }
      }
    }
    .btn {
      position: absolute;
      bottom: -12rem;
      display: block;
      width: 90%;
      left: 5%;
      border: none;
      height: 8rem;
      background: #2277cf;
      -webkit-border-radius: 4rem;
      -moz-border-radius: 4rem;
      border-radius: 4rem;
      font-size: calc(20px + 4 * (100vw - 436px) / 1100);
      /*font-weight: bold;*/
      color: #fff;
    }
  }
}
</style>
